import React from "react";
import { Button, Box, Flex, Image, Text, Stack, Link } from "@chakra-ui/react";
import logo from "../images/logo2.svg";

export default function SimplifiedNav() {
  return (
    <Flex
      flexDirection={"row"}
      w="100%"
      justifyContent="space-between"
      alignItems={'center'}
      px="1rem"
      py="1rem"
      flexWrap={"wrap"}
    >
      <Image
        src={logo}
        width={"15rem"}
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.assign("/getting-started");
        }}
      />
      <Flex
        alignItems="center"
        flexDirection="row"
        py="1rem"
        flexWrap={"wrap"}
        display={["none", "none", "block", "block", "block"]}
      >
        <Stack direction={["column", "row"]} spacing="24px">
          <Link href="/about" >
            <Text className="simpnav">
              About Us
            </Text> 
          </Link>
          <Link href='/digital_marketing'>
            <Text className="simpnav">
              Digital Marketing
            </Text> 
          </Link>
          <Link href='/our_portfolio'>
            <Text className="simpnav">
              Our Portfolio 
            </Text> 
          </Link>
        </Stack>
      </Flex>

      <Button
        display={["none", "none", "none", "none", "block", "block", "block"]}
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
