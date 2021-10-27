
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
        <img src={chessmoves} alt="chessmoveslogo" className="logopng" />
        <img src={oxtedFestival} alt="oxtedfestival" className="logopng" />
        <img src={tailoredRemoval} alt="tailoredremovallogo" className="logopng" />
        <img src={surreyCedar} alt="surreycedarlogo" className="logopng" />
        {/* <img src={oneroof} alt="onerooflogo" /> */}
        <img src={honestgrapes} alt="intuneconsulting.svg" className="addon3" />
        <img src={simonKemp} alt="simonKemp" className="logopng" />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px="2%"
      
      >
        <img src={delishus} alt="delishus.svg" className="logopng" />
        <img src={manetain} alt="manetain.svg" className="logopng" />
        <img src={doggo} alt="doggo.svg" className="logopng" />
        <img src={redsacks} alt="redsacks.svg" className="logopng" />
        <img src={beautifulsouls} alt="beautifulsouls.svg" className="logopng" />
        <img src={cleaningspecialistproviders} alt="cleaningspecialistproviders.svg" className="logopng" />
        <img src={provest} alt="provest.svg" className="logopng" />
        <img src={secretcalm} alt="secretcalm.svg" className="logopng" />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px="4%"

      >
        <img src={houseofstrength} alt="houseofstreng.svg" className="logopng" />
        <img src={fitify} alt="fitify.svg" className="logopng" />
        <img src={reignsupreme} alt="reignsupreme.svg" className="logopng" />
        <img src={rebecca} alt="rebecca.svg" className="logopng" />
        <img src={regency} alt="regency.svg" className="logopng" />
        <img src={keating} alt="keating.svg" className="logopng" />
        <img src={grantspace} alt="schtech.svg" className="addon"/>
        {/* <img src={outperform} alt="outperform.svg" /> */}
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        px="4%"
  
      >
        <img src={portfolioFm} alt="portfoliofm.svg" className="logopng" />
        <img src={hydroInstal} alt="hydroinstal.svg" className="logopng" />
        <img src={futurefitness} alt="futurefitness.svg" className="logopng"/>
        <img src={schTech} alt="schtech.svg"  className="logopng" />
        <img src={adaptingHomes} alt="adaptinghomes.svg" className="logopng"/>
        <img src={onlineFitnessFreedom} alt="onlinefitnessfreedom.svg" className="logopng"/>
        <img src={intuneConsulting} alt="intuneconsulting.svg" className="logopng"/>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        px="4%"
  
      >
        <img src={bw} alt="portfoliofm.svg"  className="addon"/>
        <img src={bbm} alt="hydroinstal.svg"  className="addon"/>
        <img src={dm} alt="futurefitness.svg" className="addon" />
        <img src={viralmerch} alt="intuneconsulting.svg" className="addon" />
        <img src={rockit} alt="intuneconsulting.svg" className="logopng" />
      </Flex>
       <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        px="4%"
  
      >
        <img src={healingtuning} alt="adaptinghomes.svg" className="addon2" />
      
        <img src={racehorseclub} alt="onlinefitnessfreedom.svg" className="addon4" />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        pt="20px"
      >
        <Flex
          w="400px"
          justifyContent="space-between"
          alignItems="center"
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
          </Box>
          <Box>
            <a
              className="reqCB"
              href="/contact"
            >
              REQUEST A CALL BACK &gt;
            </a>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </>
  )
}
