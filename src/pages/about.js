import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import Footer from '../components/Footer';
import Values from '../components/Values';
import Process from '../components/Process';
import LearnMoreButton from '../components/LearnMoreButton';
import Slideshow from '../components/Slideshow';
import ReusableFooter from '../components/ReusableFooter';


import whatisvgd from '../images/whatisvgd.svg';
import ceo from '../images/ceo.png';
import aboutus from '../images/pekture.png';
import slantline2 from '../images/slantline2.svg';

import '../styles/about.css';

export default function about({ location }) {

  const headerTxt = "ABOUT"
  const subheader = "VISUAL GROUP DIGITAL"
  const paragraph = "For +10 Years We’ve Been Working with Big Companies, Helping Them Re-Discover Their Essence and Leverage Their Business"
  const text = "We collaborate with ambitious Companies and people."

  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/about' />
        <ReusableHero 
          header={headerTxt}
          subheader={subheader}
          paragraph={paragraph}
          image={aboutus}
        />
        <Flex
          pt="90px"
          pl="103px"
        >
          <Box
            className="founder"
            w="50%"
          >
            <h3>
              FOUNDER
            </h3>
            <h2>
              RICKY INGRAM
            </h2>
            <h5>
              Chief Executive Officer of Visual Group Digital.
            </h5>
            <p>
              It all started when the founders, Ricky and Kerryann, 
              self-branded and marketed their own businesses to success. 
              That lesson laid the foundation for the creation of Visual 
              Group Digital, a marketing agency dedicated to driving results 
              for businesses around the world.
            </p>
            <p>
              Visual Group Digital leading marketing, branding and web development 
              agency. Who strategically plan the design of websites that empower 
              your business.Throughout the company’s growth, our team has maintained 
              the same attention to detail with each client we work with. Every member 
              of our growing team understands that our differentiating factor among 
              other marketing agencies is the one-of-a-kind thought that we put into 
              each new account.
            </p>
            <LearnMoreButton />
          </Box>
          <Box
            ml="70px"
          >
            <img src={ceo} alt="ceo.png" className="ceo" />
          </Box>
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
              Visual Studio Group
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
        >
          <img src={whatisvgd} alt="whatisvgd.svg" />
        </Flex>
        <Box
          pl="10%"
        >
          <img src={slantline2} alt="slantline2" className="processline" />
          <h3 className="ourprocess">
            OUR <span>PROCESS</span>
          </h3>
        </Box>
        <Process /> 
        <Slideshow />
        <ReusableFooter text={text} />
        <Footer />
      </Box>
    </Box>
  )
}
