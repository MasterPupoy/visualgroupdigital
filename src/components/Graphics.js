import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Skeleton
} from '@chakra-ui/react';
import Lightbox from 'react-awesome-lightbox';

import appui from '../images/portfolio/graphics/appui.json';
import bizcard from '../images/portfolio/graphics/bizcard.json';
import flyer from '../images/portfolio/graphics/flyer.json';
import logo from '../images/portfolio/graphics/logo.json';
import promodes from '../images/portfolio/graphics/promodes.json';

import '../styles/our_portfolio.css';

function ImageSkeleton({ num = 8 }){
  let all = []

  for(let i = 0; i < num; i++){
    all = [...all, <Skeleton key={i} w="300px" h="300px" startColor="blue.500" endColor="orange.500" className="loaderskel" /> ]
  }

  return all
}

function Appui({ setActiveImg, setOpen}){
  const [loading, setLoading] = useState(true);

  return (
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

    {appui.map(img => {
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
  )
}

function Bizcard({ setActiveImg, setOpen}){
  const [loading, setLoading] = useState(true);

  return (
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
    {bizcard.map(img => {
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
  )
}

function Flyer({ setActiveImg, setOpen}){
  const [loading, setLoading] = useState(true);

  return (
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
    {flyer.map(img => {
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
  )
}

function Logo({ setActiveImg, setOpen}){
  const [loading, setLoading] = useState(true);

  return (
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
    {logo.map(img => {
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
  )
}

function Promodes({ setActiveImg, setOpen}){
  const [loading, setLoading] = useState(true);

  return (
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
    {promodes.map(img => {
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
  )
}

export default function Graphics() {
  const [Open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");
  const [key, setKey] = useState("APP UI");
  
  const buttons = [
    {
      title: "APP UI",
      key: "APP UI"
    },
    {
      title: "BUSINESS CARDS",
      key: "BUSINESS CARDS"
    },
    {
      title: "FLYERS",
      key: "FLYERS"
    },
    {
      title: "LOGO",
      key: "LOGO"
    },
    {
      title: "PROMOTIONAL DESIGNS",
      key: "PROMOTIONAL DESIGNS"
    }

  ]

  const GraphicsContainer = () => {
    switch (key) {
      case "APP UI":
        return <Appui setActiveImg={setActiveImg} setOpen={setOpen} />
        break;
      case "BUSINESS CARDS":
        return <Bizcard setActiveImg={setActiveImg} setOpen={setOpen} />
        break;
      case "FLYERS":
        return <Flyer setActiveImg={setActiveImg} setOpen={setOpen} />
        break;
      case "LOGO":
        return <Logo setActiveImg={setActiveImg} setOpen={setOpen} />
        break;
      case "PROMOTIONAL DESIGNS":
        return <Promodes setActiveImg={setActiveImg} setOpen={setOpen} />
        break;
      default:
        break;
    }
  }

  return (
    <Flex
      flexDirection="column"
    >
      <Flex
        px="50px"
        flexWrap="wrap"
        justifyContent="center"
      >
       {buttons.map(button => {
         return (
           <Box
            key={button.key}
            onClick={() => {
              setKey(button.key)
            }}
            mx="10px"
            borderBottom={(key === button.key) ? "3px solid #0A2F53" : null}
            _hover={{
              cursor: "pointer",
              borderBottom: "3px solid #0A2F53"
            }}
           >
            <Text
              fontFamily="dm-sans"
              fontSize={[
                "13px",
                "13px",
                "13px",
                "13px",
                "13px"
              ]}
              my="10px"
              fontWeight="bold"
              color={(key === button.key) ? "#0A2F53" : "#848484"}
            >
              {button.title}
            </Text>
           </Box>
         )
       })}
      </Flex>
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
        <GraphicsContainer />
      </Flex>

    {(Open) ? <Lightbox image={activeImg} onClose={() => setOpen(prevState => !prevState)} /> : null}
    </Flex>
  )
}
