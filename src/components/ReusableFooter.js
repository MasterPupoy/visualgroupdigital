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
        w="100%"
        alignItems="center"
        h="500px"
        flexWrap="wrap"
        mt="100px"
      >
        <Box
          w={[
            "100%",
            "100%",
            "50%",
            "500px"
          ]}
          h="500px"
          mx={[
            "0px",
            "200px"
          ]}
          className="pattern-dots-lg"
        >
          <Text
              className="requesth1"
              fontSize="9xl"
              style={{
                transform: "translate(50%, 50%)"
              }}
            >
              START NOW!
            
            </Text>
            {/* <Text>
              Not sure where to start? that's ok, we offer a free 30 minute consultation call to everyone! 
              we can help decide where you need to start and which of our services would benefit you the most.
            </Text> */}
        </Box>
        <Box
          p="20px"
        >
           <Text
              className="requesth2"
              fontSize="4xl"
            >
              
              Request a callback <br/>
              today!
            </Text>
            <button
              className="bizbut indexBizbut"
            >
              BUSINESS ENQUIRY
            </button>
        </Box>
        {/* {/* <Box>
          <img src={rect} alt="svg" className="circle_el" />
        </Box> */}
      </Flex> 
  )
}
