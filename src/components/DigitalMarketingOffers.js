import React, { useEffect } from 'react'

import { 
  Flex, 
  Box 
} from '@chakra-ui/react';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';
import googleAds from '../images/offers/googleads.svg';
import seo from '../images/offers/seo.svg';
import socmed from '../images/offers/socmed.svg';

import LearnMoreButton from './LearnMoreButton';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DigitalMarketingOffers() {

  useEffect(() => {

    let offercardstl = gsap.timeline({ scrollTrigger: {
      trigger: ".offercardscontainer",
      start: "top bottom",
    }})

    offercardstl.fromTo(".ofc1", {
    x: 300,
    opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ofc2", {
    x: 500,
    opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, 0.5)
    .fromTo(".ofc3", {
    x: 700,
    opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, 0.5)

    let offercardstl2 = gsap.timeline({ scrollTrigger: {
      trigger: ".ofc3",
      start: "bottom center",
    }})

    offercardstl2.fromTo(".ofc4", {
    x: 300,
    opacity: 0 
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ofc5", {
    x: 500,
    opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, 0.5)
    .fromTo(".ofc6", {
    x: 700,
    opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, 0.5)

    let offercardstl3 = gsap.timeline({ scrollTrigger: {
      trigger: ".ofc6",
      start: "bottom center",
    }})

    offercardstl3.fromTo(".ofc7", {
      x: 300,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1})
    .fromTo(".ofc8", {
      x: 500,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, 0.5)
    .fromTo(".ofc9", {
      x: 700,
      opacity: 0
    }, { duration: 0.25, x: 0, opacity: 1}, 0.5)

  })

  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      pt="63px"
      w="100%"
      className="offercardscontainer"
      overflowX="hidden"
    >
      <Box
        className="offerCards1 ofc1"
      >
        <img src={digitalMarketing} alt="digitalmarketing.svg" />
        <h3>
          Digital Marketing
        </h3>
        <p>
          As you gain more visibility, a revenue-generating domino effect begins. 
          With increased visibility, your credibility increases, your visitors 
          increase, and your sales increase! We’re a results-oriented agency 
          that will get you on page one for all your top keyword searches.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton link="/digital_marketing" />
        </Flex>
      </Box>
      <Box
        className="offerCards ofc2"
      >
        <img src={eCommerce} alt="digitalmarketing.svg" />
        <h3>
          E-commerce
        </h3>
        <p>
         Successful companies have diversified from brick-and-mortar operations by opening E-commerce stores. These commercial channels act as online shops open 24/7.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton link="/ecommerce_marketing" />
        </Flex>
      </Box>
       <Box
        className="offerCards ofc3"
      >
        <img src={facebookAds} alt="digitalmarketing.svg" />
        <h3>
          Facebook Advertising
        </h3>
        <p>
         Small to medium businesses have recognised the advantages of Social Media Marketing (SMM), specifically Facebook, to reach their target market in a cost-effective way.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton link="/facebook_advertising" />
        </Flex>
      </Box>
       <Box
        className="offerCards1 ofc4"
      >
        <img src={googleAds} alt="digitalmarketing.svg" />
        <h3>
          Google Advertising
        </h3>
        <p>
          As you gain more visibility, a revenue-generating domino effect begins. With increased visibility, your credibility increases, your visitors increase, and your sales increase! We’re a results-oriented agency that will get you on page one for all your top keyword searches.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton link="/google_advertising" />
        </Flex>
      </Box>
       <Box
        className="offerCards ofc5"
      >
        <img src={socmed} alt="digitalmarketing.svg" />
        <h3>
          Social Media Growth
        </h3>
        <p>
         Successful companies have diversified from brick-and-mortar operations by opening E-commerce stores. These commercial channels act as online shops open 24/7.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton link="/social_media_growth" />
        </Flex>
      </Box>
       <Box
        className="offerCards ofc6"
      >
        <img src={seo} alt="digitalmarketing.svg" />
        <h3>
          Search Engine Optimisation 
        </h3>
        <p>
          Small to medium businesses have recognised the advantages of Social Media Marketing (SMM), specifically Facebook, to reach their target market in a cost-effective way.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton link="/search_engine_optimisation" />
        </Flex>
      </Box>
    </Flex>
  )

}
