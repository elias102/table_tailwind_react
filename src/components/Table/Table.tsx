import React from "react";

export type TableProps = {
  headerCellList: string[];
  dataCellList: object[];
};

const Table: React.FC<TableProps> = ({ headerCellList, dataCellList }) => {
  return (
    <table>
      <thead>
        <tr>
          {headerCellList.map((title, i) => {
            return <th key={i}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {dataCellList.map((data, index) => (
          <tr key={index}>
            {Object.values(data).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
