// import { app, HttpResponseInit } from "@azure/functions";
// import axios from "axios";
// import qs from "qs";

// async function send(data: any) {
//   try {
//     const options = {
//       method: "POST",
//       headers: { "content-type": "application/x-www-form-urlencoded" },
//       data: data,
//       url: "https://app2.ziperp.net/api/CommonAPI/ZIPSFA/SFAInvoice/CreateInvoice",
//     };
//     const res = await axios(options);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// let data = qs.stringify({
//   EnterpriseId: "AMRUTAM",
//   TenantId: "0b514906-b19b-4597-ac78-cc1cc2593bf6",
//   UserId: "Admin",
//   UserTableId: "3547f02a-b9e8-4ffc-b644-211cd86b6a97",
//   MultipleDiscountReq: "",
//   YearKey: "2023",
//   InvTypeCode: "SI",
//   DocTypeId: "10fc091e-61e6-4ec6-b034-c22f95a836b2",
//   LogInventoryDocTypeId: "804b434b-86b1-4175-aa42-8d3717220fd6",
//   Vendor_Customer_Id: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
//   PlantId: "7ab3ba83-0a5d-4cdc-a01c-836cf7df1944",
//   StoreId: "96237113-76ef-4d61-9b3f-eb0c69699534",
//   BusinessAreaId: "eb8ff144-1971-410a-acfb-a63c32ec0d74",
//   CurrencyId: "2dca24ef-b369-4907-aed0-3542a9d0b69c",
//   BaseRate: "0",
//   FCRate: "0",
//   DocDate: "05/01/2024",
//   SubTotal: "963.53",
//   OtherAmount: "0.0",
//   RoundOffAmount: "-0.15",
//   TotalAmount: "1079.0",
//   CostCenterId: "",
//   PeriodFrom: "01/04/2023",
//   FyFrom: "01/04/2023",
//   FyTo: "31/03/2024",
//   IVTransData:
//     '[{"SrNo":1,"ItemCode":"ACPS","ItemName":"AMRUTAM CHAWANPRASH - 200GM","DefaultSalesAc":"","DefaultSalesAcName":"","ItemId":"b9ae1d89-14a7-4820-aba6-09079c27be78","Qty":1,"UOMName":"Pcs","UOM":"5f3d1ba0-c3ae-41e2-a79b-e67dbdac208f","Rate":1070.59,"RateAfterTax":0,"AmountBeforeDis":1070.59,"Discount":0,"DiscountQty":"0","DiscountAmount":107.06,"Discount1Qty":0,"Discount1":0,"Discount1Amount":0,"Discount2Qty":0,"Discount2":10,"Discount2Amount":107.06,"Discount3Qty":0,"Discount3":0,"Discount3Amount":0,"Discount4Qty":0,"Discount4":0,"Discount4Amount":0,"Discount5Qty":0,"Discount5":0,"Discount5Amount":0,"Amount":963.53,"ExciseAssessRate":"0.0","ExciseAssessValue":"0.0","ExciseCalcOnId":"","ExciseCalcValue":"0.0","MRP":"0.0","VATAssessRate":"0.0","VATAssessValue":"0.0","VatCalcOnId":"","VatCalcValue":"0.0","Tax1Name":"IGST","TaxId1":"026ac104-5f05-41c3-85af-f62f3d2a9cdb","TaxId1Per":12,"Asses1Amount":963.53,"TaxId1Amount":115.62,"Tax2Name":"","TaxId2":"","TaxId2Per":0,"Asses2Amount":0,"TaxId2Amount":0,"Tax3Name":"","TaxId3":"","TaxId3Per":0,"Asses3Amount":0,"TaxId3Amount":0,"Tax4Name":"","TaxId4":"","TaxId4Per":0,"Asses4Amount":0,"TaxId4Amount":0,"Tax5Name":"","TaxId5":"","TaxId5Per":0,"Asses5Amount":0,"TaxId5Amount":0,"Tax6Name":"","TaxId6":"","TaxId6Per":0,"Asses6Amount":0,"TaxId6Amount":0,"AmountAfterTax":1079.15,"Description":"","SchemeType":"","SchemeItemId":""}]',
//   VoucherTransData: "[]",
//   Json_BatchSerialTransData:
//     '[{"LineItemNo":"1","ItemId":"b9ae1d89-14a7-4820-aba6-09079c27be78","BatchNo":"ACPS10","MfgDate":"12\\/12\\/2023","ExpDate":"","SerialNo":"","Warranty":"","ExtWarranty":"","MRP":"0","Qty":"1","Remarks":""}]',
//   IVServiceTransData: "[]",
//   IVOtherDeductionData: "[]",
//   AdvAdjTransData: "[]",
//   IVSChargesTrans: "[]",
//   BillToId: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
//   ShipToId: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
//   PayerId: "b522ec90-40f8-4b9d-99dc-d29382f56b98",
//   DeliveryAddress: "",
//   Destination: "Andhra Pradesh",
//   AgentId: "",
//   LRNo: "",
//   LRDate: "",
//   TransporterId: "",
//   TransportModeId: "",
//   VehicleNo: "",
//   NoOfPack: "",
//   OtherReference: "",
//   TaxFormsTypesId: "",
//   TaxFormNo: "",
//   TaxFormDate: "",
//   DeliveryInstruction: "",
//   PaymentTermsId: "f735f0a9-f74c-4c5f-aa55-77a4cb585ba8",
//   InsurancePolicyId: "",
//   PONo: "",
//   PODate: "",
//   DueDate: "04/02/2024",
//   ExciseInvoiceNo: "",
//   PermitNo: "",
//   GrossWeight: "",
//   NetWeight: "",
//   SalesmanId: "",
//   SalesChannelId: "",
//   SalesDivisionId: "",
//   SalesAreaId: "",
//   SalesRegionId: "",
//   SalesTerritoryId: "",
//   EXPIsExportInvoice: "",
//   EXPPortCode: "",
//   EXPARE1: "",
//   EXPShippingBillNo: "",
//   EXPShippingBillDate: "",
//   EXPExportType: "",
//   TaxAmount: "115.62",
//   Cash_CustomerVendor_Name: "",
//   Cash_CustomerVendor_Phone: "",
//   Cash_CustomerVendor_PAN: "",
//   Cash_CustomerVendor_Adhar: "",
//   Cash_CustomerVendor_GSTIN: "",
//   IMPName: "",
//   IMPAddress: "",
//   IMPImporterExporterCode: "",
//   IMPExciseRegNo: "",
//   IMPRange: "",
//   IMPDivision: "",
//   IMPInvoiceNo: "",
//   IMPInvoiceDate: "",
//   SRReasonId: "",
//   AgainstInvoiceId: "",
//   AgainstInvoiceNo: "",
//   Remarks: "",
//   ConvertFrom: "",
//   ConvertFromId: "",
//   SubscriptionFromDate: "",
//   SubscriptionToDate: "",
//   AccessToken: "34de7445-b990-485b-b26d-39a276b5ed67",
// });

// export async function HttpExample(
//   request: any,
//   context: any
// ): Promise<HttpResponseInit> {
//   try {
//     context.log(`Http function processed request for url ${request.url}`);

//     send(data);

//     return { body: `Data Sent` };
//   } catch (error) {
//     context.log("Error:", error);

//     return { body: `${error}` };
//   }
// }

// app.http("HttpExample", {
//   methods: ["GET", "POST"],
//   authLevel: "anonymous",
//   handler: HttpExample,
// });
