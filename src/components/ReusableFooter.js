import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';

import emoji from '../images/emoji.png';
import circle_el from '../images/circle_el.svg';

import '../styles/reusablefooter.css';


export default function ReusableFooter({ text }) {
  return (
    <Flex 
      mt="100px"
      h="371px"
      w="100%"
      bg="#fff"
      py="256px"
    >
      <Flex
        alignItems="center"
        pl="109px"
      >
        <Box>
          <img src={emoji} alt="emoji" />
        </Box>
        <Box
          w="500px"
          pl="74px"
        >
          <h1
            className="requesth1"
          >
            {text}
          </h1>
          <p>
            Not sure where to start? that's ok, we offer a free 30 minute consultation call to everyone! 
            we can help decide where you need to start and which of our services would benefit you the most.
          </p>
        </Box>
        <Box
          pl="145px"
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
        <Box>
          <img src={circle_el} alt="svg" className="circular" />
        </Box>
      </Flex>
    </Flex>
  )
}
