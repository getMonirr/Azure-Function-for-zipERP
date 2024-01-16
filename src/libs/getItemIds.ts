import axios from "axios";
import qs from "qs";
import config from "../config";

export interface IItem {
  id: string;
  name: string;
  code: string;
}

const itemListEncodedData = qs.stringify({
  EnterpriseId: "amrutam",
  TenantId: "0b514906-b19b-4597-ac78-cc1cc2593bf6",
  UserId: "Admin",
  DocTypeId: "cfbef20c-1e7f-4825-8e95-c3b4ca552956",
  ObjectType: "SI",
  AccessToken: null,
});

export const getItems = async (masterSkuCode: string[]) => {
  const items: IItem[] = [];

  try {
    // get item list from zipERP
    const { data } = await axios.post(
      `${config.baseApi}/CommonAPI/ZIPSFA/SFAItem/ItemList`,
      itemListEncodedData,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    for (const sku of masterSkuCode) {
      // console.log(`Item list for sku: ${sku}`, {
      //   "item-list-api-response": data,
      // });

      data.dtItemList.map((item: any) => {
        if (item.Code === sku) {
          items.push({
            id: item.Id,
            code: item.Code,
            name: item.Name,
          });
        }
      });
    }

    return items;
  } catch (error) {
    console.log({ error });
  }
};
