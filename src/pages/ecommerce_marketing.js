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
import OurWork from '../components/Ourworks';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import StaticLogo from '../components/StaticLogo';
import MobileNav from '../components/MobileNav';
import Slideshow from '../components/Slideshow';
import AccomplishmentSlider from '../components/AccomplishmentSlider';

import ecom from '../images/ecom.jpg';
import digimark from '../images/E-Commerce.png';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import facebookAds from '../images/offers/facebookads.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';


import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';
import monitor from '../images/features/monitor.png';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Ecommerce_marketing({ location }) {
  const headerText = "E-COMMERCE /"
  const subheader = "DIGITAL STORES"
  const paragraph = "This is in response to the change in consumer shopping behavior and preferences."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "HIGH-END SITE DESIGN",
      para: "A stunning site design will signal high quality and trustworthiness to customers that visit your site.",
      classes: "rrfirstclass",
      img: hex,
    },
    {
      num: 2,
      header: "LANDING & SALES PAGE",
      para: "Your landing page is the first impression that customers see, and your sales page is the last page they see before making a purchase! Both pages are vitally important to your ECommerce success.",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "FULL FUNNEL DESIGN & SET UP",
      para: "We can target audiences who are interested in your products and services and build a sales funnel to generate more leads for your business.",
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

    dmtl.fromTo(".firstecom", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".next-gen", {
      x: -200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ecomtxt", {
      x: -200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ecomlearn", {
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
  }, []) 

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
    }, [])

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
        {
          (width > 1280) 
          ? <Nav loc={location} page='/ecommerce_marketing' main="/marketing" />
          : <MobileNav  main='/ecommerce_marketing' />
        }
      <Box>
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={digimark}
          imageClass="digitalmarkbanner"
        />
        <Flex
          pt="50px"
           px="5%"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            className="digimark"
             width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
              "50%", // 48em-62em
              "40%", // 62em+
            ]}
          >
            <Text
              as="h3"
              fontSize="4xl"
              className="firstecom"
            >
              <span>E-Commerce:</span>
            </Text>
            <Text
              as="h3"
              fontSize="4xl"
              className="next-gen"
            >
              The Next Gen of Shopping
            </Text>
            <Text
              as="p"
              fontSize="xl"
              className="ecomtxt"
              textAlign="justified"
              px="10px"
            >
              Successful companies have diversified from brick-and-mortar operations by opening E-commerce stores. 
              These commercial channels act as online shops open 24/7. Consumers, particularly those with a busy 
              lifestyle, find online shopping time-saving and convenient since they can make a purchase at the click 
              of a button. Amidst a sea of brands and ECommerce stores on the internet, what will you do to make your 
              brand stand out, drive more consumers to your site, and convert them into sales?
            </Text>
            <Flex
              justifyContent={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
                "flex-start"
              ]}
            >
              <LearnMoreButton id="ecomlearn" link="/contact" />
            </Flex>
          </Box>
          <Flex
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
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
            <img src={ecom} alt="ecom.svg" className="rocketpic" />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
          pt="123px"
          justifyContent="center"
          alignItems="center"
          px="20px"
        >
          <Box
            textAlign="center"
          >
            <h3>
              Visual Group Digital as your E-Commerce Developer 
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
             Customise E-Store 
            </h3>
            <p>
              We will customise e-store features that will highlight your identity, whether as a single brand or multiple brands under one store.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="20px"
            >
              <button
                className="bizbut"
                onClick={() => {
                  window.location.assign("/contact")
                }}
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          {/* <Box
            className="offerCards"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            <h3>
              User-Friendly Interface
            </h3>
            <p>
              We will create an interface that is user-friendly and with features that engage consumers.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="10px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box> */}
          <Box
            className="offerCards ofc2"
          >
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Multi-Platform Store
            </h3>
            <p>
              We will help build your e-store on the platform of your choice, including Shopify, EKM and BigCommerce.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
                onClick={() => {
                  window.location.assign("/contact")
                }}
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc3"
          >
            <img src={digitalBranding} alt="digitalmarketing.svg" />
            <h3>
             Marketing Campaigns
            </h3>
            <p>
              We will design and develop marketing campaigns that can be posted on major websites.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
                onClick={() => {
                  window.location.assign("/contact")
                }}
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
          flexDirection="row"
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
              "50%",
              "50%"
            ]}
          >
            <h3
              className="digimarkfeatures"
            >
              Why <span>Visual Group Digital</span>
            </h3>
          </Box>
          <Box
            mx="10px"
            my="10px"
            w={[
              "100%",
              "100%",
              "100%",
              "40%",
              "40%"
            ]}
          >
            <p
              className="whyus"
            >
              We, at Visual Group Digital, will help you design and develop an e-store that will optimise web traffic 
              (increase in consumer visits) and conversion rate (increase in transactions and amount spent).
            </p>
          </Box>
        </Flex>

        <ReusableRanking 
          textArray={rankingArray}
        />
     
        <AccomplishmentSlider />
        {/* <OurWork /> */}
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

