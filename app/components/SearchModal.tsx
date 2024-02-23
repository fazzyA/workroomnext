'use client'
import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, Input, Text, ModalCloseButton, Flex, Button } from '@chakra-ui/react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, setIsOpen }) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

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
            setResponse(data);

            console.log('Response from flask api:', data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
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

