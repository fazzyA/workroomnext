import React, { useState } from 'react'
import { Flex, Button, Link, Heading, Box, } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import SearchModal from './SearchModal';
import FileUpload from './FileUpload';
interface HeaderProps {
  // setNewData: React.Dispatch<React.SetStateAction<any>>;
  setNewData: any;
}
const Header: React.FC<HeaderProps> = ({setNewData}) => {
    const [isOpen, setIsOpen] = useState(false); 

  return (
    <Box bg="#00000029" py={2}>
    <Flex justifyContent="space-between" alignItems="center" mt={3} m={3}  >
      <Heading as='h3' size='lg'>WorkRoom</Heading>
      <ul>
           <li>
             <Link href="/examples/basic" _hover={{ color: 'blue.500', fontWeight: 'normal', textDecoration:"underline" , transition: 'color 0.3s, font-weight 0.3s, '}}>Basic</Link>
         </li>
          <li>
            <Link href="/examples/getCellValue" _hover={{ color: 'blue.500', fontWeight: 'normal', textDecoration:"underline" ,  transition: 'color 0.3s, font-weight 0.3s, '}}>Get Cell Value</Link>
          </li>
       <li>
         <Link href="/examples/getSelection" _hover={{ color: 'blue.500', fontWeight: 'normal', textDecoration:"underline" ,  transition: 'color 0.3s, font-weight 0.3s, '}}>Get Selection</Link>
       </li>
       <li>
       <Link href="/examples/setCellValue" _hover={{ color: 'blue.500', fontWeight: 'normal',  textDecoration:"underline" ,  transition: 'color 0.3s, font-weight 0.3s, '}}>Set Cell Value</Link>
        </li>
        <li>
          <Link href="/examples/setCellFormat" _hover={{ color: 'blue.500', fontWeight: 'normal',  textDecoration:"underline" ,  transition: 'color 0.3s, font-weight 0.3s, '}}>Format Cell</Link>
        </li>
     <li>
          <Link href="/examples/autoFill" _hover={{ color: 'blue.500', fontWeight: 'normal',  textDecoration:"underline" ,   transition: 'color 0.3s, font-weight 0.3s, '}}>AutoFill Cell</Link>
        </li>
         <li>
           <Link href="/examples/setSelection" _hover={{ color: 'blue.500', fontWeight: 'normal',  textDecoration:"underline" ,   transition: 'color 0.3s, font-weight 0.3s,'}}>Merge Selected Cells</Link>
         </li>
       </ul>
      <Button m={1} mr={4} colorScheme='red' border="2px solid #E53E3E" onClick={() => setIsOpen(true)}><SearchIcon w={4} h={4} mr={2} />Ask AI</Button>
    </Flex>
    <SearchModal setNewData={setNewData} isOpen={isOpen} onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} />
    <div style={{margin:"auto 5px"}}><FileUpload setNewData={setNewData} />
</div>

  </Box>
  

  )
}

export default Header