'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useCallback, useRef, useState } from "react";
import { Sheet } from "@fortune-sheet/core";
import ApiExecContainer from "../ApiExecContainer";

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
    <ApiExecContainer
      onRun={() => {
        for (let i = 0; i < 5; i += 1) {
          for (let j = 0; j < 5; j += 1) {
            ref.current?.setCellValue(i, j, `${i + j}`);
          }
        }
        ref.current?.setCellValue(0, 5, "=SUM(A1:E1)");
        ref.current?.setCellValue(1, 5, "=SUM(A2:E2)");
        ref.current?.setCellValue(2, 5, "=SUM(A3:E3)");
        ref.current?.setCellValue(3, 5, "=SUM(A4:E4)");
        ref.current?.setCellValue(4, 5, "=SUM(A5:E5)");
      }}
    >
      <Workbook ref={ref} data={data} onChange={onChange} />
    </ApiExecContainer>
  );
}

export default Home;

