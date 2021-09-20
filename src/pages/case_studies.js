import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Badge
} from '@chakra-ui/react';

import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';

import brandng from '../images/brandng.png';
import fbadcopy from '../images/fbadcopy.png';
import figma from '../images/figma.png';
import casestudies from '../images/features/casestudies.png';

import '../styles/casestudies.css';

function ClientView({ num }) {
  const [views, setViews] = useState([])

  const viewsarray = [
    {
      link: "sodelishus.co.uk",
      subheader: "Sodelishus is a health-focused food company",
      type: "FOOD COMPANY",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "oxtedfest.co.uk",
      subheader: "Music Festival based in Oxted",
      type: "CONCERT BOOKING",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "maneuk.com",
      subheader: "Hair Thickening Solutions Company",
      type: "HAIR PRODUCTS",
      img1: "N/A",
      img2: "N/A",
    },
     {
      link: "hellovans.com",
      subheader: "Online Van removals comparison company",
      type: "vAN COMPANY",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "houseofstrength.co.uk",
      subheader: "A leading uk manufacturer and distributor of weighted plates and olympic bars",
      type: "GYM EQUIPMENTS",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "subfranticmusic.com",
      subheader: "The number one online live streaming service for musicians",
      type: "Online music streaming",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "bossybitchmaid.me.uk",
      subheader: "England's most unique maid and butler service",
      type: "Bossy Bitch Maids",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "capitalcluehunts.com",
      subheader: "Real world adventure games in London. All you need is a phone, a team and a sharp mind for the cryptic",
      type: "Game Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "sussexremovals.co.uk",
      subheader: "Sussex Tailored Removals is a friendly and Professional Removals and Storage In Sussex.",
      type: "Removal Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "schtech.co.uk",
      subheader: "We Listen, Create & Deliver YOUR Technology Solutions.",
      type: "Technology Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "citydoggo.com",
      subheader: "City Doggo introduces a return to nature for your metropolitan pet. Our first HERO product, the Oui Oui Patch is an eco-friendly, odour-free, real grass pet toilet for your flat or balcony.",
      type: "Pet Products Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "procleanpartnership.co.uk",
      subheader: "We Listen, Create & Deliver YOUR Technology Solutions.",
      type: "Luxury cleaning service.",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "beemoved.com",
      subheader: "TRUSTED Brighton REMOVALS & STORAGE COMPANY GET A FREE QUOTE FROM BEE MOVED",
      type: "Transport Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "slynote.com",
      subheader: "Slynote makes sending encrypted data simple, no technical knowledge required or understanding of how encryption works, all you need is the basic requirement to send private data to another person or persons securely and quickly.",
      type: "Encrypted notes Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "arenheatingplumbing.co.uk",
      subheader: "Plumbing and heating company based in London",
      type: "Plumbing and heating company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "expertapps.online",
      subheader: "App Development Platform for Business",
      type: "Encrypted notes Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "lbpcourse.com",
      subheader: "LifeBalance Portal",
      type: "Life Balance Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "virtlx.com",
      subheader: "The real-time monitoring platform forCustomer feedback",
      type: "Real-time Monitoring Platform",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "blackandwhitelondon.co.uk",
      subheader: "Black and White London, a leading UK Supplier of promotional items. We specialise in promotional business gifts, printed promotional items and branded corporate merchandise",
      type: "Promotional Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "bodiesmadeonline.com",
      subheader: "You’ll Taken The First Steps To Transforming Your Body & Life.",
      type: "Fitness Services",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "tailoredremoval.co.uk",
      subheader: "Removals and storage company based in Sussex",
      type: "Tailored Removal Company",
      img1: "N/A",
      img2: "N/A",
    },
    {
      link: "readerschool.org/v1/",
      subheader: "A full interactive and fun e-learning platform for children.",
      type: "Online Children Learning platform",
      img1: "N/A",
      img2: "N/A",
    },
     {
      link: "intune.consulting/",
      subheader: "Whilst each organisation is unique, here are some specific offerings.",
      type: "Consulting Company",
      img1: "N/A",
      img2: "N/A",
    },
     {
      link: "terrilynn.com",
      subheader: "Terri Lynn's FREE fundraising program makes it easy for you to raise money for your cause! Get started today with a personal Online Webstore.",
      type: "Lifestyle Company",
      img1: "N/A",
      img2: "N/A",
    },
      {
      link: "onlinefitnessfreedom.com",
      subheader: "Improve Their Marketing & Branding To Help Them Maximise Their Clientele Potential.",
      type: "Fitness Services",
      img1: "N/A",
      img2: "N/A",
    },
      {
      link: "reignsupremeuk.com",
      subheader: "Accountant In Kent, Who Speaks To You More Than Just Once A Year",
      type: "Business & Accounting Company",
      img1: "N/A",
      img2: "N/A",
    },
  ]

  useEffect(() => {
    let mounted = true;

    if(mounted){
      console.log(viewsarray.length)
      let newarr = []

      for (let i = 0; i < num; i++){
        newarr.push(viewsarray[i]);
      }

      setViews(newarr)
      
    }

    return () => {
      mounted = false;
    }

  }, [num])
  

  return(
    <Box>
      {views.map((client, i) => {
        return (
          <Box
            key={i}
            w="1358px"
            h="563px"
            className="caseStudyBox"
            my="35px"
          >
            <Box
              textAlign="center"
              pt="30px"
              className="viewshead"
            >
              <h3>
                {client.link}
              </h3>
              <p>
                {client.subheader}
              </p>
            </Box>
            <Flex>
              <Box>
                <Flex
                  w="220px"
                  ml="30px"
                  flexDirection="column"
                  mt="50px"
                >
                  <Box
                    alignSelf="center"
                    py="20px"
                  >
                    <Badge>{client.type}</Badge>
                  </Box>
                  <Box
                    className="viewsSider"
                    py="20px"
                  >
                    <img src={figma} alt="figma.logo" style={{ display: "inline-block"}} />
                    <span>WEBSITE DESIGN</span>
                  </Box>
                  <Box>
                    <img src={fbadcopy} alt="figma.logo" style={{ display: "inline-block"}} />
                  </Box>
                  <Box
                    className="viewsSider"
                    py="20px"
                  >
                    <img src={brandng} alt="figma.logo" style={{ display: "inline-block"}} />
                    <span>BRANDING</span>
                  </Box>
                </Flex>
              </Box>
              <Box>

              </Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )

}



export default function Case_studies({ location }) {

  const [activeQty, setActiveQty] = useState(5);
  

  const headerText = "CASE"
  const subheader = "STUDIES"
  const paragraph = "Below, you’ll find some of our favorite brands that we’ve worked with"
  const text = "Do you have a project in mind? Get An Estimate for your Digital Marketing Campaign"


  

  return (
    <Box
      className="main"
    >
      <SEO />
      <Box>
        <Nav loc={location} page='/case_studies' />
        <ReusableHero 
          header={headerText}
          subheader={subheader}
          paragraph={paragraph}
          image={casestudies}
          separated={false}
          imageClass="casebanner"
        />
        <Flex
          pl="103px"
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
        <Box
          textAlign="right"
          mt="50px"
          mx="150px"
          h="100px"
        >
          <button
            className={
              (activeQty === 5) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(5)
            }}
          >
            5
          </button>
          <button
            className={
            (activeQty === 10) 
            ? "activeselector"
            : "qtyselector"
            }
            onClick={() => {
              setActiveQty(10)
            }}
          >
            10
          </button>
          <button
            className={
              (activeQty === 15) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(15)
            }}
          >
            15
          </button>
          <button
            className={
              (activeQty === 20) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(20)
            }}
          >
            20
          </button>
          <button
            className={
              (activeQty === 26) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(26)
            }}
          >
            All
          </button>
        </Box>
        <Flex
          justifyContent="center"
        >
          <ClientView num={activeQty} />
        </Flex>
        <Box
          textAlign="right"
          mt="50px"
          mx="150px"
          h="100px"
        >
          <button
            className={
              (activeQty === 5) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(5)
            }}
          >
            5
          </button>
          <button
            className={
            (activeQty === 10) 
            ? "activeselector"
            : "qtyselector"
            }
            onClick={() => {
              setActiveQty(10)
            }}
          >
            10
          </button>
          <button
            className={
              (activeQty === 15) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(15)
            }}
          >
            15
          </button>
          <button
            className={
              (activeQty === 20) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(20)
            }}
          >
            20
          </button>
          <button
            className={
              (activeQty === 26) 
              ? "activeselector"
              : "qtyselector"
            }
            onClick={() => {
              setActiveQty(26)
            }}
          >
            All
          </button>
        </Box>
        <StaticLogo />    
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
    </Box>
  )
}
