import React, { useEffect, useState, useRef } from 'react';
import { 
  Flex,
  Box
} from '@chakra-ui/react';

import logo from '../images/vgd.svg';
import send from '../images/send.svg';


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
          <li>
            <a 
              href={`/`}
              className={
              (key === '/') 
              ? "active"
              : null
            }
            >
              HOME
            </a>
          </li>
          <li>
            <a 
              href={`/about`}
              className={
              (key === '/about') 
              ? "active"
              : null
            }
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              href={`/digital_marketing`}
              className={
              (key === '/digital_marketing') 
              ? "active"
              : null
            }
            >
              MARKETING
            </a>
            <Box
              className="dropdown-content1"
            >
              <a
                href={'/digital_marketing'}
                className={
                  (key === '/digital_marketing') 
                  ? "activeSecondary"
                  : null
                }
              >
                Digital Marketing
              </a>
              <a
                href={'/ecommerce_marketing'}
                className={
                  (key === '/ecommerce_marketing') 
                  ? "activeSecondary"
                  : null
                }
              >
                E-Commerce Marketing
              </a>
              <a
                href={'/facebook_advertising'}
                className={
                  (key === '/facebook_advertising') 
                  ? "activeSecondary"
                  : null
                }
              >
                Facebook Advertising
              </a>
              <a
                href={'/google_advertising'}
                className={
                  (key === '/google_advertising') 
                  ? "activeSecondary"
                  : null
                }
              >
                Google Advertising
              </a>
              <a
                href={'/social_media_growth'}
                className={
                  (key === '/social_media_growth') 
                  ? "activeSecondary"
                  : null
                }
              >
                Social Media Growth
              </a>
              <a
                href={'/search_engine_optimization'}
                className={
                  (key === '/seo_opt') 
                  ? "activeSecondary"
                  : null
                }
              >
                Search Engine Optimisation
              </a>
            </Box>
          </li>
          <li>
            <a 
              href={`/digital_branding`}
              className={
                (key === '/digital_branding') 
                ? "active"
                : null
              }
            >
              BRANDING
            </a>
            <Box
              className="dropdown-content2"
            >
              <a
                href={`/digital_branding`}
                className={
                  (key === '/digital_branding') 
                  ? "activeSecondary"
                  : null
                }
              >
                Digital Branding
              </a>
              <a
                href={`/graphic_design`}
                className={
                  (key === '/graphic_design') 
                  ? "activeSecondary"
                  : null
                }
              >
                Graphic Design
              </a>
              <a
                href={`/web_development`}
                className={
                  (key === '/web_development') 
                  ? "activeSecondary"
                  : null
                }
              >
                Web Development
              </a>
            </Box>       
          </li>
          <li>
            <a 
              href={`/case_studies`}
              className={
              (key === '/case_studies') 
              ? "active"
              : null
            }
            >
              CASE STUDIES
            </a>
          </li>
          <li>
            <a 
              href={`/our_portfolio`}
              className={
              (key === '/our_portfolio') 
              ? "active"
              : null
            }
            >
              OUR PORTFOLIO
            </a>
          </li>
          <li>
            <a 
              href={`/contact`}
              className={
              (key === '/contact') 
              ? "active"
              : null
            }
            >
              CONTACT
            </a>
          </li>
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
