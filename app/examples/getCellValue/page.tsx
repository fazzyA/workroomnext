'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useCallback, useRef, useState } from "react";
import { Sheet } from "@fortune-sheet/core";

function Home (this: any) {
  const ref = useRef<WorkbookInstance>(null);
  const [data, setData] = useState<Sheet[]>([
    {
      name: "Sheet1",
      celldata: [{ r: 0, c: 0, v: { v: "fortune" } }],
      order: 0,
      // row: 1,
      // column: 1,
    },
  ]);
  console.log(data)
  const onChange = useCallback((d: Sheet[]) => {
    console.log("onchange", d)
    setData(d);
  }, []);
    const settings = {
        ref: ref,
        data: [{ name: 'Sheet1', celldata: [{ r: 0, c: 0, v: "faiza" }] }], // sheet data
        onChange: (data: any) => {
          let resp= data[0].data
          let frows = resp.filter((item:any) => item[0] != null)
          console.log("🚀 ~ Home ~ frows:", data)
          console.log("getSelection", getSelection())
          
        }, // onChange event
        lang:'en', // set language
        onClick: (data: any) => {
          console.log("ive clicked")
        },
        // getCellValue(0, 0)
        // More other settings...
   }
   console.log("getCellValue", ref.current?.getCellValue(0, 0))

  return (
    <div style={{height: "100vh"}}>
        <Workbook ref={ref} data={data} onChange={onChange} />
        {/* <div className="column column-25"><input type="text" /></div> */}
    </div>
  );
}

export default Home;
// function getCellValue(arg0: number, arg1: number): any {
//   throw new Error("Function not implemented.");
// }

