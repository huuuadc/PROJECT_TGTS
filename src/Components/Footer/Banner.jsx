import { Box, Flex, Img, Text } from '@chakra-ui/react'
import BannerImage from "../../BannerImages/banner_cut.png";
import Play from "../../BannerImages/googlePlay.svg";
import Apple from "../../BannerImages/appStore.svg";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
    
    <Box position="relative" bgColor="#D7FAF8" width="100%" height="90%" display={{base:"none",md:"none",lg:"block"}}>
        
        <Img src={BannerImage} width="100%" h="100%"/>
        <Box position="absolute" top="15px" left="33.5%" height="275px" width="33%" fontFamily="Inter,sans-serif" color="#30363C">
        
            {/* <Flex width="90%" m="auto" justify="space-between" alignItems="center">
                <Box  w="48%" h="50px">
                    <Link>
                        <Img src={Play} alt='play' h="100%" w="100%"></Img>
                    </Link>
                </Box>
                <Box  w="48%" h="49px">
                    <Link>
                        <Img src={Apple} alt='apple' h="100%" w="100%"></Img>
                    </Link>
                </Box>
            </Flex> */}
        </Box>
    </Box>
    
    </>
  )
}

export default Banner