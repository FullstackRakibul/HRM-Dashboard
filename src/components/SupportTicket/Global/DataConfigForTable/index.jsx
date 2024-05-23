import React from "react";

const DataConfigForTable = (values) => {
  const configDataForTable = (lists) => {
    const newLists = [...lists];
    let emptyLists = [];

    if (newLists.length) {
      newLists.map((d) => {
        const newObj = {
          ...d,
          key: d.id,
        };

        emptyLists = [...emptyLists, newObj];
      });
    }
    return emptyLists;
  };
  return <></>;
};

export default DataConfigForTable;
