import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';

import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import Slideshow from '../components/Slideshow';
import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import Bizbut from '../components/Bizbut';


import rocketpc from '../images/rocketpc.png';
import digimark from '../images/digimark.png';

import line1 from '../images/line1.svg';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';

import features from '../images/features/features.svg';

import '../styles/digital_marketing.css';

export default function marketing({ location }) {
  const headerText = "DIGITAL MARKETING"
  const subheader = "SERVICES"
  const paragraph = "We will get you on page one for all your top keyword searches for your business."
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/digital_marketing' />
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
              Digital Marketing
            </h3>
            <p>
              As you gain more visibility, your number of visitors will 
              increase and help you gain the best marketing results 
              with our SEO services. We will get you on page one for 
              all your top keyword searches for your business.
            </p>
            <LearnMoreButton />
          </Box>
          <Box
            ml="70px"
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
          pl="103px"
          flexDirection="row"
        >
          <Box>
            <h3
              className="digimarkfeatures"
            >
              WHY <span>US?</span>
            </h3>
          </Box>
          <Box>
            <p
              className="whyus"
            >
              At Visual Group Digital, we specialise in helping
              businesses introduce their brand, <br /> 
              connect with their target audience, and develop an effective marketing strategy.
            </p>
          </Box>
        </Flex>
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
        <Slideshow />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
