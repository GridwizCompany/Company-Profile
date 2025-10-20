// src/components/DynamicTable.tsx
import React from "react";

interface TableRow {
  [key: string]: string | number | null | undefined;
}

interface DynamicTableProps {
  columns: string[];
  data: TableRow[];
  tableTitle?: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  data,
  tableTitle,
}) => {
  return (
    <div className="w-full mt-12">
      {tableTitle && (
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-400">
          {tableTitle}
        </h1>
      )}

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden shadow-lg table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-700 text-center font-semibold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="odd:bg-gray-900 even:bg-gray-800 hover:bg-gray-700 transition"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-2 border border-gray-700 text-center text-gray-200"
                    >
                      {row[col] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500 italic"
                >
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {data.length > 0 ? (
          data.map((row, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow-lg text-gray-200"
            >
              {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex justify-between py-1">
                  <span className="font-semibold">{col}</span>
                  <span>{row[col] ?? "-"}</span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500 italic">
            Tidak ada data
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicTable;
