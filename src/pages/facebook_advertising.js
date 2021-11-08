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
// import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import StaticLogo from '../components/StaticLogo';
import MobileNav from '../components/MobileNav';
import Slideshow from '../components/Slideshow';

import fblogo from '../images/fbads.png';
import digimark from '../images/fbadsbanner.png';


import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';
import seo from '../images/offers/seo.svg';

import barchart from '../images/features/barchart.png';
import monitor from '../images/features/monitor.png';
import medal from '../images/features/medal.png';
import brush from '../images/features/brush.png';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Facebook_advertising({ location }) {
  const headerText = "FACEBOOK"
  const subheader = "ADVERTISING"
  const paragraph = "Facebook, with its active users of over 2 billion and continuously growing, is the most popular social media network worldwide."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "Growth-Focused Campaigns",
      para: "We increase customer acquisition and revenue through growth-focused campaigns across Facebook and Instagram. We use information and automation to optimise campaigns and improve ROI.",
      classes: "rrfirstclass",
      img: brush,
    },
    {
      num: 2,
      header: "Focus Ads",
      para: "We provide Focus Ads and budgeting for geographic locations that fit your products or services. Geographic and demographic targeting is a cost-effective way to drive engagement and sales for your business.",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "Target Your Audience",
      para: "As with all great digital strategies, we focus on your audience when developing marketing materials so we can speak to your audience in a meaningful and effective way.",
      classes: "rrfirstclass",
      img: monitor,
    },
    {
      num: 4,
      header: "High Income",
      para: "We’ll help you increase targeted leads to give you a positive ROI on your advertising investment.",
      classes: "rrsecondclass",
      img: medal,
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

    let dmtl = gsap.timeline({scrollTrigger : {
      trigger: ".digimark",
      start: "top bottom",
    }})

    dmtl.fromTo(".firstfb", {
      x: -100,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".next-gen", {
      x: -200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".rocketpic", {
      x: 200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, ">")
    .fromTo(".ecomtxt", {
      x: -200,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ecomlearn", {
      x: -200,
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
      .fromTo(".ofc4", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
      .fromTo(".ofc5", {
        opacity: 0,
        x: 100
      }, { duration: 0.25, x: 0, opacity: 1})
  }, [])

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
         {
          (width > 1280) 
          ? <Nav loc={location} page='/facebook_advertising' main="/marketing" />
          : <MobileNav main="/facebook_advertising" />
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
            "103px"
          ]}
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
              "100%", // 48em-62em
              "50%", // 62em+
            ]}
          >
            <Text
              as="h3"
              fontSize="5xl"
              className="firstfb"
            >
              Facebook Ad 
            </Text>
            <Text
              as="h3"
              fontSize="5xl"
              className="next-gen"
            >
              <span>Placements</span>
            </Text>
            <Text
              as="p"
              fontSize="xl"
              className="ecomtxt"
            >
              Facebook, with a user base of over 2 billion accounts, is the most popular social media network worldwide.
              Research shows that in the UK alone, Facebook’s active users have reached almost 45 million, topping the 
              list of most popular social media networks in the country.
              <br />
              <br />
              Many small to medium businesses have recognised the advantages of Social Media Marketing (SMM), specifically Facebook,
               in reaching their target consumer market in a cost-effective way. Building an organic following and running paid ads 
               are two popular methods for increasing revenue that we can help you with! 
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
              <LearnMoreButton id="ecomlearn" link="/contact" />
            </Flex>
          </Box>
          <Flex
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "100%",
              "100%", // 48em-62em
              "40%", // 62em+
            ]}
            pt="10px"
            justifyContent="center"
            
          >
            <img src={fblogo} alt="rocketpc.svg" className="rocketpic" style={{ borderRadius: "10px", width: "550px", height: "400px"}} />
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
          justifyContent="center"
          alignItems="center"
          pt="123px"
        >
          <Box
            textAlign="center"
          >
            <h3>
              Visual Group Digital as your Facebook Ad Agency
            </h3>
          </Box>
        </Flex>
        <Flex
          pt="50px"
          justifyContent="center"
          flexWrap="wrap"
          margin="auto"
          maxW="1400px"
        >
          <Box
            className="biggerCards ofc1"
          >
            <img src={digitalMarketing} alt="digitalmarketing.svg" />
            <h3>
             Designing &amp; Development 
            </h3>
            <p
            >
              We will help you design and develop your home page, marketing campaigns, and ad placements on Facebook to:
              <br />
              <ul>
                <li>
                  Encourage engagement from Facebook users on organic and boosted posts.
                </li>
                <li>
                  Refer traffic from Facebook to your website.
                </li>
                <li>
                  Build brand loyalty through a solid fan base of returning customers who become your free endorsers and marketers.
                </li>
                <li>
                  Optimise conversion rate of paid social campaigns.
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
            className="biggerCards ofc2"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            <h3>
              Industry Analysis 
            </h3>
            <p>
              <ul>
                <li>
                  Find the top competitors in the industry (in terms of audience size and engagement) and study their best practices.
                </li>
                <li>
                  Research the marketing content and communication methods that are proven effective in your industry.
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
            className="biggerCards ofc3"
          >
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Account and Campaign Creation
            </h3>
            <p>
              <ul>
                <li>
                  Create a social media account that is visually appealing and engaging.
                </li>
                <li>
                  Create organic social posts with content that encourages high audience engagement and interaction.
                </li>
                <li>
                  Create high-quality ad materials for paid social campaigns targeted towards your potential consumers.
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
            className="biggerCards2 ofc4"
          >
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Account and Campaign Creation
            </h3>
            <p>
              <ul>
               <li>
                   3T1R - Track, Test, Tweak, Repeat. Marketing should be data-driven and measurable to properly gauge effectiveness and improvement. Our marketing results will be the basis for future activities and campaigns.
                </li>
                <li>
                  Track audience reach, engagement, click-through, leads, and the ROI of paid campaigns.
                </li>
                <li>
                  Manage campaign parameters and analyse for performance improvements.
                </li>
                <li>
                  Report engagement, leads, and sales derived from paid social campaigns and use that data to improve performance on future campaigns.
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
            className="biggerCards2 ofc5"
          >
            <img src={seo} alt="digitalmarketing.svg" />
            <h3>
              Other Marketing Strategies
            </h3>
            <p>
              <ul>
                <li>
                  Collect data on new and prospective customers to create a market profile of your customers.
                </li>
                <li>
                  Increase your audience through links to other social media sites such as Instagram.
                </li>
                <li>
                  Automate e-mail campaigns. 
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
            p="20px"
          >
            <p
              className="whyus"
            >
              We, at Visual Group Digital, will help you increase your brand’s visibility, <br /> 
              fan base, and overall engagement from Facebook users. We will help you optimise <br />
              Facebook as a digital marketing channel to contribute to your growth in order size <br /> 
              and number of orders.
            </p>
          </Box>
        </Flex>
        <ReusableRanking 
          textArray={rankingArray}
        />
        <OurWork />
        {/* <AccomplishmentSlider /> */}
        <ClientTestimonials /> 
        {/* <StaticLogo /> */}
        <Slideshow />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}


