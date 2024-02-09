'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useCallback, useRef, useState } from "react";
import { Sheet } from "@fortune-sheet/core";
import ApiExecContainer from "../ApiExecContainer";

const SetSelection = () => {
    const ref = useRef<WorkbookInstance>(null);
    const [data, setData] = useState<Sheet[]>([
      {
        name: "Sheet1",
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
    const onChange = useCallback((d: Sheet[]) => {
      setData(d);
    }, []);
    return (
        <ApiExecContainer
        onRun={() => {
          ref.current?.mergeCells([{ row: [0, 1], column: [1, 2] }], "merge-all");
        }}
      >
          <Workbook ref={ref} data={data} onChange={onChange} />
      </ApiExecContainer>
    );
  };
export default SetSelection  