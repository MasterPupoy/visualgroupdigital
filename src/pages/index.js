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
import OfferCard from "../components/OfferCard";
import AccomplishmentSlider from "../components/AccomplishmentSlider";
import LearnMoreButton from '../components/LearnMoreButton';

import shape from '../images/Shape_01.svg';
import shape2 from '../images/Shape_02.svg';
import shape3 from '../images/Vector-circle.svg';
import shape4 from '../images/Vector-verysmall.svg';
import shape5 from '../images/small_circle.svg';
import shape6 from '../images/Polygon.svg';
import shape7 from '../images/Ellipse1.svg';
import shape8 from '../images/back.svg';
import line1 from '../images/line1.svg';

import spag from '../images/spag.svg';
import triangol from '../images/triangol.svg';
import orangespag from '../images/orangespag.svg';
import fatTriangle from '../images/fatTriangle.svg';

import aboutus from '../images/aboutus.png';

import '../styles/index.css';
import ClientTestimonials from "../components/ClientTestimonials";


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
        <Nav loc={location} page='/' />
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
      <Box 
        pl="10%"
        pt="105px"
      >
        <Box
          className="vgd"
        >
          OUR SERVICES
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
        >
          <Box>
            <h3>
              What We Offer
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
            Businesses Of All Sizes Have A Social Presence, 
            But How Do You Have Enough Time To Do It Effectively?
          </p>
        </Box>
      </Box>
      <OfferCard />    
      <AccomplishmentSlider />
      <ClientTestimonials />
      <Flex
        mt="100px"
        w="100%"
        justifyContent="center"
        alignItems="center"
        px="148px"
      >
        <Box
          w="50%"
        >
          <h3
            className="aboutusindex"
          >
            About Us
          </h3>
          <p>
            It all started when the founders, Ricky and Kerryann, 
            self-branded and marketed their own businesses to 
            success. That lesson laid the foundation for the 
            creation of Visual Group, a marketing agency dedicated 
            to driving results for businesses around the world.
          </p>
          <p>
            From humble beginnings, Visual Group has grown into an 
            agency capable of web development, brand development, 
            full marketing strategies, and more. Throughout the 
            company’s growth, our team has maintained the same attention 
            to detail with each client we work with.
          </p>
          <LearnMoreButton />
        </Box>
        <Box>
          <img src={aboutus} alt="aboutus.png" />
        </Box>
        <Box>
          <img src={spag} alt="spag.svg" className="spag" />
          <img src={triangol} alt="triangol" className="triangol" />
          <img src={orangespag} alt="orangespag" className="orangespag" />
          <img src={shape5} alt="svg" className="circol" />
          <img src={fatTriangle} alt="svg" className="fatTriangle" />
        </Box>
      </Flex>
      <Flex
        mt="200px"
        h="371px"
        w="100%"
        bg="#fff"
      >
        <Box>

        </Box>
      </Flex>
    </Box>
  )
}
