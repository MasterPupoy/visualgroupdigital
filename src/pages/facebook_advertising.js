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


import fblogo from '../images/fblogo.jpg';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';
import seo from '../images/offers/seo.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';

import features from '../images/features/features.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import monitor from '../images/features/monitor.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';

import '../styles/digital_marketing.css';
import ReusableRanking from '../components/ReusableRanking';

export default function facebook_advertising({ location }) {
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


  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/facebook_advertising' />
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
            w="700px"
          >
            <h3>
              Facebook Ad Placements
            </h3>
            <p>
              Facebook, with a user base of over 2 billion accounts, is the most popular social media network worldwide.
              Research shows that in the UK alone, Facebook’s active users have reached almost 45 million, topping the 
              list of most popular social media networks in the country.
              <br />
              <br />
              Many small to medium businesses have recognised the advantages of Social Media Marketing (SMM), specifically Facebook,
               in reaching their target consumer market in a cost-effective way. Building an organic following and running paid ads 
               are two popular methods for increasing revenue that we can help you with! 
            </p>
            <LearnMoreButton />
          </Box>
          <Box
            ml="70px"
          >
            <img src={fblogo} alt="rocketpc.svg" style={{ borderRadius: "10px", width: "550px", height: "400px"}} />
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
              Visual Group Digital as your Facebook Ad Agency
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
            className="biggerCards"
            h="600px"
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
            className="biggerCards"
            h="600px"
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
              className="biggerCards"
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
            className="biggerCards"
          >
            <img src={digitalBranding} alt="digitalmarketing.svg" />
            <h3>
              Account and Campaign Management
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
                  Monitor customer engagement and interaction from organic posts.
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
            className="biggerCards"
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
              We, at Visual Group Digital, will help you increase your brand’s visibility, <br /> 
              fan base, and overall engagement from Facebook users. We will help you optimise <br />
              Facebook as a digital marketing channel to contribute to your growth in order size <br /> 
              and number of orders.
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


