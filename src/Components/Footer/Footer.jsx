import { Img } from '@chakra-ui/image';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout'
import instagram from '../../BannerImages/Instagram.svg'
import facebook from '../../BannerImages/facebook.svg'
import youtube from '../../BannerImages/Youtube.svg'
import twitter from '../../BannerImages/Twitter.svg'
import mastercard from '../../BannerImages/mastercard.png'
import visa from '../../BannerImages/visa.png'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    {/* // for small screen code */}
    <Box bg="#EEF4FF" p="3rem 0">
    <Accordion display={{sm:"block",md:"block",lg:"none"}} defaultIndex={[0]} mb={5} allowMultiple fontFamily="Inter,sans-serif">
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Thegioithuocsi.com</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Về chúng tôi</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Tuyển dụng</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Cẩm nang sức khõe</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Đối tác với TGTS</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Bán hàng tại TGTS</Text></Link>
            </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Dịch vụ của chúng tôi</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Đặt thuốc</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Sản phẩm chắn sóc sức khõe</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Xét nghiệm</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={3}>Tìm trung tâm thu gơm gần nhất</Text></Link>
            </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Danh mục</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chăm sóc cá nhân</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Thực phẩm và đồ uống tốt cho sức khõe</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Sắc đẹp</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chăm sóc da</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chắm sóc tại nhà</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Sản phẩm hàng đầu</Text></Link>
        </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Hỗ trợ</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Box>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Tất cả cửa hàng</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Câu hỏi thường gập</Text></Link>
        </Box>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton pb={4}>
                <Box flex='1' textAlign='left'>
                <Text fontWeight="600" color="#30363C">Thông tin chính sách</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <hr></hr>
            <AccordionPanel pb={4}>
            <Box>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chính sách biên tập</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chính sách bảo mật</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Các điều khoản và điều kiện</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chăm sóc khách hàng</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={3}>Chính sách đổi trả sản phẩm</Text></Link>
        </Box>
            </AccordionPanel>
        </AccordionItem>
        <Box ml="2.5%" mb={10} mt={10}>
            <Heading m="15px 0 15px 0" fontSize="16px" fontWeight="600">Theo dõi chúng tôi trên</Heading>
            <Flex gap={4} flexWrap="wrap">
                <Link><Box h="27px" w="27px">
                    <Img src={instagram} w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="27px" w="27px">
                    <Img src={facebook} w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="27px" w="27px">
                    <Img src={youtube} w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="27px" w="27px">
                    <Img src={twitter} w="100%" h="100%" alt=''></Img>
                </Box></Link>
            </Flex>
        </Box>
    </Accordion>
    {/* // for big screen code */}
   <Grid textAlign="start" gridTemplateColumns="repeat(11,1fr)" fontFamily="Inter,sans-serif" w="95%" m="auto" display={{base:"none",md:"none",lg:"grid"}}>
    <GridItem colSpan={3} mr={3}>
        <Box>
            <Box>
                <Heading m="15px 0" fontSize="16px" fontWeight="600">Thegioithuocsi.com</Heading>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Về chúng tôi</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Tuyển dụng</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Cẩm nang sức khõe</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Đối tác với TGTS</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Bán hàng tại TGTS</Text></Link>
            </Box>
            <Box mt={6}>
                <Heading m="15px 0" fontSize="16px" fontWeight="600">Dịch vụ của chúng tôi</Heading>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Đặt thuốc</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Sản phẩm chắn sóc sức khõe</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Xét nghiệm</Text></Link>
                <Link><Text color='#30363C' fontSize='14px' mb={2}>Tìm trung tâm thu gơm gần nhất</Text></Link>
            </Box>
        </Box>
    </GridItem>
    <GridItem colSpan={3} mr={3}>
        <Box>
            <Heading m="15px 0" fontSize="16px" fontWeight="600">Danh mục</Heading>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chăm sóc cá nhân</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Thực phẩm và đồ uống tốt cho sức khõe</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Sắc đẹp</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chăm sóc da</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chắm sóc tại nhà</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Sản phẩm hàng đầu</Text></Link>
        </Box>
    </GridItem>
    <GridItem colSpan={3}>
        <Box>
            <Heading m="15px 0" fontSize="16px" fontWeight="600">Hỗ trợ</Heading>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Tất cả cửa hàng</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Câu hỏi thường gập</Text></Link>
        </Box>
        <Box mt={6}>
            <Heading m="15px 0" fontSize="16px" fontWeight="600">Thông tin chính sách</Heading>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chính sách biên tập</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chính sách bảo mật</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Các điều khoản và điều kiện</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chăm sóc khách hàng</Text></Link>
            <Link><Text color='#30363C' fontSize='14px' mb={2}>Chính sách đổi trả sản phẩm</Text></Link>
        </Box>
    </GridItem>
    <GridItem colSpan={2}>
        <Box>
            <Heading m="15px 0 15px 0" fontSize="16px" fontWeight="600">Theo dõi chúng tôi trên</Heading>
            <Flex justify="space-between" pr="20px" flexWrap="wrap">
                <Link><Box h="30px" w="30px">
                    <Img src={instagram} w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="30px" w="30px">
                    <Img src={facebook} w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="30px" w="30px">
                    <Img src={youtube} w="100%" h="100%" alt=''></Img>
                </Box></Link>
                <Link><Box h="30px" w="30px">
                    <Img src={twitter} w="100%" h="100%" alt=''></Img>
                </Box></Link>
            </Flex>
        </Box>
    </GridItem>
   </Grid>
   <Box w="95%" m="auto">
    <Heading m="15px 0 20px 0" fontSize="16px" fontWeight="600">Đối tác thanh toán của chúng tôi</Heading>
     <Flex justify="space-between" flexDirection={{base:"column",md:"column",lg:"row"}}>   
        <Box mb={{base:"30px",md:"30px"}}>
            <Flex gap={8} flexWrap="wrap">
                <Box h="18px">
                    <Img src={mastercard} alt='logo' h="100%" w="auto"></Img>
                </Box>
                <Box h="18px">
                    <Img src={visa} alt='logo' h="100%" w="auto"></Img>
                </Box>
            </Flex>
        </Box>
        <Box>
            <Link><Text color='#30363C' fontSize='14px'>© {new Date().getFullYear()} Thegioithuocsi. Đã đăng ký bản quyền.</Text></Link>
        </Box>
    </Flex>
   </Box>
   </Box>
   </>
  )
}

export default Footer