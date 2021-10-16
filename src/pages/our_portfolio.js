import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import portfolio from '../images/Portfolio.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "react-awesome-lightbox/build/style.css";

import '../styles/our_portfolio.css';

gsap.registerPlugin(ScrollTrigger);

export default function Our_portfolio({ location }) {
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

  return (
    <Box 
      className="main"
      overflowX="hidden"
    >
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/our_portfolio' />
          : <MobileNav />
        }
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={portfolio}
          separated={false}
          imageClass="digitalmarkbanner"
        />
        <Box
          w="100%"
          className="triggerport"
        >
          <Box>
            <Text
              as="h3"
              fontSize="7xl"
              fontStyle="dm-sans"
              color="#0a2f53"
              my="100px"
              mx="10%"
              className="ourwork"
            >
              Our Work<span
                style={{
                  color: "#ee6f19"
                }}
              >
                .
              </span>
            </Text>
            <Flex
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
               className="img1holder holder1"
               onClick={() => {
                 window.location.assign("/case_studies/sodelishus")
               }}
              >
                <Box
                  className="textoverlay1"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    So Delishus
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    Sodelishus is a health-focused food company
                  </Text>
                </Box>
              </Box>
              <Box
                className="img2holder holder2"
                onClick={() => {
                 window.location.assign("/case_studies/oxtedfest")
               }}
              >
                 <Box
                  className="textoverlay2"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Oxted Festival
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    Music Festival based in Oxted
                  </Text>
                </Box>
              </Box>
               <Box
                className="img3holder holder3"
                onClick={() => {
                 window.location.assign("/case_studies/maneuk")
               }}
              >
                <Box
                  className="textoverlay3"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Mane UK
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    Hair Thickening Solutions Company
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                className="img4holder holder1"
                onClick={() => {
                 window.location.assign("/case_studies/house_of_strength")
               }}
              >
                <Box
                  className="textoverlay4"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    House Of Strength
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    A leading uk manufacturer and distributor of weighted plates and
                    <br/>
                    olympic bars
                  </Text>
                </Box>
              </Box>
              <Box
                className="img5holder holder2"
                 onClick={() => {
                 window.location.assign("/case_studies/subfrantic_music")
               }}
              >
                <Box
                  className="textoverlay5"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Subfrantic Music
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    The number one online live streaming service for musicians
                  </Text>
                </Box>
              </Box>
              <Box
                className="img6holder holder3"
              >
                <Box
                  className="textoverlay6"
                   onClick={() => {
                 window.location.assign("/case_studies/bossy_bitch_maid")
               }}
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Boss Bitch Maid
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    England's most unique maid and butler service
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                className="img7holder holder1"
                onClick={() => {
                 window.location.assign("/case_studies/bee_moved")
               }}
                
              >
                <Box
                  className="textoverlay7"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Beemoved
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                   Trusted Brighton removals &amp; storage company get a free qoute from BEE MOVED
                  </Text>
                </Box>
              </Box>
              <Box
                className="img8holder holder2"
                onClick={() => {
                 window.location.assign("/case_studies/expert_apps")
               }}
              >
                <Box
                  className="textoverlay8"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Expert Apps
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                   App Development Platform for Business
                  </Text>
                </Box>
              </Box>
              <Box
                className="img9holder holder3"
                onClick={() => {
                 window.location.assign("/case_studies/bodiesmade_online")
               }}
              >
                <Box
                  className="textoverlay9"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Bodies Made Online
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                   You’ll Taken The First Steps To Transforming Your Body &amp; Life.
                  </Text>
                </Box>
              </Box>
            </Flex>
             <Flex
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                className="img10holder holder1"
                onClick={() => {
                 window.location.assign("/case_studies/slynote")
               }}
              >
                <Box
                  className="textoverlay10"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Sly note
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    Slynote makes sending encrypted data simple, no technical knowledge required or understanding of how encryption works.
                  </Text>
                </Box>
              </Box>
              <Box
                className="img11holder holder2"
                 onClick={() => {
                 window.location.assign("/case_studies/black_and_white")
               }}
              >
                <Box
                  className="textoverlay11"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Black and White London
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                    We specialise in promotional business gifts, printed promotional items and branded corporate merchandise.
                  </Text>
                </Box>
              </Box>
              <Box
                className="img12holder holder3"
                 onClick={() => {
                 window.location.assign("/case_studies/capital_clue_hunts")
               }}
              >
                <Box
                  className="textoverlay12"
                >
                  <Text
                    fontSize="3xl"
                    as="h3"
                    fontFamily="dm-sans"
                  >
                    Capital Clue Hunts
                  </Text>
                  <Text
                    fontSize="md"
                    as="p"
                    fontFamily="dm-sans"
                  >
                   Real world adventure games in London. All you need is a phone, a team and a sharp mind for the cryptic.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <button
            // className="businessEnquiryButton"
            className="button button--aylen"
            onClick={() => {
              window.location.assign('/case_studies')
            }}
          >
            <span className="biz">SEE MORE</span>
          </button>
        </Flex>
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
