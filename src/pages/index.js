import React from "react";
import {
  Flex,
  Box,
} from "@chakra-ui/react";

import SEO from "../components/Seo";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Sider from "../components/Sider";
import SiderCircles from "../components/Illustrations/SiderCircles";
import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import Process from "../components/Process";

import shape from '../images/Shape_01.svg';
import shape2 from '../images/Shape_02.svg';
import shape3 from '../images/Vector-circle.svg';
import shape4 from '../images/Vector-verysmall.svg';
import shape5 from '../images/small_circle.svg';
import shape6 from '../images/Polygon.svg';
import shape7 from '../images/Ellipse1.svg';
import shape8 from '../images/back.svg';
import line1 from '../images/line1.svg';

import '../styles/index.css';


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
      <Flex
        pt="5%"
      >
        <Box>
          <SiderCircles />
        </Box>
        <Box
          pl="10%"
        >
          <Box
            className="vgd"
          >
            VISUAL GROUP DIGITAL
          </Box>
          <Flex
            flexDirection="row"
            flexWrap="noWrap"
            w="100%"
            className="whatwedo"
          >
            <Box>
              <h3>
                What We Do
              </h3>
            </Box>
            <Box
              alignSelf="center"
              pl="20px"
            >
              <img src={line1} alt="line.svg" />
            </Box>
          </Flex>
          <Box
            pt="26px"
          >
            <p
              className="subwhatwedo"
            >
              At Visual Group Digital, we help businesses 
              flourish by following a comprehensive 3-step 
              process of <br/>
              consulting, development, and marketing.
            </p>
          </Box>
          <Box>
            <Cards />
          </Box>
        </Box>
      </Flex>
      <Box>
        <Box
          className="vgd"
          pt="190px"
          pl="17%"
        >
          BUT HOW DO WE DO IT?
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          pl="17%"
          className="whatwedo"
        >
          <Box>
            <h3>
              OUR 3 STEP PROCESS
            </h3>
          </Box>
          <Box
            alignSelf="center"
            pl="20px"
          >
            <img src={line1} alt="line.svg" />
          </Box>
        </Flex>
        <Process />
      </Box>
    </Box>
  )
}
