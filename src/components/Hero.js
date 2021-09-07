import React from 'react'
import {
  Flex, 
  Box
} from '@chakra-ui/react';
import Bizbut from '../components/Bizbut';
import '../styles/hero.css';

export default function Hero() {
  return (
    <Box
      className="hero-section"
    >
      <Flex
        flexDirection="column"
        width="100%"
      >
        <Flex
          className="banner-section"
        >
  
          <h1
            className="marketing"
          >
            Marketing &amp; Development
            Agency
          </h1>
          <h3
            className="submarketing" 
          >
            We Help Businesses Improve Their Marketing &amp; <br/>
            Brand To Maximise Client Potential.
          </h3>
          <Box
            pl="11px"
          >
            <Bizbut />
          </Box>
        </Flex>
        <Flex
          className="subhero"
        >
          <Box
            className="p1"
          >
            <h3>
              Our Clients
            </h3>
            <p>
              We’ve worked with more than 100 companies 
              since 2015 Check out some of the fantastic 
              clients we have brought to the UK and International 
              Markets.
            </p>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
