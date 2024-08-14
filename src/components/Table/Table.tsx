import React, { useEffect, useState } from "react";

type DataCellList = {
  id: string;
  [key: string]: string | number;
};

export type TableProps = {
  headerCellList: string[];
  dataCellList: DataCellList[];
};

const Table: React.FC<TableProps> = ({ headerCellList, dataCellList }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [list, setList] = useState<DataCellList[]>([]);

  useEffect(() => {
    setList(dataCellList);
  }, [dataCellList, list]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((item) => item.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e: { target: { id: string; checked: boolean } }) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  console.log(isCheck);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-700 uppercase shadow-md rounded-2xl">
        <tr>
          <th className="px-6 py-3">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              onChange={handleSelectAll}
              checked={isCheckAll}
            />
          </th>
          {headerCellList.map((title, i) => {
            return (
              <th
                key={i}
                scope="col"
                className="px-6 py-3 first:rounded-l-2xl last:rounded-r-2xl"
              >
                {title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {dataCellList.map((data, index) => (
          <tr key={index}>
            <td className="px-6 py-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                id={data.id}
                onChange={handleClick}
                checked={isCheck.includes(data.id)}
              />
            </td>
            {Object.values(data).map((value, i) => (
              <td key={i} className="px-6 py-4">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
