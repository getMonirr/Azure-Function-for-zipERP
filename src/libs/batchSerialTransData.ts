export const generateBatchSerialTransData = (dtBatchListByItemAndStore) => {
  const generatedBatchSerialTransData = [];

  // first loop
  dtBatchListByItemAndStore.map((item, index) => {
    // item is an array and it has a field called mfgDate, if each items have two objects then it has two mfgDate. i need only old mfgDate object.

    const newItems = [];

    if (item.length > 1) {
      if (new Date(item[0].MfgDate) > new Date(item[1].MfgDate)) {
        newItems.push(item[1]);
      } else {
        newItems.push(item[0]);
      }
    } else {
      newItems.push(item[0]);
    }

    console.log({ newItems });

    // second loop
    newItems.map((item) => {
      const batchSerialTransDataItem = {
        LineItemNo: `${index + 1}`,
        ItemId: item?.ItemId,
        BatchNo: item?.BatchNo,
        MfgDate: item?.MfgDate,
        ExpDate: item?.ExpDate,
        SerialNo: "",
        Warranty: "",
        ExtWarranty: "",
        MRP: "0",
        Qty: "1",
        Remarks: "",
      };

      generatedBatchSerialTransData.push(batchSerialTransDataItem);
    });
  });
  return generatedBatchSerialTransData;
};

// generate Json_BatchSerialTransData
// {
//   "LineItemNo": "1",
//   "ItemId": "b9ae1d89-14a7-4820-aba6-09079c27be78",
//   "BatchNo": "ACPS10",
//   "MfgDate": "12/12/2023",
//   "ExpDate": "",
//   "SerialNo": "",
//   "Warranty": "",
//   "ExtWarranty": "",
//   "MRP": "0",
//   "Qty": "1",
//   "Remarks": ""
// }
