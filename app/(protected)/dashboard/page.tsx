import { auth, signOut } from "@/packages/nextauth/auth";
import { useCallback, useEffect, useState } from "react";
import { Workbook, WorkbookInstance } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useRef } from "react";
import SearchModal from "@/components/SearchModal";
import Header from "@/components/Header";
import { Sheet } from "@fortune-sheet/core";
import Chatbot from "@/components/Chatbot";
import { Flex, Box, GridItem, Grid } from "@chakra-ui/react";
import { useAppContext } from "@/context";
import DashboardWorkroom from "./example";

const Settings = async () => {
  return (
    <div>
      {/* <div>protected settings page {JSON.stringify(session)}</div> */}

      <Header />
      <DashboardWorkroom />
      {/* <div>faiza</div> */}
    </div>
  );
};
export default Settings;
