'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, Input, Text, ModalCloseButton, Flex, Button } from '@chakra-ui/react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setNewData: any;
    // onDataReceived: (value: any[]) => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, setIsOpen, setNewData }) => {
    const [input, setInput] = useState('');
    const [res, setRes] = useState<any>();
// useEffect(() => {
//     // setRes("from useeffect")
//     setNewData([{id:1}])
//   }, [res])

 async function fetchDataFromAPI() {
        try {
            const response = await fetch('http://localhost:5000/prompt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: input,
                }),
            });
            const dataRes = await response.json()
            const { data } = dataRes
            console.log("type...", typeof data, data, JSON.parse(data))
            

            // setRes("asdasd");
            // setNewData([{id:1}])
            setNewData(JSON.parse(data))
            // setNewData([
            //     {r: 0, c: 1, v: { m: "Financial Projects Template for Retail Company", v: "Financial Projects Template for Retail Company", ct: { t: "g", fa: "General" } }},
            //     {r: 2, c: 1, v: { m: "Project Name", v: "Project Name"}},
            //     {r: 2, c: 2, v: { m: "Start Date", v: "Start Date"}},
            //     {r: 2, c: 3, v: { m: "End Date", v: "End Date"}},
            //     {r: 2, c: 4, v: { m: "Budget", v: "Budget"}},
            //     {r: 2, c: 5, v: { m: "Expenses", v: "Expenses"}},
            //     {r: 2, c: 6, v: { m: "Revenue", v: "Revenue"}},
            //     {r: 3, c: 1, v: { m: "Store Renovation", v: "Store Renovation"}},
            //     {r: 3, c: 2, v: { m: "01/05/2023", v: "01/05/2023"}},
            //     {r: 3, c: 3, v: { m: "30/06/2023", v: "30/06/2023"}},
            //     {r: 3, c: 4, v: { m: "50000", v: "50000"}},
            //     {r: 3, c: 5, v: { m: "30000", v: "30000"}},
            //     {r: 3, c: 6, v: { m: "80000", v: "80000"}},
            // ]);
            setIsOpen(false)


            // console.log('Response from flask api:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    console.log(".....", res)
    return (
        <>
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
                        <Input value={input} onChange={handleInputChange} ml={2} width='auto' mt={3} placeholder='Example: #firstname #lastname linkedin profile' size='md' />
                        <Button ml={2} colorScheme='red' width='auto' mt={5} onClick={fetchDataFromAPI}>Run for 10 rows</Button>
                        <ModalCloseButton />
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
}

export default SearchModal;

