import React, { FC } from "react";
import Table, { TableProps } from "../Table";
import Actions from "./Actions";

const Example: FC<TableProps> = ({
  headerCellList = ["ID", "FirstName", "LastName", "Actions"],
  dataCellList = [
    { id: "1", firstName: "elias", lastName: "sharafi", actions: <Actions /> },
    { id: "2", firstName: "sadra", lastName: "sharafi", actions: <Actions /> },
    { id: "3", firstName: "hermes", lastName: "sharafi", actions: <Actions /> },
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
