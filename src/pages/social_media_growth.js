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


import socmedgrowth from '../images/socmedgrowth.jpg';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import seo from '../images/offers/seo.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';
import socmed from '../images/offers/socmed.svg';

import check from '../images/check.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import monitor from '../images/features/monitor.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';


import '../styles/socmedgrowth.css';
import ReusableRanking from '../components/ReusableRanking';

export default function social_media_growth({ location }) {
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
        <Nav loc={location} page='/social_media_growth' />
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
            <img src={socmedgrowth} alt="rocketpc.svg" style={{ borderRadius: "10px", }} />
          </Box>
          <Box
            className="digimark"
            w="50%"
            ml="70px"
          >
            <h3>
              Organic Social Media
            </h3>
            <p>
              <strong>Social Media platforms are among the most used sites on the internet.</strong> Social media activities like posting photos, 
              viewing influencer posts, and browsing through news feeds are a daily routine for a growing number of people.
              <br />
              <br />
              Organic Social Media allows an individual or entity to post any content they want, free of charge. Businesses use Organic Social Media to advertise free promotions, create more brand awareness and visibility, strengthen their market positioning, widen their audience and consumer base, and increase engagement with their customers!
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
              Visual Group Digital as your <br />
              Organic Social Media Specialist
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
            className="widerCards"
          >
            <img src={digitalMarketing} alt="digitalmarketing.svg" />
            <h3>
             Your Profile
            </h3>
            <p>
              When people search for you on the web, search engines like Google display your website and social media profiles. This is where your new and prospective customers get their first impression of your business. 
              <br/>
              <br/>
              Will your profile leave a lasting impression? Will they want to know more about you?
              Visual Group’s Digital team of experts will improve different aspects of your profile to make it more visible and impressive.
              <ul
                className="socmedgrowthlist"
              >
                <li>
                  <img src={check} alt="check.svg" /> Strong brand logo
                </li>
                 <li>
                  <img src={check} alt="check.svg" /> High quality pictures and graphics
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Easy to recall username
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Website link
                </li>
                <li>
                  <img src={check} alt="check.svg" /> Call to action buttons
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
            className="widerCards"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            <h3>
              Right Social Media Platform
            </h3>
            <p>
              Who is your target audience? What Social Media Platforms are they using? These may be generated through a survey or through share counts of your website link. If your goal is to widen your reach, to what audience profile will you advertise? What platform do your competitors use that give them the advantage?
              We will help you choose the right social media platform by matching your business to the correct target audience and demographics on each platform.
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
            <h3>
              Right Timing
            </h3>
            <p>
             Depending on your target audience and social media platform, we will find the right schedule to publish your posts to receive more views and engagement. 
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
            <h3>
              Target Audience
            </h3>
            <p>
              All elements of your social media profiles will be focused on your target audience. We will take into consideration their location, gender, age, status, education, language, interests, and frequency of posts.
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
            className="widerCards"
          >
            <img src={eCommerce} alt="digitalmarketing.svg" />
            <h3>
              Audience Interaction
            </h3>
            <p>
              How you connect with your audience reflects your level of customer service. 
              You have to engage with your customers, respond to their comments and queries, 
              and address their problems. 
              <br />
              <br />
              We will help you build a reputation for your brand 
              by appearing trustworthy and competent. When you’ve established brand loyalty 
              and a positive relationship with your audience, they will market and endorse your 
              business to their friends and connections for free!
              <br />
              <br />
              We, at Visual Group Digital, will strengthen your brand identity through various social media platforms. Our goal is to help you connect with your potential customers and solidify a positive relationship with them.
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
            className="widerCards"
          >
            <img src={seo} alt="digitalmarketing.svg" />
            <h3>
              Smart, Relevant &amp; Engaging Content
            </h3>
            <p>
              We believe in quality over quantity to increase a brand’s reach. 
              We post content that adds value to a customer’s day and triggers
              audience engagement. We mix photos, videos, links, short write-ups 
              and status updates to make your content interesting and relevant 
              to your audience. We plan your posts ahead of time to prevent 
              repetition and ensure variety of content.
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
              At Visual Group Digital, we specialise in helping businesses introduce their brand, <br />
              connect with their target audience, and develop an effective marketing strategy.
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




