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

import seopic from '../images/seo2.png';
import digimark from '../images/smg.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import seo from '../images/offers/seo.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';
import socmed from '../images/offers/socmed.svg';
import graphics from '../images/offers/graphics.svg';
import growth from '../images/growth.jpg';
import check from '../images/check.svg';

import hex from '../images/features/hex.png';
import barchart from '../images/features/barchart.png';
import monitor from '../images/features/monitor.png';
import medal from '../images/features/medal.png';
import brush from '../images/features/brush.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/socmedgrowth.css';
import ReusableRanking from '../components/ReusableRanking';

export default function Search_engine_optimization({ location }) {
  const headerText = "SEARCH ENGINE OPTIMIZATION"
  const subheader = "SEO"
  const paragraph = "SEO is all about increasing your website’s visibility in the search engines by improving your rankings"
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "Traffic",
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
    })

    useEffect(() => {

      let dmtl = gsap.timeline({scrollTrigger : {
        trigger: ".digimark",
        start: "top bottom",
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
    }) 

    useEffect(() => {

      let seotl = gsap.timeline({ scrollTrigger : {
        trigger: ".socmedgrowthlist1",
        start: "top center",
      }})

      seotl.fromTo(".socmedgrowthlist1", {
        y: 100,
        opacity: 0
      }, { duration: 0.25, opacity: 1, y:0 })
      .fromTo(".seogrowthimg", {
        opacity: 0
      }, { duration: 0.25, opacity: 1})
    })

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
        {
          (width > 1280) 
          ? <Nav loc={location} page='/search_engine_optimization' main="/marketing" />
          : <MobileNav main="/search_engine_optimization" />
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
           px={[
            "10px",
            "20px",
            "60px",
            "10%"
          ]}
          flexWrap="wrap"
          alignItems="center"
          alignItems="center"
          justifyContent="space-between"
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
              className="firstecom"
            >
              <span>SEO :</span> <br/>
              Reaching Your Target Audience
            </Text>
            <Text
              as="p"
              fontSize="xl"
              className="ecomtxt"
            >
              SEO is all about increasing your website’s visibility in search engines by improving your rankings. 
              When done right, SEO can boost your web traffic organically, leading to increases in customers and sales.
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
              <LearnMoreButton link="/contact" id="ecomlearn" />
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
              "100%", // 30em-48em  
              "100%",
              "100%", // 48em-62em
              "45%", // 62em+
            ]}
            pt="10px" 
            justifyContent="center"
            alignItems="center"
          >
            <img src={seopic} alt="rocketpc.svg" className="rocketpic" style={{ borderRadius: "10px", }} />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
          justifyContent="center"
          pt="123px"
          px="20px"
        >
          <Box
            textAlign="center"
          >
            <h3>
              Visual Group Digital as your
              SEO Specialist
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
            className="widerCards2 ofc1"
          >
            <img src={digitalMarketing} alt="digitalmarketing.svg" />
           
            <p>
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> Content Management
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> Engaging and Responsive Designs
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Keyword Research and Keyword Ranking Reports
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Optimization of Page Title, <br />Meta Description and 
                  Image Alt Tag
                </li>
              </ul>
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
            className="widerCards2 ofc2"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            
            <p>
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> Security Protection 
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> Link Building Campaigns to improve domain trust and authority
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Social Media Integration
                </li>
              </ul>
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
            className="widerCards2 ofc3"
          >
            <img src={digitalBranding} alt="digitalmarketing.svg" />
            <p>
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> Technical Support 
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> Quick Loading Times
                </li>
                <li>
                  <img src={check} alt="check.svg" /> SSL Set-up
                </li>
                <li>
                  <img src={check} alt="check.svg" /> 301 Redirects and 404 Pages
                </li>
              </ul>
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
            className="widerCards2 ofc4"
          >
            <img src={seo} alt="digitalmarketing.svg" />
          
            <p>
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> Qualified Website Traffic Generation
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> Conversion Rate Optimization
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Visitor Traffic Reports
                </li>
              </ul>
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
            className="widerCards2 ofc5"
          >
            <img src={socmed} alt="digitalmarketing.svg" />
          
            <p>
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> On Page SEO Work
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> SEO Audit and FAQs
                </li>
                <li>
                  <img src={check} alt="check.svg" /> SEO campaign optimization for all devices – mobile, PC, tablet
                </li>
              </ul>
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
            className="widerCards2 ofc6"
          >
            <img src={graphics} alt="digitalmarketing.svg" />
          
            <p>
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> Mobile First Indexing
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> Google Analytics and Google Business Optimization

                </li>
                <li>
                  <img src={check} alt="check.svg" /> Competitor Research and Analysis
                </li>
              </ul>
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
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              Why <span>Visual Group Digital</span>
            </h3>
          </Box>
          <Box
            pt="20px"
            px="10%"
            textAlign="center"
          >
            <p
              className="whyus"
            >
             We, at Visual Group Digital, will optimise your website content 
             with top-searched and relevant keywords.
             We will analyse all aspects of your website and upgrade 
             the portions that would benefit from improvements.
            </p>
          </Box>
        </Flex>
    
        <ReusableRanking 
          textArray={rankingArray}
        />

        <Flex
          flexWrap="wrap"
          justifyContent=""
          alignItems="center"
          mt="50px"
          px="10%"
        >
          <Box
            w={[
              "100%",
              "100%",
              "100%",
              "100%",
              "50%"
            ]}
            px="50px"
          >
            <Text
              fontSize="4xl"
                 style={{
                color : "#0A2F53",
                fontFamily: "dm-sans",
                fontWeight: "bold"
              }}
            >
              SEO Features
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
          >
            <img src={growth} alt="seo_growth" className="seogrowthimg" style={{ borderRadius: "10px"}} />
          </Box>
        </Flex>
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




