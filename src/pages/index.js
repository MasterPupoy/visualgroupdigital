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
        </div> 
        </Flex>
      </Flex>
    </Box>
  )
}
