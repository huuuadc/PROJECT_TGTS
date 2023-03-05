import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
  const navigate = useNavigate();

  const [name,setName] = useState("")

  return (
    
    <Box maxW={{base:"300px",sm:"600px",lg:"800px"}} margin="auto" pt="30px" pr="10px" pl="10px">
      <Box mb={4}><Text align={{base:"center",lg:"left"}} fontSize="22px" fontWeight="600">Bạn đang tìm gì hôm nay?</Text></Box>
      <InputGroup>
    <InputLeftElement
    
      pointerEvents='none'
      children={<SearchIcon mt="8px" color='gray.300' />}
    />
    <Input paddingY="23px" focusBorderColor='grey' boxShadow= "rgb(0 0 0 / 8%) 0px 4px 7px" borderRadius="20px" type='text' placeholder='Tìm kiếm' value={name} onChange={(e)=>setName(e.target.value)}  />
    <InputRightElement width='5rem'  >
        <Button bg="#10847E" color="white" borderRadius="20px" height="40px" mr="3px" mt="7px"  onClick={()=>navigate(`/search/${name}`)} >
          Tìm
        </Button>
      </InputRightElement>
  </InputGroup>
        
    </Box>
  )
}

export default SearchBar