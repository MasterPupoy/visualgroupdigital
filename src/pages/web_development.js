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
import webdevelopment from '../images/webdevelopment.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';

import hex from '../images/features/hex.svg';
import barchart from '../images/features/barchart.svg';
import medal from '../images/features/medal.svg';
import brush from '../images/features/brush.svg';

import '../styles/digital_branding.css';

export default function web_development({ location }) {
  const headerText = "WEB"
  const subheader = "DEVELOPMENT"
  const paragraph = "We, at Visual Group Digital, will be your technology partner in building a bespoke website to establish your brand presence in the worldwide web."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const rankingArray = [
    {
      num: 1,
      header: "HIGH-END SITE DESIGN",
      para: "As you gain more visibility, the number of website visitors increases and helps you to gain the best marketing results through our SEO services.",
      classes: "rrfirstclass",
      img: hex,
    },
    {
      num: 2,
      header: "LANDING & SALES PAGE",
      para: "We will get you one page one for all your top keyword searches for your business",
      classes: "rrsecondclass",
      img: barchart,
    },
    {
      num: 3,
      header: "FULL FUNNEL DESIGN & SET UP",
      para: "We can target audiences who are interested in your products and services through which you’ll be able to get higher generating revenue customers",
      classes: "rrfirstclass",      
      img: barchart,
    },
    {
      num: 4,
      header: "HIGH INCOME",
      para: "We’ll help you to Increase targeted leads which will make it easier for customers to pay for those leads.",
      classes: "rrsecondclass",
      img: barchart,
    },
  ]

  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/web_development' main="/branding" />
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={branding}
          separated={false}
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
              Website Development: <br />
              Your Gateway to an Impressive Online Customer Experience
            </h3>
            <p>
              Your web design greatly affects your audience’s perception of your brand. 
              Their impression of your website can either glue potential customers to your 
              page or drive them away in an instant! Invest in a strong web presence to keep 
              customers interested in your site rather than competitors' sites.
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
            <img src={webdevelopment} alt="rocketpc.svg" />
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
                Web Design
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
               Business Solutions
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Third Party API Integration &amp; Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                REST Based Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Technology &amp; Frameworks
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                .Net Framework
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Java Framework
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Scala Framework
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
               PHP Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                JavaScript Development
              </h3>
            </Box>
            <Box
              className="slidercards"
              w="670px"
              mx="80px"
            >
              <h3>
                Big Data Capabilities
              </h3>
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
              Web Services
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
             Web Design
            </h3>
            <p>
              We will create dynamic and well-crafted websites with user-friendly designs, strong coding, and intuitive navigation. This will connect you to your customers on any device and any browser, providing them with an impressive online customer experience.
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
             Business Solutions
            </h3>
            <p>
              Whatever your purpose may be, we will customise your website according to your specifications. Whether you are looking for B2B, B2C, Bespoke Shopping Cart Development, Payment Gateway Integration, or an online portal to connect to your multiple stores and departments, we can get it done!
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
              Third Party API Integration &amp; Development
            </h3>
            <p>
              Visual Group’s Digital team of experts will provide your requirements for payment gateways, data scraping, API tracking for third party integration, and more.
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
              REST Based Development
            </h3>
            <p>
              We will develop multi-layer architecture to decouple services via REST interfaces. We offer web interface connection to a mobile platform and other integration services.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Technology &amp; Frameworks
            </h3>
            <p>
              We will use the best tools for your website application and put you ahead of your competition.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              .Net Framework
            </h3>
            <p>
              Offers interoperability across multiple programming languages, mostly for the Windows platform.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Java Framework
            </h3>
            <p>
              Provides rapid development and complete flexibility of use.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
            Scala Framework
            </h3>
            <p>
              Used to develop the most elaborate commercial software with a statically typed out language that has both functional and object-oriented programming concepts.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              PHP Development
            </h3>
            <p>
              Creates dynamic web pages and domain-specific solutions through a trusted general-purpose language.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              JavaScript Development
            </h3>
            <p>
              Used to design clear structures,implement intuitive site architecture, and provide easily recognisable links to a universal platform.
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
            <img src={facebookAds} alt="digitalmarketing.svg" />
            <h3>
              Big Data Capabilities
            </h3>
            <p>
              Provides in-depth analysis and management of data, regardless of complexities and volume.
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

