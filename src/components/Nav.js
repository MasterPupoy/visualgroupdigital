import React from 'react';
import { 
  Flex,
  Box
} from '@chakra-ui/react';
import logo from '../images/vgd.svg';
import send from '../images/send.svg';
import '../styles/navbar.css';

export default function Nav() {
  return (
    <nav>
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <img src={logo} alt="visual_group_logo" className="logo" />
        </Box>
        <ul
          className="nav-list"
        >
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MARKETING</li>
          <li>BRANDING</li>
          <li>CASE STUDIES</li>
          <li>OUR PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
        <button
          // className="businessEnquiryButton"
          className="button button--aylen"
        >
          <img src={send} alt="send" className="send" />
          <span className="biz">BUSINESS ENQUIRY</span>
        </button>
      </Flex>      
    </nav>
  )
}
