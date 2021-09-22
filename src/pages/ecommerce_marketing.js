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


import ecom from '../images/ecom.png';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';

import features from '../images/features/features.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import monitor from '../images/features/monitor.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

export default function ecommerce_marketing({ location }) {
  const headerText = "GOOGLE ADS"
  const subheader = "PAY-PER-CLICK (PPC) MANAGEMENT"
  const paragraph = "Google is the commonly used search engine across the worldwide web."
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


  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/ecommerce_marketing' />
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
            className="digimark"
            w="50%"
          >
            <h3>
              E-Commerce or Digital Stores: <br />
              The Next Generation of Shopping
            </h3>
            <p>
              Successful companies have diversified from brick-and-mortar operations by opening E-commerce stores. 
              These commercial channels act as online shops open 24/7. Consumers, particularly those with a busy 
              lifestyle, find online shopping time-saving and convenient since they can make a purchase at the click 
              of a button. Amidst a sea of brands and ECommerce stores on the internet, what will you do to make your 
              brand stand out, drive more consumers to your site, and convert them into sales?
            </p>
            <LearnMoreButton />
          </Box>
          <Box
            ml="70px"
          >
            <img src={ecom} alt="rocketpc.svg" />
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
              Visual Group Digital as your E-Commerce Developer 
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
             Customise E-Store 
            </h3>
            <p>
              We will customise e-store features that will highlight your identity, whether as a single brand or multiple brands under one store.
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
          </Box>
          <Box
            className="offerCards"
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
              >
                BUSINESS ENQUIRY
              </button>
            </Flex>
          </Box>
          <Box
            className="offerCards"
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
              We, at Visual Group Digital, will help you design and develop an e-store that will optimise web traffic <br />
              (increase in consumer visits) and conversion rate (increase in transactions and amount spent).
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

