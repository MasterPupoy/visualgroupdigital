import React from 'react';
import {
  Flex,
  Box
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


import google from '../images/google.jpg';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';
import seo from '../images/offers/seo.svg';

import features from '../images/features/features.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import monitor from '../images/features/monitor.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

export default function google_advertising({ location }) {
  const headerText = "GOOGLE ADS"
  const subheader = "PAY-PER-CLICK (PPC) MANAGEMENT"
  const paragraph = "Google is the commonly used search engine across the worldwide web."
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


  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/google_advertising' />
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={digimark}
          imageClass="digitalmarkbanner"
        />
        <Flex
          pt="50px"
          pl="103px"
          alignItems="center"
        >
          <Box
            
          >
            <img src={google} alt="rocketpc.svg" style={{ borderRadius: "10px", width: "600px", height: "500px"}} />
          </Box>
          <Box
            className="digimark"
            w="50%"
            ml="70px"
          >
            <h3>
              Google Ads Pay-Per-Click (PPC) <br />
              Management
            </h3>
            <p>
              Google is head-and-shoulders above any other website as the most used search engine on the internet. 
              It has transcended itself from a brand to a verb, 
              which means to search and obtain information. If you don’t believe us, Google it!
              <br />
              <br />
              Google handles over 5 billion searches per day. By utilising Google Ads, your business will be displayed to people who are actively seeking out the products and services you provide. PPC means you only pay each time your ad is clicked by your prospective customers, meaning you only pay for results! Successful businesses recognise the benefits of Google Ads PPC in sending high-value traffic to their website.
            </p>
            <LearnMoreButton />
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
              Visual Group Digital as your Google Ads PPC Agency
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
          w="1200px"
          margin="auto"
        >
          <Box
            className="offerCards"
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
            className="offerCards"
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
              className="offerCards"
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
          w="100%"
          justifyContent="center"
          pt="60px"
          pb="110px"
        >
          <Bizbut />
        </Flex>
        <Flex
          pl="103px"
          flexDirection="row"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              Why <span>Visual Group Digital</span>
            </h3>
          </Box>
          <Box>
            <p
              className="whyus"
            >
              We, at Visual Group Digital, will help you with the 
              technical aspects and complexities <br /> of 
              Google Ads so you can optimize sales generation.
            </p>
          </Box>
        </Flex>
        <Box
          pl="103px"
        >
          <ReusableRanking 
            textArray={rankingArray}
          />
        </Box>
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



