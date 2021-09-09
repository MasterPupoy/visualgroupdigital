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
      <img src={delishus} />
      <img src={manetain} />
      <img src={doggo} />
      <img src={redsacks} />
      <img src={beautifulsouls} />
      <img src={cleaningspecialistproviders} />
      <img src={provest} />
      <img src={secretcalm} />
    </Flex>
   </Flex>
  )
}
