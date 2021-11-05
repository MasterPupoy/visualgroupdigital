import React, { useEffect } from 'react';
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

import '../styles/reusablehero.css';

gsap.registerPlugin(ScrollTrigger);

export default function ReusableHero({ image, header, subheader, paragraph, 
  imageClass = "reusableimageholder", separated = true }) {
  
    useEffect(() => {
      let tl = gsap.timeline({scrollTrigger: {
        trigger: ".hero-section",
        scrub: 1,
        start: "60% center",
      }})

      tl.to(".reusableheader", {
        y: -150,
        zIndex: 0,
        duration: 1,
        ease: "ease"
      })
      .to(".reusablepara", {
        y: -150,
        duration: 1,
        ease: "ease"
      }, "<")
      .to(".shape05", {
        y: -100,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".reshape6", {
        y: -100,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".reshape7", {
        y: -100,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".reshape3", {
        y: -150,
        duration: 1,
        ease: "ease"
      }, "<")
       .to(".reshape4", {
        y: -50,
        duration: 1,
        ease: "ease"
      }, "<")
      .to(".reshape8", {
        y: -40,
        duration: 1,
        ease: "ease"
      }, "<")
      .to("#reusableimageholder", {
      y: -90,
      duration: 1,
      ease: "ease"
      }, "<")
      .to(".reshape1", {
      y: -50,
      duration: 1,
      ease: "ease"
      }, "<")
      .to(".reshape2", {
      y: -70,
      duration: 1,
      ease: "ease"
      }, "<")
      .to("#reusablebizbut", {
      y: -200,
      duration: 1,
      ease: "ease"
      }, "<")

      return () => {
        tl.kill(true);
      }
    }, [])

  return (
    <>
    <Flex
      mt={[
        "25%",
        "25%",
        "60px",
        "40px",
        "40px"
      ]}
      className="hero-section reusablehero"
      overflowX="hidden"
      overflowY="hidden"
      flexWrap="wrap"
      justifyContent="space-between"
      height={[
        "700px",
        "700px",
        "90vh",
        "90vh",
        "100vh"
      ]}
      maxHeight="900px"
      w="100%"
    >
      <Box
        pt={[
          "40%",
          "20%",
          "20%",
          "120px",
          "130px"
        ]}
        width={[
          "100%", // 0-30em
          "100%", // 30em-48em
          "100%", // 48em-62em
          "50%", // 62em+
          "50%"
        ]}
        px="50px"
      >
        <Text
          className="reusableheader"
          as="h3"
          fontSize={["37px", "37px", "37px", "50px"]}
          lineHeight={["40px", "40px", "40px", "50px", "62px"]}
        >
          {header} {(separated) ? <br /> : null }
          <span>{subheader}</span>
        </Text>
        <Text
          as="p"
          fontSize={["15px", "15px", "18px", "20px", "20px"]}
          className="reusablepara"
          pt="10px"
        >
          {paragraph}
        </Text>
        <Box
          pt="90px"
          w={[
            "100%",
            "355px",
            "355px",
            "355px",
            "355px"
          ]}
        >
          <Bizbut id="reusablebizbut" />
        </Box>
        <Box
          display={[
            "block",
            "block",
            "block",
            "none",
            "none"
          ]}
        >
          <img src={shape3} alt="svg" className="reshape3" />
          <img src={shape4} alt="svg" className="reshape4" />
          <img src={shape5} alt="svg" className="shape05" />
          <img src={shape6} alt="svg" className="reshape6" />
          <img src={shape8} alt="svg" className="reshape8" />
        </Box>
      </Box>
      <Box
        className="shapeParent"
        width={[
          "0%", // 0-30em
          "0%", // 30em-48em
          "0%", // 48em-62em
          "50%",
          "50%" // 62em+
        ]}
        mt={[
          "0px",
          "0px",
          "0px",
          "52px",
          "20px",
          "20px"
        ]}
        height={[
          "0px",
          "0px",
          "0px",
          "273px",
          "263px",
          "273px"
        ]}
        px="50px"
      >
        <img src={shape3} alt="svg" className="reshape3" />
        <img src={shape4} alt="svg" className="reshape4" />
        <img src={shape5} alt="svg" className="shape05" />
        <img src={shape6} alt="svg" className="reshape6" />
        <img src={shape7} alt="svg" className="reshape7" />
        <img src={shape8} alt="svg" className="reshape8" />
        <img src={image} alt="someimha" className={imageClass} id="reusableimageholder" />
      </Box>
      <Box
       width={[
          "0%", // 0-30em
          "0%", // 30em-48em
          "0%", // 48em-62em
          "100%",
          "100%",
          "100%" // 62em+
      ]}
      >
          <img src={shape} alt="svg" className="reshape1" />
          <img src={shape2} alt="svg" className="reshape2" />
      </Box>
    </Flex>
    </>
  )
}
