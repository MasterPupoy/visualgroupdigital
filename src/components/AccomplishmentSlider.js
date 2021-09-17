import React, { useState, useEffect, useReducer, useRef } from 'react'

import {
  Flex, 
  Box
} from '@chakra-ui/react';

import left from '../images/left.svg';
import right from '../images/right.svg';

import { gsap } from 'gsap';

import '../styles/slider.css';

function FirstSlider({ dir }){
  const slides = useRef();

  useEffect(() => {
    let mounted = true;

    if(mounted) {
     if(dir === "right"){
      gsap.fromTo(slides.current, { opacity : 0 }, { opacity : 1, duration : 1.5 });
  
     }

     if(dir === "left"){
      gsap.fromTo(slides.current, { opacity : 0 }, { opacity : 1, duration : 1.5 });

     }
    }

    return () => {
      mounted = false;
    }
  }, [])


  return (
    <Flex
      justifyContent="center"
      w="100%"
      ref={slides}
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
  const slides = useRef();

  
  useEffect(() => {
    let mounted = true;

    if(mounted) {
     if(dir === "right"){
      gsap.fromTo(slides.current, { opacity : 0 }, { opacity : 1, duration : 1.5 });
  
     }

     if(dir === "left"){
      gsap.fromTo(slides.current, { opacity : 0 }, { opacity : 1, duration : 1.5 });

     }
    }

    return () => {
      mounted = false;
    }
  }, [])

  return (
    <Flex
      justifyContent="center"
      w="100%"
      ref={slides}
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
  const slides = useRef();

  
  useEffect(() => {
    let mounted = true;

    if(mounted) {
     if(dir === "right"){
      gsap.fromTo(slides.current, { opacity : 0 }, { opacity : 1, duration : 1.5 });
  
     }

     if(dir === "left"){
      gsap.fromTo(slides.current, { opacity : 0 }, { opacity : 1, duration : 1.5 });

     }
    }

    return () => {
      mounted = false;
    }
  }, [])

  return (
    <Flex
      justifyContent="center"
      w="100%"
      ref={slides}
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

const initState = { 
  slider : 0,
  dir : 'right'
}

function reducer(state, action) {
  switch(action.dir){
    case "right" : 

      if(state.slider === 2){
        return {
          slider : 0,
          dir: 'right'
        }
      }

      return {
        slider : state.slider + 1,
        dir: 'right'
      }
    case "left" : 

      if(state.slider === 0){
        return {
          slider : 2,
          dir : 'left'
        }
      }
      
      return {
        slider : state.slider - 1,
        dir : 'left'
      }
    default: 
      return {
        slider : 0,
        dir : 'left'
      }
  }

}

export default function AccomplishmentSlider() {
  const [state, dispatch] = useReducer(reducer, initState)
  
  console.log(state)

  const ServiceSlider = () => {

    switch(state.slider){
      case (0) : 
        return <FirstSlider dir={state.dir} />
      break;
      case (1) : 
        return <SecondSlider dir={state.dir} />
      break;
      case (2) : 
        return <ThirdSlider dir={state.dir} />
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
        <Box
          textAlign="right"
          pr="205px"
        >
          <button
            className="leftArrow"
            onClick={() => dispatch({ dir: "left"})}
          >
            <img src={left} alt="left.svg" />
          </button>
          <button
            className="rightArrow"
            onClick={() => dispatch({ dir: "right"})}
          >
            <img src={right} alt="right.svg" />
          </button>
        </Box>
      </Box>
        <Box
          pt="55px"
          h="500px"
          w="100%"
          overflowX="hidden"
          overflowY="hidden"
        >
          <ServiceSlider />
        </Box>
    </Box>
  )
}
