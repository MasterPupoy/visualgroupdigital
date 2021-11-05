import React, { useState, useRef, useEffect } from 'react'
import {
  Flex,
  Skeleton
} from '@chakra-ui/react';

import webdev from '../images/portfolio/webdev.json';
import Lightbox from 'react-awesome-lightbox';

import "react-awesome-lightbox/build/style.css";

import '../styles/our_portfolio.css';

function ImageSkeleton({ num }){
  let all = []

  for(let i = 0; i < num; i++){
    all = [...all, <Skeleton key={i} w="300px" h="300px" startColor="blue.500" endColor="orange.500" className="loaderskel" /> ]
  }

  return all
}

export default function Webdev(){
  const seeMoreButton = useRef();

  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(12);
  const [views, setViews] = useState([])

  const [Open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");

 
  const toggleNum = () => {
    if(num < webdev.length){
      setNum(val => {
        let diff = webdev.length - val
        
        if(diff < 12){
          return val + diff
        }

        return val + 12
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    if(mounted){
   
      let newarr = []

      for (let i = 0; i < num; i++){
        newarr.push(webdev[i]);
      }


      if(num >= webdev.length){
        seeMoreButton.current.style.display = "none";
      }

      setViews(newarr)
      
    }

    return () => {
      mounted = false;
    }

  }, [num]);

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
          ? <ImageSkeleton num={num} />
          : null
        }
        {views.map(img => {
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