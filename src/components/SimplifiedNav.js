import React from "react";
import { Button, Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo2.svg";
import facebook from "../images/simplified/socials/fb_simplified.svg";
import twitter from "../images/simplified/socials/twttr_simplified.svg";
import insta from "../images/simplified/socials/insta_simplified.svg";

export default function SimplifiedNav() {
  return (
    <Flex
      flexDirection={"row"}
      w="100%"
      justifyContent="space-between"
      px="1rem"
      py="1rem"
      flexWrap={"wrap"}
    >
      <Image src={logo} width={"15rem"} style={{
        cursor: 'pointer'
      }} 
      onClick={() => {
        window.location.assign('/getting-started')
      }}
      />
      {/* <Flex
        alignItems="center"
        flexDirection="row"
        py="1rem"
        flexWrap={"wrap"}
        display={["none", "none", "block", "block", "block"]}
      >
        <Text
          className="reusableheader"
          as="h3"
          fontSize="1rem"
          fontWeight="800"
          mx="1.25rem"
          fontFamily={"dm-sans"}
        >
          Follow Us
        </Text>
        <Flex className="social" alignItems={"center"}>
          <a
            href="https://www.facebook.com/visualgrouponlineltd"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebook}
              alt="facebooklogo.svg"
              style={{ height: "35px", width: "35px", cursor: "pointer" }}
            />
          </a>
          <a>
            <img
              src={twitter}
              alt="twitter.svg"
              style={{ height: "41px", width: "40px", cursor: "pointer" }}
            />
          </a>
          <a
            href="https://www.instagram.com/visualgroupdigitalltd"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={insta}
              alt="instagram.svg"
              style={{ height: "35px", width: "35px", cursor: "pointer" }}
            />
          </a>
        </Flex>
      </Flex> */}
      
      <Button
        display={["none", "none","none","block","block","block"]}
          className="button button--aylen"
        my="1rem"
        color="#FFFFFF"
        onClick={() => {
          window.location.assign("/book-now");
        }}
      >
        Book an appointment now!
      </Button>
    </Flex>
  );
}
