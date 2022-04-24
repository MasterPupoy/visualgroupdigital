import { Image, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SimplifiedNav from "../components/SimplifiedNav";
import { InlineWidget } from "react-calendly";
import Footer from "../components/Footer";
import Head from "../components/Illustrations/headd.png";
export default function book_now() {
  return (
    <Box backgroundColor={"#FFF5DF"}>
      <Box
        maxW="2000px"
        m={"auto"}
        backgroundColor={"#FFF5DF"}
        overflowX="hidden"
      >
        <SimplifiedNav />
        <Text
          color="#0A2F53"
          fontFamily={"dm-sans"}
          fontSize={["2.25rem", "2.25rem", "2.5rem", "2.75rem", "3rem"]}
          fontWeight="extrabold"
          textAlign={"center"}
          p="2rem"
        >
          You’re just one click away to successful marketing!&nbsp; 
          <span
            style={{
              color: "#EE6F19",
            }}
          >
            <u>Thats the Visual Group Digital guarantee!</u>
          </span>
        </Text>
        <InlineWidget
          url="https://calendly.com/visualgroupdigital/"
          styles={{
            height: "700px",
            width: "100%",
          }}
        />
        <Flex
          w="100%"
          backgroundColor={"#0A2F53"}
          h={["500px", "400px", "300px"]}
          p="1rem"
          flexDirection={"row"}
          justifyContent="space-around"
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Flex
            justifyContent={"center"}
            w={["100%", "100%", "50%", "50%", "50%"]}
            alignItems={"center"}
          >
            <Image src={Head} w="10rem" />
          </Flex>
          <Box w={["100%", "100%", "50%", "50%", "50%"]}>
            <Text fontSize={"2rem"} fontWeight="extrabold" color="#FFF5DF">
              BOOST YOUR BUSINESS’ POTENTIAL TODAY! BRINGING MORE CUSTOMERS TO
              YOU.
            </Text>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
}
