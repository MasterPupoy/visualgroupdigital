
import React from 'react'
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';

import chessmoves from '../images/logo/chessmoves.svg';
import tailoredRemoval from '../images/logo/tailoredremovalgroup.svg';
import oneroof from '../images/logo/oneroof.svg';
import oxtedFestival from '../images/logo/oxtedfestival.svg';
import simonKemp from '../images/logo/simonkemp.svg';
import surreyCedar from '../images/logo/surreycedar.svg'

import delishus from '../images/logo/delishnew.svg';
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

import bw from '../images/bw.png';
import bbm from '../images/BBM Logo.png';
import dm from '../images/dmgroundworks.png';
import grantspace from '../images/grantspace.png';
import healingtuning from '../images/healingtuning.png';
import honestgrapes from '../images/honestgrapes.png';
import racehorseclub from '../images/racehorseclub.png';
import rockit from '../images/rockit.png';
import viralmerch from '../images/viralmerchandising.png';


import '../styles/slideshow.css';


export default function Slideshow() {
  
 return (
  <>
    <Flex
      mt="100px"
      mx="20px"
      px="9%"
      justifyContent="center"
      alignItems="center"
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
        mx="10px"
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
    flexDirection="row"
    flexWrap="wrap"
    w="100%"
    className="slideshow"
    overflowX="hidden"
    pt="20px"
    >
      <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px="10%"
    
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
        px="4%"
  
      >
        <img src={bw} alt="portfoliofm.svg" className="addon"/>
        <img src={bbm} alt="hydroinstal.svg" className="addon" />
        <img src={dm} alt="futurefitness.svg" className="addon" />
        <img src={viralmerch} alt="intuneconsulting.svg" className="addon" />
      </Flex>
       {/* <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        px="4%"
  
      >
        <img src={rockit} alt="intuneconsulting.svg" className="addon2" />
        <img src={grantspace} alt="schtech.svg" className="addon2" />
        <img src={healingtuning} alt="adaptinghomes.svg" className="addon2" />
        <img src={racehorseclub} alt="onlinefitnessfreedom.svg" className="addon2" />
        <img src={honestgrapes} alt="intuneconsulting.svg" className="addon2" />
      </Flex> */}
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
            onClick={() => {
              window.location.assign("/case_studies")
            }}
          >
            <span>
              SEE MORE OF OUR CLIENTS
            </span>
          </button>
          <a
            className="reqCB"
            href="/contact"
          >
            REQUEST A CALL BACK &gt;
          </a>
        </Box>
      </Flex>
    </Flex>
  </>
  )
}
