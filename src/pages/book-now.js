import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SimplifiedNav from "../components/SimplifiedNav";
import { InlineWidget } from "react-calendly";
import Footer from "../components/Footer";

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
          p="2rem"
          color={"#0a2f53"}
          fontSize={["2.25rem", "2.25rem", "3.5rem", "3.75", "4rem"]}
          fontFamily={"dm-sans"}
          textAlign="center"
          w="100%"
        >
          Book an appointment
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
          alignItems={'center'}
          flexWrap={"wrap"}
        >
          <Box w={["100%", "100%", "50%", "50%", "50%"]}></Box>
          <Box w={["100%", "100%", "50%", "50%", "50%"]}>
            <Text fontFamily={"dm-sans"} fontSize={"2rem"} color="#FFF5DF">
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
