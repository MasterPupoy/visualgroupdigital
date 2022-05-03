import React, { useState, useEffect, useRef } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text,
} from "@chakra-ui/react";
import { InlineWidget } from "react-calendly";
import SEO from "../components/Seo";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

import message from "../images/message.svg";

import Swal from "sweetalert2";
import emailjs, { init } from "emailjs-com";
import "../styles/contact.css";

init("user_GCaEVt5pBdXq2r2kUScDu");

export default function Contact({ location }) {
  const isBrowser = typeof window !== "undefined";

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const emailAdd = useRef();
  const nameClient = useRef();
  const cloc = useRef();
  const coname = useRef();
  const projDetails = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [loc, setLoc] = useState();
  const [companyName, setCompanyName] = useState();
  const [details, setDetails] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (isBrowser) {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdd.current.value.match(valid)) {
      const template = {
        from_name: nameClient.current.value,
        to_name: "Visual Group",
        message: message,
        client_name: nameClient.current.value,
        client_email: emailAdd.current.value,
        client_company: coname.current.value,
        client_location: cloc.current.value,
        project_details: projDetails.current.value,
      };

      emailjs
        .send("service_e8f9jv7", "template_kysv18u", template)
        .then((res) => {
          if (res.status === 200) {
            window.location.assign("/thank_you");
          } else {
            Swal.fire({
              title: "Oops...",
              text: "Something Went wrong",
              icon: "error",
              footer: "We're working to sort this out",
            });
          }
        });
    } else {
      setValid(false);
    }
  };

  return (
    <Box className="main" overflowX="hidden">
      <SEO />
      {width > 1280 ? (
        <Nav loc={location} page="/contact" />
      ) : (
        <MobileNav page="/contact" />
      )}
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
            <Text as="h3" fontSize={["23px", "23px", "32px", "32px", "32px"]}>
              Get started
            </Text>
            <Text as="p" fontSize={["14px", "14px", "18px", "22px", "22px"]}>
              It only takes a few minutes to kick off a project. Fill in the
              details below and we’ll be in touch.
            </Text>
          </Flex>

          <InlineWidget
            url="https://calendly.com/visualgroupdigital/"
            styles={{
              height: "700px",
              width: "100%",
            }}
          />

          {/* <Flex
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
                  pt="20px"
                >
                  <FormControl id="name">
                    <FormLabel>YOUR NAME</FormLabel>
                    <Input 
                      ref={nameClient}
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        setName(e.target.value);
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
                  pt="20px"
                >
                  <FormControl id="email">
                    <FormLabel>EMAIL</FormLabel>
                    <Input 
                      ref={emailAdd}
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        
                        if(e.target.value.match(valid)){
                          setEmail(e.target.value);
                          setValid(true);
                        }else{
                          setValid(false);
                        }
                      }}
                    />
                    {(valid) ? null : <Text
                      color="red"
                      fontSize="15px"
                    >*Please enter a valid email</Text>}
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
                  pt="20px"
                >
                  <FormControl id="location">
                    <FormLabel>LOCATION</FormLabel>
                    <Input 
                      ref={cloc}
                      type="text" 
                      className="inputField" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        setLoc(e.target.value);
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
                 pt="20px"
                >
                  <FormControl id="company_name">
                    <FormLabel>COMPANY NAME</FormLabel>
                    <Input
                      ref={coname}
                      type="email" 
                      style={{
                        border: "1px solid rgba(238, 111, 25, 0.54)",
                        borderRadius: "8px"
                      }}
                      isRequired
                      onChange={(e) => {
                        setCompanyName(e.target.value);
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
                ref={projDetails}
                size="md"
                placeholder="Anything else you'd like to add?"
                resize="none"
                style={{
                  border: "1px solid rgba(238, 111, 25, 0.54)",
                  borderRadius: "8px"
                }}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <Box
            pt="50px"
            textAlign="center"
          >
            {(!name || !email || !loc || !companyName || !valid) 
              ?<button 
                className="contactsubmitdisabled" 
                // href={`mailto:hello@visualgroup.online?subject=${companyName}%20Inquiry&body=Name:%20${name}%0D%0A%0D%0AEmail:%20${email}%0D%0A%0D%0ALocation:%20${loc}%0D%0A%0D%0ACompany%20name:%20${companyName}%0D%0A%0D%0AProject%20Details:%0D%0A${details}`}
                
              >
                SUBMIT
              </button>
              :<button 
                className="contactsubmit" 
                // href={`mailto:hello@visualgroup.online?subject=${companyName}%20Inquiry&body=Name:%20${name}%0D%0A%0D%0AEmail:%20${email}%0D%0A%0D%0ALocation:%20${loc}%0D%0A%0D%0ACompany%20name:%20${companyName}%0D%0A%0D%0AProject%20Details:%0D%0A${details}`}
                onClick={() =>  sendMail()}
              >
                SUBMIT
              </button>
            }
          </Box> */}
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
}
