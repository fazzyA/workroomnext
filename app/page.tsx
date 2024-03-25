import { ROUTES_PATH } from "@/utils/constants";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

function RootPage({}: Props) {
  return (
    <div>
      <div>Welcome to the application</div>
      <Button>
        <Link
          className="text-blue-500 hover:underline"
          href={ROUTES_PATH.LOGIN}
        >
          Check here to login
        </Link>
      </Button>
    </div>
  );
}

export default RootPage;
