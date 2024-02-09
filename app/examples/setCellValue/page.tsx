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
      order: 0,
    },
  ]);
  console.log(data)
  const onChange = useCallback((d: Sheet[]) => {
    console.log("onchange", d)
    setData(d);
  }, []);
   console.log("getCellValue", ref.current?.getCellValue(0, 0))
   ref.current?.setCellValue(0, 5, "=SUM(A1:E1)");
   ref.current?.setCellValue(1, 5, "=SUM(A2:E2)");
   ref.current?.setCellValue(2, 5, "=SUM(A3:E3)");
   ref.current?.setCellValue(3, 5, "=SUM(A4:E4)");
   ref.current?.setCellValue(4, 5, "=SUM(A5:E5)");
  return (
    <div style={{height: "100vh"}}>
        <Workbook ref={ref} data={data} onChange={onChange} />
    </div>
  );
}

export default Home;

