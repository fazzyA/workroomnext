'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useRef } from "react";

function Home (this: any) {
    const settings = {
        data: [{ name: 'Sheet1', celldata: [{ r: 0, c: 0, v: null }] }], // sheet data
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
   
  return (
    <div style={{height: "100vh"}}>
        <Workbook {...settings} />
        {/* <div className="column column-25"><input type="text" /></div> */}
    </div>
  );
}

export default Home;
// function getCellValue(arg0: number, arg1: number): any {
//   throw new Error("Function not implemented.");
// }

