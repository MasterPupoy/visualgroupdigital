import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import insta from '../images/insta.svg';

import message from '../images/message.svg';
import map from '../images/map.svg';

import '../styles/contact.css';

export default function contact({ location }) {

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
        <Nav loc={location} page='/contact' />
        <Flex
          justifyContent="center"
          pt="93px"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            h="863px"
            className="contactside"
            pr="50px"
          >
          <Box
            w="277px"
          >
            <Box
            className="contact"
            >
              <h3>
                Contact Details
              </h3>
            </Box>
            <Flex
              
              w="100%"
              flexDirection="column"
            >
              <Flex
                flexDirection="row"
                pt="30px"
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
              <Flex
                pt="30px"
              >
                <Box
                  className="social"
                >
                  <img src={facebook} alt="facebooklogo.svg" />
                  <img src={twitter} alt="twitter.svg" />
                  <img src={insta} alt="instagram.svg" />
                </Box>
              </Flex>
            </Flex>
          </Box>
          </Flex>
          <Flex
            w="930px"
            pl="173px"
            flexDirection="column"
          >
            <Box
              className="contactgetstarted"
              h="190px"
            >
              <h3>
                Get started
              </h3>
              <p>
                It only takes a few minutes to kick off a project. 
                Fill in the details below and we’ll be in touch.
              </p>
            </Box>
            <Box
              className="contactgetstarted2"
            
            >
              <h3>
                First, tell us about yourself
              </h3>
              <Flex
                pt="32px"
                justifyContent="center"
                flexDirection="column"
                w="100%"
              >
                <Flex
                  justifyContent="space-between"
                  w="100%"
                >
                  <Box 
                    w="358px"
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
                    w="358px"
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
                >
                  <Box 
                    w="358px"
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
                    w="358px"
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
            >
              <h3>
                Lastly, tell us about the project
              </h3>
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
