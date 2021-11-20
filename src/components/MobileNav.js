import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  VStack,
  Text,
  Button,
  StackDivider
} from "@chakra-ui/react";


import { HamburgerIcon, ArrowRightIcon } from "@chakra-ui/icons";
import logo from '../images/vgd.svg';
import vgd from '../images/whole2.png';
import '../styles/mobilenav.css';

export default function MobileNav({ page, main }) {
  const [key, setKey] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    
    if(mounted) {
      setKey(page)
    }

    return () => {
      mounted = false;
    }
  }, [page])

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="5px"
        pt="10px"
        w="100%"
        position="fixed"
        top="0"
        bg="#fff"
        zIndex="999"
      >
        <Box>
          <img src={logo} alt="visual_group_logo" className="logo" onClick={() => {
            window.location.assign("/")
          }} />
        </Box>
        {/* <Menu
          id="menu"
        >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
         
        </Menu> */}
        <Button bg="#fff" size="lg"
          onClick={() => {
            setOpen(prevState => !prevState);
          }}
        >
          <HamburgerIcon />
        </Button>
    </Flex>

    <Flex
      display={(open) ? "block" : "none"}
      w={[
        "300px",
        "60vw",
        "60vw",
        "60vw",
        "60vw"
      ]}
      h="100%"
      position="fixed"
      bg="#fff"
      zIndex="99999"
      right="0"
      boxShadow="dark-lg"
      py="10px"
      overflowY="auto"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        px="30px"
        py="10px"
      >
        <Box
          display={[
            "none",
            "none",
            "block",
            "block",
            "block"
          ]}
        >
          <img src={vgd} alt="visuaal" />
        </Box>
        <Box
          ml={[
            "70%",
            "70%",
            "0%",
            "0%",
            "0%"
          ]}
        >
          <Button
          bg="#fff" size="lg"
            onClick={() => {
              setOpen(false);
            }}
          >
            <ArrowRightIcon />
          </Button>
        </Box>
      </Flex>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box
          px="30px"
        >
          <a 
            href="/"
            className={
            (key === '/') 
            ? "active"
            : "inactive"
          }
          >
            HOME
          </a>
  
        </Box>
        <Box
          px="30px"
        >
          <a 
            href="/about"
            className={
            (key === '/about') 
            ? "active"
            : "inactive" 
          }
          >
            ABOUT
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/digital_marketing`}
            className={
            (main === '/marketing') 
            ? "active"
            : "inactive" 
          }
          >
            DIGITAL MARKETING
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/ecommerce_marketing`}
            className={
            (main === '/ecommerce_marketing') 
            ? "active"
            : "inactive" 
          }
          >
            E-COMMERCE MARKETING
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/facebook_advertising`}
            className={
            (main === '/facebook_advertising') 
            ? "active"
            : "inactive" 
          }
          >
            FACEBOOK ADVERTISING
          </a>
        </Box>
           <Box
          px="30px"
        >
          <a 
            href={`/google_advertising`}
            className={
            (main === '/google_advertising') 
            ? "active"
            : "inactive" 
          }
          >
            GOOGLE ADVERTISING
          </a>
        </Box>
          <Box
          px="30px"
        >
          <a 
            href={`/social_media_growth`}
            className={
            (main === '/social_media_growth') 
            ? "active"
            : "inactive" 
          }
          >
            SOCIAL MEDIA GROWTH
          </a>
        </Box>
           <Box
          px="30px"
        >
          <a 
            href={`/search_engine_optimisation`}
            className={
            (main === '/search_engine_optimisation') 
            ? "active"
            : "inactive" 
          }
          >
            SEARCH ENGINE OPTIMISATION
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/digital_branding`}
            className={
              (main === '/branding') 
              ? "active"
              : "inactive" 
            }
          >
            DIGITAL BRANDING
          </a>
        </Box>
            <Box
          px="30px"
        >
          <a 
            href={`/graphic_design`}
            className={
              (main === '/graphic_design') 
              ? "active"
              : "inactive" 
            }
          >
            GRAPHIC DESIGN
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/web_development`}
            className={
              (main === '/web_development') 
              ? "active"
              : "inactive" 
            }
          >
            WEB DEVELOPMENT
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/case_studies`}
            className={
            (key === '/case_studies') 
            ? "active"
            : "inactive" 
          }
          >
            CASE STUDIES
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/our_portfolio`}
            className={
            (key === '/our_portfolio') 
            ? "active"
            : "inactive" 
          }
          >
            OUR PORTFOLIO
          </a>
        </Box>
        <Box
          px="30px"
        >
          <a 
            href={`/contact`}
            className={
            (key === '/contact') 
            ? "active"
            : "inactive" 
          }
          >
            CONTACT
          </a>
        </Box>
       
      </VStack>

       

     


    </Flex>
  </>
  )
}