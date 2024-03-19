"use client";

import { Box, Button, Container, HStack, Input, VStack, Text } from "@chakra-ui/react";
import Message from "./Message";
import { FormEvent, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { Icon } from '@chakra-ui/react'
import axios from "axios";
import { useAppContext } from "@/context";

let messages = [
  {
    text: "Hello! How may I help you?",
    user: "other"
  },
]
const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [botResponse, setBotResponse] = useState("");
    const {sessionId} = useAppContext();
    console.log("🚀 ~ sessionId from fileuplaod:", sessionId)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('prompt', message);
      formData.append('sessionId', sessionId);
      const newMessage = {
        text: message,
        user: status ? "other" : "me"
      };
      messages.push(newMessage);
      setMessage("")


      try {
        // Send file to Flask backend
        const response = await axios.post('http://localhost:5000/chatbot', formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("🚀 ~ handleSubmit ~ response:", response)
        const { data: {data} } = response
        setBotResponse(data)
        console.log("🚀 ~ handleFileUpload ~ data:", data, typeof data)
        const newMessage = {
          text: data,
          user: "other"
        };
        messages.push(newMessage);
        setMessage("")
  
    } catch (error) {
        console.error('Error uploading file:', error);
    }

      // if(!message){
      //   alert("hello")
      // }
      // setStatus(!status)
    
    };
    
    return <Box bg={"green.50"} h={{md:"full", lg:"full", xl:"full"}}>
      <Container h={"100vh"} bg={"gray.50"}>
        <VStack h="full" paddingY={"4"}>
          <HStack w={"full"} paddingY={"2"}>
            <Text w={"full"} fontWeight={"bold"} fontSize={{base: '16px', md:'20px', lg:'24px'}}>
              Command center
            </Text>
            <Text>
              <Icon as={BsThreeDots} />
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
                <Icon as={BsStars} color="gray"/> 
                <Text>Focus</Text>
                </HStack>
                <Button type="submit">
                  <Icon as={MdSubdirectoryArrowLeft} />
                </Button>
              </HStack>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  }
  

export default Chatbot
