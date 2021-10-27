import React, { useState, useRef, useEffect } from 'react'
import {
  Flex,
} from '@chakra-ui/react';

import all from '../images/portfolio/all.json';
import Lightbox from 'react-awesome-lightbox';

import "react-awesome-lightbox/build/style.css";

import '../styles/our_portfolio.css';

export default function All(){
  const seeMoreButton = useRef();
  
  const [num, setNum] = useState(16);
  const [views, setViews] = useState([])

  const [Open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const toggleNum = () => {
    if(num < 360){
      setNum(val => val + 16);
    }

    if(num === 359){
      seeMoreButton.current.style.display = "none";
    }
  };

  useEffect(() => {
    let mounted = true;

    if(mounted){
   
      let newarr = []

      for (let i = 0; i < num; i++){
        newarr.push(all[i]);
      }

      setViews(newarr)
      
    }

    return () => {
      mounted = false;
    }

  }, [num])

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
          {views.map(img => {
            return (
              <img key={img} src= {img} alt="portfoliopic" onClick={() => {
                setActiveImg(img)
                setOpen(true)
              }} />
              
            )
          })}
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <button
          // className="businessEnquiryButton"
          className="button button--aylen"
          onClick={() => {
            toggleNum();
          }}
          ref={seeMoreButton}
        >
          <span className="biz">SEE MORE</span>
        </button>
      </Flex>
      {(Open) ? <Lightbox image={activeImg} onClose={() => setOpen(prevState => !prevState)} /> : null}
    </Flex>
  )
}