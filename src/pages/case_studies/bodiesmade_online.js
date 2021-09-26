import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Badge
} from '@chakra-ui/react';

import SEO from '../../components/Seo';
import Nav from '../../components/Nav';
import ReusableFooter from '../../components/ReusableFooter';
import StaticLogo from '../../components/StaticLogo';
import Footer from '../../components/Footer';
import MobileNav from '../../components/MobileNav';

import bod from '../../images/scraped/bodiesmade_online.json';

import brandng from '../../images/brandng.png';
import fbadcopy from '../../images/fbadcopy.png';
import figma from '../../images/figma.png';


import '../../styles/casestudies.css';

export default function Sodelishus({ location }) {

  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Box className="main">
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/case_studies' />
          : <MobileNav />
        }
        <Flex
          justifyContent="center"
          alignItems="center"
          m="10px"
        >
          <Box>
            <h1
              className="title"
            >
              Bodiesmade Online
            </h1>
          </Box>
        </Flex>
        <Box
          w="95%"
          className="caseStudyBox"
          m="auto"
          mt="50px"
        >
          <Box
            textAlign="center"
            pt="30px"
            className="viewshead"
          >
            <h3>
              bodiesmadeonline.com 
            </h3>
            <p>
             You’ll Taken The First Steps To Transforming Your Body &amp; Life.
            </p>
          </Box>
          {/* <Box
            px="160px"
            py="36px"
            className="caseparagraph"
          >
            <p>
              Getting the right ingredients proved difficult. In many areas there were no healthy options available at all, so in 2010 Balazs and I made the decision to create our own food blending factory to be able to create the best tailor-made healthy ingredients and supply them to food manufacturers for use in their own healthier products. For us this was not just a business, it was vital for my health, my wellbeing, my life and that of my family.
            </p>
            <p style={{ marginTop: "30px"}}>
              When we moved here, I was shocked to find there was no range of low carb, low sugar, high protein products on the supermarket shelves (although low fat and gluten free products were). Crohn’s disease is complex, and there are many limitations on what you can and can’t eat. SoDelishUs is the answer to this gap and brings healthier foods to all families, myself and my family included.”
            </p>
          </Box> */}
          <Flex>
            <Box
              w="20%"
            >
              <Flex
                h="540px"
                flexDirection="column"
                mt="50px"
                justifyContent="center"
                px="10px"
              >
                <Box
                  alignSelf="center"
                  py="20px"
                >
                  <Badge>Fitness Services</Badge>
                </Box>
                <Box
                  className="viewsSider"
                  py="20px"
                >
                  <img src={figma} alt="figma.logo" style={{ display: "inline-block"}} />
                  <span>WEBSITE DESIGN</span>
                </Box>
                <Box>
                  <img src={fbadcopy} alt="figma.logo" style={{ display: "inline-block"}} />
                </Box>
                <Box
                  className="viewsSider"
                  py="20px"
                >
                  <img src={brandng} alt="figma.logo" style={{ display: "inline-block"}} />
                  <span>BRANDING</span>
                </Box>
              </Flex>
            </Box>
            <Flex
              flexWrap="wrap"
              w="80%"
              justifyContent="center"
            >
              {bod.map((img, i) => {
                return (
                  <Box
                    w="25%"
                    m="5px"
                  >
                    <img key={i} src={img} alt={img} style={{ borderRadius: "2px"}} />
                  </Box>
                )
              })}
            </Flex>
          </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              my="20px"
            >
              <Box
                mx="10px"
              >
                <button   
                  className="button button--aylen "
                  onClick={() => {
                    window.location.assign("/contact")
                  }}
                >
                  <span>BOOKING ENQUIRY</span>
                </button>
              </Box>
              <Box
                mx="10px"
              >
                <button   
                  className="button button--aylen "
                  onClick={() => {
                    window.location.assign("/case_studies")
                  }}
                >
                  <span>VIEW MORE CASE STUDIES</span>
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


