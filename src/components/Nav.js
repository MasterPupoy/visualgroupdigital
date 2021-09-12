import React, { useEffect, useState } from 'react';
import { 
  Flex,
  Box
} from '@chakra-ui/react';
import logo from '../images/vgd.svg';
import send from '../images/send.svg';
import '../styles/navbar.css';

export default function Nav({ loc }) {
  
  const [key, setKey] = useState();

  console.log(loc.pathname, key)
  
  useEffect(() => {
    
    let mounted = true;

    if(mounted){

      switch(loc.pathname){
        case ('/') : 
          setKey('/');
          break;
        case ('/about' || '/about/') :
          setKey('/about');
          break;
        case ('/marketing' || '/marketing/') : 
          setKey('/marketing');
          break;
        case ('/branding' || '/branding/') : 
          setKey('/branding');
          break;
        case ('/case_studies' || '/case_studies/') :
          setKey('/case_studies');
          break;
        case ('/portfolio' || '/portfolio/') : 
          setKey('/portfolio');
          break;
        case ('/contact' || '/contact/') : 
          setKey('/contact');
          break;
        default :
          return;
      }
    }

    return () => {
      mounted = false;
    }

  })
  
  const tabs = [
    {
      tab : 'HOME',
      key : '/'
    },
    {
      tab : 'ABOUT',
      key : '/about'
    },
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
    {
      tab : 'OUR PORTFOLIO',
      key : '/portfolio'
    },
    {
      tab : 'CONTACT',
      key : '/contact'
    }
  ]
  
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
          {tabs.map((tab) => {

            return (
              <li
                key={tab.key}
              >
                <a 
                  href={`${tab.key}`}
                  className={
                  (key === tab.key) 
                  ? "active"
                  : null
                }
                >
                  {tab.tab}
                </a>
              </li>
            )
          })}
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
