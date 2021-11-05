import React, { useState, useEffect } from 'react'
import Lightbox from 'react-awesome-lightbox';
import {
  Flex,
  Skeleton
} from '@chakra-ui/react';

import socmed from '../images/portfolio/socmed.json';

import "react-awesome-lightbox/build/style.css";
import '../styles/our_portfolio.css';

function ImageSkeleton({ num = 12}){
  let all = []

  for(let i = 0; i < num; i++){
    all = [...all, <Skeleton key={i} w="300px" h="300px" startColor="blue.500" endColor="orange.500" className="loaderskel" /> ]
  }

  return all
}

export default function Socmed(){
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
        : null
        }
        {socmed.map(img => {
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