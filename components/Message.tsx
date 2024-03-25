import { Avatar, HStack, Text } from '@chakra-ui/react'
import React from 'react'

type Props ={
    text:string;
    uri:string;
    user:string;
}
const Message = ({ text, uri, user = "other" }:Props) => {
    return <HStack bg={"gray.100"}
        alignSelf={user === "me" ? "flex-end" : "flex-start"}
        borderRadius={"base"} paddingX={user === "me"? "4" : "2"} paddingY={"2"}>
        {
            user === "other" && <Text fontWeight={"bold"} fontSize={{base:"12px", md:"16px", lg:"18px"}}>workroom :</Text>
        }
        <Text>{text}</Text>
        {
            user === "me" && <Text fontWeight={"bold"} fontSize={{base:"12px", md:"16px", lg:"18px"}}>: user</Text>
        }
    </HStack>
}

export default Message