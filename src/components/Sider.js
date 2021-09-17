import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import insta from '../images/insta.svg';
import logoline from '../images/logoline.svg';

export default function Sider() {
  return (
    <Box
      w="93px"
      mt="15%"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Box
          py="25%"
        >
          <img src={facebook} alt="facebook.svg" />
        </Box>
        <Box
          py="25%"
        >
          <img src={twitter} alt="facebook.svg" />
        </Box>
        <Box
          py="25%"
        >
          <img src={insta} alt="facebook.svg" />
        </Box>
        <Box
          py="45%"
        >
          <img src={logoline} alt="facebook.svg" style={{ transform: "rotate(90deg)"}}/>
        </Box>
      </Flex> 
    </Box>
  )
}
