import React, { useState, useEffect, useReducer, useRef } from 'react'


import {
  Flex, 
  Box
} from '@chakra-ui/react';

import seo8 from '../images/ourwork/seo8.jpg';
import googleads from '../images/ourwork/googleads.jpg';
import fbadss from '../images/ourwork/fbadss.jpg';
import socmedmarketing from '../images/ourwork/social_media_2.jpg';
import socmedad from '../images/ourwork/insta.jpg';

import ViewMore from '../components/ViewMoreButton';

import { gsap } from 'gsap';

import '../styles/slider.css';



export default function AccomplishmentSlider() {
  
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
             OUR WORKS 
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
              Social Media Marketing
            </h3>
            <Box>
              <a
                href="/our_portfolio"
              >
                <img src={socmedmarketing} alt="accompgoogle" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box>
          <Box
            className="sliderBox"
          >
            <h3>
              Facebook Advertising
            </h3>
            <Box>
              <a
                href="/our_portfolio"
              >
                <img src={fbadss} alt="socmend" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box>
          <Box
            className="sliderBox"
          >
            <h3>
              Google Advertising
            </h3>
            <Box>
              <a
                href="/our_portfolio"
              >
                <img src={googleads} alt="seoaccomplishment" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box>
          <Box
            className="sliderBox"
          >
            <h3>
              Social Media Advertising
            </h3>
            <Box>
              <a
                href="/our_portfolio"
              >
                <img src={socmedad} alt="seoaccomplishment" style={{ cursor : "pointer", borderRadius: "5px"}} />
              </a>
            </Box>
          </Box>
          <Box
            className="sliderBox"
          >
            <h3>
              Search Engine Optimisation
            </h3>
            <Box>
              <a
                href="/our_portfolio"
              >
                <img src={seo8} alt="seoaccomplishment" style={{ cursor : "pointer", borderRadius: "5px"}} />
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
