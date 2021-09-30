import React from 'react';
import {
  Box, 
  Flex
} from '@chakra-ui/react';
import strat from '../images/strategy.svg';
import designdev from '../images/designdev.svg';
import management from '../images/management.svg';
import backlayer from '../images/backlayer.svg';
import LearnMoreButton from './LearnMoreButton';

import '../styles/cards.css';

export default function Cards() {
  return (
    <Flex
      pt="60px"  
      justifyContent="space-evenly"
      flexWrap="wrap"
    >
      <Box
        w={[
          "100%",
          "100%",
          "50%",
          "25%",
          "25%"
        ]}
        pt="10px"
        className="icard1"
      >
        <Box>
          <img src={strat} alt="strategy.svg" className="cardIcon" />
          <img src={backlayer} alt="backlayer.svg" className="cardIconLayer" />
        </Box>
        <Box
          pt="50px"
          h={[
            "230px",
            "230px",
            "270px",
            "270px"
          ]}
        >
          <h3
            className="cardh"
          >
            Strategy &amp; Research
          </h3>
          <p
            className="cardp"
          >
            Initial consulting is a crucial part of  
            a successful relationship. This is where we get 
            together and determine the strengths and 
            weaknesses of your business. Everything, 
            including your business’ origin story, vision, 
            and mission will be explored to gain a 
            personalised view of your needs. 
          </p>
        </Box>
        <Box>
          <LearnMoreButton />
        </Box>
      </Box>
      <Box
        w={[
          "100%",
          "100%",
          "50%",
          "25%",
          "25%"
        ]}
        pt="10px"
        className="icard2"
      >
        <Box>
          <img src={designdev} alt="strategy.svg" className="cardIcon" />
          <img src={backlayer} alt="backlayer.svg" className="cardIconLayer" />
        </Box>
        <Box
          pt="50px"
          h={[
            "230px",
            "230px",
            "270px",
            "270px"
          ]}
        >
          <h3
            className="cardh"
          >
            Design &amp; Development
          </h3>
          <p
            className="cardp"
          >
            Development is the second part of our <br /> process, and it’s
            where we take the insights gained from consulting and put 
            them to work. With your help, we’ll design a solution 
            that is smart, focused, and uniquely yours.
          </p>
        </Box>
        <Box>
          <LearnMoreButton />
        </Box>
      </Box>
      <Box
        w={[
          "100%",
          "100%",
          "50%",
          "25%",
          "25%"
        ]}
        pt="10px"
        className="icard3"
      >
        <Box>
          <img src={management} alt="strategy.svg" className="cardIcon" />
          <img src={backlayer} alt="backlayer.svg" className="cardIconLayer" />
        </Box>
        <Box
          pt="50px"
          h={[
            "230px",
            "230px",
            "270px",
            "270px"
          ]}
        >
          <h3
            className="cardh"
          >
            Strategy &amp; Research
          </h3>
          <p
            className="cardp"
          >
            Lastly, we’ll reach the marketing step, where our planning comes to life. 
            During this final step in the process, we’ll work with you to execute on 
            your marketing strategy and drive results!
          </p>
        </Box>
        <Box>
          <LearnMoreButton />
        </Box>
      </Box>
    </Flex>
  )
}
