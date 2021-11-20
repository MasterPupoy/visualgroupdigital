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
        justifyContent="center"
      >
        <Box
            w={[
            "100%",
            "100%",
            "50%",
            "40%",
            "400px"
          ]}
          h={[
            "250px",
            "250px",
            "350px",
            "500px",
            "500px"
          ]}
          mx={[
            "0px",
            "0px",
            "50px",
            "100px",
            "200px"
          ]}
          className="pattern-dots-lg" 
        >
          <Text
               className="requesth1"
              fontSize={[
                "50px",
                "60px",
                "60px",
                "60px",
                "65px"
              ]}
              transform={[
                "translate(7%, 50%)",
                "translate(20%, 50%)",
                "translate(20%, 100%)",
                "translate(15%, 130%)",
                "translate(35%, 130%)",
              ]}
  
            >
              START NOW!
            
            </Text>
            {/* <Text>
              Not sure where to start? that's ok, we offer a free 30 minute consultation call to everyone! 
              we can help decide where you need to start and which of our services would benefit you the most.
            </Text> */}
        </Box>
        <Flex
          p="20px"
          w={[
            "100%",
            "100%",
            "36%",
            "35 %",
            "35%"
          ]}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
           <Text
              className="requesth2"
              fontSize={[
                "20px",
                "30px",
                "30px",
                "30px",
                "30px"
              ]}
              alignSelf={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start"
              ]}
            >
              
              Request a callback <br/>
              today!
            </Text>
            <Box
                      alignSelf={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start"
              ]}  
            >
              <button
                className="bizbut indexBizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Box>
        </Flex>
        {/* {/* <Box>
          <img src={rect} alt="svg" className="circle_el" />
        </Box> */}
      </Flex> 
  )
}
