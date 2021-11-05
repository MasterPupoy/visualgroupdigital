import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Badge
} from '@chakra-ui/react';
import Lightbox from 'react-awesome-lightbox';
import "react-awesome-lightbox/build/style.css";

import SEO from '../../components/Seo';
import Nav from '../../components/Nav';
import ReusableFooter from '../../components/ReusableFooter';
// import StaticLogo from '../../components/StaticLogo';
import Slideshow from '../../components/Slideshow';
import Footer from '../../components/Footer';
import MobileNav from '../../components/MobileNav';

import capital from '../../images/scraped/capital_clue_hunts.json';


import '../../styles/casestudies.css';

export default function Sodelishus({ location }) {

  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
 const [openGal, setOpenGal] = useState(false);
 const [activeIndex, setActiveIndex] = useState(0);
 const allimages = capital.map(img => img)

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
        {
          (width > 1280) 
          ? <Nav loc={location} page='/case_studies' />
          : <MobileNav />
        }
      <Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="50px"
        >
          <Box>
            <h1
              className="title"
            >
              Capital Clue Hunts
            </h1>
          </Box>
          <Box
            alignSelf="center"
            py="20px"
          >
            <Badge>Game Company</Badge>
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
              capitalcluehunts.com
            </h3>
            <p>
              Real world adventure games in London. All you need is a phone, a team and a sharp mind for the cryptic
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
            <Flex
              flexWrap="wrap"
              w="100%"
              justifyContent="center"
            >
              {capital.map((img, i) => {
                return (
                  <Box
                     w={[
                      "90%",
                      "90%",
                      "25%",
                      "25%",
                      "25%"
                    ]}
                    m="5px"
                  >
                    <img 
                      key={i} 
                      src={img} 
                      alt={img} 
                      style={{ 
                        borderRadius: "2px",
                        cursor: "pointer"
                      }}
                      onClick={() => {
                        setOpenGal(true)
                        setActiveIndex(i);
                      }}
                    />
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
        <Slideshow />
        {/* <StaticLogo />     */}
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
      {(openGal) 
        ? <Lightbox 
          images={allimages} 
          startIndex={activeIndex}
          onClose={() => setOpenGal(prevState => !prevState)} 
        /> 
        : null}
    </Box>
  )
}




