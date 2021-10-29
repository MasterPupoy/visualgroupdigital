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
import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import branding from '../images/branddevbanner.png';
import brandingpic2 from '../images/branddev1.png';
import brandingpic3 from '../images/branddev2.png';

import righta from '../images/righta.png';

import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';
import medal from '../images/features/medal.png';
import brush from '../images/features/brush.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/digital_branding.css';

gsap.registerPlugin(ScrollTrigger);

export default function Digital_branding({ location }) {
  const headerText = "BRAND"
  const subheader = "DEVELOPMENT"
  const paragraph = "At Visual Group Digital, we’ll make your brand come to life on digital platforms through a creative and targeted approach."
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
      start: "top center",
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
    .fromTo(".rocketpic2", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, opacity: 1, x: 0})

  })

  // useEffect(() => {

  //   const container = document.querySelector(".brandingslider")

  //   gsap.to(container, {
  //     x: () => "-500px",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       invalidateOnRefresh: true,
  //       scrub: 1,
  //       end: () => "+=" + container.offsetWidth
  //     }
  //   })
  // })

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/digital_branding' main="/branding" />
          : <MobileNav main="/branding" />
        }
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={branding}
          imageClass="digitalmarkbanner"
        />
        <Flex
          pt="50px"
          px={[
            "10px",
            "20px",
            "60px",
            "70px"
          ]}
          flexWrap="wrap"
          alignItems="center" 
          justifyContent="center"
        >
          <Box
            className="digibrand"
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%", // 48em-62em
              "40%", // 62em+
            ]}
          >
            <Text
              as="h3"
              fontSize="5xl"
            >
              What is your BRAND?
            </Text>
            <Text
              as="p"
              fontSize="xl"
            >
              Whether it’s an individual, product, or company, 
              branding is the most essential part in crafting an
              identity. Branding is all about creating memorable, 
              positive impressions to capture and engage your target 
              audience for favorable results and sales growth.
            </Text>
            <button
              // className="businessEnquiryButton"
              className="button button--aylen"
            >
              <span className="biz">BUSINESS ENQUIRY</span>
            </button>
          </Box>
          <Flex
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%", // 48em-62em
              "40%", // 62em+
            ]}
            pt="10px"
            px="20px"
            justifyContent="center"
          >
            <img src={brandingpic2} alt="rocketpc.svg" className="rocketpic" />
          </Flex>
        </Flex>
        <Flex
          pt="50px"
          flexWrap="wrap"
          alignItems="center" 
          justifyContent="center"
          px={[
            "10px",
            "20px",
            "60px",
            "70px"
          ]}
        >
          <Flex
           width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%",
              "40%", // 48em-62em
              "40%", // 62em+
            ]}
            pt="10px"
            px="10px"
            justifyContent="center"
          >
            <img src={brandingpic3} alt="rocketpc.svg" className="rocketpic2" />
          </Flex>
          <Box
            className="digibrand"
             width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "40%", // 48em-62em
              "40%", // 62em+
            ]}
            mx="20px"
          >
            <Text
              as="h3"
              fontSize={[
                "25px",
                "25px",
                "30px",
                "30px",
                "35px"
              ]}
            >
              Visual Group Digital as your Digital Branding Agency
            </Text>
            <Text
              as="p"
              fontSize="xl"
            >
              At Visual Group Digital, we’ll make your brand come to life on digital platforms through a creative and targeted approach.
            </Text>
            <button
              // className="businessEnquiryButton"
              className="button button--aylen"
            >
              <span className="biz">BUSINESS ENQUIRY</span>
            </button>
          </Box>
        </Flex>
        <Box
          mt="210px"
          overflowX="scroll"
          className="brandingslider"
          mx="50px"
        >
          <Flex
            w="3236px"
            flexWrap="nowrap"
            flexDirection="row"
            mb="100px"
          >
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Your Corporate Identity and Business Goals
              </h3>
              <p>
                As a company, what do you want to achieve? We, at Visual Group Digital, will take an in-depth study on your business goals, your present business status, and the gap that we have to bridge by designing the perfect brand image and identity.
              </p>
              <Flex
                flexDirection="row"
                w="50px"
                h="50px"
                mt="50px"
              >
                <img src={righta} alt="rightarrow" />
              </Flex>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
              Your Market
              </h3>
              <p>
                What motivates the consumers in your market? What are their preferences and what do they think of your brand? Who are your captured market and why do they patronize your brand? 
                <br/>
                <br/>
                To build the perfect persona for your brand, we, at Visual Group Digital, will explore different ways to understand the market, find out the expectations of consumers, and discover brand elements that appeal to them both visually and psychologically.
                <br/>
                <br/>
                Then, we’ll create strategies to grow your audience engagement, market share, positive customer experience, and brand loyalty, leading to an increase in sales and ROI.
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
              Your Competitors and Industry
              </h3>
              <p>
                Who are your competitors? What are they up to? What is the trend in the industry? At Visual Group Digital, we’ll study your “game field” to give us a better idea on how we will “play.” In designing your brand, we will consider what works and what doesn’t in the industry. With this approach, we can achieve better success rates!    
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
              Your Brand Design
              </h3>
              <p>
                With all of the above as references, we will design the visual elements of your brand.
                Brand Logo
                Brand Tagline
                Brand Description
                Corporate Vision, Mission and Values
                Website Content

                All elements including graphics, fonts, colors and keywords, must be significant and consistent with what your brand stands for.
              </p>
            </Box>
          </Flex>
        </Box>
        <Flex
          px={[
            "30px",
            "30px",
            "30px",
            "50px",
            "108px"
          ]}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          pt="50px"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              Imagine Your ideal <span>BRAND</span>              
            </h3>
          </Box>
          <Box
            mx="20px"
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
     
        <AccomplishmentSlider />
        <ClientTestimonials /> 
        <StaticLogo />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
