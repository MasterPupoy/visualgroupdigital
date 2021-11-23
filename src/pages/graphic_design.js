import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box, 
  Text
} from '@chakra-ui/react';

import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import ReusableRanking from '../components/ReusableRanking';
// import OurWork from '../components/Ourworks';
import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import Slideshow from '../components/Slideshow';

import pwa from '../images/pwa.svg';
import posterdesign from '../images/posterdesign.svg';
import socmedbanner from '../images/socmedbanner.svg';
import bizcard from '../images/bizcard.svg';
import logodes from '../images/logodes.svg';
import webdev from '../images/webdevelopment.svg';
import branding from '../images/gdbanner.png';
import brandingpic2 from '../images/gdpic.png';
import righta from '../images/righta.png';

import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';
import medal from '../images/features/medal.png';
import brush from '../images/features/brush.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/digital_branding.css';
// import OurWorkBranding from '../components/OurWorkBranding';

gsap.registerPlugin(ScrollTrigger);
export default function Graphic_design({ location }) {
  const headerText = "GRAPHIC"
  const subheader = "DESIGN"
  const paragraph = "We cover a wide range of graphic design services to help you build the foundations of your brand such as logo designs, business stationery, social media banners, flyers and more."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "Ideal Client Discovery",
      para: "We’ll conduct research to discover the customers that resonate most with your product and service offerings.",
      classes: "rrfirstclass",
      img: hex,
    },
    {
      num: 2,
      header: "Brand Messaging",
      para: "Before we get your message out to the world, we’ll make sure you have the right message to tell!",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "Brand Positioning",
      para: "Your brand will be evaluated against other brands in your industry to see where your true competitors are.",
      classes: "rrfirstclass",      
      img: barchart,
    },
    {
      num: 4,
      header: "Brand Identity",
      para: "We’ll work with you to carve out a unique identity that your company can own and your customers can remember.",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 5,
      header: "Ideal Client Discovery",
      para: "Your brand becomes what your customers think about the competition in your brand industry.",
      classes: "rrfirstclass",
      img: medal 
    },
    {
      num: 6,
      header: "Brand Inspiration",
      para: "We’ll work with you to design a brand around the things that inspire you and your customers.",
      classes: "rrsecondclass",
      img: brush,
    }
  ]

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
    
    let digibrandtl = gsap.timeline({ scrollTrigger : {
      trigger: ".digibrand",
      start: "top bottom",
      toggleAttribute: "restart none none none"
    }})
    
    digibrandtl.fromTo(".digibrand", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, opacity: 1, x: 0})
    .fromTo(".rocketpic", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, opacity: 1, x: 0})

  }, [])

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
        {
          (width > 1280) 
          ? <Nav loc={location} page='/graphic_design' main="/branding" />
          : <MobileNav main="/graphic_design" />
        }
      <Box>
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={branding}
          imageClass="digitalmarkbanner"
          separated={false}
        />
        <Flex
          pt="50px"
           px="5%"
          flexWrap="wrap"
          alignItems="center" 
        >
          <Box
             className="digimark"
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%", // 48em-62em
              "50%", // 62em+
            ]}
          >
            <Text
              as="h3"
              fontSize="5xl"
            >
              Graphic <span>Design</span>
            </Text>
            <Text
              as="p"
              fontSize="xl"
            >
              Graphic design is an essential part of what we do. 
              Without it, no companies would have any form of brand identity. 
              We cover a wide range of graphic design services to help you build 
              the foundations of your brand such as logo designs, business stationery, 
              social media banners, flyers, and more...
            </Text>
            <Flex
                     justifyContent={[
                "center",
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start"
              ]}
            >
              <button
                // className="businessEnquiryButton"
                className="button button--aylen"
                   onClick={() => {
            window.location.assign('/contact')
          }}
              >
                <span className="biz">BUSINESS ENQUIRY</span>
              </button>
            </Flex>
          </Box>
          <Flex
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%", // 48em-62em
              "50%", // 62em+
            ]}
            pt="10px"
            px="20px"
            justifyContent="center"
                   display={[
              "none",
              "none",
              "none",
              "flex",
              "flex"
            ]}
          >
            <img src={brandingpic2} alt="rocketpc.svg" className="rocketpic" />
          </Flex>
        </Flex>
        <Box
          mt="210px"
          overflowX="scroll"
          className="brandingslider"
          mx="5%"
        >
          <Flex
            w="3236px"
            flexWrap="nowrap"
            flexDirection="row"
            mb="100px"
            // alignItems="center"
          >
            <Flex
              w="770px"
              mx="80px"
              alignItems="center"
              flexDirection="column"
            >
              <Box>
                <img src={webdev} alt="webdevelopment" />
              </Box>
              <Box
                className="slidercards"
                mx="20px"
              >
                <h3>
                  Website Design
                </h3>
                <p>
                  We provide you with an eye-catching website, 
                </p>
                <p>
                  creating a better experience and a more comfortable UI.
                </p>
                <Flex
                  flexDirection="row"
                  w="50px"
                  h="50px"
                  mt="50px"
                >
                  <img src={righta} alt="rightarrow" className="righta" />
                </Flex>
              </Box>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              w="770px"
              mx="80px"
            >
              <Box>
                <img src={logodes} alt="logodesign" />
              </Box>
              <Box
                className="slidercards"
                mx="20px"
              >
                <h3>
                  Logo Design
                </h3>
                <p>
                  We will design a logo that stands out and captures the essence of your business.
                </p>
              </Box>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              w="770px"
              mx="80px"
            >
              <Box>
                <img src={bizcard} alt="bizcard.svg" />
              </Box>
              <Box
                className="slidercards"
                mx="20px"
              >
                <h3>
                  Business Cards
                </h3>
                <p>
                  We can design business cards to give you a strong first impression during in-person interactions.
                </p>
              </Box>
            </Flex>
            <Box
              flexDirection="column"
              alignItems="center"
              w="770px"
              mx="80px"
            >
              <Box>
                <img src={socmedbanner} alt="socmedbanner.svg" />
              </Box>
              <Box
                className="slidercards"
                mx="20px"
              >
                <h3>
                  Social Media Banners
                </h3>
                <p>
                  We can target audiences who are interested in your products and services through carefully designed social media banners that drive traffic to your site!
                </p>
              </Box>
            </Box>
            <Flex
              flexDirection="column"
              w="770px"
              mx="80px"
            >
              <Box>
                <img src={posterdesign} alt="posterdesign" />
              </Box>
              <Box
                className="slidercards"
              >
                <h3>
                  Flyer / Poster / Leaflet Design
                </h3>
                <p>
                  We can create posters, flyers, and leaflets that stand out and create a visual impact. 
                </p>
              </Box>
            </Flex>
             <Flex
              flexDirection="column"
              w="670px"
              mx="80px"
            >
              <Box>
                <img src={pwa} alt="pwa.svg" />
              </Box>
              <Box
                className="slidercards"
              >
                <h3>
                  App Design Graphics
                </h3>
                <p>
                  We can redesign apps to have a more professional and pleasing appearance.
                </p>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          w="100%"
          px="10%"
          alignItems="center"
          pt="50px"
        >
          <Box
            w={[
              "100%",
              "100%",
              "100%",
              "50%",
              "50%"
            ]}
          >
            <h3
              className="digimarkfeatures"
            >
              Imagine Your ideal <span>BRAND</span>              
            </h3>
          </Box>
          <Box
            pt="20px"
            w={[
              "100%",
              "100%",
              "100%",
              "50%",
              "50%"
            ]}
            
          >
            <p
              className="whyus"
            >
              Our job is to transform your present brand into the one you wish you had!
            </p>
          </Box>
        </Flex>
     
          <ReusableRanking 
            textArray={rankingArray}
          />
        {/* <OurWorkBranding /> */}
        {/* <OurWork /> */}
        <AccomplishmentSlider />
        <ClientTestimonials />
        <Slideshow /> 
        {/* <StaticLogo /> */}
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
