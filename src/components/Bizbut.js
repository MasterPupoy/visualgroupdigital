import React from 'react'
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';
import '../styles/bizbut.css';


export default function Bizbut({ id }) {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      id={id}
      w="100%"
    >
      <Box>
        <button
          className="bizbut"
          onClick={() => {
            window.location.assign('/contact')
          }}
        >
          BUSINESS ENQUIRY
        </button>
      </Box>
      <Box
        pt={[
          "20px",
          "20px",
          "0px",
          "0px",
          "0px"
        ]}
        px={[
          "20px",
          "20px",
          "20px",
          '0px',
          "0px"
        ]}
      >
        <a
          className="reqCB"
          href="/contact"
        >
          REQUEST A CALL BACK &gt;
        </a>
      </Box>
    </Flex>
  )
}
