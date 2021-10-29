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
import vgd from '../images/dfaod.png';

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
    <Box 
      className="main"
      overflowX="hidden"
    >
      <SEO />
        {
          (width > 1300) 
          ? <Nav loc={location} page='/about' />
          : <MobileNav  page='/about' />
        }
        <ReusableHero 
          header={headerTxt}
          subheader={subheader}
          separated={false}
          paragraph={paragraph}
          image={aboutus}
          imageClass="digitalmarkbanner"
        />
        <Flex
          pt="90px"
          px={[
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
              "100%",
              "100%", // 48em-62em
              "50%", // 62em+
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
            mx={[
              "0px",
              "0px",
              "70px",
              "70px"
            ]}
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
              "100%", // 48em-62em
              "37%", // 62em+
            ]}
            pt="50px"
            px="20px"
            justifyContent="center"
            alignItems="center"
          >
            <img src={ceo} alt="ceo.png" className="ceo" />
          </Flex>
        </Flex>
        <Flex
          pt="100px"
          px={[
            "13px",
            "13px",
            "23px",
            "103px",
            "103px"
          ]}
          flexDirection="column"
          overflowX="none"
          w="100%"
        >
          <Box>
            <Text
              className="valuesvgd"
              fontSize={[
                "40px",
                "40px",
                "56px",
                "56px",
                "56px"
              ]}
            >
              Visual Group Digital
            </Text>
            <Text
              className="valuesvgdword"
              fontSize={[
                "40px",
                "40px",
                "56px",
                "56px",
                "56px"
              ]}
            >
              CORE VALUES
            </Text>
          </Box>
        </Flex>
        <Values /> 
        <Flex
          justifyContent="center"
          alignItems="center"
          pt="158px"
          px="20px"
          w={[
            "0%",
            "0%",
            "100%",
            "100%",
            "100%"
          ]}
        >
          <img src={vgd} alt="vgd" />
        </Flex>
        <Box
          pl={[
            "10px",
            "10px",
            "10%",
            "10%",
            "10%"
          ]}
        >
          <h3 className="ourprocess">
            OUR <span>PROCESS</span>
          </h3>
        </Box>
        <Process /> 
        {/* <StaticLogo /> */}
        <ReusableFooter text={text} />
        <Footer />
      </Box>
  )
}
