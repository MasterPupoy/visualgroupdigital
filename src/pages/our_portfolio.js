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
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import anothaweb from '../images/portfolio/anothaweb.png';
import bar from '../images/portfolio/bar.png';
import delish from '../images/portfolio/delish.png';
import delish2 from '../images/portfolio/delish2.png';
import hair from '../images/portfolio/hair.png';
import map from '../images/portfolio/map.png';
import oxted from '../images/portfolio/oxted.png';
import van from '../images/portfolio/van.png';
import web from '../images/portfolio/web.png';
import casestudies from '../images/features/casestudies.png';

import { ClientView } from './case_studies';

import sd from '../images/scraped/sodelishus.json';
import ox from '../images/scraped/oxted_festival.json';
import man from '../images/scraped/mane_uk.json';
import hello from '../images/scraped/hello_vans.json';
import house from '../images/scraped/house_of_strengh.json';
import sub from '../images/scraped/subfrantic-music.json';
import boss from '../images/scraped/bossy_bitch_maid.json';
import capital from '../images/scraped/capital_clue_hunts.json';
import suss from '../images/scraped/sussex_removals.json';
import sch from '../images/scraped/sch_tech.json';
import city from '../images/scraped/city_doggo.json';
import pro from '../images/scraped/proclean.json';
import bee from '../images/scraped/beemoved.json';
import sly from '../images/scraped/slynote.json';
import aren from '../images/scraped/aren_heating_plumbing.json';
import exp from '../images/scraped/expert_apps.json';
import lbp from '../images/scraped/life_balance.json';
import virt from '../images/scraped/virtlx.json';
import bw from '../images/scraped/black_and_white_london.json';
import bod from '../images/scraped/bodiesmade_online.json';
import tailor from '../images/scraped/sussex_tailored.json';
import reader from '../images/scraped/readers_school.json';
import intune from '../images/scraped/intune_consulting.json';
import terrilyn from '../images/scraped/terri_lynn.json';
import online from '../images/scraped/online_fitness_freedom.json';
import reign from '../images/scraped/reign_supreme.json';

import Lightbox from 'react-awesome-lightbox';
import "react-awesome-lightbox/build/style.css";


import '../styles/our_portfolio.css';

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
  }


 useEffect(() => {

    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const allImages = [
    {
      src: anothaweb,
    },
    {
      src: bar,
    },
    {
      src: delish,
    },
    {
      src: delish2,
    },
    {
      src: hair,
    },
    {
      src: map,
    },
    {
      src: oxted,
    },
    {
      src: van,
    },
    {
      src: web,
    },
    {
      src: sch[0],
    },
    {
      src: city[2]
    },
    {
      src: bee[1]
    }
  ]
 
  const [openGal, setOpenGal] = useState(false);
 const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <Box className="main">
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
          image={casestudies}
          separated={false}
          imageClass="digitalmarkbanner"
        />
        <Flex
          flexDirection="column"
          justifyContent="center"
          py="50px"
        >
          <Box
            className="portLinks"
          >
            {/* <a href="/our_portfolio">WEBSITE DESIGN</a>
            <a href="/our_portfolio">WEBSITE DEVELOPMENT</a>
            <a href="/our_portfolio">E-COMMERCE MARKETING</a>
            <a href="/our_portfolio">GRAPHIC DESIGNS</a>
            <a href="/our_portfolio">SOCIAL MEDIA MARKETING</a> */}
            <Text as="a">WEBSITE DESIGN</Text>
            <Text as="a">WEBSITE DEVELOPMENT</Text>
            <Text as="a">E-COMMERCE MARKETING</Text>
            <Text as="a">GRAPHIC DESIGNS</Text>
            <Text as="a">SOCIAL MEDIA MARKETING</Text>
          </Box>
          <Box
            className="portLinks"
          >
            {/* <a href="/our_portfolio">FACEBOOK AD COPY</a>
            <a href="/our_portfolio">BRANDING</a>
            <a href="/our_portfolio">GOOGLE ADVERTISING</a> */}
            <Text as="a">FACEBOOK AD COPY</Text>
            <Text as="a">BRANDING</Text>
            <Text as="a">GOOGLE ADVERTISING</Text>
          </Box>
        </Flex>
        <Box
          className="portshowcase2"
          w="80%"
          m="auto"
        >
          <Flex
            className="portshowcase"
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {allImages.map((img, i) => {
              return (
                <img 
                  key={i} 
                  src={img.src} 
                  alt={img.src} 
                  style={{ 
                    borderRadius: "2px",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    setOpenGal(true)
                    setActiveIndex(i);
                  }}
                />
              )
            })}
          </Flex>
          <Flex
            justifyContent="center"
            py="50px"
          >
            <Box>
              <button 
                className="button button--aylen "
                onClick={() => {
                  window.location.assign('/case_studies')
                }}
              >
                <span>SEE MORE</span>
              </button>
            </Box>
          </Flex>
        </Box>
        {/* <ClientView
          num={}
          setActiveImg={}
          setOpen={}
        /> */}
        <StaticLogo />
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
      {(openGal) 
        ? <Lightbox 
          images={allImages} 
          startIndex={activeIndex}
          onClose={() => setOpenGal(prevState => !prevState)} 
        /> 
        : null}
    </Box>
  )
}
