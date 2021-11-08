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
import StaticLogo from '../components/StaticLogo';

import expertapps from '../images/caseport/expertapps.png';
import hello from '../images/caseport/hello.jpg';
import hofs from '../images/caseport/hofs.jpg';
import mane from '../images/caseport/mane.jpg';
import oxted from '../images/caseport/oxted.jpg';
import slynot from '../images/caseport/slynot.jpg';
import subfrantic from '../images/caseport/subfrantic.jpg';
import delish from '../images/caseport/delishz.png';

import portfolio from '../images/Portfolio.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "react-awesome-lightbox/build/style.css";

import '../styles/our_portfolio.css';
import LearnMoreButton from '../components/LearnMoreButton';

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
        mb="50px"
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
            my="10px"
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
                "13px",
                "13px",
                "13px",
                "13px",
                "13px"
              ]}
              my="5px"
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
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="100px"
      >
        <Box>
          <h3
            className="casefeatures"
          >
            CASE <span>STUDIES</span>              
          </h3>
        </Box>
        <Box
          px="100px"
          pt="20px"
        >
          <p
            className="casesmaller"
          >
            Below, you’ll find some of our favorite brands that we’ve worked with. In every case, Visual Group Digital had a significant impact on marketing strategies, conversions, brand identity, and performance. If you work with us, you can expect the same level of quality, effort, and attention to detail put into your company.
          </p>
        </Box>
      </Flex>
      <Cases />
      <Flex
        w="100%"
        justifyContent="center"
        py="10px"
      >
        <Box>
          <button
          // className="businessEnquiryButton"
          className="button button--aylen"
          onClick={() => {
            window.location.assign('/case_studies');
          }}
      
        >
          <span className="biz">GO TO CASE STUDIES</span>
        </button>
        </Box>
      </Flex>
      <StaticLogo />
      <ReusableFooter 
        text={text}
      />
      <Footer />

    </Box>

  )
};


function Cases(){
  return (
    <Flex
      px="7%"
      mt="100px"
      flexDirection="column"
    >
      <Flex
        className="caseportContainer"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        w="100%"
        py="5%"
        my="2%"
      >
        <Box
          w="50%"
          textAlign="center"
        >
          <img src={delish} alt="delishus" style={{ borderRadius: "10px"}} />
        </Box>
        <Flex
          alignItems="center"
          flexDirection="column"
        >
          <Text
            py="10px"
            fontSize="25px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
            color="#0A2F53"
          >
            SODELISHUS
          </Text>
          <Text
            py="10px"
            fontSize="20px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
          >
            Health-Focused Baking
          </Text>
          <a 
            href="https://www.sodelishus.co.uk/" 
            target="_blank"
            style={{
              color: "#EE6F19"
            }}
          >
            https://www.sodelishus.co.uk/
          </a>
          <Text
            py="10px"
            fontSize="18px"
            textAlign="center"
          >
            Sodelishus is a health-focused food company
          </Text>
          <Flex
            py="10px"
            w="100%"
            justifyContent="center"
          >
            <LearnMoreButton link="/case_studies/sodelishus" />
          </Flex>
        </Flex>
      </Flex>
       <Flex
        className="caseportContainer"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        my="2%"
        w="100%"
        py="5%"
      >
        <Box
          w="50%"
          textAlign="center"
        >
          <img src={oxted} alt="delishus" style={{ borderRadius: "10px"}} />
        </Box>
        <Flex
           alignItems="center"
          flexDirection="column"
        >
          <Text
            py="10px"
            fontSize="25px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
            color="#0A2F53"
          >
            OXTED
          </Text>
          <Text
            py="10px"
            fontSize="20px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
          >
            Oxted Festival
          </Text>
          <a 
            href="https://www.oxtedfest.co.uk/" 
            target="_blank"
            style={{
              color: "#EE6F19"
            }}
          >
            https://www.oxtedfest.co.uk/
          </a>
          <Text
            py="10px"
            fontSize="18px"
            textAlign="center"
          >
            Music Festival based in Oxted
          </Text>
          <Flex
            py="10px"
            w="100%"
            justifyContent="center"
          >
            <LearnMoreButton link="/case_studies/oxtedfest" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="caseportContainer"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        w="100%"
        flexWrap="wrap"
        py="5%"
        my="2%"
      >
        <Box
          w="50%"
          textAlign="center"
        >
          <img src={mane} alt="delishus" style={{ borderRadius: "10px"}} />
        </Box>
        <Flex
           alignItems="center"
          flexDirection="column"
        >
          <Text
            py="10px"
            fontSize="25px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
            color="#0A2F53"
          >
            MANE UK
          </Text>
          {/* <Text
            py="10px"
            fontSize="20px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
          >
            Health-Focused Baking
          </Text> */}
          <a 
            href="https://maneuk.com/" 
            target="_blank"
            style={{
              color: "#EE6F19"
            }}
          >
            https://maneuk.com/
          </a>
          <Text
            py="10px"
            fontSize="18px"
            textAlign="center"
          >
            Hair Thickening Solutions Company
          </Text>
          <Flex
            py="10px"
            w="100%"
            justifyContent="center"
          >
            <LearnMoreButton link="/case_studies/maneuk" />
          </Flex>
        </Flex>
      </Flex>
       <Flex
        className="caseportContainer"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        w="100%"
        my="2%"
        py="5%"
      >
        <Box
          w="50%"
          textAlign="center"
        >
          <img src={hello} alt="delishus" style={{ borderRadius: "10px"}} />
        </Box>
        <Flex
           alignItems="center"
          flexDirection="column"
        >
          <Text
            py="10px"
            fontSize="25px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
            color="#0A2F53"
          >
            HELLO VANS
          </Text>
          <Text
            py="10px"
            fontSize="20px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
          >
            Removal Company
          </Text>
          <a 
            href="https://hellovans.com/" 
            target="_blank"
            style={{
              color: "#EE6F19"
            }}
          >
            https://hellovans.com/
          </a>
          <Text
            py="10px"
            fontSize="18px"
            textAlign="center"
          >
            Online Van removals comparison company
          </Text>
          <Flex
            py="10px"
            w="100%"
            justifyContent="center"
          >
            <LearnMoreButton link="/case_studies/hellovans" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="caseportContainer"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        my="2%"
        flexWrap="wrap" 
        w="100%"
        py="5%"
      >
        <Box
          w="50%"
          textAlign="center"
        >
          <img src={subfrantic} alt="delishus" style={{ borderRadius: "10px"}} />
        </Box>
        <Flex
           alignItems="center"
          flexDirection="column"
        >
          <Text
            py="10px"
            fontSize="25px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
            color="#0A2F53"
          >
            SUBFRANTIC MUSIC
          </Text>
          <Text
            py="10px"
            fontSize="20px"
            fontFamily="dm-sans"
            fontStyle="normal"
            fontWeight="bold"
          >
            Online Music Streaming
          </Text>
          <a 
            href="https://subfranticmusic.com/" 
            target="_blank"
            style={{
              color: "#EE6F19"
            }}
          >
            https://subfranticmusic.com/
          </a>
          <Text
            py="10px"
            fontSize="18px"
            textAlign="center"
          >
           The number one online live streaming service for musicians
          </Text>
          <Flex
            py="10px"
            w="100%"
            justifyContent="center"
          >
            <LearnMoreButton link="/case_studies/subfrantic_music" />
          </Flex>
        </Flex>
      </Flex> 
    </Flex>
  )
}



