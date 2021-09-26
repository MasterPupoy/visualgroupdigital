import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import anothaweb from '../images/portfolio/anothaweb.png';
import bar from '../images/portfolio/bar.png';
import delish from '../images/portfolio/delish.png';
import delish2 from '../images/portfolio/delish2.png';
import hair from '../images/portfolio/hair.png';
import map from '../images/portfolio/map.png';
import oxted from '../images/portfolio/oxted.png';
import van from '../images/portfolio/van.png';
import web from '../images/portfolio/web.png';
import casestudies from '../images/features/casestudies.png';

import '../styles/our_portfolio.css';

export default function Our_portfolio({ location }) {
  const headerText = "OUR"
  const subheader = "PORTFOLIO"
  const paragraph = "Below, you’ll find some of our favorite brands that we’ve worked with"
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

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
    <Box className="main">
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/our_portfolio' />
          : <MobileNav />
        }
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={casestudies}
          separated={false}
          imageClass="digitalmarkbanner"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          py="50px"
        >
          <Box
            className="portLinks"
          >
            <a href="/our_portfolio">WEBSITE DESIGN</a>
            <a href="/our_portfolio">WEBSITE DEVELOPMENT</a>
            <a href="/our_portfolio">E-COMMERCE MARKETING</a>
            <a href="/our_portfolio">GRAPHIC DESIGNS</a>
            <a href="/our_portfolio">SOCIAL MEDIA MARKETING</a>
          </Box>
          <Box
            className="portLinks"
          >
            <a href="/our_portfolio">FACEBOOK AD COPY</a>
            <a href="/our_portfolio">BRANDING</a>
            <a href="/our_portfolio">GOOGLE ADVERTISING</a>
          </Box>
        </Flex>
        <Box
          className="portbox"
          w="95%"
          m="auto"
        >
          <Flex
            className="portshowcase"
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <img src={anothaweb} alt="anothaweb.png" />
            <img src={bar} alt="anothaweb.png" />
            <img src={delish} alt="anothaweb.png" />
            <img src={delish2} alt="anothaweb.png" />
            <img src={hair} alt="anothaweb.png" /> 
            <img src={map} alt="anothaweb.png" />
            <img src={oxted} alt="oxted.png" />
            <img src={van} alt="van.png" />
            <img src={web} alt="web.png" />
          </Flex>
          <Flex
            justifyContent="center"
            py="50px"
          >
            <Box>
              <button className="button button--aylen ">
                <span>LOAD MORE</span>
              </button>
            </Box>
          </Flex>
        </Box>
        <StaticLogo />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
