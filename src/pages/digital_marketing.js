import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';

import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import StaticLogo from '../components/StaticLogo';
import Slideshow from '../components/Slideshow';
import MobileNav from '../components/MobileNav';
import OurWorks from '../components/Ourworks';
import AccomplishmentSlider from '../components/AccomplishmentSlider';

import rocketpc from '../images/dm2.jpg';
import digimark from '../images/dmbanner.png';

import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';
import monitor from '../images/features/monitor.png';
import medal from '../images/features/medal.png';
import brush from '../images/features/brush.png';

import growth from '../images/dmfeat.jpg';
import check from '../images/check.svg';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';
import DigitalMarketingOffers from '../components/DigitalMarketingOffers';

gsap.registerPlugin(ScrollTrigger);

export default function Marketing({ location }) {
  const headerText = "DIGITAL MARKETING"
  const subheader = "SERVICES"
  const paragraph = "We will get you on page one for all your top keyword searches for your business."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "Increased Traffic",
      para: "As you gain more visibility with digital marketing, your total number of conversions and sales will increase.",
      classes: "rrfirstclass",
      img: hex,
    },
    {
      num: 2,
      header: "Google Search Ranking",
      para: "Digital marketing will help you appear higher on Google Search Results, which is valuable for your business.",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "More Leads",
      para: "Targeting audiences with digital marketing will result in more leads visiting your sites.",
      classes: "rrfirstclass",
      img: monitor,
    },
    {
      num: 4,
      header: "High Income",
      para: "We???ll help you increase targeted leads to give you a positive ROI on your advertising investment.",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 5,
      header: "More Brand Awareness",
      para: "Your brand is a large part of what customers use to judge your business against others in the same industry, and digital marketing helps build that brand.",
      classes: "rrfirstclass",
      img: medal 
    },
    {
      num: 6,
      header: "Business Growth",
      para: "New, qualified leads and brand awareness through digital marketing all contribute to new growth opportunities.",
      classes: "rrsecondclass",
      img: brush,
    }
  ]

  const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

 useEffect(() => {

    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {

    let dmtl = gsap.timeline({scrollTrigger : {
      trigger: ".digimark",
      start: "top bottom",
    }})

    dmtl.fromTo(".digimark", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".rocketpic", {
      x: -200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, ">")

  }, [])


  return (
    <Box className="main" overflowX="hidden">
      <SEO />
        {
          (width > 1280) 
          ? <Nav loc={location} page='/digital_marketing' main="/marketing" />
          : <MobileNav main="/marketing" />
        }
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={digimark}
          imageClass="digitalmarkbanner"
        />
        <Flex
          pt="50px"
          px={[
            "10px",
            "20px",
            "60px",
            "10%"
          ]}
            flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            className="digimark"
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
              "100%", // 48em-62em
              "40%", // 62em+
            ]}
          >
            <Text
              as="h3"
              fontSize="5xl"
            >
              Digital Marketing
            </Text>
            <Text
              as="p"
              fontSize="xl"
            >
              As you gain more visibility, your number of visitors will 
              increase and help you gain the best marketing results 
              with our SEO services. We will get you on page one for 
              all your top keyword searches for your business.
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
              <LearnMoreButton link="/contact" />
            </Flex>
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
              "40%", // 62em+
            ]}
            pt="10px" 
            justifyContent="center"
            alignItems="center"
            display={[
              "none",
              "none",
              "none",
              "flex",
              "flex"
            ]}
          >
            <img src={rocketpc} alt="rocketpc.svg" className="rocketpic" />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          mt="50px"
          className="whatwedo"
          justifyContent="center"
        >
          <Box>
            <h3>
              Marketing Services
            </h3>
          </Box>
        </Flex>
        <Flex
          px="10%"
          w="100%"
        >
          <DigitalMarketingOffers />
        </Flex>
        {/* <Box
          pt="130px"
        >
          <h3
            className="digimarkfeatures"
          >
            DIGITAL MARKETING <span>FEATURES</span>
          </h3>
          <Box
            className="footerrule"
          >
            <hr />
          </Box>
        </Box> */}
        {/* <Flex
          w="100%"
          justifyContent="center"
          pt="60px"
          pb="110px"
        >
          <Bizbut />
        </Flex> */}
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          my="50px"
          w="100%"
          px="5%"
        >
          <Box
            w={[
              "100%",
              "100%",
              "100%",
              "30%",
              "30%"
            ]}
          >
            <h3
              className="digimarkfeatures"
            >
              WHY <span>US?</span>
            </h3>
          </Box>
          <Box
            py="20px"
            w={[
              "100%",
              "100%",
              "100%",
              "50%",
              "50%",
            ]}
          >
            <p
              className="whyus"
            >
              At Visual Group Digital, we specialise in helping
              businesses introduce their brand,
              connect with their target audience, and develop an effective marketing strategy.
            </p>
          </Box>
        </Flex>
        <ReusableRanking 
          textArray={rankingArray}
        />
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt="50px"
          px="5%"
        >
          <Box
               w={[
              "100%",
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
             px="5%"
          >
            <Text
              fontSize="4xl"
              style={{
                color : "#0A2F53",
                fontFamily: "dm-sans",
                fontWeight: "bold"
              }}
            >
              Digital Marketing Features
            </Text>
            <Text
              fontSize="1xl"
              py="10px"
               style={{
                color : "#0A2F53",
                fontFamily: "dm-sans"
              }}
            >
              Achieve all your goals and aspirations with the <br /> 
              right kind of help, exactly when you need it
            </Text>
            <ul
              className="socmedgrowthlist socmedgrowthlist1"
            >
               <li>
                  <img src={check} alt="check.svg" /> High Traffic
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> Google Search Ranking
                </li>
                <li>
                  <img src={check} alt="check.svg" /> More leads
                </li>
                <li>
                  <img src={check} alt="check.svg" /> High income
                </li>
                <li>
                  <img src={check} alt="check.svg" /> More brand awareness
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Business growth
                </li> 
                <li>
                  <img src={check} alt="check.svg" /> Data reports every two weeks
                </li> 
            </ul>
          </Box>
          <Box
               w={[
              "100%",
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
            my="50px"
          >
            <img src={growth} alt="seo_growth" className="seogrowthimg" style={{ borderRadius: "10px"}} />
          </Box>
        </Flex>
        <AccomplishmentSlider />
        {/* <OurWorks /> */}
        <ClientTestimonials /> 
        {/* <StaticLogo /> */}
        <Slideshow />
        <ReusableFooter 
          text={text}
        />
        <Footer />
    </Box>

  )
}
