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
import rect from '../images/rect.svg';

import spag from '../images/spag.svg';
import triangol from '../images/triangol.svg';
import orangespag from '../images/orangespag.svg';
import fatTriangle from '../images/fatTriangle.svg';

import aboutus from '../images/aboutus.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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


  return (
    <Box
      className="main"
      overflowX="hidden"
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
            className="indexsub"
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
        className="vgd2"
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
          alignSelf="flex-start"
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
          <LearnMoreButton link="/about" />
        </Flex>
        <Box
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
      <Flex
        w="100%"
        alignItems="center"
        h="500px"
        flexWrap="wrap"
        mt="100px"
        
      >
        <Box
          w={[
            "100%",
            "100%",
            "50%",
            "400px"
          ]}
          h="500px"
          mx={[
            "0px",
            "200px"
          ]}
          className="pattern-dots-lg"
        >
          <Text
              className="requesth1"
              fontSize="9xl"
              style={{
                transform: "translate(50%, 50%)"
              }}
            >
              START NOW!
            
            </Text>
            {/* <Text>
              Not sure where to start? that's ok, we offer a free 30 minute consultation call to everyone! 
              we can help decide where you need to start and which of our services would benefit you the most.
            </Text> */}
        </Box>
        <Box
          p="20px"
        >
           <Text
              className="requesth2"
              fontSize="4xl"
            >
              
              Request a callback <br/>
              today!
            </Text>
            <button
              className="bizbut indexBizbut"
            >
              BUSINESS ENQUIRY
            </button>
        </Box>
        {/* {/* <Box>
          <img src={rect} alt="svg" className="circle_el" />
        </Box> */}
      </Flex>
      <Footer />
    </Box>
  )
}
