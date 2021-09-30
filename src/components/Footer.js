import React from 'react';
import {
  Box, 
  Flex,
  Input,
  Text
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
      tab : 'Home',
      key : '/'
    },
    {
      tab : 'About',
      key : '/about'
    },
    {
      tab : 'Portfolio',
      key : '/our_portfolio'
    },
    {
      tab : 'Contact',
      key : '/contact'
    }  
  ]

  const serviceslinks = [
     {
      tab : 'Marketing',
      key : '/marketing'
    },
    {
      tab : 'Branding',
      key : '/branding'
    },
    {
      tab : 'Case Studies',
      key : '/case_studies'
    },
    {
      tab : 'Portfolio',
      key : '/our_portfolio'
    }  
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
        flexWrap="wrap"
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
          flexWrap="wrap"
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
      </Flex>
      <Flex
        w="100%"
        pl="190px"
        pl={[
          "10px",
          "20px",
          "150px",
          "190px"
        ]}
        pt="132px"
        flexWrap="wrap"
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
          <img src={facebook} alt="facebooklogo.svg" style={{ height: "35px", width: "35px" }} />
          <img src={twitter} alt="twitter.svg" style={{ height: "45px", width: "45px" }} />
          <img src={insta} alt="instagram.svg" style={{ height: "45px", width: "45px" }} />
        </Box>
      </Flex>
      <Box
        className="footerrule"
      >
        <hr />
      </Box>
      <Flex
        mx={[
          "0px",
          "0px",
          "100px",
          "190px"
        ]}
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
