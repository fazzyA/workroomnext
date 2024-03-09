"use client";

import { Box, Button, Container, HStack, Input, VStack, Text } from "@chakra-ui/react";
import Message from "./Message";
import { FormEvent, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { BsStars } from "react-icons/bs";

let messages = [
  {
    text: "hello",
    user: "other"
  },
  {
    text: "hey",
    user: "me"
  },
  {
    text: "How are you?",
    user: "other"
  }
]
const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!message){
        alert("hello")
      }
      setStatus(!status)
    
      const newMessage = {
        text: message,
        user: status ? "other" : "me"
      };
      messages.push(newMessage);
      setMessage("")
    };
    
    return <Box bg={"green.50"} h={{md:"full", lg:"full", xl:"full"}}>
      <Container h={"100vh"} bg={"gray.50"}>
        <VStack h="full" paddingY={"4"}>
          <HStack w={"full"} paddingY={"2"}>
            <Text w={"full"} fontWeight={"bold"} fontSize={{base: '16px', md:'20px', lg:'24px'}}>
              Command center
            </Text>
            <Text>
              <BsThreeDots style={{fontSize:"1rem"}} />
            </Text>
          </HStack>
          <VStack h="full" w={"full"} overflow="auto">
            {
              messages.map((item, i) => (
                <Message key={i} user={item.user} text={item.text} uri={""} />
              ))
            }
          </VStack>
          <form onSubmit={handleSubmit} style={{ width: "100%", borderRadius: "10px", backgroundColor: "white", padding: "1rem" }}>
            <VStack>
              <Input w="full" border={"none"}
                placeholder="As Ai generate your custom data"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fontSize={{base:"12px", md:"16px", lg:"18px"}}
                />
              <HStack w={"full"}>
                <HStack w={"full"}>
                <BsStars color="gray"/> 
                <Text>Focus</Text>
                </HStack>
                <Button type="submit">
                  <MdSubdirectoryArrowLeft />
                </Button>
              </HStack>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  }
  

export default Chatbot
