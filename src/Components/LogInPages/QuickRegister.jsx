import { useState, useRef } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, Image, Input, Stack, useDisclosure, InputGroup, InputRightElement, Text, useToast, FormControl } from "@chakra-ui/react";

import logo_tgts from "../../BannerImages/logo.svg";
import icon_pharma from "../../BannerImages/icon_pharma.svg";

const initState ={
    name:"",
    email:"",
    password:"",
    passwordConfirm:"",
}

export const QuickRegister = () => {

    const auth = localStorage.getItem("isAuth");
    
    const toast= useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = useRef();
    
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [user, setUser] = useState(initState);


    const handleChange = (e)=>{
        const {name, value } = e.target;
        setUser({...user, [name]: value})

    }

    // console.log(user);
    const handleReg = async(e)=>{
        e.preventDefault();
        let res = await fetch(`https://tgts-admin-7am5k3dngq-et.a.run.app/user`);
        let res2 = await res.json();
        // console.log(res2);

        let flag = false;
        res2.map((elem) => {
            if(elem.email === user.email){
                flag = true;
            }
        })
        try {
                if(!flag){
                    fetch(`https://tgts-admin-7am5k3dngq-et.a.run.app/user`,{
                        method:'POST',
                        body:JSON.stringify(user),
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    })
                    toast({
                        title: 'Bạn đã đăng ký tài khoản thành công',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                    });
                }
                else{
                    toast({
                        title: 'Tài khoản đã được đăng ký trước đó!',
                        status: "info",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                    });
                    
                }
            }
        catch (error) {
            console.log(error);   
        }
    
        setUser(initState)
        
       onClose(); 
    }

  return (
    <FormControl  >
        {!auth &&  <Text onClick={onOpen} fontSize="18px" color="#4f585e" py="20px">
                Ban chưa có tài khoản? 
                <span style={{ color: "#159a94", cursor: "pointer" }}>
                    {" "}
                    Đăng ký
                </span>
              </Text>}
        <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
            position="relative"
            size={"sm"}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton
                position="absolute"
                left={{lg:"-50px", xl:"-50px"}}
                top="25px"
                bg="#0f847e"
                p="28px"
                borderRadius="0"
                color="white"
                _hover={{ bg: "#0f847e" }}
                _active={{ bg: "#0f847e" }}
                fontSize="14px"
            />
            <DrawerHeader
                borderBottomWidth="1px"
                bg="#0f847e"
                minH="110px"
                // border="1px solid red"
                align="end"
                py="0"
                px="40px"
            >
                <Flex justify="space-between" h="100%" w="100%">
                <Flex
                    h="80%"
                    w="50%"
                    // border="1px solid red"
                    justify="center"
                    // py="10px"
                    align="end"
                >
                    <Image
                    h="62%"
                    src={logo_tgts}
                    />
                </Flex>
                <Flex
                    align="end"
                    w="50%"
                    h="100%"
                    // border="1px solid red"
                    justify="end"
                >
                    <Image
                    h="75%"
                    src={icon_pharma}
                    />
                </Flex>
                </Flex>
            </DrawerHeader>

            <DrawerBody px="50px">
                <Stack spacing="20px">
                    <form onSubmit={handleReg}>
                        <Box>
                            <FormLabel
                            htmlFor="phone"
                            fontWeight="700"
                            py="12px"
                            color="#4f585e"
                            >
                            Đăng ký
                            </FormLabel>
                            <Stack spacing="20px">
                            <Input
                                h="2.8rem"
                                ref={firstField}
                                type="text"
                                letterSpacing=".2px"
                                outline=".1px solid black"
                                focusBorderColor="none"
                                placeholder="Nhập số điện thoại"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                h="2.8rem"
                                ref={firstField}
                                type="email"
                                pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                                letterSpacing=".2px"
                                outline=".1px solid black"
                                focusBorderColor="none"
                                placeholder="Nhập email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />

                            <InputGroup h="2.8rem">
                                <Input
                                h="2.8rem"
                                letterSpacing=".2px"
                                outline=".1px solid black"
                                focusBorderColor="none"
                                type={show ? "text" : "password"}
                                placeholder="Nhập mật khẩu"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                                />
                                <InputRightElement width="4.5rem">
                                <Button h="2rem" size="sm" onClick={handleClick}>
                                    {show ? "Ẩn" : "Hiện"}
                                </Button>
                                </InputRightElement>
                            </InputGroup>

                            <InputGroup h="2.8rem">
                                <Input
                                h="2.8rem"
                                letterSpacing=".2px"
                                outline=".1px solid black"
                                focusBorderColor="none"
                                type={show ? "text" : "password"}
                                placeholder="Xác nhận mật khẩu"
                                name="passwordConfirm"
                                value={user.passwordConfirm}
                                onChange={handleChange}
                                required
                                />
                                <InputRightElement width="4.5rem">
                                <Button h="2rem" size="sm" onClick={handleClick}>
                                    {show ? "Ẩn" : "Hiện"}
                                </Button>
                                </InputRightElement>
                            </InputGroup>
                            
                            </Stack>
                        </Box>    
                        <Button
                            w="100%"
                            h="2.8rem"
                            variant="#0f847e"
                            bg="#0f847e"
                            color="#fff"
                            _hover={{ bg: "#159a94" }}
                            type="submit"
                            mt="15px"
                        >
                            Đăng ký
                        </Button>
                    </form>
                </Stack>
                <Text fontSize="12px" color="#4f585e" py="20px">
                Bằng cách nhấp vào đăng nhập, bạn đã đồng ý với

                <span style={{ color: "#159a94", cursor: "pointer" }}>
                        {" "}
                        chính sách
                    </span>
              
                {" "}cửa chúng tôi 
                </Text>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </FormControl >
  )
}
