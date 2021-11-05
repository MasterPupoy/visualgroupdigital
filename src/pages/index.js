import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Image
} from "@chakra-ui/react";

import SEO from "../components/Seo";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

import Slideshow from "../components/Slideshow";
import Cards from "../components/Cards";
import Process from "../components/Process";
import OfferCard from "../components/OfferCard";
import AccomplishmentSlider from "../components/AccomplishmentSlider";
import LearnMoreButton from '../components/LearnMoreButton';
import Footer from '../components/Footer';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from "../components/ReusableFooter";
import NewLogo from "../components/Newlogo";

import shape5 from '../images/small_circle.svg';
import line1 from '../images/line1.svg';

import spag from '../images/spag.svg';
import triangol from '../images/triangol.svg';
import orangespag from '../images/orangespag.svg';
import fatTriangle from '../images/fatTriangle.svg';

import aboutus from '../images/aboutus.png';
import indexpic from '../images/index.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/hero.css';
import '../styles/index.css';
import ClientTestimonials from "../components/ClientTestimonials";

gsap.registerPlugin(ScrollTrigger);

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


      let indextl = gsap.timeline({ scrollTrigger : {
        trigger: ".whatwedo",
      }})

      indextl.fromTo(".whatwedo", {
        opacity: 0,
        x: -100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".indexsub", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1}, ">")
      .fromTo(".icard1", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".icard2", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".icard3", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []); 

  useEffect(() => {
    
    let indextl2 = gsap.timeline({ scrollTrigger : {
      trigger: ".vgd",
      start: "top center",
    }})

    indextl2.fromTo(".vgd",{ 
      opacity: 0,
      x: -100
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".whatwedo2",{ 
      opacity: 0,
      x: -100
    }, { duration: 0.25, x: 0, opacity: 1})

  })

 
  useEffect(() => {

    let whatweoffertl = gsap.timeline({ scrollTrigger: {
      trigger: ".whatweoffer",
      start: "20% center"
    }})

    whatweoffertl.fromTo(".whatweoffer", {
      opacity: 0,
      x: -100
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".subwhatweoffer", {
      opacity: 0,
      x: -100
    }, { duration: 0.25, x: 0, opacity: 1})

  })

  useEffect(() => {
    
     let abouttl = gsap.timeline({scrollTrigger: {
        trigger: ".indexaboutussection",
        scrub: 1,
        start: "top top",
      }})

      abouttl.to(".aboutusindex", {
        y: -20,
        duration: 0.25,
        ease: "ease"
      })
      .to(".spag", {
        y: -10,
        duration: 0.25,
        ease: "ease"
      }, "<")
       .to(".triangol", {
        y: -15,
        duration: 0.25,
        ease: "ease"
      }, "<")
       .to(".orangespag", {
        y: -10,
        duration: 0.25,
        ease: "ease"
      }, "<")
       .to(".circol", {
        y: -17,
        duration: 0.25,
        ease: "ease"
      }, "<")
       .to(".fatTriangle", {
        y: -8,
        duration: 0.25,
        ease: "ease"
      }, "<")
      .to(".aboutuspic", {
      y: -9,
      duration: 0.25,
      ease: "ease"
      }, "<")
    
  })

  const headerText = "Marketing & Development Agency"
  const paragraph = "We Help Businesses Improve Their Marketing & Brand To Maximise Client Potential."


  return (
    <Box
      className="main"
      overflowX="hidden"
    >
      <SEO />
      {
        (width > 1300) 
        ? <Nav loc={location} page='/' />
        : <MobileNav page="/" />
      }
      <ReusableHero 
        header={headerText}
        paragraph={paragraph}
        image={indexpic}
        imageClass="digitalmarkbanner"
      />
      <Flex
        // display={[
        //   "none",
        //   "none",
        //   "block",
        //   "block",
        //   "block"
        // ]}
        flexDirection="column"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          height={[
            "250px",
            "250px",
            "250px",
            "100px",
            "100px"
          ]}
          w="100%"
          className="heroheadhead"
        >
          <Flex
            className="p1"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              fontSize="4xl"
              className="herohead"
            >
              Our Clients
            </Text>
            <Text
              fontSize="md"
              className="heropara"
            >
              We’ve worked with more than 100 companies 
              since 2015 Check out some of the fantastic <br />
              clients we have brought to the UK and International 
              Markets.
            </Text>
          </Flex>
        </Flex>
        <NewLogo />
        {/* <Slideshow /> */}
      </Flex>
   
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
          display={[
            "none",
            "none",
            "block",
            "block",
            "block"
          ]}
        >
          <svg width="115" height="327" viewBox="0 0 115 327" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.738281" y="0.452148" width="113.367" height="325.93" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0" transform="scale(0.0104167 0.00362319)"/>
            </pattern>
            <image id="image0" width="96" height="276" xlinkHref="data:image/png;base64,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"/>
            </defs>
          </svg>
        </Box>
        <Box
          px="5%"
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
            <Box
              w={[
                "47%",
                "36%",
                "36%",
                "38%",
                "21%"
              ]}
            >
              <Text
                fontSize={[
                  "38px",
                  "38px",
                  "45px",
                  "45px",
                  "45px"
                ]}
              >
                What We Do
              </Text>
            </Box>
            <Box
              alignSelf="center"
              pl="20px"
              w={[
                "20%",
                "20%",
                "50%",
                "50%",
                "50%"
              ]}
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
              "50%"
            ]}
            className="indexsub"
          >
            <Text
              fontSize="sm"
              className="subwhatwedo"
            >
              At Visual Group Digital, we help businesses 
              flourish by following a comprehensive 3-step 
              process of
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
        className="vgd2"
        px="10%"
      >
        <Box
          className="vgd"
          pt="100px"
        >
          BUT HOW DO WE DO IT?
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
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
        className="supervgd"
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
          className="whatwedo whatweoffer"
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
          className="subwhatweoffer"
        >
          <p
            className="subwhatwedo"
          >
            Businesses Of All Sizes Have A Social Presence, 
            But How Do You Have Enough Time To Do It Effectively?
          </p>
        </Box>
      </Box>
      <Flex
        px="10%"
        w="100%"
        justifyContent="center"
      >
        <OfferCard />    
      </Flex>
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
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        className="indexaboutussection"
      >
        <Flex
          w={[
            "100%",
            "100%",
            "50%",
            "50%"
          ]}
          flexDirection="column"
        >
          <Text
            className="aboutusindex"
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
            <br/>
            <br/>
            From humble beginnings, Visual Group has grown into an 
            agency capable of web development, brand development, 
            full marketing strategies, and more. Throughout the 
            company’s growth, our team has maintained the same attention 
            to detail with each client we work with.
          </Text>
          <Flex
            justifyContent={[
              "center",
              "center",
              "center",
              "flex-start",
              "flex-start",
              "flex-start"
            ]}
            w="100%"
          >
            <LearnMoreButton link="/about" />
          </Flex>
        </Flex>
        <Box
          mt={[
            "200px",
            "100px",
            "0px",
            "0px",
            "0px"
          ]}
          w={[
            "100%",
            "100%",
            "50%",
            "50%"
          ]}
          h={[
            "500px",
            "500px",
            "500px",
            "500px"
          ]}
        >
          <img src={aboutus} alt="aboutus.png" className="aboutuspic" />
          <img src={spag} alt="spag.svg" className="spag" />
          <img src={triangol} alt="triangol" className="triangol" />
          <img src={orangespag} alt="orangespag" className="orangespag" />
          <img src={shape5} alt="svg" className="circol" />
          <img src={fatTriangle} alt="svg" className="fatTriangle" />
        </Box>
      </Flex>
      <ReusableFooter />
      <Footer />
    </Box>
  )
}
