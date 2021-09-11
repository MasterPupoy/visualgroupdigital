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
import Slideshow from "../components/Slideshow";

export default function index({ location }) {

  return (
    <Box
      className="main"
    >
      <SEO />
      <div
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
      </div>
      <Flex
        w="100%"
      >
        <Nav loc={location} />
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
        </Flex>
      </Flex>
      <Box
        w="100%"
      >
        <Slideshow />
      </Box>
      <Box>

      </Box>
    </Box>
  )
}
