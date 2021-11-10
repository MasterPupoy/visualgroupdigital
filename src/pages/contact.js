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
    <Box className="main" >
      <SEO />
      <Box>
         {
          (width > 1280) 
          ? <Nav loc={location} page='/contact' />
          : <MobileNav page='/contact' />
        }
        <Flex
          justifyContent="center"
          pt="93px"
          mx="50px"
        >
          {/* <Flex
            justifyContent="center"
            alignItems="center"
            display={[
              "none",
              "none",
              "none",
              "none",
              "flex",
              "flex"
            ]}
            h={[
              "0px",
              "0px",
              "0px",
              "863px",
              "863px",
              "863px"
            ]}
            className="contactside"
            pr="50px"
            w={[
              "0px",
              "0px",
              "0px",
              "30%",
              "30%"
            ]}
          >
          <Box>
            <Box
            className="contact"
            >
              <Text
                as="h3"
              >
                Contact Details
              </Text>
            </Box>
            {/* <Flex
              w={[
                "0px",
                "0px",
                "0px",
                "100%",
                "100%",
                "100%"
              ]}
              flexDirection="column"
            >
              <Flex
                flexDirection="row"
                pt="30px"
                alignItems="center"
              >
                <Box>
                  <img src={map} alt="message.svg" />
                </Box>
                <Box>
                  <h5
                    className="footertxt"
                  >
                    Office based in Sevenoaks 
                    &amp; Tunbridge Wells
                  </h5>
                </Box>
              </Flex>
              <Flex
                flexDirection="row"
                pt="30px"
                alignItems="center"
              >
                <Box>
                  <img src={map} alt="message.svg" />
                </Box>
                <Box>
                  <h5
                    className="footertxt"
                  >
                    Office based in Dubai, UAE
                    <br />
                  </h5>
                </Box>
              </Flex>
              <Flex
                flexDirection="row"
                pt="30px"
                alignItems="center"
              >
                <Box>
                  <img src={message} alt="message.svg" />
                </Box>
                <Box>
                  <h5
                    className="footertxt"
                  >
                    hello@visualgroup.online
                  </h5> 
                </Box>
              </Flex>
            </Flex>
          </Box>
          </Flex> */}


          <Flex
            w={[
              "100%",
              "100%",
              "100%",
              "90%",
              "90%"
            ]}
            flexDirection="column"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box
              className="contactgetstarted"
              h="190px"
              mx="50px"
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
                  "18px",
                  "18px",
                  "18px",
                  "22px",
                  "22px"
                ]}
              >
                It only takes a few minutes to kick off a project. 
                Fill in the details below and we’ll be in touch.
              </Text>
            </Box>
            <Box
              className="contactgetstarted2"
              mx="50px"
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
                      "40%",
                      "40%"
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
                      "40%",
                      "40%"
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
                      "40%",
                      "40%"
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
                      "40%",
                      "40%"
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
            </Box>
            <Box
              className="contactgetstarted3"
              pt="50px"
              mx="50px"
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
        </Flex>
        <Footer />
      </Box>
    </Box>
  )
}
