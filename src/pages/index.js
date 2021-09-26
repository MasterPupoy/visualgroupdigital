import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text
} from "@chakra-ui/react";

import SEO from "../components/Seo";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import Hero from "../components/Hero";
import Sider from "../components/Sider";
import SiderCircles from "../components/Illustrations/SiderCircles";
import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import Process from "../components/Process";
import OfferCard from "../components/OfferCard";
import AccomplishmentSlider from "../components/AccomplishmentSlider";
import LearnMoreButton from '../components/LearnMoreButton';
import Footer from '../components/Footer';

import shape5 from '../images/small_circle.svg';
import line1 from '../images/line1.svg';
import circle_el from '../images/circle_el.svg';

import spag from '../images/spag.svg';
import triangol from '../images/triangol.svg';
import orangespag from '../images/orangespag.svg';
import fatTriangle from '../images/fatTriangle.svg';

import aboutus from '../images/aboutus.png';

import '../styles/index.css';
import ClientTestimonials from "../components/ClientTestimonials";

export default function Index({ location }) {

 const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

 useEffect(() => {

    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []); 

  return (
    <Box
      className="main"
    >
      <SEO />
      {
        (width > 1028) 
        ? <Nav loc={location} page='/' />
        : <MobileNav />
      }
      <Flex
        w="100%"
      >
        <Sider />
        <Hero />
      </Flex>
      <Slideshow />
   
      <Flex
        pt="5%"
      >
        <Box
          width={[
            "0%", // 0-30em
            "0%", // 30em-48em
            "45%", // 48em-62em
            "5%", // 62em+
          ]}
        >
          <SiderCircles />
        </Box>
        <Box
          pl="10%"
        >
          <Box
            className="vgd"
          >
            <Text
              fontSize="md"
            >
              VISUAL GROUP DIGITAL
            </Text>
          </Box>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            w="100%"
            className="whatwedo"
          >
            <Box>
              <Text
                fontSize="4xl"
              >
                What We Do
              </Text>
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
            w={[
              "100%",
              "50%",
              "50%",
              "100%"
            ]}
          >
            <Text
              fontSize="sm"
              className="subwhatwedo"
            >
              At Visual Group Digital, we help businesses 
              flourish by following a comprehensive 3-step 
              process of <br/>
              consulting, development, and marketing.
            </Text>
          </Box>
          <Box>
            <Cards />
          </Box>
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
      >
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
      </Flex>
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
        mx={[
          "10px",
          "10px",
          "20px",
          "100px"
        ]}
    
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        <Flex
          w={[
            "100%",
            "100%",
            "50%",
            "50%"
          ]}
          flexDirection="column"
          alignSelf="flex-start"
        >
          <Text
            className="aboutusindex"
            fontSize="2xl"
          >
            About Us
          </Text>
          <Text
            fontSize="md"
          >
            It all started when the founders, Ricky and Kerryann, 
            self-branded and marketed their own businesses to 
            success. That lesson laid the foundation for the 
            creation of Visual Group, a marketing agency dedicated 
            to driving results for businesses around the world.
          </Text>
          <Text
            fontSize="md"
          >
            From humble beginnings, Visual Group has grown into an 
            agency capable of web development, brand development, 
            full marketing strategies, and more. Throughout the 
            company’s growth, our team has maintained the same attention 
            to detail with each client we work with.
          </Text>
          <LearnMoreButton />
        </Flex>
        <Box
          w={[
            "100%",
            "100%",
            "50%",
            "50%"
          ]}
          h={[
            "300px",
            "400px",
            "500px",
            "500px"
          ]}
        >
          <img src={aboutus} alt="aboutus.png" />
          <img src={spag} alt="spag.svg" className="spag" />
          <img src={triangol} alt="triangol" className="triangol" />
          <img src={orangespag} alt="orangespag" className="orangespag" />
          <img src={shape5} alt="svg" className="circol" />
          <img src={fatTriangle} alt="svg" className="fatTriangle" />
          <img src={circle_el} alt="svg" className="circle_el" />
        </Box>
      </Flex>
      <Flex
        mt="100px"
        h="371px"
        w="100%"
        bg="#fff"
        p={[
          "20px",
          "40px",
          "256px",
          "256px"
        ]}
        h="500px"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap="wrap"
          w="100%"
          px={[
               "20px",
               "20px",
               "100px",
               "100px"
             ]}
        >
          <Box
            w={[
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
            
          >
            <h1
              className="requesth1"
            >
              REQUEST A FREE CALLBACK <br />
              TODAY
            </h1>
            <p>
              Not sure where to start? that's ok, we offer a free 30 minute consultation call to everyone! 
              we can help decide where you need to start and which of our services would benefit you the most.
            </p>
          </Box>
          <Box
            w={[
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
             px={[
               "20px",
               "20px",
               "100px",
               "100px"
             ]}
          >
            <h2
              className="requesth2"
            >
              Why Wait? <br/>
              Start Now
            </h2>
            <button
              className="bizbut indexBizbut"
            >
              BUSINESS ENQUIRY
            </button>
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  )
}
