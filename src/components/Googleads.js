import React, { useState, useRef } from 'react'
import Lightbox from 'react-awesome-lightbox';
import {
  Flex,
  Skeleton
} from '@chakra-ui/react';

import googleads from '../images/portfolio/googleads.json';

import ga1 from '../images/googleads/ga1.jpg';
import ga2 from '../images/googleads/ga2.jpg';
import ga3 from '../images/googleads/ga3.jpg';
import ga4 from '../images/googleads/ga4.jpg';
import ga5 from '../images/googleads/ga5.jpg';
import ga6 from '../images/googleads/ga6.jpg';
import ga7 from '../images/googleads/ga7.jpg';
import ga8 from '../images/googleads/ga8.jpg';
import ga9 from '../images/googleads/ga9.jpg';
import ga10 from '../images/googleads/ga10.jpg';
import ga11 from '../images/googleads/ga11.jpg';
import ga12 from '../images/googleads/ga12.jpg';

import "react-awesome-lightbox/build/style.css";
import '../styles/our_portfolio.css';

function ImageSkeleton({ num = 12 }){
  let all = []

  for(let i = 0; i < num; i++){
    all = [...all, <Skeleton key={i} w="300px" h="300px" startColor="blue.500" endColor="orange.500" className="loaderskel" /> ]
  }

  return all
}

function AdditionalImages({ setActiveImg, setOpen, setLoading }){
  return (
    <>
      <img src={ga1} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga1)
              setOpen(true)
            }} />
      <img src={ga2} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga2)
              setOpen(true)
            }}/>
      <img src={ga3} alt="googleads"onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga3)
              setOpen(true)
            }} />
      <img src={ga4} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga4)
              setOpen(true)
            }}/>
      <img src={ga5} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga5)
              setOpen(true)
            }}/>
      <img src={ga6} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga6)
              setOpen(true)
            }}/>
      <img src={ga7} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga7)
              setOpen(true)
            }}/>
      <img src={ga8} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga8)
              setOpen(true)
            }}/>
      <img src={ga9} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga9)
              setOpen(true)
            }}/>
      <img src={ga10} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga10)
              setOpen(true)
            }}/>
      <img src={ga11} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga11)
              setOpen(true)
            }}/>
      <img src={ga12} alt="googleads" onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(ga12)
              setOpen(true)
            }}/>
    </>
  )
}

export default function Googleads(){
  const seeMoreButton = useRef();
  const [loading, setLoading] = useState(true);


  const [Open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");


  return (
    <Flex
      flexDirection="column"
    >
    <Flex
      w={[
        "100%",
        "100%",
        "100%",
        "100%",
        "1400px"
      ]}
      mx="10px"
      my="20px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        className="picContainer"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {(loading)
          ? <ImageSkeleton />
          : <AdditionalImages setLoading={setLoading} setOpen={setOpen} setActiveImg={setActiveImg} />
        }
        {googleads.map(img => {
          return (
            <img key={img} src= {img} alt="portfoliopic" 
            onLoad={() => setLoading(false)}
            onClick={() => {
              setActiveImg(img)
              setOpen(true)
            }} />
            
          )
        })}

      </Flex>       
    </Flex>

    {(Open) ? <Lightbox image={activeImg} onClose={() => setOpen(prevState => !prevState)} /> : null}
    </Flex>
  )
}