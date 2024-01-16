import axios from "axios";
import qs from "qs";
import config from "../config";
import { IItem } from "./getItemIds";

export const getBatchListByItemAndStore = async (items: IItem[]) => {
  const batchListByItems: any[] = [];
  try {
    for (const item of items) {
      // generate url encoded data for each id
      const encodedData = qs.stringify({
        EnterpriseId: "AMRUTAM",
        TenantId: "0b514906-b19b-4597-ac78-cc1cc2593bf6",
        ItemId: item.id,
        StoreId: "96237113-76ef-4d61-9b3f-eb0c69699534",
        DocDate: "05/01/2024",
        AccessToken: "d4e3b038-1272-46c2-8ed2-a3cd35cbcb11",
      });

      // get batch list from zipERP
      const { data } = await axios.post(
        `${config.baseApi}/CommonAPI/ZIPSFA/SFABatchNumber/BatchListByItemAndStore`,
        encodedData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      console.log({ batchListByItems: data });

      batchListByItems.push(data?.dtBatchListByItemAndStore);
    }

    return batchListByItems;
  } catch (error) {
    console.log({ getBatchListByItemAndStoreError: error });
  }
};
