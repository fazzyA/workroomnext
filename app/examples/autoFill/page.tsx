'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useCallback, useRef, useState } from "react";
import { Sheet } from "@fortune-sheet/core";
import ApiExecContainer from "../ApiExecContainer";

const AutoFillCell = () => {
    const ref = useRef<WorkbookInstance>(null);
    const [data, setData] = useState<Sheet[]>([
      {
        name: "Sheet1",
        // t is type, fa ?
        celldata: [
          { r: 0, c: 0, v: { m: "1", v: 1, ct: { t: "n", fa: "General" } } },
          { r: 0, c: 1, v: { m: "2", v: 2, ct: { t: "n", fa: "General" } } },
          { r: 1, c: 0, v: { m: "2", v: 2, ct: { t: "n", fa: "General" } } },
          { r: 1, c: 1, v: { m: "4", v: 4, ct: { t: "n", fa: "General" } } },
        ],
        order: 0,
        row: 10,
        column: 2,
      },
    ]);
    const onChange = useCallback((d: Sheet[]) => {
      setData(d);
    }, []);
    return (
      <ApiExecContainer
        onRun={() => {
          ref.current?.autoFillCell(
            { row: [0, 1], column: [0, 1] },
            { row: [2, 9], column: [0, 1] },
            "down"
          );
        }}
      >
        <Workbook ref={ref} data={data} onChange={onChange} />
      </ApiExecContainer>
    );
  };
  export default AutoFillCell