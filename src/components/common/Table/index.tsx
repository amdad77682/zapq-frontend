"use client";
import React from "react";
import Status from "../Status";

export default function Table({
  headers,
  rows,
  renderActionRows,
  onClickDetails,
}: {
  headers: string[];
  rows: any;
  renderActionRows?: (id: any) => React.ReactElement;
  onClickDetails?: (id: any) => void;
}) {
  return (
    <div className=" ">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle rounded-md">
          <table className="min-w-full  ">
            <thead className="text-sm font-semibold tracking-widest dark:text-white dark:bg-[#1F1E25] ">
              <tr>
                {headers.map((item, index) => {
                  return (
                    <td key={item} className="p-2">
                      <p
                        className={`p-1 pl-3 border-l dark:border-[#313037] ${
                          index == 0 ? "border-none" : ""
                        }`}
                      >
                        {item}
                      </p>
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody className="dark:text-white dark:bg-[#1C1A21] whitespace-nowrap">
              {rows.map((row: string[], index: number) => {
                return (
                  <tr
                    key={`row_${row[0]}_${row.join(",")}_${index}`}
                    className="border-b dark:border-[#201F26] hover:cursor-pointer"
                  >
                    {row.map((item, index) => {
                      if (index == 0) {
                        return;
                      }
                      if (item == "active") {
                        return (
                          <td
                            key={`row_${row[0]}_${item}_${index}`}
                            className="p-3 px-4 text-sm"
                          >
                            <Status bg="#3BC83B" name={item} />
                          </td>
                        );
                      }
                      return (
                        <td
                          onClick={() => {
                            onClickDetails && onClickDetails(row[0]);
                          }}
                          key={`row_${row[0]}_${item}_${index}`}
                          className="p-3  px-4 cursor-pointer hover:underline"
                        >
                          <p className="w-[150px] truncate text-sm">{item}</p>
                        </td>
                      );
                    })}

                    {renderActionRows && renderActionRows(row[0])}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
