import React from 'react';
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

import emoji from '../images/emoji.png';
import circle_el from '../images/circle_el.svg';

import '../styles/reusablefooter.css';


export default function ReusableFooter({ text }) {
  return (
    <Flex 
      mt="100px"
      h={[
        "800px",
        "800px",
        "800px",
        "300px",
      ]}
      w="100%"
      bg="#fff"
      px={[
        "20px",
        "20px",
        "150px",
        "150px"
      ]}
      overflowX="hidden"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        alignItems="center"
        flexWrap="wrap"
      >
        <Box
          mx="20px"
        >
          <img src={emoji} alt="emoji" />
        </Box>
        <Box
           w={[
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
          overflowX="hidden"
          mx="50px"
        >
          <Text
            as="h1"
            fontSize="3xl"
            className="requesth1"
          >
            {text}
          </Text>
          <Text
            as="p"
            fontSize="md"
          >
            Not sure where to start? that's ok, we offer a free 30 minute consultation call to everyone! 
            we can help decide where you need to start and which of our services would benefit you the most.
          </Text>
        </Box>
        <Box
          w={[
              "100%",
              "100%",
              "100%",
              "20%"
            ]}
          p="20px"
        >
          <Text
            className="requesth2"
            fontSize="2xl"
          >
            Why Wait? <br/>
            Start Now
          </Text>
          <button
            className="bizbut indexBizbut"
          >
            BUSINESS ENQUIRY
          </button>
          <img src={circle_el} alt="svg" className="circular" />
        </Box>
      </Flex>
    </Flex>
  )
}
