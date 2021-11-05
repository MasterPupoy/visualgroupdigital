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
// import AccomplishmentSlider from '../components/AccomplishmentSlider';
import OurWork from '../components/Ourworks';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import MobileNav from '../components/MobileNav';
import StaticLogo from '../components/StaticLogo';
import Slideshow from '../components/Slideshow';

import google from '../images/google.jpg';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';

import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';
import monitor from '../images/features/monitor.png';
import medal from '../images/features/medal.png';
import brush from '../images/features/brush.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

gsap.registerPlugin(ScrollTrigger);

export default function Google_advertising({ location }) {
  const headerText = "GOOGLE ADS"
  const subheader = "MANAGEMENT"
  const paragraph = "Google is the commonly used search engine across the worldwide web."
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
      para: "We’ll help you increase targeted leads to give you a positive ROI on your advertising investment.",
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

    let dmtl = gsap.timeline({scrollTrigger : {
      trigger: ".rocket pic",
      start: "top top",
    }})

    dmtl.fromTo(".firstecom", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ecomtxt", {
      x: -200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".rocketpic", {
      x: 200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo("#ecomlearn", {
      opacity: 0
    }, { duration: 0.25, opacity: 1})
  });

  useEffect(() => {

    let cardstl = gsap.timeline({ scrollTrigger: {
      trigger: ".whatwedo",
      start: "bottom center",
    }})

    cardstl.fromTo(".whatwedo", {
        opacity: 0,
        y: -100
      }, { duration: 0.25, y: 0, opacity: 1})
      .fromTo(".ofc1", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc2", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc3", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
    })

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/google_advertising' main="/marketing" />
          : <MobileNav main="/google_advertising" />
        }
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={digimark}
          imageClass="digitalmarkbanner"
        />
        <Flex
          mt="50px"
           px={[
            "10px",
            "20px",
            "60px",
            "103px"
          ]}
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
              "100%", // 48em-62em
              "55%", // 62em+
            ]}
            pt="10px"
            px="20px"
            justifyContent="center"
          >
            <img src={google} alt="rocketpc.svg" className="rocketpic" style={{ borderRadius: "10px", width: "600px", height: "500px"}} />
          </Flex>
          <Box
            className="digimark"
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
              "100%", // 48em-62em
              "40%", // 62em+
            ]}
            mx="20px"
            mt="30px"
          >
            <Text
              as="h3"
              fontSize="5xl"
              className="firstecom"
            >
              <span>Google Ads</span> <br />
              Management
            </Text>
            <Text
              as="p"
              fontSize="xl"
              className="ecomtxt"
            >
              Google is head-and-shoulders above any other website as the most used search engine on the internet. 
              It has transcended itself from a brand to a verb, 
              which means to search and obtain information. If you don’t believe us, Google it!
              <br />
              <br />
              Google handles over 5 billion searches per day. By utilising Google Ads, your business will be displayed to people who are actively seeking out the products and services you provide. PPC means you only pay each time your ad is clicked by your prospective customers, meaning you only pay for results! Successful businesses recognise the benefits of Google Ads PPC in sending high-value traffic to their website.
            </Text>
            <LearnMoreButton id="ecomlearn" link="/contact" />
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
          pt="123px"
          justifyContent="center"
          px="20px"
        >
          <Box
            textAlign="center"
          >
            <h3>
              Visual Group Digital as your Google Ads Agency
            </h3>
          </Box>
        </Flex>
        <Flex
          pt="50px"
          justifyContent="center"
          flexWrap="wrap"
          margin="auto"
        >
          <Box
            className="offerCards ofc1"
          >
            <img src={digitalMarketing} alt="digitalmarketing.svg" />
            <h3>
             PPC Campaigns.
            </h3>
            <p
            >
              With Visual Group Digital’s team of experts, your PPC campaign will be strategically designed 
              to drive results and deliver quality leads and conversions. Consumers will see and be encouraged 
              to click on your ads.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc2"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            <h3>
              PPC Results
            </h3>
            <p>
              We will assist you to set up the right PPC campaign and get the results that matter to you 
              – more website visits, more phone calls and direct messages, more leads, and more sales are 
              all attainable with PPC marketing.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc3"
          >
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              PPC Tracking
            </h3>
            <p>
              To know if your ad placement is working, it should be measurable.
               We will provide you with transparent and easy-to-understand PPC 
               results so you can track your ROI.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
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
        </Box>
        <Flex
          pt="80px"
          justifyContent="center"
          alignItems="center"
        > 
          <img src={features} alt="marketing_features.svg" />
        </Flex> */}
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
          mt="50px"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              Why <span>Visual Group Digital</span>
            </h3>
          </Box>
          <Box
            my="10px"
          >
            <p
              className="whyus"
            >
              We, at Visual Group Digital, will help you with the 
              technical aspects and complexities of 
              Google Ads so you can optimize sales generation.
            </p>
          </Box>
        </Flex>
      
        <ReusableRanking 
          textArray={rankingArray}
        />
        <OurWork />
        {/* <AccomplishmentSlider /> */}
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



