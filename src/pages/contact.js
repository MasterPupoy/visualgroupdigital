import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import message from '../images/message.svg';
import map from '../images/map.svg';

import '../styles/contact.css';

export default function Contact({ location }) {

  const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

 useEffect(() => {

    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Box className="main" overflowX="hidden" >
      <SEO />
         {
          (width > 1280) 
          ? <Nav loc={location} page='/contact' />
          : <MobileNav page='/contact' />
        }
      <Box>
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          flexWrap="wrap"
          px="5%"
          mt="60px"
          >
          <Flex
            className="contactgetstarted"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            w="100%"
            py="10px"
            borderBottom="0.5px solid rgba(0, 0, 0, 0.15);"
          >
            <Text
              as="h3"
              fontSize={[
                "23px",
                "23px",
                "32px",
                "32px",
                "32px"
              ]}
            >
              Get started
            </Text>
            <Text
              as="p"
              fontSize={[
                "14px",
                "14px",
                "18px",
                "22px",
                "22px"
              ]}
            >
              It only takes a few minutes to kick off a project. 
              Fill in the details below and we’ll be in touch.
            </Text>
          </Flex>





          <Flex
            className="contactgetstarted2"
            w="100%"
            px="5%"
            justifyContent="center"
            alignItems="center"
            borderBottom="0.5px solid rgba(0, 0, 0, 0.15);"
          >
            <Flex
              pt="32px"
              justifyContent="center"
              flexDirection="column"
              w="100%"
              flexWrap="wrap"
            >
              <Flex
                justifyContent="space-between"
                w="100%"
                flexWrap="wrap"
              >
                <Box 
                  w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="name">
                    <FormLabel>YOUR NAME</FormLabel>
                    <Input 
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                    />
                  </FormControl>
                </Box>
                <Box
                    w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="email">
                    <FormLabel>EMAIL</FormLabel>
                    <Input 
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                w="100%"
                pt="20px"
                flexWrap="wrap"
              >
                <Box 
                  w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="location">
                    <FormLabel>LOCATION</FormLabel>
                    <Input 
                      type="email" 
                      className="inputField" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                    />
                  </FormControl>
                </Box>
                <Box
                    w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="company_name">
                    <FormLabel>COMPANY NAME</FormLabel>
                    <Input 
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                    />
                  </FormControl>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Box
            className="contactgetstarted3"
            pt="50px"
            px="5%"
            w="100%"
          >

            <FormControl id="textarea" pt="20px">
              <FormLabel>PROJECT DETAILS</FormLabel>
              <Textarea
                size="md"
                placeholder="Anything else you'd like to add?"
                resize="none"
                style={{
                  border: "1px solid rgba(238, 111, 25, 0.54)",
                  borderRadius: "8px"
                }}
              />
            </FormControl>
          </Box>
          <Box
            pt="50px"
            textAlign="center"
          >
            <button className="contactsubmit">
              SUBMIT
            </button>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </Box>
  )
}
