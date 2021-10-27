import React, { useEffect } from 'react'
import {
  Flex, 
  Box,
  Text
} from '@chakra-ui/react';
import Bizbut from '../components/Bizbut';

import shape from '../images/Shape_01.svg';
import shape2 from '../images/Shape_02.svg';
import shape3 from '../images/Vector-circle.svg';
import shape4 from '../images/Vector-verysmall.svg';
import shape5 from '../images/small_circle.svg';
import shape6 from '../images/Polygon.svg';
import shape7 from '../images/Ellipse1.svg';
import shape8 from '../images/back.svg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import indexpic from '../images/index.png';
import '../styles/hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  useEffect(() => {

    let mounted = true;

    if(mounted) {
      
      let tl = gsap.timeline({scrollTrigger: {
        trigger: ".hero-section",
        scrub: 1,
        start: "top top",
      }})

      tl.to(".marketing", {
        y: -200,
        duration: 1,
        ease: "ease"
      })
      .to(".submarketing", {
        y: -200,
        duration: 1,
        ease: "ease"
      }, "<")
      .to(".shape05", {
        y: -150,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".shape06", {
        y: -150,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".shape07", {
        y: -100,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".shape03", {
        y: -170,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".shape04", {
        y: -80,
        duration: 1,
        ease: "ease"
      }, "<")
      .to(".shape08", {
        y: -70,
        duration: 1,
        ease: "ease"
      }, "<")
      .to(".indexbanner", {
      y: -90,
      duration: 1,
      ease: "ease"
      }, "<")
      .to(".shape01", {
      y: -50,
      duration: 1,
      ease: "ease"
      }, "<")
      .to(".shape02", {
      y: -70,
      duration: 1,
      ease: "ease"
      }, "<")
      .to("#herobizbut", {
      y: -200,
      duration: 1,
      ease: "ease"
      }, "<")
      
      

    }

    return () => {
      mounted = false
    }

  })

  return (
    <Flex
      flexDirection="column"
      overflowX="hidden"
    >
      <Flex
        className="hero-section"
        flexDirection="row"
        flexWrap="wrap"
        w="100%"
        height={[
            "600px",
            "500px",
            "500px",
            "700px",
            "1000px",
            "1000px"
          ]}
      >
        <Flex
          overflowX="hidden"
          className="banner-section"
          height={[
            "600px",
            "600px",
            "600px",
            "600px"
          ]}
          width={[
            "100%", // 0-30em
            "100%", // 30em-48em
            "50%", // 48em-62em
            "50%", // 62em+
          ]}
          pl="30px"
        >
          <Text
            className="marketing"
            fontSize="5xl"
          >
            Marketing &amp; Development
            Agency
          </Text>
          <Text
            className="submarketing" 
            fontSize="2xl"
          >
            We Help Businesses Improve Their Marketing &amp; <br/>
            Brand To Maximise Client Potential.
          </Text>
          <Box>
            <Bizbut id="herobizbut" />
          </Box>
        </Flex>
        <Box
          width={[
            "0%", // 0-30em
            "100%", // 30em-48em
            "45%", // 48em-62em
            "50%", // 62em+
          ]}
          height={[
            "0px",
            "200px",
            "170px",
            "270px",
            "300px"
          ]}
        >
          <img src={shape5} alt="svg" className="shape05" />
          <img src={shape6} alt="svg" className="shape06" />
          <img src={indexpic} alt="visualgroupdigital" className="indexbanner" />
          <img src={shape7} alt="svg" className="shape07" />
          <img src={shape3} alt="svg" className="shape03" />
          <img src={shape4} alt="svg" className="shape04" />
          <img src={shape8} alt="svg" className="shape08" />
        </Box>
        <Box
          height={[
            "0px",
            "0px",
            "0px",
            "0px",
            "300px"
          ]}
          w="100%"
        >
          <img src={shape} alt="svg" className="shape01" />
          <img src={shape2} alt="svg" className="shape02" />
        </Box>
      </Flex>
    </Flex>
  )
}
