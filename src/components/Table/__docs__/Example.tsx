import React from "react";
import Table from "../Table";

const Example = () => {
  const headerCellList = ["ID", "FirstName", "LastName"];
  const dataCellList = [
    { id: "1", firstName: "elias", lastName: "sharafi" },
    { id: "2", firstName: "sadra", lastName: "sharafi" },
    { id: "3", firstName: "hermes", lastName: "sharafi" },
  ];
  return (
    <Table
      headerCellList={headerCellList}
      dataCellList={dataCellList}
      shadowColorHeader="#0875921F"
    />
  );
};

export default Example;
