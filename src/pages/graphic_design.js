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
  const headerText = "GRAPHIC"
  const subheader = "DESIGN"
  const paragraph = "We cover a wide range of graphic design services to help you build the foundations of your brand such as logo designs, business stationery, social media banners, flyers and more."
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
        <Nav loc={location} page='/graphic_design' main="/branding" />
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
              Graphic Design
            </h3>
            <p>
              Graphic design is an essential part of what we do. 
              Without it, no companies would have any form of brand identity. 
              We cover a wide range of graphic design services to help you build 
              the foundations of your brand such as logo designs, business stationery, 
              social media banners, flyers, and more...
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
                Website Design
              </h3>
              <p>
                We provide you with an eye-catching website, which helps your customer enjoy a better experience and a more comfortable UI.
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Logo Design
              </h3>
              <p>
                We will design a logo that stands out and captures the essence of your business.
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Business Cards
              </h3>
              <p>
                We can design business cards to give you a strong first impression during in-person interactions.
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Social Media Banners
              </h3>
              <p>
                We can target audiences who are interested in your products and services through carefully designed social media banners that drive traffic to your site!
              </p>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Flyer / Poster / Leaflet Design
              </h3>
              <p>
                We can create posters, flyers, and leaflets that stand out and create a visual impact. 
              </p>
            </Box>
             <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                App Design Graphics
              </h3>
              <p>
                We can redesign apps to have a more professional and pleasing appearance.
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
        <StaticLogo />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
