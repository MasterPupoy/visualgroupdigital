import React, { useEffect, useState, useRef } from 'react';
import { 
  Flex,
  Box
} from '@chakra-ui/react';

import logo from '../images/vgd.svg';
import send from '../images/send.svg';

import { gsap } from 'gsap';

import '../styles/navbar.css';

export default function Nav({ loc, page }) {
  
  const [key, setKey] = useState();
  const links = useRef();

  console.log(loc.pathname, key)
  
  useEffect(() => {
    
    let mounted = true;

    if(mounted){
      // const pathname = loc.pathname

      // switch(true){
      //   case (pathname === '/') : 
      //     setKey('/');
      //     break;
      //   case (pathname === '/about' || pathname === '/about/') :
      //     setKey('/about');
      //     break;
      //   case (pathname === '/marketing' || pathname === '/marketing/') : 
      //     setKey('/marketing');
      //     break;
      //   case (pathname === '/branding' || pathname === '/branding/') : 
      //     setKey('/branding');
      //     break;
      //   case (pathname === '/case_studies' || pathname === '/case_studies/') :
      //     setKey('/case_studies');
      //     break;
      //   case (pathname === '/portfolio' || pathname === '/portfolio/') : 
      //     setKey('/portfolio');
      //     break;
      //   case (pathname === '/contact' || pathname === '/contact/') : 
      //     setKey('/contact');
      //     break;
      //   default :
      //     return;
      // }

      gsap.fromTo(links.current, { opacity : 0 }, { opacity : 1, duration : 3})
      
      setKey(page)

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
      key : '/our_portfolio'
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
          ref={links}
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
