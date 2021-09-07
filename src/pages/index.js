import React from "react";
import {
  Flex,
  Box,
} from "@chakra-ui/react";
import SEO from "../components/seo";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Sider from "../components/Sider";
import shape from '../images/Shape_01.svg';
import shape2 from '../images/Shape_02.svg';
import shape3 from '../images/Vector-circle.svg';
import shape4 from '../images/Vector-verysmall.svg';
import shape5 from '../images/small_circle.svg';
import shape6 from '../images/Polygon.svg';
import shape7 from '../images/Ellipse1.svg';
import shape8 from '../images/back.svg';
import '../styles/index.css';

export default function index() {
  return (
    <Box
      className="main"
    >
      <SEO />
      <Flex
        w="100%"
      >
        <Nav />
      </Flex>
      <Flex
        w="100%"
      >
        <Sider />
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          w="100%"
        >
          <Hero />
          <div
            className="shapeParent"
          >
            <img src={shape} className="shape01" />
            <img src={shape2} className="shape02" />
            <img src={shape3} className="shape03" />
            <img src={shape4} className="shape04" />
            <img src={shape5} className="shape05" />
            <img src={shape6} className="shape06" />
            <img src={shape7} className="shape07" />
            <img src={shape8} className="shape08" />
        </div>
        </Flex>
      </Flex>
    </Box>
  )
}
