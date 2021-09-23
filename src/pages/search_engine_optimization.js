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


import seopic from '../images/seopic.png';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import seo from '../images/offers/seo.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';
import socmed from '../images/offers/socmed.svg';
import graphics from '../images/offers/graphics.svg';

import check from '../images/check.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import monitor from '../images/features/monitor.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';


import '../styles/socmedgrowth.css';
import ReusableRanking from '../components/ReusableRanking';

export default function search_engine_optimization({ location }) {
  const headerText = "ORGANIC SOCIAL"
  const subheader = "MEDIA GROWTH"
  const paragraph = "Social Media is the most used platform by a vast audience of diverse market profile."
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
        <Nav loc={location} page='/social_media_growth' main="/marketing" />
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
              Search Engine Optimisation (SEO): <br/>
              An Organic Way to Reach Your Target Audience
            </h3>
            <p>
              SEO is all about increasing your website’s visibility in search engines by improving your rankings. 
              When done right, SEO can boost your web traffic organically, leading to increases in customers and sales.
            </p>
            <LearnMoreButton />
          </Box>
          <Box
            ml="70px"
          >
            <img src={seopic} alt="rocketpc.svg" style={{ borderRadius: "10px", }} />
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
              Visual Group Digital as your <br />
              SEO Specialist
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
            className="widerCards2"
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
            className="widerCards2"
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
            className="widerCards2"
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
            className="widerCards2"
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
            className="widerCards2"
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
            className="widerCards2"
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
             We, at Visual Group Digital, will optimise your website content 
             with <br /> top-searched and relevant keywords. <br />
             We will analyse all aspects of your website and upgrade 
             the portions <br /> that would benefit from improvements.
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




