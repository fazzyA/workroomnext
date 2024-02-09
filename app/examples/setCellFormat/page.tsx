'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { Sheet } from "@fortune-sheet/core";
import ApiExecContainer from "../ApiExecContainer";

const SetCellFormat = () => {
    const ref = useRef<WorkbookInstance>(null);
    const [data, setData] = useState<Sheet[]>([
      {
        name: "Sheet1",
        celldata: [{ r: 0, c: 0, v: { v: "set ff = 3" } }],
        order: 0,
        row: 1,
        column: 1,
        config: { columnlen: { "0": 120 } },
      },
    ]);
    const onChange = useCallback((d: Sheet[]) => {
      setData(d);
    }, []);
    return (
      <ApiExecContainer
        onRun={() => {
            ref.current?.setCellFormat(0, 0, "ff", "3");
            ref.current?.setCellFormat(0, 0, "bg", "aqua");
        }}
      >
        <Workbook ref={ref} data={data} onChange={onChange} />
      </ApiExecContainer>
    );
  };
  export default SetCellFormat;
