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
import OurWork from '../components/Ourworks';
// import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import Slideshow from '../components/Slideshow';

import webdev from '../images/webdevbanner.png';
import webdevelopment from '../images/webdevelopment.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/ux.svg';
import eCommerce from '../images/ppc.svg';
import facebookAds from '../images/api.svg';
import api2 from '../images/api2.svg';
import tech from '../images/virtual.svg';
import netlogo from '../images/netlogo.png';
import js from '../images/javascript.svg';
import scala from '../images/scala.svg';
import java from '../images/java.svg';
import php from '../images/php.svg';
import data from '../images/big-data.svg';

import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/digital_branding.css';

gsap.registerPlugin(ScrollTrigger);

export default function Web_development({ location }) {
  const headerText = "WEB"
  const subheader = "DEVELOPMENT"
  const paragraph = "We, at Visual Group Digital, will be your technology partner in building a bespoke website to establish your brand presence in the worldwide web."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "HIGH-END SITE DESIGN",
      para: "As you gain more visibility, the number of website visitors increases and helps you to gain the best marketing results through our SEO services.",
      classes: "rrfirstclass",
      img: hex,
    },
    {
      num: 2,
      header: "LANDING & SALES PAGE",
      para: "We will get you one page one for all your top keyword searches for your business",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "FULL FUNNEL DESIGN & SET UP",
      para: "We can target audiences who are interested in your products and services through which you’ll be able to get higher generating revenue customers",
      classes: "rrfirstclass",      
      img: barchart,
    },
    {
      num: 4,
      header: "HIGH INCOME",
      para: "We’ll help you to Increase targeted leads which will make it easier for customers to pay for those leads.",
      classes: "rrsecondclass",
      img: barchart,
    },
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

  useEffect(() => {

    let cardstl = gsap.timeline({ scrollTrigger: {
      trigger: ".whatwedo",
      start: "bottom bottom",
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
      .fromTo(".ofc4", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc5", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc6", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc7", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc8", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc9", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc10", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc11", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
  }, [])

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
        {
          (width > 1280) 
          ? <Nav loc={location} page='/web_development' main="/branding" />
          : <MobileNav main="/web_development"/>
        }
      <Box>
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={webdev}
          separated={false}
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
          w="100%"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            className="digibrand"
              width={[
              "100%", // 0-30em
              "100%",
              "100%", // 30em-48em
              "50%", // 48em-62em
              "40%", // 62em+
            ]}
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
              Website Development: <br />
              Your Online Customer Experience
            </Text>
            <Text
              as="p"
              fontSize="xl"
            >
              Your web design greatly affects your audience’s perception of your brand. 
              Their impression of your website can either glue potential customers to your 
              page or drive them away in an instant! Invest in a strong web presence to keep 
              customers interested in your site rather than competitors' sites.
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
              >
                <span className="biz">BUSINESS ENQUIRY</span>
              </button>
            </Flex>
          </Box>
          <Flex
            ml={[
              "0px",
              "0px",
              "70px",
              "70px"
            ]}
            width={[
              "100%", // 0-30em
              "100%",
              "100%", // 30em-48em
              "50%", // 48em-62em
              "45%", // 62em+
            ]}
            pt="10px"
            px="20px"
            justifyContent="center"
          >
            <img src={webdevelopment} alt="rocketpc.svg" className="rocketpic" />
          </Flex>
        </Flex>
        {/* <Box
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
                Web Design
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
               Business Solutions
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Third Party API Integration &amp; Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                REST Based Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Technology &amp; Frameworks
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                .Net Framework
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Java Framework
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Scala Framework
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
               PHP Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                JavaScript Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Big Data Capabilities
              </h3>
            </Box>
          </Flex>
        </Box> */}
        <Flex
          mt="100px"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          pt="50px"
          alignItems="center"
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

        <Flex
          flexDirection="row"
          flexWrap="wrap"
          w="100%"
          className="whatwedo"
          pl="20%"
          pt="123px"
         
        >
          <Box>
            <h3>
              Web Services
            </h3>
          </Box>
          <Box
            alignSelf="center"
            pl="20px"
          >
            <img src={line1} alt="line.svg" />
          </Box>
        </Flex>
        <Flex
          pt="50px"
          justifyContent="center"
          flexWrap="wrap"
          w="100%"
          px="5%"
          // maxW="1400px"
        >
          <Box
            className="offerCards ofc1"
          >
            <img src={digitalMarketing} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
             Web Design
            </h3>
            <p>
              We will create dynamic and well-crafted websites with user-friendly designs, strong coding, and intuitive navigation. This will connect you to your customers on any device and any browser, providing them with an impressive online customer experience.
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
            <img src={eCommerce} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}}  />
            <h3>
             Business Solutions
            </h3>
            <p>
              Whatever your purpose may be, we will customise your website according to your specifications. Whether you are looking for B2B, B2C, Bespoke Shopping Cart Development, Payment Gateway Integration, or an online portal to connect to your multiple stores and departments, we can get it done!
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
          </Box>
          <Box
            className="offerCards ofc3"
          >
            <img src={facebookAds} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              Third Party API Integration &amp; Development
            </h3>
            <p>
              Visual Group’s Digital team of experts will provide your requirements for payment gateways, data scraping, API tracking for third party integration, and more.
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
            className="offerCards ofc4"
          >
            <img src={api2} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              REST Based Development
            </h3>
            <p>
              We will develop multi-layer architecture to decouple services via REST interfaces. We offer web interface connection to a mobile platform and other integration services.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc5"
          >
            <img src={tech} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              Technology &amp; Frameworks
            </h3>
            <p>
              We will use the best tools for your website application and put you ahead of your competition.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc6"
          >
            <img src={netlogo} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              .Net Framework
            </h3>
            <p>
              Offers interoperability across multiple programming languages, mostly for the Windows platform.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc7"
          >
            <img src={java} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              Java Framework
            </h3>
            <p>
              Provides rapid development and complete flexibility of use.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc8"
          >
            <img src={scala} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              Scala Framework
            </h3>
            <p>
              Used to develop the most elaborate commercial software with a statically typed out language that has both functional and object-oriented programming concepts.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc9"
          >
            <img src={php} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              PHP Development
            </h3>
            <p>
              Creates dynamic web pages and domain-specific solutions through a trusted general-purpose language.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc10"
          >
            <img src={js} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              JavaScript Development
            </h3>
            <p>
              Used to design clear structures,implement intuitive site architecture, and provide easily recognisable links to a universal platform.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards ofc11"
          >
            <img src={data} alt="digitalmarketing.svg" style={{ width: "70px", height: "70px"}} />
            <h3>
              Big Data Capabilities
            </h3>
            <p>
              Provides in-depth analysis and management of data, regardless of complexities and volume.
            </p>
            <Flex
              justifyContent="center"
              alignItems="center"
              pt="30px"
            >
              <button
                className="bizbut"
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
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

