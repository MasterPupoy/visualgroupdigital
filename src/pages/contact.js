import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text
} from '@chakra-ui/react';
import SEO from '../components/Seo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import message from '../images/message.svg';
import map from '../images/map.svg';

import Swal from 'sweetalert2'

import '../styles/contact.css';

export default function Contact({ location }) {

  const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [loc, setLoc] = useState();
  const [companyName, setCompanyName] = useState();
  const [details, setDetails] = useState("");

 useEffect(() => {

    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const formatText = (val) => {
    let formatted = val.replace(/\s/g, "%20");

    if(formatted.includes(",")){

      let removedComma = formatted.replace(/,/g, "%20")
    
      return removedComma;
    }

    return formatted;
  };

  console.log(loc, companyName, details)

  return (
    <Box className="main" overflowX="hidden" >
      <SEO />
         {
          (width > 1280) 
          ? <Nav loc={location} page='/contact' />
          : <MobileNav page='/contact' />
        }
      <Box>
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          flexWrap="wrap"
          px="5%"
          mt="60px"
          >
          <Flex
            className="contactgetstarted"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            w="100%"
            py="10px"
            borderBottom="0.5px solid rgba(0, 0, 0, 0.15);"
          >
            <Text
              as="h3"
              fontSize={[
                "23px",
                "23px",
                "32px",
                "32px",
                "32px"
              ]}
            >
              Get started
            </Text>
            <Text
              as="p"
              fontSize={[
                "14px",
                "14px",
                "18px",
                "22px",
                "22px"
              ]}
            >
              It only takes a few minutes to kick off a project. 
              Fill in the details below and we’ll be in touch.
            </Text>
          </Flex>





          <Flex
            className="contactgetstarted2"
            w="100%"
            px="5%"
            justifyContent="center"
            alignItems="center"
            borderBottom="0.5px solid rgba(0, 0, 0, 0.15);"
          >
            <Flex
              pt="32px"
              justifyContent="center"
              flexDirection="column"
              w="100%"
              flexWrap="wrap"
            >
              <Flex
                justifyContent="space-between"
                w="100%"
                flexWrap="wrap"
              >
                <Box 
                  w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="name">
                    <FormLabel>YOUR NAME</FormLabel>
                    <Input 
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        const name = formatText(e.target.value);
                        setName(name);
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                    w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="email">
                    <FormLabel>EMAIL</FormLabel>
                    <Input 
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        const mail = formatText(e.target.value);
                        setEmail(mail);
                      }}
                    />
                  </FormControl>
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                w="100%"
                pt="20px"
                flexWrap="wrap"
              >
                <Box 
                  w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="location">
                    <FormLabel>LOCATION</FormLabel>
                    <Input 
                      type="text" 
                      className="inputField" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        const location = formatText(e.target.value);
                        setLoc(location);
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                    w={[
                    "100%",
                    "100%",
                    "100%",
                    "49%",
                    "49%"
                  ]}
                >
                  <FormControl id="company_name">
                    <FormLabel>COMPANY NAME</FormLabel>
                    <Input 
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        const cname = formatText(e.target.value);
                        setCompanyName(cname);
                      }}
                    />
                  </FormControl>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Box
            className="contactgetstarted3"
            pt="50px"
            px="5%"
            w="100%"
          >

            <FormControl id="textarea" pt="20px">
              <FormLabel>PROJECT DETAILS</FormLabel>
              <Textarea
                size="md"
                placeholder="Anything else you'd like to add?"
                resize="none"
                style={{
                  border: "1px solid rgba(238, 111, 25, 0.54)",
                  borderRadius: "8px"
                }}
                onChange={(e) => {
                  const deets = formatText(e.target.value);
                  setDetails(deets);
                }}
              />
            </FormControl>
          </Box>
          <Box
            pt="50px"
            textAlign="center"
          >
            {(!name || !email || !companyName || !loc )
              ? <button
                className="contactsubmit"
                onClick={() => {
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: "Please make sure that you filled out all the important details.",
                      confirmButtonColor: "#0A2F53",
                      iconColor: "#EE6F19",
                    });
                }}
              >
                SUBMIT
              </button>
              : <a className="contactsubmit" 
                href={`mailto:hello@visualgroup.online?subject=${companyName}%20Inquiry&body=Name:%20${name}%0D%0A%0D%0AEmail:%20${email}%0D%0A%0D%0ALocation:%20${loc}%0D%0A%0D%0ACompany%20name:%20${companyName}%0D%0A%0D%0AProject%20Details:%0D%0A${details}`}
                onClick={() => {
                  if(!name || !email || !companyName || !loc ){
                    return Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: "Please make sure that you filled out all the important details.",
                      confirmButtonColor: "#0A2F53",
                      iconColor: "#EE6F19",
                    });
                  }


                  return Swal.fire({
                    icon: 'success',
                    title: 'Send Us A Mail!',
                    text: "We've forwarded your details to your default email client. Please double check and hit send!",
                    confirmButtonColor: "#0A2F53",
                    iconColor: "#EE6F19",
                    footer: 'Looking forward to work with you!'
                  }).then((result) => {
                    if(result.isConfirmed){
                      setName("");
                      setCompanyName("");
                      setDetails("");
                      setLoc("");
                      setEmail("");
                    }
                  })
                }}
                disabled
              >
                SUBMIT
              </a>
            }
          </Box>
        </Flex>
        <Footer />
      </Box>
    </Box>
  )
}
