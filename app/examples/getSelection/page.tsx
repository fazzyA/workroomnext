'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Sheet } from "@fortune-sheet/core";
import ApiExecContainer from "../ApiExecContainer";

function Home (this: any) {
  const ref = useRef<WorkbookInstance>(null);
  const [selected, setSelected] = useState<string>();

  const [data, setData] = useState<Sheet[]>([
    {
      name: "Sheet1",
      luckysheet_select_save: [{ row: [0, 1], column: [0, 1] }],
      celldata: [
        { r: 0, c: 0, v: { v: "0" } },
        { r: 0, c: 1, v: { v: "1" } },
        { r: 0, c: 2, v: { v: "2" } },
        { r: 0, c: 3, v: { v: "3" } },
        { r: 0, c: 4, v: { v: "4" } },
        { r: 1, c: 0, v: { v: "0" } },
        { r: 1, c: 1, v: { v: "1" } },
        { r: 1, c: 2, v: { v: "2" } },
        { r: 1, c: 3, v: { v: "3" } },
        { r: 1, c: 4, v: { v: "4" } },
      ],
      order: 0,
      row: 2,
      column: 5,
        },
  ]);
  console.log(data)
  const onChange = useCallback((d: Sheet[]) => {
    console.log("onchange", d)
    setData(d);
  }, []);

  console.log("getSelection", ref.current?.getSelection())

  return (
    <ApiExecContainer
      onRun={() => {
        return JSON.stringify(ref.current?.getSelection());
    }}
    >
    <div style={{height: "100vh"}}>
        <Workbook ref={ref} data={data} onChange={onChange} />
        {/* <div className="column column-25"><input type="text" /></div> */}
      </div>
    </ApiExecContainer>
  );
}

export default Home;
// function getCellValue(arg0: number, arg1: number): any {
//   throw new Error("Function not implemented.");
// }

