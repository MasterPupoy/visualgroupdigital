import React, { useState, useRef } from 'react'
import Lightbox from 'react-awesome-lightbox';
import {
  Flex,
} from '@chakra-ui/react';

import googleads from '../images/portfolio/googleads.json';

import "react-awesome-lightbox/build/style.css";
import '../styles/our_portfolio.css';

export default function Googleads(){
  const seeMoreButton = useRef();
  const [activeDiv, setActiveDiv] = useState(1);

  const [Open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const toggleDiv = () => {
    if(activeDiv < 5){
      setActiveDiv(val => val + 1);
    }

    if(activeDiv === 3){
      seeMoreButton.current.style.display = "none";
    }
  };

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
        {googleads.map(img => {
          return (
            <img key={img} src= {img} alt="portfoliopic" onClick={() => {
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