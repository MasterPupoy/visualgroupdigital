import React from 'react';
import {
  Flex, 
  Box
} from '@chakra-ui/react';

import consulting from '../images/consulting.svg';
import development from '../images/development.svg';
import marketing from '../images/marketing.svg';

import '../styles/process.css';

export default function Process() {
  return (
    <Flex
      flexDirection="column"
      pl="10%"
      pt="115px"
    >
      <Flex>
        <Box
          w="50%"
        >
          <h3
            className="steps"
          >
            STEP 1
          </h3>
          <h2
            className="stepName"
          >
            Consulting
          </h2>
          <p
            className="stepP"
          >
            Initial consulting is a crucial part of a successful relationship. 
            This is where we get together and determine the strengths and weaknesses of your business. 
            Everything, including your business’ origin story, vision, and mission will be explored to 
            gain a personalised view of your needs. Understanding your business will enable us to develop 
            an interesting brand story that catches attention and converts!
          </p>
        </Box>
        <Box
          pl="80px"
        >
          <img src={consulting} alt="consulting.svg" className="svg" />
        </Box>
      </Flex>
      <Flex>
        <Box
          pr="80px"
        >
          <img src={development} alt="consulting.svg" className="svg" />
        </Box>
        <Box
          w="50%"
        >
          <h3
            className="steps"
          >
            STEP 2
          </h3>
          <h2
            className="stepName"
          >
            Development
          </h2>
          <p
            className="stepP"
          >
            Visual Group Digital will take the info from our initial consulting 
            and overlay decades of combined experience to devise an effective 
            brand strategy for your company. We’ll help you to create a brand 
            that stands out, tells your story, and gets you RESULTS!
          </p>
        </Box>
      </Flex>
      <Flex>
        <Box
          w="50%"
        >
          <h3
            className="steps"
          >
            STEP 3
          </h3>
          <h2
            className="stepName"
          >
            Marketing
          </h2>
          <p
            className="stepP"
          >
            Lastly, we’ll reach the marketing step, where our planning comes to life. 
            During this final step in the process, we’ll work with you to 
            execute on your marketing strategy and drive results! Marketing will help you with 
            your overall marketing strategy and ad campaigns. We will help you market your business 
            effectively to build the ultimate lead generation machine that GETS YOU CLIENTS!
          </p>
        </Box>
        <Box
          pl="80px"
        >
          <img src={marketing} alt="consulting.svg" className="svg" />
        </Box>
      </Flex> 
    </Flex>
  )
}
