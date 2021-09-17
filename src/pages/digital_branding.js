import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';

import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import ReusableRanking from '../components/ReusableRanking';
import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';

import branding from '../images/branding.png';
import brandingpic2 from '../images/brandingpic2.png';
import brandingpic3 from '../images/brandingpic3.png';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';

import '../styles/digital_branding.css';

export default function digital_branding({ location }) {
  const headerText = "BRAND"
  const subheader = "DEVELOPMENT"
  const paragraph = "At Visual Group Digital, we’ll make your brand come to life on digital platforms through a creative and targeted approach."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "Ideal Client Discovery",
      para: "We’ll conduct research to discover the customers that resonate most with your product and service offerings.",
      classes: "rrfirstclass",
      img: hex,
    },
    {
      num: 2,
      header: "Brand Messaging",
      para: "Before we get your message out to the world, we’ll make sure you have the right message to tell!",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "Brand Positioning",
      para: "Your brand will be evaluated against other brands in your industry to see where your true competitors are.",
      classes: "rrfirstclass",      
      img: barchart,
    },
    {
      num: 4,
      header: "Brand Identity",
      para: "We’ll work with you to carve out a unique identity that your company can own and your customers can remember.",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 5,
      header: "Ideal Client Discovery",
      para: "Your brand becomes what your customers think about the competition in your brand industry.",
      classes: "rrfirstclass",
      img: medal 
    },
    {
      num: 6,
      header: "Brand Inspiration",
      para: "We’ll work with you to design a brand around the things that inspire you and your customers.",
      classes: "rrsecondclass",
      img: brush,
    }
  ]

  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/digital_branding' />
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={branding}
          imageClass="digitalbrandbanner"
        />
        <Flex
          pt="50px"
          pl="103px"
          alignItems="center"
        >
          <Box
            className="digibrand"
            w="50%"
          >
            <h3>
              What is your BRAND?
            </h3>
            <p>
            Whether it’s an individual, product, or company, 
            branding is the most essential part in crafting an
            identity. Branding is all about creating memorable, 
            positive impressions to capture and engage your target 
            audience for favorable results and sales growth.
            </p>
            <button
              // className="businessEnquiryButton"
              className="button button--aylen"
            >
              <span className="biz">BUSINESS ENQUIRY</span>
            </button>
          </Box>
          <Box
            ml="70px"
          >
            <img src={brandingpic2} alt="rocketpc.svg" />
          </Box>
        </Flex>
        <Flex
          pt="50px"
          pl="103px"
          alignItems="center"
        >
          <Box>
            <img src={brandingpic3} alt="rocketpc.svg" />
          </Box>
          <Box
            className="digibrand"
            w="50%"
            ml="70px"
          >
            <h3>
              What is your BRAND?
            </h3>
            <p>
            Whether it’s an individual, product, or company, 
            branding is the most essential part in crafting an
            identity. Branding is all about creating memorable, 
            positive impressions to capture and engage your target 
            audience for favorable results and sales growth.
            </p>
            <button
              // className="businessEnquiryButton"
              className="button button--aylen"
            >
              <span className="biz">BUSINESS ENQUIRY</span>
            </button>
          </Box>
        </Flex>
        <Box
          mt="210px"
          ml="100px"
          overflowX="scroll"
          className="brandingslider"
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
                Your Corporate Identity and Business Goals
              </h3>
              <p>
                As a company, what do you want to achieve? We, at Visual Group Digital, will take an in-depth study on your business goals, your present business status, and the gap that we have to bridge by designing the perfect brand image and identity.
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
              Your Market
              </h3>
              <p>
                What motivates the consumers in your market? What are their preferences and what do they think of your brand? Who are your captured market and why do they patronize your brand? 
                <br/>
                <br/>
                To build the perfect persona for your brand, we, at Visual Group Digital, will explore different ways to understand the market, find out the expectations of consumers, and discover brand elements that appeal to them both visually and psychologically.
                <br/>
                <br/>
                Then, we’ll create strategies to grow your audience engagement, market share, positive customer experience, and brand loyalty, leading to an increase in sales and ROI.
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
              Your Competitors and Industry
              </h3>
              <p>
                Who are your competitors? What are they up to? What is the trend in the industry? At Visual Group Digital, we’ll study your “game field” to give us a better idea on how we will “play.” In designing your brand, we will consider what works and what doesn’t in the industry. With this approach, we can achieve better success rates!    
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
              Your Brand Design
              </h3>
              <p>
                With all of the above as references, we will design the visual elements of your brand.
                Brand Logo
                Brand Tagline
                Brand Description
                Corporate Vision, Mission and Values
                Website Content

                All elements including graphics, fonts, colors and keywords, must be significant and consistent with what your brand stands for.
              </p>
            </Box>
          </Flex>
        </Box>
        <Flex
          pl="103px"
          flexDirection="row"
          mt="100px"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              Imagine Your ideal <span>BRAND</span>              
            </h3>
          </Box>
          <Box>
            <p
              className="whyus"
            >
              Our job is to transform your present brand into the one you wish you had!
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
        <Box>
          <Box
            pl="100px"
            pt="200px"
          >
            <h3
              className="addlogo"
            >
              WE WOULD <span>LOVE</span> TO <br/>
              ADD YOUR LOGO HERE.
            </h3>
            <p>
              We’ve worked with more than 100 companies since 2015 Check out some of the <br />
              fantastic clients we have brought to the UK and International Markets.
            </p>
          </Box>
        </Box>
        <StaticLogo />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
