import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';

import casestudies from '../images/features/casestudies.png';

import '../styles/our_portfolio.css';

export default function our_portfolio({ location }) {
  const headerText = "OUR"
  const subheader = "PORTFOLIO"
  const paragraph = "Below, you’ll find some of our favorite brands that we’ve worked with"
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"


  return (
    <Box className="main">
      <SEO />
      <Box>
        <Nav loc={location} page='/our_portfolio' />
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={casestudies}
          separated={false}
          imageClass="casebanner"
        />
        <Flex>
          <Box>
            <a>WEBSITE DESIGN</a>
            <a>WEBSITE DEVELOPMENT</a>
            <a>E-COMMERCE MARKETING</a>
            <a>GRAPHIC DESIGNS</a>
            <a>SOCIAL MEDIA MARKETING</a>
          </Box>
          <Box>
            <a>FACEBOOK AD COPY</a>
          </Box>
        </Flex>
        <StaticLogo />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
