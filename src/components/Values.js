import React, { useEffect, useRef, useState } from 'react';

import {
  Box, 
  Flex
} from '@chakra-ui/react';

import '../styles/values.css';


import { gsap } from 'gsap';

export default function Values() {

  const set1 = useRef();
  const set2 = useRef();
  const set3 = useRef();

  useEffect(() => {

    gsap.set(".box", {
      x: (i) => i * 700
    });
    

    gsap.to(".box", {
      duration: 17,
      ease: "none",
      x: `+=2800`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % `2800`) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });

    

    gsap.set(".box2", {
      x: (i) => i * 700,
    });
    

    gsap.to(".box2", {
      duration: 15,
      ease: "none",
      x: `+=2800`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % `2800`) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });


    gsap.set(".box3", {
      x: (i) => i * 700,
    });
    

    gsap.to(".box3", {
      duration: 20,
      ease: "none",
      x: `+=2800`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % `2800`) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });

  })


  return (
    <Box
      mt="40px"
      // overflowX="hidden"
      h="900px"
    >
      <Box
        // overflowX="hidden"

        ref={set1}
        className="valuecontainer"
      >
        <Box className="valuecard1 box">
          <h3>
            Honesty
          </h3>
          <p>
            At Visual Group Digital, we believe that honesty leads to better <br />
            teamwork, better dialogue, and better results. Before all else, 
            we <br /> value honesty in our communication!
          </p>
        </Box>
        <Box className="valuecard2 box">
          <h3>
            Authenticity
          </h3>
          <p>
            What sets us apart from other agencies is the quality of products <br />
            and services we provide our clients. Every business is unique, so <br />
            we take care of every client in a personalized way to fit their <br />
            business??? needs and preferences.
          </p>
        </Box>
        <Box className="valuecard1 box">
          <h3>
            Dynamic
          </h3>
          <p>
            By keeping positive energy flowing within our business, 
            we bring <br />new ideas and unfailing effort to every client project!
          </p>
        </Box>
        <Box className="valuecard2 box">
          <h3>
            Authenticity
          </h3>
          <p>
            What sets us apart from other agencies is the quality of products <br />
            and services we provide our clients. Every business is unique, so <br />
            we take care of every client in a personalized way to fit their <br />
            business??? needs and preferences.
          </p>
        </Box>
      </Box>
      <Box
        // overflowX="hidden"
        className="valuecontainer2"
        ref={set2}
      >
        <Box className="valuecard2 box2">
          <h3>
            Straightforward
          </h3>
          <p>
            We strongly believe that time is of the essence. We speak straight <br />
             to the point, and do not beat around the bush.
          </p>
        </Box>
        <Box className="valuecard1 box2">
          <h3>
            Supportive
          </h3>
          <p>
            We are there to support our clients throughout their marketing <br />
             journey. As experts in the field, we are ready to be of assistance <br />
             to our clients at any time!
          </p>
        </Box>
        <Box className="valuecard2 box2">
          <h3>
           Accountable 
          </h3>
          <p>
            The moment you become our client, we hold ourselves <br />
            accountable for your business??? reputation. Your business??? <br />
            success is our success. That being said, you can expect nothing but the <br/> 
            best from us!
          </p>
        </Box>
        <Box className="valuecard1 box2">
          <h3>
            Supportive
          </h3>
          <p>
            We are there to support our clients throughout their marketing <br />
             journey. As experts in the field, we are ready to be of assistance <br />
             to our clients at any time!
          </p>
        </Box>
      </Box>
      <Box
        // overflowX="hidden"
        className="valuecontainer"
        w="2046px"
        ref={set3}
      >
        <Box className="valuecard1 box3">
          <h3>
            Encouraging
          </h3>
          <p>
            With the right mindset, anything is possible. We serve as a moral <br />
            support for thriving entrepreneurs to believe in themselves, take a <br />
            leap of faith, and make their business venture a huge success.
          </p>
        </Box>
        <Box className="valuecard2 box3">
          <h3>
            Reasonable
          </h3>
          <p>
            As business founders, we understand the triumphs of success, <br />
            moments of failure, and everything in between. We???re empathetic <br />
            to our clients??? needs, and we???re always willing to be reasonable.
          </p>

        </Box>
        <Box className="valuecard1 box3">
          <h3>
            Dedication
          </h3>
          <p>
            Our dedication and passion for what we do is what drives us to <br />
            work hard to provide our clients with exceptional products and <br/>
             services.
          </p>
        </Box>
        <Box className="valuecard2 box3">
          <h3>
            Reasonable
          </h3>
          <p>
            As business founders, we understand the triumphs of success, <br />
            moments of failure, and everything in between. We???re empathetic <br />
            to our clients??? needs, and we???re always willing to be reasonable.
          </p>

        </Box>
      </Box>
    </Box>
  )
}
