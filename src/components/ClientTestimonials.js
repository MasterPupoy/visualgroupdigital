import React from 'react';
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

import line1 from '../images/line1.svg';
import bytrustpilot from '../images/bytrustpilot.svg';
import fivestars from '../images/fivestars.svg';
import smallLine from '../images/small_line.svg';
import trustpilot from '../images/trustpilot.png';

import '../styles/clientTestimonials.css';

export default function ClientTestimonials() {
  return (
    <Box 
      pt="90px"
    >
      <Flex
        flexDirection="row"
        flexWrap="noWrap"
        justifyContent="center"
        w="100%"
        className="whatwedo"
      >
        <Box
          alignSelf="center"
          pr="20px"
        >
          <img src={line1} alt="line.svg" />
        </Box>
        <Box>
          <h3>
            Client Testimonials
          </h3>
        </Box>
        <Box
          alignSelf="center"
          pl="20px"
        >
          <img src={line1} alt="line.svg" />
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        w="100%"
      >
        <img src={bytrustpilot} alt="bytrustpilot.svg"/>
      </Flex>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        pt="100px"
      >
        <Box
          w="500px"
          my="20px"
          mx="20px"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <img src={fivestars} alt="fivestars.svg" />
          </Flex>
          <Box
            className="statement"
          >
            <Text
              fontSize="3xl"
              as="h3"
            >
              “I’ve been using Visual <br />  
              Group for over 2 months.”
            </Text>
            <Text
              as="p"
              fontSize="md"
            >
              "My experience has been amazing and they have really helped me grow my business 
              and progress it to the next level. We speak daily and continuously track progress 
              and discuss how we can keep growing the business further. Really great company to 
              work with and I would recommend them to anyone!"
            </Text>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            pt="20px"
          >
            <Box>
              <img src={smallLine} alt="line.svg" />
            </Box>
            <Box
              pl="10px"
            >
              <h3>
                Matt
              </h3>
            </Box>
          </Flex>
        </Box>
        <Box
          w="500px"
          my="20px"
          mx="20px"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <img src={fivestars} alt="fivestars.svg" />
          </Flex>
          <Box
            className="statement"
          >
            <Text
              fontSize="3xl"
              as="h3"
            >
              “Fantastic service. Highly <br /> 
              recommend!”
            </Text>
            <Text
              as="p"
              fontSize="md"
            >
              "We came across Ricky by chance and so glad we did.
              Originally we approached Ricky with my project that 
              needed to be completely transformed. I have been working 
              with the visualgroup.online for a few months since and 
              Ricky has always been a man of his word, constantly 
              deliveres quality and continues too. I highly recommend."
            </Text>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
              pt="20px"
          >
            <Box>
              <img src={smallLine} alt="line.svg" />
            </Box>
            <Box
              pl="10px"
            >
              <h3>
                Leah Murray 
              </h3>
            </Box>
          </Flex>
        </Box>
        <Box
          w="500px"
          mx="20px"
          my="20px"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <img src={fivestars} alt="fivestars.svg" />
          </Flex>
          <Box
            className="statement"
          >
            <Text
              fontSize="3xl"
              as="h3"
            >
              “I can’t express enough how <br />
              impressed I am with their results!”
            </Text>
            <Text
              as="p"
            >
              "Visual Group have been running my ads for the last 4 months 
              and I can’t express enough how impressed I am with their 
              results! They’ve increased my sales and allowed me to take 
              my business to the level I wanted it to be at, but Wasn’t 
              sure how to get there. They also helped me not just with a 
              paid marketing plan but they also gave me advice on how to 
              grow my business organically. Thank you so much! 2021 is 
              going to be a big year!"
            </Text>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            pt="20px"
          >
            <Box>
              <img src={smallLine} alt="line.svg" />
            </Box>
            <Box
              pl="10px"
            >
              <h3>
                Sarah Bricker
              </h3>
            </Box>
          </Flex>
        </Box>
        <Box
          w="500px"
          mx="20px"
          my="20px"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <img src={fivestars} alt="fivestars.svg" />
          </Flex>
          <Box
            className="statement"
          >
            <Text
              fontSize="3xl"
              as="h3"
            >
              “Visual Group have been <br />
              excellent in getting my business <br/>
              out of a rut.”
            </Text>
            <Text
              as="p"
            >
              "I had a very bad experience with a marketing firm who 
              charged me an excessive amount of money but didn't complete the works. 
              Visual Group have since helped with my business to make it consistent 
              and tied together with an effect and profitable marketing strategy, 
              created 3 effective websites and have begun a marketing campaign that 
              has generated leads, all within a 3 month time period! Very quick and 
              efficient at what they do. Very happy with the results! 
              Would highly recommend them!"
            </Text>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
              pt="20px"
          >
            <Box>
              <img src={smallLine} alt="line.svg" />
            </Box>
            <Box
              pl="10px"
            >
              <h3>
                Samantha Harris
              </h3>
            </Box>
          </Flex> 
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <a 
            href="#"
            className="linktotrustpilot"
          >
            VIEW ALL REVIEWS ON &gt;
          </a>
        </Box>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <img src={trustpilot} alt="trustpilot.png" />
        </Box>
      </Flex>
    </Box>
  )
}
