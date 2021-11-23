import React, { useEffect } from 'react'
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';

import l1 from '../images/newone/1.svg';
import l2 from '../images/newone/2.svg';
import l3 from '../images/newone/3.svg';
import l4 from '../images/newone/4.svg';
import l5 from '../images/newone/5.svg';
import l6 from '../images/newone/6.svg';
import l7 from '../images/newone/7.svg';
import l8 from '../images/newone/8.svg';
import l9 from '../images/newone/9.svg';
import l10 from '../images/newone/10.svg';

import l11 from '../images/newone/11.svg';
import l12 from '../images/newone/12.svg';
// import l13 from '../images/newone/13.svg';
import l14 from '../images/newone/14.svg';
import l15 from '../images/newone/15.svg';
import l16 from '../images/newone/16.svg';
import l17 from '../images/newone/17.svg';
import l18 from '../images/newone/18.svg';
import l19 from '../images/newone/19.svg';
import l20 from '../images/newone/20.svg';

import l21 from '../images/newone/21.svg';
import l22 from '../images/newone/22.svg';
import l23 from '../images/newone/23.svg';
import l24 from '../images/newone/24.svg';
import l25 from '../images/newone/25.svg';
import l26 from '../images/newone/26.svg';
import l27 from '../images/newone/27.svg';
import l28 from '../images/newone/28.svg';
import l29 from '../images/newone/29.svg';
import l30 from '../images/newone/30.svg';

import l31 from '../images/newone/31.svg';
import l32 from '../images/newone/32.svg';
import l33 from '../images/newone/33.svg';
import l34 from '../images/newone/34.svg';
import l35 from '../images/newone/35.svg';
import l36 from '../images/newone/36.svg';
import l37 from '../images/newone/37.svg';
import l38 from '../images/newone/38.svg';
import l39 from '../images/newone/39.svg';
import l40 from '../images/newone/40.svg';


import l41 from '../images/newone/41.svg';
import l42 from '../images/newone/42.svg';
import l43 from '../images/newone/43.svg';
import l44 from '../images/newone/44.svg';
import l45 from '../images/newone/45.svg';
import l46 from '../images/newone/46.svg';
import l47 from '../images/newone/47.svg';
import l48 from '../images/newone/48.svg';
import l49 from '../images/newone/49.svg';
import l50 from '../images/newone/50.svg';

// import l51 from '../images/newone/51.svg';
import l52 from '../images/newone/52.svg';
import l53 from '../images/newone/53.svg';
import l54 from '../images/newone/54.svg';
import l55 from '../images/newone/55.svg';
import l56 from '../images/newone/56.svg';


import { gsap } from 'gsap';
import '../styles/slideshow.css';

