import React from 'react'

import { 
  Flex, 
  Box 
} from '@chakra-ui/react';

import digitalMarketing from '../images/offers/digital_marketing.svg';
import digitalBranding from '../images/offers/digitalbranding.svg';
import eCommerce from '../images/offers/e-commerce.svg';
import facebookAds from '../images/offers/facebookads.svg';
import googleAds from '../images/offers/googleads.svg';
import graphics from '../images/offers/graphics.svg';
import seo from '../images/offers/seo.svg';
import socmed from '../images/offers/socmed.svg';
import webdev from '../images/offers/webdev.svg';

import LearnMoreButton from './LearnMoreButton';

import '../styles/cardoffers.css';

export default function OfferCard() {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      pt="63px"
    >

      <Box
        className="offerCards"
      >
        <img src={digitalMarketing} alt="digitalmarketing.svg" />
        <h3>
          Digital Marketing
        </h3>
        <p>
          As you gain more visibility, a revenue-generating domino effect begins. 
          With increased visibility, your credibility increases, your visitors 
          increase, and your sales increase! We’re a results-oriented agency that 
          will get you on page one for all your top keyword searches.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
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
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
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
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
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
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
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
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
      >
        <img src={seo} alt="digitalmarketing.svg" />
        <h3>
          Search Engine Optimization 
        </h3>
        <p>
          Small to medium businesses have recognised the advantages of Social Media Marketing (SMM), specifically Facebook, to reach their target market in a cost-effective way.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
      >
        <img src={graphics} alt="digitalmarketing.svg" />
        <h3>
          Graphic Design
        </h3>
        <p>
        Graphic design is an essential part of marketing, branding, and business in general. Without it, no companies would lose valuable differentiation and loyalty!
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
      >
        <img src={webdev} alt="digitalmarketing.svg" />
        <h3>
          Web Development
        </h3>
        <p>
         Your web design greatly affects your audiences’ perception of your brand. Your website could be a potential customer’s first impression of your company.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton />
        </Flex>
      </Box>
       <Box
        className="offerCards"
      >
        <img src={digitalBranding} alt="digitalmarketing.svg" />
        <h3>
          Digital Branding
        </h3>
        <p>
        Branding is all about creating memorable, positive impressions to capture and engage your target audience for favorable results and sales growth.
        </p>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <LearnMoreButton />
        </Flex>
      </Box>
    </Flex>
  )
}
