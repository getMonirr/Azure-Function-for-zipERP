import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import axios from "axios";
import qs from "qs";
import { generateBatchSerialTransData } from "../libs/batchSerialTransData";
import { generateIVTransData } from "../libs/generateIvTransData";
import { getBatchListByItemAndStore } from "../libs/getBatchListByItemAndStore";
import { getItems } from "../libs/getItemIds";
import { skuMapping } from "../libs/sku-code";

export async function httpTrigger1(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  try {
    const body: any = await request.json();

    context.log({ body });

    // check if body is empty
    if (!body || Object.keys(body).length === 0) {
      context.log({ message: "Body is empty" });
      return {
        status: 400,
        body: "Body is empty",
      };
    }

    const lineItems = body?.line_items;

    // get sku code from the line_items inside the body
    if (lineItems.length === 0) {
      context.log({ message: "line_items is empty" });
      return {
        status: 400,
        body: "line_items is empty",
      };
    }

    // get all sku code
    const skuCode = lineItems.map((item: { sku: string }) => item.sku);

    context.log({ skuCode });

    if (!skuCode || skuCode.length === 0) {
      context.log({ message: "skuCode not found" });
      return {
        status: 400,
        body: "skuCode not found",
      };
    }

    // get the master sku code for each sku code
    const masterSkuCode = skuCode.map((sku: string) => skuMapping[sku]);

    context.log({ masterSkuCode });

    if (!masterSkuCode || masterSkuCode.length === 0) {
      context.log({ message: "masterSkuCode not found" });
      return {
        status: 400,
        body: "masterSkuCode not found",
      };
    }

    // get item ids from zipERP itemList api
    const items = await getItems(masterSkuCode);

    context.log({ items });

    if (!items || items.length === 0) {
      context.log({ message: "itemIds not found" });
      return {
        status: 400,
        body: "itemIds not found",
      };
    }

    // dt Batch List By Item And Store
    const dtBatchListByItemAndStore = await getBatchListByItemAndStore(items);

    context.log({ dtBatchListByItemAndStore });

    if (!dtBatchListByItemAndStore || dtBatchListByItemAndStore.length === 0) {
      context.log({ message: "dtBatchListByItemAndStore not found" });
      return {
        status: 400,
        body: "dtBatchListByItemAndStore not found",
      };
    }

    // generate ivTransData
    const ivTransData = generateIVTransData(lineItems, items);
    const jsonIvTransData = JSON.stringify(ivTransData);

    // context.log({
    //   generatedIvTransData: ivTransData,
    //   jsonIvTransData,
    // });

    // generate batchSerialTransData
    const batchSerialTransData = generateBatchSerialTransData(
      dtBatchListByItemAndStore
    );
    const jsonBatchSerialTransData = JSON.stringify(batchSerialTransData);

    context.log({
      generatedBatchSerialTransData: batchSerialTransData,
      jsonBatchSerialTransData,
    });

    const createSalesInvoiceEncodedData = qs.stringify({
      EnterpriseId: "AMRUTAM",
      TenantId: "0b514906-b19b-4597-ac78-cc1cc2593bf6",
      UserId: "Admin",
      UserTableId: "3547f02a-b9e8-4ffc-b644-211cd86b6a97",
      MultipleDiscountReq: "",
      YearKey: "2023",
      InvTypeCode: "SI",
      DocTypeId: "10fc091e-61e6-4ec6-b034-c22f95a836b2",
      LogInventoryDocTypeId: "804b434b-86b1-4175-aa42-8d3717220fd6",
      Vendor_Customer_Id: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
      PlantId: "7ab3ba83-0a5d-4cdc-a01c-836cf7df1944",
      StoreId: "96237113-76ef-4d61-9b3f-eb0c69699534",
      BusinessAreaId: "eb8ff144-1971-410a-acfb-a63c32ec0d74",
      CurrencyId: "2dca24ef-b369-4907-aed0-3542a9d0b69c",
      BaseRate: "0",
      FCRate: "0",
      DocDate: "16/01/2024",
      SubTotal: `${parseFloat(body?.subtotal_price)}`,
      OtherAmount: "0.0",
      RoundOffAmount: "-0.15",
      TotalAmount: `${parseFloat(body?.total_price)}`,
      CostCenterId: "",
      PeriodFrom: "01/04/2023",
      FyFrom: "01/04/2023",
      FyTo: "31/03/2024",
      IVTransData: `${jsonIvTransData}`,
      VoucherTransData: "[]",
      Json_BatchSerialTransData: `${jsonBatchSerialTransData}`,
      IVServiceTransData: "[]",
      IVOtherDeductionData: "[]",
      AdvAdjTransData: "[]",
      IVSChargesTrans: "[]",
      BillToId: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
      ShipToId: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
      PayerId: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
      DeliveryAddress: "",
      Destination: `${body?.shipping_address?.city}`,
      AgentId: "",
      LRNo: "",
      LRDate: "",
      TransporterId: "",
      TransportModeId: "",
      VehicleNo: "",
      NoOfPack: "",
      OtherReference: "",
      TaxFormsTypesId: "",
      TaxFormNo: "",
      TaxFormDate: "",
      DeliveryInstruction: "",
      PaymentTermsId: "f735f0a9-f74c-4c5f-aa55-77a4cb585ba8",
      InsurancePolicyId: "",
      PONo: "",
      PODate: "",
      DueDate: "04/02/2024",
      ExciseInvoiceNo: "",
      PermitNo: "",
      GrossWeight: "",
      NetWeight: "",
      SalesmanId: "",
      SalesChannelId: "",
      SalesDivisionId: "",
      SalesAreaId: "",
      SalesRegionId: "",
      SalesTerritoryId: "",
      EXPIsExportInvoice: "",
      EXPPortCode: "",
      EXPARE1: "",
      EXPShippingBillNo: "",
      EXPShippingBillDate: "",
      EXPExportType: "",
      TaxAmount: "115.62",
      Cash_CustomerVendor_Name: "",
      Cash_CustomerVendor_Phone: "",
      Cash_CustomerVendor_PAN: "",
      Cash_CustomerVendor_Adhar: "",
      Cash_CustomerVendor_GSTIN: "",
      IMPName: "",
      IMPAddress: "",
      IMPImporterExporterCode: "",
      IMPExciseRegNo: "",
      IMPRange: "",
      IMPDivision: "",
      IMPInvoiceNo: "",
      IMPInvoiceDate: "",
      SRReasonId: "",
      AgainstInvoiceId: "",
      AgainstInvoiceNo: "",
      Remarks: "",
      ConvertFrom: "",
      ConvertFromId: "",
      SubscriptionFromDate: "",
      SubscriptionToDate: "",
      AccessToken: "bc45dde3-69cc-45f7-92e9-b3f77f14c932",
    });
    console.log({ createSalesInvoiceEncodedData });
    const { data } = await axios.post(
      "https://app2.ziperp.net/api/CommonAPI/ZIPSFA/SFAInvoice/CreateInvoice",
      createSalesInvoiceEncodedData,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    console.log({ data });

    return {
      status: 200,
      jsonBody: {
        data,
        createSalesInvoiceEncodedData,
        skuCode,
        masterSkuCode,
        items,
        dtBatchListByItemAndStore,
        // jsonIvTransData,
        // jsonBatchSerialTransData,
      },
    };

    // return body;
  } catch (error) {
    context.log({ error });
  }

  // const name = request.query.get("name") || (await request.text()) || "world";

  // return { body: `Hello, ${name}!` };
}

app.http("httpTrigger1", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: httpTrigger1,
});
