import React from 'react';
import {
  Flex, 
  Box
} from '@chakra-ui/react';

import '../styles/reusableranking.css';


export default function ReusableRanking({ textArray }) {
  
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
    >
        {textArray.map((steps, i) => {
          return (
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              w="650px"
              h="314px"
              alignItems="center"
              className={steps.classes}
              mr="50px"
              mt="60px"
            >
              <Box>
                <h1
                  className="reusablerankingnum"
                >
                  {steps.num}
                </h1>
              </Box>
              <Box
                className="reusablerankingbody"
                w="500px"
              >
                <h3>  
                  {steps.header}
                  <img src={steps.img} alt="img" />
                </h3>
                <p>
                  {steps.para}
                </p>
              </Box>
            </Flex>
          )
        })}
    </Flex>
  )
}
