import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import logo from '../images/logo2.svg';
import facebook from '../images/simplified/socials/fb_simplified.svg';
import twitter from '../images/simplified/socials/twttr_simplified.svg';
import insta from '../images/simplified/socials/insta_simplified.svg';


export default function SimplifiedNav() {
  return (
    <Flex
      flexDirection={'row'}
      w="100%"
      justifyContent='space-between'
      p="1rem"
      flexWrap={"wrap"}
    >
      <Image src={logo} width={'20rem'}  />
      <Flex
        alignItems="center"
        flexDirection="row"
        py="1rem"
        flexWrap={"wrap"}
      >
        <Text
          className="reusableheader"
          as="h3"
          fontSize="1.5rem"
          fontWeight="800"
          mx="1rem"
        >
          Follow Us
        </Text>
        <Box
          className="social"
        >
          <a
            href="https://www.facebook.com/visualgrouponlineltd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebooklogo.svg" style={{ height: "35px", width: "35px",  cursor: "pointer"  }} />
          </a>
          <a
          
          >
            <img src={twitter} alt="twitter.svg" style={{ height: "40px", width: "40px",  cursor: "pointer" }} />
          </a>
          <a
            href="https://www.instagram.com/visualgroupdigitalltd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="instagram.svg" style={{ height: "40px", width: "35px", cursor: "pointer" }} />
          </a>
        </Box>

      </Flex>
    </Flex>
  )
}

