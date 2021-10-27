import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';
import Lightbox from 'react-awesome-lightbox';

import appui from '../images/portfolio/graphics/appui.json';
import bizcard from '../images/portfolio/graphics/bizcard.json';
import flyer from '../images/portfolio/graphics/flyer.json';
import logo from '../images/portfolio/graphics/logo.json';
import promodes from '../images/portfolio/graphics/promodes.json';

import '../styles/our_portfolio.css';

function Appui({ setActiveImg, setOpen}){
  return (
  <Flex
    className="picContainer"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    {appui.map(img => {
      return (
        <img key={img} src= {img} alt="portfoliopic" onClick={() => {
          setActiveImg(img)
          setOpen(true)
        }} />
        
      )
    })}

  </Flex>      
  )
}

function Bizcard({ setActiveImg, setOpen}){
  return (
  <Flex
    className="picContainer"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    {bizcard.map(img => {
      return (
        <img key={img} src= {img} alt="portfoliopic" onClick={() => {
          setActiveImg(img)
          setOpen(true)
        }} />
        
      )
    })}

  </Flex>   
  )
}

function Flyer({ setActiveImg, setOpen}){
  return (
  <Flex
    className="picContainer"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    {flyer.map(img => {
      return (
        <img key={img} src= {img} alt="portfoliopic" onClick={() => {
          setActiveImg(img)
          setOpen(true)
        }} />
        
      )
    })}

  </Flex>   
  )
}

function Logo({ setActiveImg, setOpen}){
  return (
  <Flex
    className="picContainer"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    {logo.map(img => {
      return (
        <img key={img} src= {img} alt="portfoliopic" onClick={() => {
          setActiveImg(img)
          setOpen(true)
        }} />
        
      )
    })}

  </Flex>   
  )
}

function Promodes({ setActiveImg, setOpen}){
  return (
  <Flex
    className="picContainer"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    {promodes.map(img => {
      return (
        <img key={img} src= {img} alt="portfoliopic" onClick={() => {
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
        mt="50px"
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
                "15px",
                "15px",
                "15px",
                "15px",
                "15px"
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
