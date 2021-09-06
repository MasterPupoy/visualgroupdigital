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
      </Flex>
    </Box>
  )
}
