import { Flex, Button, Link, Heading, Box } from "@chakra-ui/react";
import { signOut } from "@/packages/nextauth/auth";
// import { signOut } from "next-auth/react"

interface HeaderProps {
  // setNewData: React.Dispatch<React.SetStateAction<any>>;
  setNewData?: any;
  logout?: any;
}
const Header = () => {
  // const session = await auth();
  const logout = async () => {
    "use server";
    await signOut();
  };
  return (
    <Box bg="#00000029" py={2}>
      <Flex justifyContent="space-between" alignItems="center" mt={3} m={3}>
        <Heading as="h3" size="lg">
          WorkRoom
        </Heading>
        <form action={logout}>
          {/* <Button onClick={() => signOut()}>Sign out</Button> */}
          <Button type="submit">Sign outt</Button>
        </form>
      </Flex>
    </Box>
  );
};

export default Header;
