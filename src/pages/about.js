import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import Footer from '../components/Footer';
import Values from '../components/Values';
import Process from '../components/Process';
import LearnMoreButton from '../components/LearnMoreButton';
import ReusableFooter from '../components/ReusableFooter';
import MobileNav from '../components/MobileNav';
import StaticLogo from '../components/StaticLogo';

import ceo from '../images/ceo.png';
import aboutus from '../images/pekture.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/about.css';

gsap.registerPlugin(ScrollTrigger);

export default function About({ location }) {

  const headerTxt = "ABOUT"
  const subheader = "VISUAL GROUP DIGITAL"
  const paragraph = "For +10 Years We’ve Been Working with Big Companies, Helping Them Re-Discover Their Essence and Leverage Their Business"
  const text = "We collaborate with ambitious Companies and people."

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

  useEffect(() => {
    
    let ceotl = gsap.timeline({ scrollTrigger : {
      trigger: ".hero-section",
      start: "bottom center",
    }})

    ceotl.fromTo(".founderfounder", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
    .fromTo(".founderpos", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
    .fromTo(".foundername", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
    .fromTo(".ceo", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
    .fromTo(".foundertxt1", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
    .fromTo(".foundertxt2", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
    .fromTo("#aboutusceolearnmore", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})

  })

  return (
    <Box className="main">
      <SEO />
      <Box>
        {
          (width > 1028) 
          ? <Nav loc={location} page='/about' />
          : <MobileNav />
        }
        <ReusableHero 
          header={headerTxt}
          subheader={subheader}
          paragraph={paragraph}
          image={aboutus}
        />
        <Flex
          pt="90px"
          pl="103px"
          pl={[
            "10px",
            "20px",
            "60px",
            "103px"
          ]}
          flexWrap="wrap"
          alignItems="center"
        >
          <Box
            className="founder"
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "30%", // 48em-62em
              "40%", // 62em+
            ]}
          >
            <Text
              as="h3"
              fontSize="5xl"
              className="founderfounder"
            >
              FOUNDER
            </Text>
            <Text
              as="h2"
              fontSize="5xl"
              className="foundername"
            >
              RICKY INGRAM
            </Text>
            <Text
              as="h3"
              fontSize="5xl"
              className="founderpos"
            >
              CEO of Visual Group Digital.
            </Text>
            <Text
              as="p"
              fontSize="xl"
              className="foundertxt1"
            >
              It all started when the founders, Ricky and Kerryann, 
              self-branded and marketed their own businesses to success. 
              That lesson laid the foundation for the creation of Visual 
              Group Digital, a marketing agency dedicated to driving results 
              for businesses around the world.
            </Text>
            <Text
              as="p"
              fontSize="xl"
              className="foundertxt2"
            >
              Visual Group Digital leading marketing, branding and web development 
              agency. Who strategically plan the design of websites that empower 
              your business.Throughout the company’s growth, our team has maintained 
              the same attention to detail with each client we work with. Every member 
              of our growing team understands that our differentiating factor among 
              other marketing agencies is the one-of-a-kind thought that we put into 
              each new account.
            </Text>
            <LearnMoreButton 
              id="aboutusceolearnmore" 
              link="/contact"
            />
          </Box>
          <Flex
            ml={[
              "0px",
              "0px",
              "70px",
              "70px"
            ]}
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%", // 48em-62em
              "50%", // 62em+
            ]}
            pt="10px"
            px="20px"
            justifyContent="center"
            alignItems="center"
          >
            <img src={ceo} alt="ceo.png" className="ceo" />
          </Flex>
        </Flex>
        <Flex
          pt="100px"
          pl="103px"
          flexDirection="column"
          overflowX="none"
        >
          <Box>
            <h3
              className="valuesvgd"
            >
              Visual Group Digital
            </h3>
            <h3
              className="valuesvgdword"
            >
              CORE VALUES
            </h3>
          </Box>
        </Flex>
        <Values /> 
        <Flex
          justifyContent="center"
          alignItems="center"
          pt="158px"
          px="20px"
          className="parallax"
        >
      
        </Flex>
        <Box
          pl="10%"
        >
          <h3 className="ourprocess">
            OUR <span>PROCESS</span>
          </h3>
        </Box>
        <Process /> 
        <StaticLogo />
        <ReusableFooter text={text} />
        <Footer />
      </Box>
    </Box>
  )
}
