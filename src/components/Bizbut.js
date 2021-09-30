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
      alignItems="center"
      id={id}
    >
      <Box>
        <button
          className="bizbut"
          onClick={() => {
            window.location.assign('/about')
          }}
        >
          BUSINESS ENQUIRY
        </button>
      </Box>
      <Box>
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
