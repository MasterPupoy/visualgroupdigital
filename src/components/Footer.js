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
      key : '/digital_marketing'
    },
    {
      tab : 'Branding',
      key : '/digital_branding'
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

  const communitylinks = [
     {
      tab : 'What We do?',
      key : '/about'
    },
    {
      tab : 'Our Work',
      key : '/case_studies'
    },
    {
      tab : 'Company',
      key : '/our_portfolio'
    },
  ]


  return (
    <Box
      w="100%"
      pt="77px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px={[
          "10px",
          "10px",
          "70px",
          "100px",
          "100px"
        ]}
        flexWrap="wrap"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          py="20px"
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
          alignItems="center"
          py="20px"
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
          alignItems="center"
          flexWrap="wrap"
          py="20px"
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
        px={[
          "10px",
          "20px",
          "100px",
          "100px"
        ]}
        pt={[
          "50px",
          "50px",
          "100px",
          "100px",
          "100px"
        ]}
        flexWrap="wrap"
      >
        <Box className="footerabout" 
          w={[
            "100%",
            "100%",
            "50%",
            "25%",
            "25%"
          ]}
        >
          <h3>
            About
          </h3>
          <p>
            At Visual Group Digital, we help businesses <br /> flourish by following a 
            comprehensive <br /> 3-step process of consulting, <br /> development, 
            and marketing.
          </p>
        </Box>
        <Box className="footerlist"
           w={[
            "100%",
            "100%",
            "50%",
            "25%",
            "25%"
          ]}
          py="20px"
        >
          <h3>
            Services
          </h3>
          <ul>
            {serviceslinks.map((link) => {
              return (
                <li key={link.key} ><a href={`${link.key}`}>{link.tab}</a></li>
              )
            })}
          </ul>
        </Box>
        <Box className="footerlistservices"
           w={[
            "100%",
            "100%",
            "50%",
            "25%",
            "25%"
          ]}
          py="20px"
        >
          <h3>
            Community
          </h3>
          <ul>
            {communitylinks.map(link => {
              return (
                <li key={link.key} ><a href={`${link.key}`}>{link.tab}</a></li>
              )
            })}
          </ul>
        </Box>
        <Box className="footerlist"
           w={[
            "100%",
            "100%",
            "50%",
            "25%",
            "25%"
          ]}
          py="20px"
        >
          <h3>
            Quick Links
          </h3>
          <ul>
            {quicklinks.map(link => {
              return (
                <li key={link.key} ><a href={`${link.key}`}>{link.tab}</a></li>
              )
            })}
          </ul>
        </Box>
      </Flex>
      <Flex
        w="100%"
        px={[
          "50px",
          "50px",
          "70px",
          "100px",
          "100px"
        ]}
        pt="50px" 
      >
        <Box
          className="social"
        >
          <a
            href="https://www.facebook.com/visualgrouponlineltd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebooklogo.svg" style={{ height: "35px", width: "35px",  cursor: "pointer"  }} />
          </a>
          <a
          
          >
            <img src={twitter} alt="twitter.svg" style={{ height: "30px", width: "30px",  cursor: "pointer" }} />
          </a>
          <a
            href="https://www.instagram.com/visualgroupdigitalltd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="instagram.svg" style={{ height: "30px", width: "30px", cursor: "pointer" }} />
          </a>
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
          "100px"
        ]}
        justifyContent="space-between"
        my="20px"
      >
        <Box
          className="footerfoot"
        >
          <h3>
            All copyright reserved By Visual Group Digital &copy; 2021            
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
