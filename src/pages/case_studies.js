import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Badge,
  Text
} from '@chakra-ui/react';
import Lightbox from 'react-awesome-lightbox';
import "react-awesome-lightbox/build/style.css";


import SEO from '../components/Seo';
import Nav from '../components/Nav';
import ReusableHero from '../components/ReusableHero';
import ReusableFooter from '../components/ReusableFooter';
import StaticLogo from '../components/StaticLogo';
import Footer from '../components/Footer';
import LearnMoreButton from '../components/LearnMoreButton';
import MobileNav from '../components/MobileNav';

import chevron from '../images/chevron.svg';
import casestudies from '../images/features/casestudies.png';

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


import '../styles/casestudies.css';

function ClientView({ num, setActiveImg, setOpen }) {
  const [views, setViews] = useState([])

  const viewsarray = [
    {
      link: "sodelishus.co.uk",
      subheader: "Sodelishus is a health-focused food company",
      type: "FOOD COMPANY",
      img1: sd[1],
      img2: sd[2],
      page: "/case_studies/sodelishus",
      colorScheme: "gray"
    },
    {
      link: "oxtedfest.co.uk",
      subheader: "Music Festival based in Oxted",
      type: "CONCERT BOOKING",
      img1: ox[0],
      img2: ox[3],
      page: "/case_studies/oxtedfest",
      colorScheme: "green.300"
    },
    {
      link: "maneuk.com",
      subheader: "Hair Thickening Solutions Company",
      type: "HAIR PRODUCTS",
      img1: man[12],
      img2: man[11],
      page: "/case_studies/maneuk",
      colorScheme: "yellow.300"
    },
     {
      link: "hellovans.com",
      subheader: "Online Van removals comparison company",
      type: "vAN COMPANY",
      img1: hello[0],
      img2: hello[7],
      page: "/case_studies/hellovans",
      colorScheme: "blue.300"
    },
    {
      link: "houseofstrength.co.uk",
      subheader: "A leading uk manufacturer and distributor of weighted plates and olympic bars",
      type: "GYM EQUIPMENTS",
      img1: house[7],
      img2: house[12],
      page: "/case_studies/house_of_strength",
      colorScheme: "teal.300"
    },
    {
      link: "subfranticmusic.com",
      subheader: "The number one online live streaming service for musicians",
      type: "Online music streaming",
      img1: sub[3],
      img2: sub[5],
      page: "/case_studies/subfrantic_music",
      colorScheme: "orange.300",
    },
    {
      link: "bossybitchmaid.me.uk",
      subheader: "England's most unique maid and butler service",
      type: "Bossy Bitch Maids",
      img1: boss[8],
      img2: boss[2],
      colorScheme: "red.300",
      page: "/case_studies/bossy_bitch_maid"
    },
    {
      link: "capitalcluehunts.com",
      subheader: "Real world adventure games in London. All you need is a phone, a team and a sharp mind for the cryptic",
      type: "Game Company",
      img1: capital[1],
      img2: capital[2],
      colorScheme: "blue.300",
      page: "/case_studies/capital_clue_hunts"
    },
    {
      link: "sussexremovals.co.uk",
      subheader: "Sussex Tailored Removals is a friendly and Professional Removals and Storage In Sussex.",
      type: "Removal Company",
      img1: suss[0],
      img2: suss[1],
      colorScheme: "green.300",
      page: "/case_studies/sussex_removals"
    },
    {
      link: "schtech.co.uk",
      subheader: "We Listen, Create & Deliver YOUR Technology Solutions.",
      type: "Technology Company",
      img1: sch[5],
      img2: sch[8],
      colorScheme: "blue.300",
      page: "/case_studies/sch_tech"
    },
    {
      link: "citydoggo.com",
      subheader: "City Doggo introduces a return to nature for your metropolitan pet.",
      type: "Pet Products Company",
      img1: city[4],
      img2: city[10],
      colorScheme: "green.300",
      page: "/case_studies/city_doggo"
    },
    {
      link: "procleanpartnership.co.uk",
      subheader: "We Listen, Create & Deliver YOUR Technology Solutions.",
      type: "Luxury cleaning service.",
      img1: pro[4],
      img2: pro[5],
      colorScheme: "gray.300",
      page: "/case_studies/proclean"
    },
    {
      link: "beemoved.com",
      subheader: "Trusted Brighton removals & storage company.",
      type: "Transport Company",
      img1: bee[1],
      img2: bee[2],
      colorScheme: "cyan.300",
      page: "/case_studies/bee_moved"
    },
    {
      link: "slynote.com",
      subheader: "Slynote makes sending encrypted data simple.",
      type: "Encrypted notes Company",
      img1: sly[0],
      img2: sly[5],
      colorScheme: "teal.300",
      page: "/case_studies/slynote"
    },
    {
      link: "arenheatingplumbing.co.uk",
      subheader: "Plumbing and heating company based in London",
      type: "Plumbing and heating company",
      img1: aren[0],
      img2: aren[1],
      colorScheme: "red.300",
      page: "/case_studies/aren_heating"
    },
    {
      link: "expertapps.online",
      subheader: "App Development Platform for Business",
      type: "Encrypted notes Company",
      img1: exp[1],
      img2: exp[2],
      colorScheme: "cyan.300",
      page: "/case_studies/expert_apps"
    },
    {
      link: "lbpcourse.com",
      subheader: "LifeBalance Portal",
      type: "Life Balance Company",
      img1: lbp[8],
      img2: lbp[7],
      colorScheme: "gray.300",
      page: "/case_studies/life_balance"
    },
    {
      link: "virtlx.com",
      subheader: "The real-time monitoring platform forCustomer feedback",
      type: "Real-time Monitoring Platform",
      img1: virt[0],
      img2: virt[2],
      colorScheme: "blue.300",
      page: "/case_studies/virtlx"
    },
    {
      link: "blackandwhitelondon.co.uk",
      subheader: "Leading UK Supplier of promotional items.",
      type: "Promotional Company",
      img1: bw[1],
      img2: bw[2],
      colorScheme: "red.300",
      page: "/case_studies/black_and_white"
    },
    {
      link: "bodiesmadeonline.com",
      subheader: "You’ll Taken The First Steps To Transforming Your Body & Life.",
      type: "Fitness Services",
      img1: bod[8],
      img2: bod[0],
      colorScheme: "teal.300",
      page: "/case_studies/bodiesmade_online"
    },
    {
      link: "tailoredremoval.co.uk",
      subheader: "Removals and storage company based in Sussex",
      type: "Tailored Removal Company",
      img1: tailor[12],
      img2: tailor[13],
      colorScheme: "yellow.300",
      page: "/case_studies/sussex_tailored"
    },
    {
      link: "readerschool.org/v1/",
      subheader: "A full interactive and fun e-learning platform for children.",
      type: "Online Children Learning platform",
      img1: reader[3],
      img2: reader[2],
      colorScheme: "cyan.300",
      page: "/case_studies/readers_school"
    },
     {
      link: "intune.consulting/",
      subheader: "Whilst each organisation is unique, here are some specific offerings.",
      type: "Consulting Company",
      img1: intune[1],
      img2: intune[2],
      colorScheme: "gray",
      page: "/case_studies/intune_consulting"
    },
     {
      link: "terrilynn.com",
      subheader: "Terri Lynn's FREE fundraising program makes it easy for you to raise money for your cause!",
      type: "Lifestyle Company",
      img1: terrilyn[4],
      img2: terrilyn[2],
      colorScheme: "red.300",
      page: "/case_studies/terri_lyn"
    },
      {
      link: "onlinefitnessfreedom.com",
      subheader: "Improve Their Marketing & Branding To Help Them Maximise Their Clientele Potential.",
      type: "Fitness Services",
      img1: online[5],
      img2: online[6],
      colorScheme: "yellow.300",
      page: "/case_studies/online_fitness_freedom"
    },
      {
      link: "reignsupremeuk.com",
      subheader: "Accountant In Kent, Who Speaks To You More Than Just Once A Year",
      type: "Business & Accounting Company",
      img1: reign[7],
      img2: reign[3],
      colorScheme: "teal.300",
      page: "/case_studies/reign_supreme"
    },
  ]

  useEffect(() => {
    let mounted = true;

    if(mounted){
   
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
    <Box
      w="90%"
    >
      {views.map((client, i) => {
        return (
          <Box
            key={i}
            w="100%"
            className="caseStudyBox"
            my="35px"
            px="10px"
          >
            <Box
              textAlign="center"
              mt="30px"
              className="viewshead"
            >
              <Text
                as="h3"
              >
                <a href={`https://${client.link}/`} target="_blank">
                  {client.link}
                </a>
              </Text>

              <Text
                as="h5"
                fontStyle="dm-sans"
                fontSize="md"
              >
                {client.subheader}
              </Text>
            </Box>
            <Flex
              mt="30px"
              justifyContent="center"
            >
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                p="10px"
                borderRadius="12px"
              >
                <Flex
                  w="50%"
                  borderRadius="70px"
                  justifyContent="center"
                  mx="5px"
                >
                  <img 
                    src={client.img1} 
                    alt="client_showcase" 
                    className="imgholder" 
                    onClick={() => {
                      setActiveImg(client.img1)
                      setOpen(true)
                    }}
                  />
              
                </Flex>
                <Flex
                  w="50%"
                  borderRadius="70px"
                  justifyContent="center"
                  mx="5px"
                >
               
                  <img 
                    src={client.img2} 
                    alt="client_showcase" 
                    className="imgholder"
                    onClick={() => {
                      setActiveImg(client.img2)
                      setOpen(true)
                    }} 
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="center"
              my="50px"
            >
              <Box>
                <LearnMoreButton link={client.page} />
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
  
  const [Open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const headerText = "CASE"
  const subheader = "STUDIES"
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
      
      if(window.scrollY !== 0){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []); 
  

  return (
    <Box
      className="main"
      overflowX="hidden"
    >
      <SEO />
      <Box>
        {
          (width > 1280) 
          ? <Nav loc={location} page='/case_studies' />
          : <MobileNav  page='/case_studies' />
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
        {/* <Flex
          mt="50px"
          mx="20px"
          h="100px"
          justifyContent="flex-end"
        >
          <Text
            fontSize="sm"
            mr="10px"
            className="view"
          >
            View
          </Text>
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
        </Flex> */}
        <Flex
          justifyContent="center"
          className="clientContainer"
        >
          <ClientView 
            num={activeQty} 
            setActiveImg={setActiveImg}
            setOpen={setOpen}
          />
        </Flex>
        <Flex
          w="100%"
          justifyContent="center"
          my="100px"
        >
          {(activeQty < 26)
            ?<Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            onClick={() => {
              setActiveQty(num => {
                if(activeQty === 25){
                  return 26;
                }

                return num + 5
              })
            }}
          >
            <img src={chevron} alt="chevron" className="chevronseemore" />
            <Text
              as="h3"
              mt="50px"
              fontSize={[
                "20px",
                "20px",
                "30px",
                "30px",
                "30px"
              ]}
              fontFamily="dm-sans"
              color="#0A2F53"
            >
              View More
            </Text>
          </Flex>
            : null
          
          }
        </Flex>
        <StaticLogo />    
        <ReusableFooter 
          text={text}
        />
        <Footer />
      </Box>
      {(Open) ? <Lightbox image={activeImg} onClose={() => setOpen(prevState => !prevState)} /> : null}
    </Box>
  )
}

export {
  ClientView,
}