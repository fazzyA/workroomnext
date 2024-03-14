'use client'
import { useCallback, useEffect, useState } from "react";
import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useRef } from "react";
import SearchModal from "./components/SearchModal";
import Header from "./components/Header";
import { Sheet } from "@fortune-sheet/core";
import Chatbot from "./components/Chatbot";
import { Flex, Box, GridItem, Grid } from "@chakra-ui/react";
import { useAppContext } from "@/context";

function Home(this: any) {
  // const [isOpen, setIsOpen] = useState(false); 
  const [isClicked, setIsClicked] = useState(false);
  const [newData, setNewData] = useState<any>([]);
  const ref = useRef<WorkbookInstance>(null);
  const {sessionId} = useAppContext();
  console.log("🚀 ~ Home ~ sessionId:", sessionId)

  // console.log("newData.....", newData)
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
  console.log("....", data)

  return (
    // <div style={{ height: "100vh", display: "flex" }}>
    //   {/* <SearchModal setNewData={(data) => console.log("////", data)} isOpen={isOpen} onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} /> */}
    //   <div style={{ flex: 1, marginRight: "10px", maxWidth: "70%" }}>
    //     <Header setNewData={(rd: any) => ref.current?.updateSheet([{ id: "1", name: "Sheet1", celldata: rd }])} />
    //     {/* <Workbook {...settings} /> */}
    //     <Workbook ref={ref} data={data} onChange={onChange} />
    //   </div>
    //   {/* <div className="column column-25"><input type="text" /></div> */}
    //   <div style={{maxWidth: "30%"}}>
    //     <Chatbot />
    //   </div>
    // </div>
    <Grid templateColumns="repeat(6, 1fr)" gap="5"
      minHeight={{ md: "100vh", lg: "100vh" }}>
      <GridItem
        as="main"
        colSpan={{ base: 6, md: 4, lg: 4, xl: 4 }}
        mb={{ base: "400px" }}
        h={{md:"full", lg:"full", xl:"full"}}
      >
        <Header setNewData={(rd: any) => ref.current?.updateSheet([{ id: "1", name: "Sheet1", celldata: rd }])} />
        {/* <Workbook {...settings} /> */}
        <Workbook ref={ref} data={data} onChange={onChange} />
      </GridItem>
      <GridItem
        as="aside"
        colSpan={{ base: 6, md: 2, lg: 2, xl: 2 }}
      >
        <Chatbot />
      </GridItem>
    </Grid>
  );
}

export default Home;
// function getCellValue(arg0: number, arg1: number): any {
//   throw new Error("Function not implemented.");
// }

