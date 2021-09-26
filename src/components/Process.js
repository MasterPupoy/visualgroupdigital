import React from 'react';
import {
  Flex, 
  Box,
  Text
} from '@chakra-ui/react';

import consulting from '../images/consulting.svg';
import development from '../images/development.svg';
import marketing from '../images/marketing.svg';

import slantline from '../images/slantline.svg';
import slantline2 from '../images/slantline2.svg';

import Bizbut from '../components/Bizbut';

import '../styles/process.css';

export default function Process() {
  return (
    <Flex
      flexDirection="column"
      px="10%"
      pt="100px"
    >
      <Flex
        flexWrap="wrap"
      >
        <Box
          w={[
            "100%",
            "100%",
            "50%",
            "50%",
            "50%"
          ]}
          pt="20px"
        >
          <h3
            className="steps"
          >
            STEP 1
          </h3>
          <Text
            className="stepName"
            fontSize="4xl"
          >
            Consulting
          </Text>
          <Text
            className="stepP"
            fontSize="sm"
          >
            Initial consulting is a crucial part of a successful relationship. 
            This is where we get together and determine the strengths and weaknesses of your business. 
            Everything, including your business’ origin story, vision, and mission will be explored to 
            gain a personalised view of your needs. Understanding your business will enable us to develop 
            an interesting brand story that catches attention and converts!
          </Text>
        </Box>
        <Box
          pl="80px"
          w={[
            "0%",
            "0%",
            "50%",
            "50%",
            "50%"
          ]}
          h={[
            "0%",
            "0%",
            "100%",
            "100%"
          ]}
        >
          <img src={consulting} alt="consulting.svg" className="svg" />
          <img src={slantline} alt="slantline.svg" className="leftdrop" />
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
      >
        <Box
          pr="80px"
           w={[
            "0%",
            "0%",
            "50%",
            "50%",
            "50%"
          ]}
          h={[
            "0%",
            "0%",
            "100%",
            "100%"
          ]}
        >
          <img src={development} alt="consulting.svg" className="svg" /> 
          <img src={slantline2} alt="slantline2.svg" className="rightdrop" />
        </Box>
        <Box
           w={[
            "100%",
            "100%",
            "50%",
            "50%",
            "50%"
          ]}
          pt="20px"
        >
          <h3
            className="steps"
          >
            STEP 2
          </h3>
          <Text
            className="stepName"
            fontSize="4xl"
          >
            Development
          </Text>
          <Text
            className="stepP"
            fontSize="sm"
          >
            Visual Group Digital will take the info from our initial consulting 
            and overlay decades of combined experience to devise an effective 
            brand strategy for your company. We’ll help you to create a brand 
            that stands out, tells your story, and gets you RESULTS!
          </Text>
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
      >
        <Box
          w={[
            "100%",
            "100%",
            "50%",
            "50%",
            "50%"
          ]}
          pt="20px"
        >
          <h3
            className="steps"
          >
            STEP 3
          </h3>
          <Text
            className="stepName"
            fontSize="4xl"
          >
            Marketing
          </Text>
          <Text
             fontSize="sm"
            className="stepP"
          >
            Lastly, we’ll reach the marketing step, where our planning comes to life. 
            During this final step in the process, we’ll work with you to 
            execute on your marketing strategy and drive results! Marketing will help you with 
            your overall marketing strategy and ad campaigns. We will help you market your business 
            effectively to build the ultimate lead generation machine that GETS YOU CLIENTS!
          </Text>
        </Box>
        <Box
          pl="80px"
           w={[
            "0%",
            "0%",
            "50%",
            "50%",
            "50%"
          ]}
          h={[
            "0%",
            "0%",
            "100%",
            "100%"
          ]}
        >
          <img src={marketing} alt="consulting.svg" className="svg" />
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Bizbut />
      </Flex>
    </Flex>
  )
}
