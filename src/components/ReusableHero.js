import React from 'react';
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

import '../styles/reusablehero.css';


export default function ReusableHero({ image, header, subheader, paragraph, 
  imageClass = "reusableimageholder", separated = true }) {
  
  
    return (
    <>
    <Flex
      className="hero-section reusablehero"
      overflowX="hidden"
      overflowY="hidden"
      flexWrap="wrap"
      height={[
        "600px",
        "500px",
        "500px",
        "700px",
        "900px"
      ]}
      w="100%"
    >
      <Box
        pl="50px"
        pt={[
          "10px",
          "20px",
          "150px",
          "200px"
        ]}
        width={[
          "70%", // 0-30em
          "100%", // 30em-48em
          "50%", // 48em-62em
          "30%", // 62em+
          "40%"
        ]}
      >
        <Text
          className="reusableheader"
          fontSize="5xl"
        >
          {header} {(separated) ? <br /> : null }
          <span>{subheader}</span>
        </Text>
        <Text
          as="p"
          fontSize="2xl"
        >
          {paragraph}
        </Text>
        <Bizbut />
      </Box>
      <Box
        className="shapeParent"
        width={[
          "0px ", // 0-30em
          "0%", // 30em-48em
          "30%", // 48em-62em
          "50%",
          "50%" // 62em+
        ]}
        height={[
          "0px",
          "0px",
          "170px",
          "270px",
          "300px"
        ]}
      >
        <img src={shape3} alt="svg" className="reshape3" />
        <img src={shape4} alt="svg" className="reshape4" />
        <img src={shape5} alt="svg" className="shape05" />
        <img src={shape6} alt="svg" className="reshape6" />
        <img src={shape7} alt="svg" className="reshape7" />
        <img src={shape8} alt="svg" className="reshape8" />
        <img src={image} alt="someimha" className={imageClass} />
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
