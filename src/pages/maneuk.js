import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Badge
} from '@chakra-ui/react';

import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableFooter from '../components/ReusableFooter';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';

import brandng from '../images/brandng.png';
import fbadcopy from '../images/fbadcopy.png';
import figma from '../images/figma.png';
import casestudies from '../images/features/casestudies.png';

import '../styles/casestudies.css';

export default function maneuk({ location }) {

  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page="/case_studies" />
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <h1
              className="title"
            >
              Maneuk
            </h1>
          </Box>
        </Flex>
        <Box
          w="1358px"
          h="1000px"
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
              maneuk.com
            </h3>
            <p>
              Hair Thickening Solutions Company
            </p>
          </Box>
          <Box
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
          </Box>
          <Flex>
            <Box>
              <Flex
                w="220px"
                h="540px"
                ml="30px"
                flexDirection="column"
                mt="50px"
              >
                <Box
                  alignSelf="center"
                  py="20px"
                >
                  <Badge>Hair Products</Badge>
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
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
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


