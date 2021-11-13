import React, { useEffect } from 'react';
import {
  Flex, 
  Box,
  Text
} from '@chakra-ui/react';

import '../styles/reusableranking.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ReusableRanking({ textArray }) {

  useEffect(() => {
    
    let ranktl = gsap.timeline({ scrollTrigger: {
      trigger: ".reusablerankingnum",
      start: "top bottom",
    }})

    ranktl.fromTo(".rrfirstclass", {
      x: -300,
      opacity: 0
    }, { duration: 0.5, x: 0, opacity: 1})
    .fromTo(".rrsecondclass", {
      x: -300,
      opacity: 0
    }, { duration: 0.5, x: 0, opacity: 1})

  }, [])
  
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
                "500px",
                "300px",
                "300px",
                "300px",
                "300px",
                "300px"
              ]}
              className={steps.classes}
              justifyContent="center"
              alignItems="center"
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
                  fontSize="2xl"
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
