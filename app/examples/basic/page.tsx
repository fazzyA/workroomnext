'use client'

import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useRef } from "react";

function Home (this: any) {
  
    const settings = {
        data: [{ 
          name: 'Sheet1', 
          celldata: [
            {r: 0, c: 1, v: { m: "Financial Projects Template for Retail Company", v: "Financial Projects Template for Retail Company", ct: { t: "g", fa: "General" } }},
            {r: 2, c: 1, v: { m: "Project Name", v: "Project Name"}},
            {r: 2, c: 2, v: { m: "Start Date", v: "Start Date"}},
            {r: 2, c: 3, v: { m: "End Date", v: "End Date"}},
            {r: 2, c: 4, v: { m: "Budget", v: "Budget"}},
            {r: 2, c: 5, v: { m: "Expenses", v: "Expenses"}},
            {r: 2, c: 6, v: { m: "Revenue", v: "Revenue"}},
            {r: 3, c: 1, v: { m: "Store Renovation", v: "Store Renovation"}},
            {r: 3, c: 2, v: { m: "01/05/2023", v: "01/05/2023"}},
            {r: 3, c: 3, v: { m: "30/06/2023", v: "30/06/2023"}},
            {r: 3, c: 4, v: { m: "50000", v: "50000"}},
            {r: 3, c: 5, v: { m: "30000", v: "30000"}},
            {r: 3, c: 6, v: { m: "80000", v: "80000"}},
            // {r: 3, c: 7, v: "=F3-E3-D3"}
        ]
       }], // sheet data
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

