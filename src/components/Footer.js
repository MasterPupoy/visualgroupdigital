import React from 'react';
import {
  Box, 
  Flex,
  Input
} from '@chakra-ui/react';

import message from '../images/message.svg';
import map from '../images/map.svg';

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import insta from '../images/insta.svg';
import logoline from '../images/logoline.svg';

import '../styles/footer.css';

export default function Footer() {
  const quicklinks = [
    {
      tab : 'HOME',
      key : '/'
    },
    {
      tab : 'ABOUT',
      key : '/about'
    },
    {
      tab : 'OUR PORTFOLIO',
      key : '/our_portfolio'
    },
    {
      tab : 'CONTACT',
      key : '/contact'
    }  
  ]

  const serviceslinks = [
     {
      tab : 'MARKETING',
      key : '/marketing'
    },
    {
      tab : 'BRANDING',
      key : '/branding'
    },
    {
      tab : 'CASE STUDIES',
      key : '/case_studies'
    },
  ]


  return (
    <Box
      w="100%"
      pt="77px"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Flex
          flexDirection="row"
          px="30px"
        >
          <Box>
            <img src={message} alt="message.svg" />
          </Box>
          <Box>
            <h5
              className="footertxt"
            >
              hello@visualgroup.online
            </h5>
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          px="30px"
        >
          <Box>
            <img src={map} alt="message.svg" />
          </Box>
          <Box>
            <h5
              className="footertxt"
            >
              Office based in Sevenoaks <br />
              &amp; Tunbridge Wells
            </h5>
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          px="30px"
        >
          <Box>
            <img src={map} alt="message.svg" />
          </Box>
          <Box>
            <h5
              className="footertxt"
            >
              Office based in Dubai, UAE
            </h5>
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          px="10px"
        >
          <Input 
            placeholder="Drop Your Email" 
            display="inline-block" 
            size="lg"
          />
          <button
            className="subscribe"
          >
            <span>SUBSCRIBE</span>
          </button>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        pl="190px"
        pt="132px"
      >
        <Box className="footerabout">
          <h3>
            About
          </h3>
          <p>
            At Visual Group Digital, we help businesses <br /> flourish by following a 
            comprehensive <br /> 3-step process of consulting, <br /> development, 
            and marketing.
          </p>
        </Box>
        <Box className="footerlist">
          <h3>
            Services
          </h3>
          <ul>
            <li>Marketing</li>
            <li>Branding</li>
            <li>Case Studies</li>
            <li>Portfolio</li>
          </ul>
        </Box>
        <Box className="footerlistservices">
          <h3>
            Community
          </h3>
          <ul>
            <li>What We do?</li>
            <li>Our process</li>
            <li>Company</li>
          </ul>
        </Box>
        <Box className="footerlist">
          <h3>
            Quick Links
          </h3>
          <ul>
            {quicklinks.map(link => {
              return (
                <li><a href={`${link.key}`}>{link.tab}</a></li>
              )
            })}
          </ul>
        </Box>
      </Flex>
      <Flex
        w="100%"
        pl="190px"
        pt="50px" 
      >
        <Box
          className="social"
        >
          <img src={facebook} alt="facebooklogo.svg" />
          <img src={twitter} alt="twitter.svg" />
          <img src={insta} alt="instagram.svg" />
          <img src={logoline} alt="logoline.svg" />
        </Box>
      </Flex>
      <Box
        className="footerrule"
      >
        <hr />
      </Box>
      <Flex
        mx="190px"
        justifyContent="space-between"
        my="20px"
      >
        <Box
          className="footerfoot"
        >
          <h3>
            All copyright reserved By Visual Group Digital 2021            
          </h3>
        </Box>
        <Box
          className="footerfoot"  
        >
          <h3>
            Terms &amp; Conditons
          </h3>
        </Box>
      </Flex>
    </Box>
  )
}