export default function Slideshow() {

  useEffect(() => {

    gsap.set(".logos", {
      x: (i) => i * 198
    });
    

    gsap.to(".logos", {
      duration: 50,
      ease: "none",
      x: `+=10300`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % `10300`) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });

  })

  return (
    <>
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      w="100%"
      className="slideshow"
      overflowX="hidden"
      pt="20px"
      display={[
        "none",
        "none",
        "none",
        "none",
        "flex"
        ]}
    >
            <Flex
        mt="100px"
        mx="20px"
        px="9%"
        flexDirection="column"
        alignItems={[
          "center",
          "center",
          "center",
          "center",
          "flex-start"
        ]}
        alignSelf={[
          "center",
          "center",
          "center",
          "center",
          "flex-start"
        ]}
      >
        <Box>
          <Text
            className="addlogo"
            fontSize="3xl"
          >
            WE WOULD <span>LOVE</span> TO <br/>
            ADD YOUR LOGO HERE.
          </Text>
        </Box>
        <Box
          textAlign={[
            "center",
            "center",
            "center",
            "center",
            "left"
          ]}
          py="20px"
        > 
          <Text
            className="addlogop"
            fontSize="lg"
          >
            We’ve worked with more than 100 companies since 2015 Check out some of the <br />
            fantastic clients we have brought to the UK and International Markets.
          </Text>
        </Box>
  
      </Flex>
        <Flex
          alignItems="center"
          flexWrap="wrap"
          className='logoContainer'
          overflowX="hidden"
          justifyContent="center"
          // display={(div >= 1) ? "flex" : "none"}
        >
          <img src={l1} alt="chessmoveslogo" className="logopng " />
          <img src={l2} alt="oxtedfestival" className="logopng " />
          <img src={l3} alt="tailoredremovallogo" className="logopng " />
          <img src={l4} alt="surreycedarlogo" className="logopng " />
          <img src={l5} alt="intuneconsulting.svg" className="logopng " />
          <img src={l6} alt="simonKemp" className="logopng " />
          <img src={l7} alt="doggo.svg" className="logopng " />
          <img src={l8} alt="redsacks.svg" className="logopng " />
          <img src={l9} alt="beautifulsouls.svg" className="logopng " />
          <img src={l10} alt="cleaningspecialistproviders.svg" className="logopng " />
          <img src={l11} alt="provest.svg" className="logopng " />
          <img src={l12} alt="secretcalm.svg" className="logopng " />
          {/* <img src={l13} alt="houseofstreng.svg" className="logopng " /> */}
          <img src={l14} alt="fitify.svg" className="logopng " />
          <img src={l15} alt="reignsupreme.svg" className="logopng " />
          <img src={l16} alt="rebecca.svg" className="logopng " />
          <img src={l17} alt="regency.svg" className="logopng " />
          <img src={l18} alt="keating.svg" className="logopng " />
          {/* <img src={l51} alt="cleaningspecialistproviders.svg" className="logopng " />   */}
          <img src={l52} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l19} alt="schtech.svg" className="addon "/>
          <img src={l34} alt="surreycedarlogo" className="logopng " />
          <img src={l45} alt="intuneconsulting.svg" className="logopng " />
          <img src={l22} alt="schtech.svg"  className="logopng " />
          <img src={l33} alt="tailoredremovallogo" className="logopng " />
          <img src={l44} alt="surreycedarlogo" className="logopng " />
          <img src={l35} alt="intuneconsulting.svg" className="logopng " />
          <img src={l36} alt="simonKemp" className="logopng " />
          <img src={l37} alt="doggo.svg" className="logopng " />
          <img src={l38} alt="redsacks.svg" className="logopng " />
          <img src={l39} alt="beautifulsouls.svg" className="logopng " />
          <img src={l40} alt="cleaningspecialistproviders.svg" className="logopng " /> 
          <img src={l21} alt="futurefitness.svg" className="logopng "/>
          <img src={l20} alt="portfoliofm.svg" className="logopng " />
          <img src={l23} alt="adaptinghomes.svg" className="logopng "/>
          <img src={l24} alt="onlinefitnessfreedom.svg" className="logopng "/>
          <img src={l25} alt="intuneconsulting.svg" className="logopng "/>
          <img src={l26} alt="portfoliofm.svg"  className="addon "/>
          <img src={l27} alt="hydroinstal.svg"  className="addon "/>
          <img src={l28} alt="futurefitness.svg" className="addon " />
          <img src={l29} alt="intuneconsulting.svg" className="addon " />
          <img src={l42} alt="oxtedfestival" className="logopng " />
          <img src={l43} alt="tailoredremovallogo" className="logopng " />
          <img src={l30} alt="chessmoveslogo" className="logopng " />
          <img src={l31} alt="chessmoveslogo" className="logopng " />
          <img src={l32} alt="oxtedfestival" className="logopng " />
          <img src={l41} alt="chessmoveslogo" className="logopng " />
          <img src={l46} alt="simonKemp" className="logopng " />
          <img src={l47} alt="doggo.svg" className="logopng " />
          <img src={l48} alt="redsacks.svg" className="logopng " />
          <img src={l49} alt="beautifulsouls.svg" className="logopng " />
          <img src={l50} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l53} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l54} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l55} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l56} alt="cleaningspecialistproviders.svg" className="logopng " />  
        </Flex>
        {/* <Flex
          alignItems="center"
          flexWrap="wrap"
          className='logoContainer'
          overflowX="hidden"
          justifyContent="center"
          // display={(div >= 2) ? "flex" : "none"}
        >
        </Flex>
        <Flex
          alignItems="center"
          flexWrap="wrap"
          className='logoContainer'
          overflowX="hidden"
          justifyContent="center"
          // display={(div >= 3) ? "flex" : "none"}
        >
        </Flex>
        <Flex
          alignItems="center"
          flexWrap="wrap"
          className='logoContainer'
          overflowX="hidden"
          justifyContent="center"
          // display={(div >= 4) ? "flex" : "none"}
        >
        </Flex> */}
        {/* <Flex
          alignItems="center"
          flexWrap="wrap"
          className='logoContainer'
          overflowX="hidden"
          justifyContent="center"
          display={(div >= 5) ? "flex" : "none"}
        >
     
          <img src={rockit} alt="intuneconsulting.svg" className="logopng  " />
        </Flex> */}
      </Flex>

    <Flex
      mt="50px"
      w="100%"
      display={[
        "block",
        "block",
        "block",
        "block",
        "none"
      ]}
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        mt="100px"
        mx="20px"
        px="5%"
        flexDirection="column"
        alignItems={[
          "center",
          "center",
          "center",
          "center",
          "flex-start"
        ]}
        alignSelf={[
          "center",
          "center",
          "center",
          "center",
          "flex-start"
        ]}
      >
        <Box>
          <Text
            className="addlogo"
            fontSize="3xl"
          >
            WE WOULD <span>LOVE</span> TO 
            ADD YOUR LOGO HERE.
          </Text>
        </Box>
        <Box
          textAlign={[
            "center",
            "center",
            "center",
            "center",
            "left"
          ]}
          py="20px"
        > 
          <Text
            className="addlogop"
            fontSize="lg"
          >
            We’ve worked with more than 100 companies since 2015 Check out some of the 
            fantastic clients we have brought to the UK and International Markets.
          </Text>
        </Box>
  
      </Flex>

           <Flex
          alignItems="center"
          flexWrap="wrap"
          className='logoContainer'
          overflowX="hidden"
          justifyContent="center"
          // display={(div >= 1) ? "flex" : "none"}
        >
          <img src={l1} alt="chessmoveslogo" className="logopng " />
          <img src={l2} alt="oxtedfestival" className="logopng " />
          <img src={l3} alt="tailoredremovallogo" className="logopng " />
          <img src={l4} alt="surreycedarlogo" className="logopng " />
          <img src={l5} alt="intuneconsulting.svg" className="logopng " />
          <img src={l6} alt="simonKemp" className="logopng " />
          <img src={l7} alt="doggo.svg" className="logopng " />
          <img src={l8} alt="redsacks.svg" className="logopng " />
          <img src={l9} alt="beautifulsouls.svg" className="logopng " />
          <img src={l10} alt="cleaningspecialistproviders.svg" className="logopng " />
          <img src={l11} alt="provest.svg" className="logopng " />
          <img src={l12} alt="secretcalm.svg" className="logopng " />
          {/* <img src={l13} alt="houseofstreng.svg" className="logopng " /> */}
          <img src={l14} alt="fitify.svg" className="logopng " />
          <img src={l15} alt="reignsupreme.svg" className="logopng " />
          <img src={l16} alt="rebecca.svg" className="logopng " />
          <img src={l17} alt="regency.svg" className="logopng " />
          <img src={l18} alt="keating.svg" className="logopng " />
          {/* <img src={l51} alt="cleaningspecialistproviders.svg" className="logopng " />   */}
          <img src={l52} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l19} alt="schtech.svg" className="addon "/>
          <img src={l34} alt="surreycedarlogo" className="logopng " />
          <img src={l45} alt="intuneconsulting.svg" className="logopng " />
          <img src={l22} alt="schtech.svg"  className="logopng " />
          <img src={l33} alt="tailoredremovallogo" className="logopng " />
          <img src={l44} alt="surreycedarlogo" className="logopng " />
          <img src={l35} alt="intuneconsulting.svg" className="logopng " />
          <img src={l36} alt="simonKemp" className="logopng " />
          <img src={l37} alt="doggo.svg" className="logopng " />
          <img src={l38} alt="redsacks.svg" className="logopng " />
          <img src={l39} alt="beautifulsouls.svg" className="logopng " />
          <img src={l40} alt="cleaningspecialistproviders.svg" className="logopng " /> 
          <img src={l21} alt="futurefitness.svg" className="logopng "/>
          <img src={l20} alt="portfoliofm.svg" className="logopng " />
          <img src={l23} alt="adaptinghomes.svg" className="logopng "/>
          <img src={l24} alt="onlinefitnessfreedom.svg" className="logopng "/>
          <img src={l25} alt="intuneconsulting.svg" className="logopng "/>
          <img src={l26} alt="portfoliofm.svg"  className="addon "/>
          <img src={l27} alt="hydroinstal.svg"  className="addon "/>
          <img src={l28} alt="futurefitness.svg" className="addon " />
          <img src={l29} alt="intuneconsulting.svg" className="addon " />
          <img src={l42} alt="oxtedfestival" className="logopng " />
          <img src={l43} alt="tailoredremovallogo" className="logopng " />
          <img src={l30} alt="chessmoveslogo" className="logopng " />
          <img src={l31} alt="chessmoveslogo" className="logopng " />
          <img src={l32} alt="oxtedfestival" className="logopng " />
          <img src={l41} alt="chessmoveslogo" className="logopng " />
          <img src={l46} alt="simonKemp" className="logopng " />
          <img src={l47} alt="doggo.svg" className="logopng " />
          <img src={l48} alt="redsacks.svg" className="logopng " />
          <img src={l49} alt="beautifulsouls.svg" className="logopng " />
          <img src={l50} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l53} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l54} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l55} alt="cleaningspecialistproviders.svg" className="logopng " />  
          <img src={l56} alt="cleaningspecialistproviders.svg" className="logopng " />  
        </Flex> 

      <Flex
        my="50px"
        justifyContent="center"
      >
        <button
          className="seeMore button--aylen"
          onClick={() => {
            window.location.assign("/our_portfolio")
          }}
        >
          <span>
            SEE MORE OF OUR CLIENTS
          </span>
        </button>
      </Flex>

    </Flex>
    </>
  )
}


