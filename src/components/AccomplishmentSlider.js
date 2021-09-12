import React, { useEffect, useState } from 'react'

import {
  Flex, 
  Box
} from '@chakra-ui/react';

import { gsap } from 'gsap';

import '../styles/slider.css';

function FirstSlider({ dir }){
  useEffect(() => {
    let mounted = true;

    if(mounted) {
      
    }

    return () => {
      mounted = false;
    }
  })

  return (
    <Flex
      justifyContent="space-between"
    >
      <Box
        className="sliderBox"
      >
        <h3>
          Digital marketing
        </h3>
      </Box>
      <Box
        className="sliderBox"
      >
        <h3>
          e-commerce
        </h3>
      </Box>
      <Box
        className="sliderBox"
      >
        <h3>
          Facebook advertising
        </h3>
      </Box>
    </Flex>
  )
}

function SecondSlider({ dir }){
  useEffect(() => {
    let mounted = true;

    if(mounted) {
      
    }

    return () => {
      mounted = false;
    }
  })

  return (
    <Flex
      justifyContent="space-between"
    >
      <Box
        className="sliderBox"
      >
        <h3>
          Google advertising
        </h3>
      </Box>
      <Box
        className="sliderBox"
      >
        <h3>
          Social Media Growth
        </h3>
      </Box>
      <Box
        className="sliderBox"
      >
        <h3>
          Search Engine Optimization
        </h3>
      </Box>
    </Flex>
  )
}

function ThirdSlider({ dir }){
  useEffect(() => {
    let mounted = true;

    if(mounted) {
      
    }

    return () => {
      mounted = false;
    }
  })

  return (
    <Flex
      justifyContent="space-between"
    >
      <Box
        className="sliderBox"
      >
        <h3>
          Graphic Design
        </h3>
      </Box>
      <Box
        className="sliderBox"
      >
        <h3>
          Web Development
        </h3>
      </Box>
      <Box
        className="sliderBox"
      >
        <h3>
          Digital Branding
        </h3>
      </Box>
    </Flex>
  )
}

export default function AccomplishmentSlider() {
  const [dir, setDir] = useState();
  const [slider, setSlider] = useState(0)

  const ServiceSlider = () => {

    switch(slider){
      case (0) : 
        return <FirstSlider />
      break;
      case (1) : 
        return <SecondSlider />
      break;
      case (3) : 
        return <ThirdSlider />
      break;
    }
  }
  
  return (
    <Box>
      <Box 
        pl="10%"
        pt="105px"
      >
        <Box
          className="vgd"
        >
          OUR WORKS
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
        >
          <Box>
            <h3>
              What We Accomplished
            </h3>
          </Box>
        </Flex>
        <Box
          pt="26px"
        >
          <p
            className="subwhatwedo"
          >
            At Visual Group Digital, we specialise in helping 
            businesses introduce their brand, <br />
            connect with their target audience, and develop an effective marketing 
            strategy. 
          </p>
        </Box>
        <Box>
          <button>
            &lt;
          </button>
          <button>
            &gt;
          </button>
        </Box>
        <Box
          pt="55px"
        >
          <ServiceSlider />
        </Box>
      </Box>
    </Box>
  )
}
