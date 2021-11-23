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
import l47 from '../images/newone/47.svg';
import l2 from '../images/newone/2.svg';
import l45 from '../images/newone/45.svg';
import l7 from '../images/newone/7.svg';
import l44 from '../images/newone/44.svg';


import portfolio from '../images/Portfolio.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "react-awesome-lightbox/build/style.css";

import '../styles/our_portfolio.css';
import LearnMoreButton from '../components/LearnMoreButton';
import AccomplishmentSlider from '../components/AccomplishmentSlider';

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

  }, []);

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
        return <Ecom />;
      case "All":
        return <All />;
      case "Facebook Advertising":
        return <Fbads />;
      case "Website Development":
        return <Webdev />;
      case "Google Advertising":
        return <Googleads />;
      case "Social Media Marketing":
        return <Socmed />;
      case "Search Engine Optimisation": 
        return <Seopt />;
      case "Graphic Design":
        return <Graphics />;
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
        px={[
          "20px",
          "20px",
          "20px",
          "50px",
          "50px",
        ]} 
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
          px="5%"
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
      <AccomplishmentSlider />
      <StaticLogo />
      <ReusableFooter 
        text={text}
      />
      <Footer />

    </Box>

  )
};


function Cases(){
  const allcases = [
    {
      img: delish,
      name: "SODELISHUS",
      type: "Health-Focused Baking",
      subtext: "Sodelishus is a health-focused food company",
      link:  "https://www.sodelishus.co.uk/",
      toCs: "/case_studies/sodelishus",
      logo: l47
    },
    {
      img: oxted,
      name: "OXTED",
      subtext: "Music Festival based in Oxted",
      type: "Oxted Festival",
      link:  "https://www.oxtedfest.co.uk/",
      toCs: "/case_studies/oxtedfest",
      logo: l2
    },
    {
      img: mane,
      name: "MANE UK",
      subtext: "Hair Thickening Solutions Company",
      type: "",
      link:  "https://maneuk.com/",
      toCs: "/case_studies/maneuk",
      logo: l45
    },
    {
      img: hello,
      name: "HELLO VANS",
      type: "Removal Company",
      subtext: "Online Van removals comparison company",
      link:  "https://hellovans.com/",
      toCs: "/case_studies/hellovans",
      logo: l7
    },
    {
      img: subfrantic,
      name: "SUBFRANTIC MUSIC",
      type: "Online Music Streaming", 
      subtext: "The number one online live streaming service for musicians",
      link:  "https://subfranticmusic.com/",
      toCs: "/case_studies/subfrantic_music",
      logo: l44
    },

  ]


  return (
    <Flex
      px="7%"
      mt="100px"
      flexDirection="column"
    >
      {allcases.map(c => {

        return(
          <Flex
            className="caseportContainer"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
            my="2%"
            flexWrap="wrap-reverse" 
            w="100%"
            py="5%"
          >
            <Box
              w={[
                "100%",
                "100%",
                "60%",
                "50%",
                "50%"
              ]}
              textAlign="center"
              px={[
                "5%",
                "5%",
                "5%",
                "0",
                "0"
              ]}
            >
              <img src={c.img} alt="delishus" style={{ borderRadius: "10px"}} />
            </Box>
            <Flex
              alignItems="center"
              flexDirection="column"
            >
              <Box
                p="20px"
              >
                <img src={c.logo} alt="cslogo" style={{ width: "150px" }} />
              </Box>
              <Text
                py="10px"
                fontSize="25px"
                fontFamily="dm-sans"
                fontStyle="normal"
                fontWeight="bold"
                color="#0A2F53"
              >
                {c.name}
              </Text>
              <Text
                py="10px"
                fontSize="20px"
                fontFamily="dm-sans"
                fontStyle="normal"
                fontWeight="bold"
              >
                {c.type}
              </Text>
              <a 
                href={c.link}
                target="_blank"
                style={{
                  color: "#EE6F19"
                }}
              >
                {c.link}
              </a>
              <Text
                py="10px"
                fontSize="18px"
                textAlign="center"
              >
              {c.subtext}
              </Text>
              <Flex
                py="10px"
                w="100%"
                justifyContent="center"
              >
                <LearnMoreButton link={c.toCs} />
              </Flex>
            </Flex>
          </Flex> 
        )
      })
      }
    </Flex>
  )
}



