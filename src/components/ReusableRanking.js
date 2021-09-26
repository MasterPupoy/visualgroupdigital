import React from 'react';
import {
  Flex, 
  Box,
  Text
} from '@chakra-ui/react';

import '../styles/reusableranking.css';


export default function ReusableRanking({ textArray }) {
  
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
        {textArray.map((steps, i) => {
          return (
            <Flex
              flexDirection="row"
              flexWrap="wrap"
              w={[
                "100%",
                "100%",
                "50%",
                "40%",
                "40%"
              ]}
              h={[
                "600px",
                "600px",
                "600px",
                "600px",
                "600px",
                "316px"
              ]}
              alignItems="center"
              className={steps.classes}
              mr="50px"
              mt="60px"
            >
              <Box>
                <Text
                  className="reusablerankingnum"
                >
                  {steps.num}
                </Text>
              </Box>
              <Box
                className="reusablerankingbody"
                w="70%"
              >
                <Text
                  fontSize="3xl"
                  as="h3"
                >  
                  {steps.header}
                  <img src={steps.img} alt="img" />
                </Text>
                <Text
                  as="p"
                  fontSize="lg"
                >
                  {steps.para}
                </Text>
              </Box>
            </Flex>
          )
        })}
    </Flex>
  )
}
