'use client'
import { useState } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AIPrompt from "./components/Prompt";
import { Providers } from "./providers";
import { Modal, ModalOverlay, ModalContent,  Input,  Text,  ModalCloseButton, Flex, Button, Link, } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  async function getChatGPTResponse(prompt: string) {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY_HERE',
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 100,  // Adjust as needed
        model: 'text-davinci-002',  // Specify the model
      }),
    });
    const data = await response.json();
    return data.choices[0].text.trim();
  }


  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Flex justifyContent="space-between" alignItems="flex-start" mt={3}>
            <ul>
              <li>
                <Link href="/examples/basic">Basic</Link>
              </li>
              <li>
                <Link href="/examples/getCellValue">Get Cell Value</Link>
              </li>
              <li>
                <Link href="/examples/getSelection">Get Selection</Link>
              </li>
              <li>
                <Link href="/examples/setCellValue">Set Cell Value</Link>
              </li>
              <li>
                <Link href="/examples/setCellFormat">Format Cell</Link>
              </li>
              <li>
                <Link href="/examples/autoFill">AutoFill Cell</Link>
              </li>
              <li>
                <Link href="/examples/setSelection">Merge Selected Cells</Link>
              </li>
            </ul>
      
            <Button m={1} mr={4} border="2px solid #E2E8F0" onClick={() => setIsOpen(true)}> <SearchIcon w={4} h={4} mr={2}/>Ask AI</Button>
          </Flex>
          <div><AIPrompt /></div>
          {children}

          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md" isCentered={false} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent
              position="absolute"
              top={20}
              right={0}
              p={4}
              m={4}
              boxShadow="lg"
              bg="white"
              borderRadius="md"
              maxW="35vw"
              overflow="hidden"
              height={500}
            >

              <Flex flexDirection="column" border="1px solid #E2E8F0" borderRadius="md" m={2} p={4} height={700}>
                <Text style={{ fontWeight: "800" }} ml={2} fontSize='xl' mb={5}>
                  New Google Search
                </Text>
                <Text style={{ fontWeight: "700" }} fontSize='md' ml={2}>Search Query</Text>
                <Text fontSize='sm' ml={2} mt={1}>The Google results to this searchquery will be scraped.</Text>
                <Input ml={2} width='auto' mt={3} placeholder='Example: #firstname #lastname linkedin profile' size='md' />
                <Button ml={2} colorScheme='red' width='auto' mt={5}>Run for 10 rows</Button>
                <ModalCloseButton />
              </Flex>
            </ModalContent>
          </Modal>
        </Providers>  
      </body>
    </html >
  );
}
