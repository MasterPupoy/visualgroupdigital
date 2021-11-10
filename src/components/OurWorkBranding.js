import React, { useState, useEffect, useReducer, useRef } from 'react'


import {
  Flex, 
  Box
} from '@chakra-ui/react';

import fbadss from '../images/ourwork/10.jpg';
import socmedmarketing from '../images/ourwork/flyer.jpg';
import webdev from '../images/ourwork/webdev.jpg'

import ViewMore from '../components/ViewMoreButton';

import { gsap } from 'gsap';

import '../styles/slider.css';



export default function OurWorkBranding() {
  
  useEffect(() => {

    let vgdtl = gsap.timeline({ scrollTrigger: {
      trigger: ".accompvgd",
      start: "top center"
    }})

    vgdtl.fromTo(".accompvgd", {
      y: -300,
      opacity: 0
    }, { duration: 0.25, y: 0, opacity: 1})


  }, [])

  
  return (
    <Flex
      className="accompvgd"
      w="100%"
    
      flexDirection="column"
      justifyContent="center"
    >
      <Box 
        px="10%"
        pt="105px"
      >
        <Box
          className="vgd"
        >
         
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
        >
          <Box>
            <h3>
             OUR WORK
            </h3>
          </Box>
        </Flex>
        <Box
          pt="26px"
          w={[
            "100%",
            "100%",
            "100%",
            "50%",
            "50%"
          ]}
        >
          <p
            className="subwhatwedo"
          >
            At Visual Group Digital, we specialise in helping 
            businesses introduce their brand,
            connect with their target audience, and develop an effective marketing 
            strategy. 
          </p>
        </Box>
      </Box>
      <Box
        pt="55px"
        w="100%"
        maxWidth="1480px"
        overflowX="hidden"
        px="5%"
        alignSelf="center"
      >
        <Flex
          justifyContent="center"
          w="100%"
          
          flexWrap="wrap"
        >
          <Box
            className="sliderBox"
            >
            <h3>
              Digital Branding
            </h3>
            <Box>
              <a
                href="/digital_branding"
              >
                <img src={fbadss} alt="accompgoogle" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box>
          <Box
            className="sliderBox"
          >
            <h3>
              Graphic Design
            </h3>
            <Box>
              <a
                href="/graphic_design"
              >
                <img src={socmedmarketing} alt="socmend" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box>
          <Box
            className="sliderBox"
          >
            <h3>
              Web Development
            </h3>
            <Box>
              <a
                href="/web_development"
              >
                <img src={webdev} alt="seoaccomplishment" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box> 
        </Flex>
      </Box>
      <Flex
        w="100%"
        justifyContent="center"
        my="50px"
      >
        <ViewMore link="/our_portfolio" />
      </Flex>
    </Flex>
  )
}

