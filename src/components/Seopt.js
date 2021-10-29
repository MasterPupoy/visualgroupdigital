import React, { useState, useRef } from 'react'
import Lightbox from 'react-awesome-lightbox';
import {
  Flex,
} from '@chakra-ui/react';

import seo from '../images/portfolio/seo.json';

import "react-awesome-lightbox/build/style.css";
import '../styles/our_portfolio.css';

export default function Seopt(){

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
        {seo.map(img => {
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