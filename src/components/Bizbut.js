import React from 'react'
import {
  Box
} from '@chakra-ui/react';
import '../styles/bizbut.css';


export default function Bizbut() {
  return (
    <Box>
      <button
        className="bizbut"
      >
        BUSINESS ENQUIRY
      </button>
      <a
        className="reqCB"
        href="#"
      >
        REQUEST A CALL BACK &gt;
      </a>
    </Box>
  )
}
