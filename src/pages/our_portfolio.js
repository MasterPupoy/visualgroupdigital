import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import Ecom from '../components/Ecom';
import Fbads from '../components/Fbads';
import Webdev from '../components/Webdev';
import Googleads from '../components/Googleads';
import Socmed from '../components/Socmed';
import Seopt from '../components/Seopt';
import All from '../components/All';
import Graphics from '../components/Graphics';

import portfolio from '../images/Portfolio.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "react-awesome-lightbox/build/style.css";

import '../styles/our_portfolio.css';

gsap.registerPlugin(ScrollTrigger);

export default function Our_portfolio({ location }) {
  const [key, setKey] = useState("All");

  const headerText = "OUR"
  const subheader = "PORTFOLIO"
  const paragraph = "Below, you’ll find some of our favorite brands that we’ve worked with"
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"

  const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => { 
    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
 
  useEffect(() => {

    gsap.to(".ourwork", {
      scrollTrigger : {
        trigger: ".triggerport",
        start: "top center",
        scrub: 1
      },
      y: -400
    });

    gsap.to(".holder1", {
      scrollTrigger : {
        trigger: ".triggerport",
        start: "top center",
        scrub: 1
      },
      y: -400
    });

    gsap.to(".holder2", {
      scrollTrigger : {
        trigger: ".triggerport",
        start: "top center",
        scrub: 1
      },
      y: -300
    });

    gsap.to(".holder3", {
      scrollTrigger : {
        trigger: ".triggerport",
        start: "top center",
        scrub: 1
      },
      y: -200
    });

  });

  const buttons = [
    {
      title : "ALL",
      key: "All"
    },
    {
      title : "SOCIAL MEDIA MARKETING",
      key: "Social Media Marketing"
    },
    {
      title : "GOOGLE ADVERTISING",
      key: "Google Advertising"
    },
    {
      title : "FACEBOOK ADVERTISING",
      key: "Facebook Advertising"
    },
    {
      title : "WEBSITE DEVELOPMENT",
      key: "Website Development"
    },
    {
      title : "SEARCH ENGINE OPTIMISATION",
      key: "Search Engine Optimisation"
    },
    {
      title : "E-COMMERCE MARKETING",
      key: "E-Commerce Marketing"
    },
    {
      title: "GRAPHIC DESIGN",
      key: "Graphic Design"
    }
  ]

  const PortfolioContainer = () => {
    switch (key) {
      case "E-Commerce Marketing":
        return <Ecom />
        break;
      case "All":
        return <All />
        break;
      case "Facebook Advertising":
        return <Fbads />
        break;
      case "Website Development":
        return <Webdev />
        break;
      case "Google Advertising":
        return <Googleads />
        break;
      case "Social Media Marketing":
        return <Socmed />
        break;
      case "Search Engine Optimisation": 
        return <Seopt />
        break;
      case "Graphic Design":
        return <Graphics />
        break;
      default:
        break;
    }
  }

  return (
    <Box 
      className="main"
      overflowX="hidden"
    >
      <SEO />
 
      {
        (width > 1280) 
        ? <Nav loc={location} page='/our_portfolio' />
        : <MobileNav  page='/our_portfolio' />
      }
      <ReusableHero 
        header={headerText}
        subheader={subheader}
        paragraph={paragraph}
        image={portfolio}
        separated={false}
        imageClass="digitalmarkbanner"
      />
      <Flex
        mt="100px"
        px="50px"
        flexWrap="wrap"
        justifyContent="center"
      >
       {buttons.map(button => {
         return (
           <Box
            key={button.key}
            onClick={() => {
              setKey(button.key)
            }}
            mx="10px"
            borderBottom={(key === button.key) ? "3px solid #ee6f19" : null}
            _hover={{
              cursor: "pointer",
              borderBottom: "3px solid #ee6f19"
            }}
           >
            <Text
              fontFamily="dm-sans"
              fontSize={[
                "15px",
                "15px",
                "15px",
                "15px",
                "15px"
              ]}
              my="10px"
              fontWeight="bold"
              color={(key === button.key) ? "#ee6f19" : "#848484"}
            >
              {button.title}
            </Text>
           </Box>
         )
       })}
      </Flex>
      <Flex
        w="100%"
        justifyContent="center"
      >
        <PortfolioContainer />
      </Flex>
      <ReusableFooter 
        text={text}
      />
      <Footer />

    </Box>

  )
}
