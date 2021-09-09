import React from 'react'
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

import '../styles/slideshow.css';


export default function Slideshow() {
  return (
   <Flex
    flexDirection="row"
    flexWrap="wrap"
    w="100%"
    className="slideshow"
   >
    <Flex
    justifyContent="space-between"
    alignItems="center"
    w="100%"
    px="10%"
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
   </Flex>
  )
}
