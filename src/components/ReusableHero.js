import React from 'react';
import {
  Flex, 
  Box
} from '@chakra-ui/react';

import Bizbut from '../components/Bizbut';
import Sider from '../components/Sider';

import shape from '../images/Shape_01.svg';
import shape2 from '../images/Shape_02.svg';
import shape3 from '../images/Vector-circle.svg';
import shape4 from '../images/Vector-verysmall.svg';
import shape5 from '../images/small_circle.svg';
import shape6 from '../images/Polygon.svg';
import shape7 from '../images/Ellipse1.svg';
import shape8 from '../images/back.svg';
import line1 from '../images/line1.svg';
import circle_el from '../images/circle_el.svg';

import '../styles/reusablehero.css';


export default function ReusableHero({ image, header, subheader, paragraph }) {
  return (
    <Flex
      className="hero-section reusablehero"
    >
      <Sider />
      <Box
        pt="208px"
        pl="50px"
      >
        <h2
          className="reusableheader"
        >
          {header} <br />
          <span>{subheader}</span>
        </h2>
        <p>
          {paragraph}
        </p>
        <Bizbut />
      </Box>
      <Box> 
      </Box>
      <Box
        className="shapeParent"
      >
        <img src={shape} alt="svg" className="shape01" />
        <img src={shape2} alt="svg" className="shape02" />
        <img src={shape3} alt="svg" className="shape03" />
        <img src={shape4} alt="svg" className="shape04" />
        <img src={shape5} alt="svg" className="shape05" />
        <img src={shape6} alt="svg" className="shape06" />
        <img src={shape7} alt="svg" className="shape07" />
        <img src={shape8} alt="svg" className="shape08" />
        <img src={image} alt="image" className="reusableimageholder" />
      </Box>
    </Flex>
  )
}
