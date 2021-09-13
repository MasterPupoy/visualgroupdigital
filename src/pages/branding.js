import React from 'react';
import {
  Flex,
  Box
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';

export default function branding({ location }) {
  return (
    <Box>
      <SEO />
      <Box>
        <Nav loc={location} page='/branding' />
      </Box>
    </Box>
  )
}
