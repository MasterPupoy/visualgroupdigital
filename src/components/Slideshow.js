import React, { useEffect, useRef } from 'react'
import {
  Flex,
  Box
} from '@chakra-ui/react';

import chessmoves from '../images/logo/chessmoves.svg';
import tailoredRemoval from '../images/logo/tailoredremovalgroup.svg';
import oneroof from '../images/logo/oneroof.svg';
import oxtedFestival from '../images/logo/oxtedfestival.svg';
import simonKemp from '../images/logo/simonkemp.svg';
import surreyCedar from '../images/logo/surreycedar.svg'

import delishus from '../images/logo/delishus.svg';
import manetain from '../images/logo/manetain.png';
import doggo from '../images/logo/doggo.svg';
import redsacks from '../images/logo/redsacks.svg';
import beautifulsouls from '../images/logo/beautifulsouls.svg';
import cleaningspecialistproviders from '../images/logo/cleaningspecialistprovider.svg';
import provest from '../images/logo/provest.svg';
import secretcalm from '../images/logo/secretcalm.svg';

import houseofstrength from '../images/logo/houseofstrength.svg';
import fitify from '../images/logo/fitifiy.svg';
import reignsupreme from '../images/logo/reignsupreme.svg';
import rebecca from '../images/logo/rebecca.svg';
import regency from '../images/logo/regencyestate.svg';
import keating from '../images/logo/keatingestates.svg';
import outperform from '../images/logo/outperform.svg';

import portfolioFm from '../images/logo/portfoliofm.svg';
import hydroInstal from '../images/logo/hydroinstal.svg';
import futurefitness from '../images/logo/futurefitness.svg';
import schTech from '../images/logo/schtech.svg';
import adaptingHomes from '../images/logo/adaptinghomes.svg';
import onlineFitnessFreedom from '../images/logo/onlinefitnessfreedom.svg';
import intuneConsulting from '../images/logo/intuneconsulting.svg';

import { gsap } from 'gsap';
import '../styles/slideshow.css';


export default function Slideshow() {
  const set1 = useRef();
  const set2 = useRef();
  const set3 = useRef();
  const set4 = useRef();

  // useEffect(() => {
  //   let mounted = true;
    
  //   const tl1 = gsap.timeline({ repeat: -1 });
  //   const tl2 = gsap.timeline({ repeat: -1 });
  //   const tl3 = gsap.timeline({ repeat: -1 });
  //   const tl4 =  gsap.timeline({ repeat: -1 });

  //   if(mounted) {

  //     tl1.fromTo(set1.current, { x: -1400 }, { x : 1400, duration : 15, ease : 'none' }); 
  //     tl2.fromTo(set2.current, { x: 1500 }, { x : -1500, duration : 20, ease : 'none' });
  //     tl3.fromTo(set3.current, { x: -1500 }, { x : 1500, duration : 25, ease : 'none' });
  //     tl4.fromTo(set4.current, { x: 1500 }, { x : -1500, duration : 35, ease : 'none' });
  //   }

  //   return () => {
  //     mounted = false;
  //     tl1.kill();
  //     tl2.kill();
  //     tl3.kill();
  //     tl4.kill();
  //   }
  // })


  return (
  <Flex
    flexDirection="row"
    flexWrap="wrap"
    className="slideshow"
    overflowX="hidden"
  >
    <Flex
    justifyContent="space-between"
    alignItems="center"
    w="100%"
    px="10%"
    ref={set1}
    overflowX="hidden"
    >
      <img src={chessmoves} alt="chessmoveslogo" />
      <img src={oxtedFestival} alt="oxtedfestival" />
      <img src={tailoredRemoval} alt="tailoredremovallogo" />
      <img src={surreyCedar} alt="surreycedarlogo" />
      <img src={oneroof} alt="onerooflogo" />
      <img src={simonKemp} alt="simonKemp" />
    </Flex>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px="2%"
      ref={set2}
    >
      <img src={delishus} alt="delishus.svg" />
      <img src={manetain} alt="manetain.svg" />
      <img src={doggo} alt="doggo.svg" />
      <img src={redsacks} alt="redsacks.svg" />
      <img src={beautifulsouls} alt="beautifulsouls.svg" />
      <img src={cleaningspecialistproviders} alt="cleaningspecialistproviders.svg" />
      <img src={provest} alt="provest.svg" />
      <img src={secretcalm} alt="secretcalm.svg" />
    </Flex>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px="4%"
      ref={set3}
    >
      <img src={houseofstrength} alt="houseofstreng.svg" />
      <img src={fitify} alt="fitify.svg" />
      <img src={reignsupreme} alt="reignsupreme.svg" />
      <img src={rebecca} alt="rebecca.svg" />
      <img src={regency} alt="regency.svg" />
      <img src={keating} alt="keating.svg" />
      <img src={outperform} alt="outperform.svg" />
    </Flex>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px="4%"
      ref={set4}
    >
      <img src={portfolioFm} alt="portfoliofm.svg" />
      <img src={hydroInstal} alt="hydroinstal.svg" />
      <img src={futurefitness} alt="futurefitness.svg" />
      <img src={schTech} alt="schtech.svg" />
      <img src={adaptingHomes} alt="adaptinghomes.svg" />
      <img src={onlineFitnessFreedom} alt="onlinefitnessfreedom.svg" />
      <img src={intuneConsulting} alt="intuneconsulting.svg" />
    </Flex>
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      pt="20px"
    >
      <Box
        alignSelf="center"
      >
        <button
          className="seeMore button--aylen"
        >
          <span>
            SEE MORE OF OUR CLIENTS
          </span>
        </button>
        <a
          className="reqCB"
          href="#"
        >
          REQUEST A CALL BACK &gt;
        </a>
      </Box>
    </Flex>
  </Flex>
  )
}
