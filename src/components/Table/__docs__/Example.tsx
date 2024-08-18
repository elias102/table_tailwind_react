import React, { FC } from "react";
import Table, { TableProps } from "../Table";

const Example: FC<TableProps> = ({
  headerCellList = ["ID", "FirstName", "LastName"],
  dataCellList = [
    { id: "1", firstName: "elias", lastName: "sharafi" },
    { id: "2", firstName: "sadra", lastName: "sharafi" },
    { id: "3", firstName: "hermes", lastName: "sharafi" },
  ],
  shadowColorHeader = "#0875921F",
  checkboxBorderColor = "border-blue-400",
}) => {
  return (
    <Table
      headerCellList={headerCellList}
      dataCellList={dataCellList}
      shadowColorHeader={shadowColorHeader}
      checkboxBorderColor={checkboxBorderColor}
    />
  );
};

export default Example;
