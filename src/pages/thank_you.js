import React, { useState, useEffect, useRef } from 'react';
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
import emailjs, { init } from 'emailjs-com';
import '../styles/contact.css';

init("user_bcT1POGZr6wb1ww9bBJo6");

export default function Thank_you({ location }) {

  const isBrowser = typeof window !== "undefined"
  
  const [width, setWidth]   = useState();
  const [height, setHeight] = useState();
  const [sucess, setSucess] = useState(true);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  const emailAdd = useRef();
  const nameClient = useRef();
  const cloc = useRef();
  const coname = useRef();
  const projDetails = useRef();

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [loc, setLoc] = useState();
  // const [companyName, setCompanyName] = useState();
  // const [details, setDetails] = useState("");

 useEffect(() => {

    if(isBrowser){
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // const formatText = (val) => {
  //   let formatted = val.replace(/\s/g, "%20");

  //   if(formatted.includes(",")){

  //     let removedComma = formatted.replace(/,/g, "%20")
    
  //     return removedComma;
  //   }

  //   return formatted;
  // };


  const sendMail = () => {
    let message = `${nameClient.current.value}(${emailAdd.current.value}) from ${coname.current.value} located at ${cloc.current.value} is inquiring. Project details : ${projDetails.current.value}`

    const template = {
      from_name: nameClient.current.value,
      to_name: "Visual Group",
      message: message
    }

    emailjs.send('service_vvr7s0r', 'template_d4hoxpf', template).then((res) => {
      if(res.status === 200){
        setSucess(true)
      }
    });
  }

  return (
    <Box className="main" overflowX="hidden" >
      <SEO />
         {
          (width > 1280) 
          ? <Nav loc={location}  />
          : <MobileNav  />
        }
      <Box>
        <ThankYouComponent />
        <Footer />
      </Box>
    </Box>
  )
}

function ThankYouComponent(){
  return (
    <Flex
      w="100%"
      px="10%"
      h="700px"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Text
          fontSize={[
            "32px",
            "32px",
            "45px",
            "45px",
            "45px"
          ]}
          fontFamily="dm-sans"
          color="#0A2F53"
          fontWeight="800"
        >
          Thanks for being awesome! 
        </Text>
        <Text
          fontSize={[
            "18px",
            "18px",
            "18px",
            "24px",
            "24px"
          ]}
          fontFamily="dm-sans"
          py="20px"
        >
          We have received your message and would like to thank you for filling out our form.  
          <br />
          We will reply by email as soon as possible.
          <br />
          <br />
          Talk to you soon! 
          <br/>
          <br/>
          - Visual Group digital
        </Text>
      </Box>
    </Flex>
  )
}

