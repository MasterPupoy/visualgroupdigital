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
import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import Bizbut from '../components/Bizbut';
import StaticLogo from '../components/StaticLogo';
import MobileNav from '../components/MobileNav';


import rocketpc from '../images/rocketpc.png';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';

import features from '../images/features/features.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import monitor from '../images/features/monitor.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

export default function Marketing({ location }) {
  const headerText = "DIGITAL MARKETING"
  const subheader = "SERVICES"
  const paragraph = "We will get you on page one for all your top keyword searches for your business."
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


  return (
    <Box className="main">
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/digital_marketing' main="/marketing" />
          : <MobileNav />
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
           pl={[
            "10px",
            "20px",
            "60px",
            "103px"
          ]}
          flexWrap="wrap"
          alignItems="center"
        >
          <Box
            className="digimark"
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
            <LearnMoreButton />
          </Box>
          <Box
            ml={[
              "0px",
              "0px",
              "70px",
              "70px"
            ]}
            width={[
              "100%", // 0-30em
              "100%", // 30em-48em
              "50%", // 48em-62em
              "40%", // 62em+
            ]}
            pt="10px"
            px="20px"
            textAlign="center"
          >
            <img src={rocketpc} alt="rocketpc.svg" />
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="noWrap"
          w="100%"
          className="whatwedo"
          pl="20%"
          pt="123px"
        >
          <Box>
            <h3>
              Marketing Services
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
        >
          <Box
            className="offerCards"
          >
            <img src={digitalMarketing} alt="digitalmarketing.svg" />
            <h3>
              E-commerce Store Development &amp; Marketing
            </h3>
            <p>
             We can generate valuable site visitors with our bespoke lead generation services. We collaborate with your business to understand your product or service, process, and most importantly your prospects.
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
            className="offerCards"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            <h3>
              Mobile App Developement &amp; Marketing
            </h3>
            <p>
              The world is relying more and more on digital devices. As a result, having digital services for your brand is important in order to keep up with competitors and customer expectations.
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
            className="offerCards"
          >
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Email Marketing
            </h3>
            <p>
              Email marketing is an important marketing toolkit that is especially effective in building brand loyalty and trust. Instead of providing you with email lead lists, we’ll help you build your own email list with people that share a genuine interest in your company.
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
        <Box
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
        </Flex>
        <Flex
          w="100%"
          justifyContent="center"
          pt="60px"
          pb="110px"
        >
          <Bizbut />
        </Flex>
        <Flex
          pl={[
            "30px",
            "30px",
            "30px",
            "50px",
            "108px"
          ]}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              WHY <span>US?</span>
            </h3>
          </Box>
          <Box
            pt="20px"
          >
            <p
              className="whyus"
            >
              At Visual Group Digital, we specialise in helping
              businesses introduce their brand, <br /> 
              connect with their target audience, and develop an effective marketing strategy.
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
