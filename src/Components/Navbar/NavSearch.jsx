import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NavSearch() {
  const navigate = useNavigate();

  const placeholderSearch = ["one", "two", "three"];

  const [name,setName] = useState("")
  return (
    <Box  w={{base:"200px",sm:"400px",lg:"360px",xl:"500px"}}>
      <InputGroup>
    <InputLeftElement
    
      pointerEvents='none'
      children={<SearchIcon mt="2px" color='gray.300' />}
    />
    <Input paddingY="20px" focusBorderColor='grey' boxShadow= "rgb(0 0 0 / 8%) 0px 4px 7px" borderRadius="20px" type='text' placeholder='Tìm kiếm' onChange={(e)=>setName(e.target.value)}  />
    <InputRightElement width='5rem' >
        <Button bg="#10847E" color="white" borderRadius="20px" height="35px" mr="3px" mt="3px" onClick={()=>navigate(`/search/${name}`)} >
          Search
        </Button>
      </InputRightElement>
  </InputGroup>
      
    </Box>
  )
}

export default NavSearch