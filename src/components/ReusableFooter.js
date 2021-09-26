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
        "700px",
      ]}
      w="100%"
      bg="#fff"
      px={[
        "20px",
        "20px",
        "150px",
        "250px"
      ]}
      overflowX="hidden"
      alignItems="center"
    >
      <Flex
        alignItems="center"
        flexWrap="wrap"
        alignSelf="center"
      >
        <Box>
          <img src={emoji} alt="emoji" />
        </Box>
        <Box
           w={[
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
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
        >
          <h2
            className="requesth2"
          >
            Why Wait? <br/>
            Start Now
          </h2>
          <button
            className="bizbut indexBizbut"
          >
            BUSINESS ENQUIRY
          </button>
        </Box>
        <Box
          w={[
            "0px",
            "0px",
            "100%",
            "100%"
          ]}
        >
          <img src={circle_el} alt="svg" className="circular" />
        </Box>
      </Flex>
    </Flex>
  )
}
