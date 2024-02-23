'use client'
import { useCallback, useEffect, useState } from "react";
import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useRef } from "react";
import SearchModal from "./components/SearchModal"; 
import Header from "./components/Header";
import { Sheet } from "@fortune-sheet/core";

function Home (this: any) {
  // const [isOpen, setIsOpen] = useState(false); 
  const [isClicked, setIsClicked] = useState(false); 
  const [newData, setNewData] = useState<any>([]);
  const ref = useRef<WorkbookInstance>(null);

  console.log("newData.....", newData)
  const [data, setData] = useState<Sheet[]>([
    {
      id: "1",
      name: "sheet1",
      celldata: [{ r: 0, c: 0, v: { v: "1" } }],
      order: 0,
    },
  ]);
  const onChange = useCallback((d: Sheet[]) => {
    setData(d);
  }, []);

//  useEffect()
   console.log("newdata", data)
   
  return (
    <div style={{height: "100vh"}}>
        {/* <SearchModal setNewData={(data) => console.log("////", data)} isOpen={isOpen} onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} /> */}
        <Header setNewData={(rd: any)=>ref.current?.updateSheet([{  id: "1", name: "Sheet1", celldata: rd}])}/>
        {/* <Workbook {...settings} /> */}
        <Workbook ref={ref} data={data} onChange={onChange} />
        {/* <div className="column column-25"><input type="text" /></div> */}
    </div>
  );
}

export default Home;
// function getCellValue(arg0: number, arg1: number): any {
//   throw new Error("Function not implemented.");
// }

