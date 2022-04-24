import React, { useEffect, useState } from "react";
import SEO from "../components/Seo";
import { Box, Flex, Button, Input, Text, Image } from "@chakra-ui/react";
import CheckBadge from "../components/CheckBadge";
import SimplifiedNav from "../components/SimplifiedNav";

import Company from "../images/simplified/img/company.png";
import Process from "../components/Process";
import LogoIndex from "../components/LogoIndex";
import Wave1 from "../components/Wave1";
import Wave2 from "../components/Wave2";
import "../styles/simplifiedNav.css";
import Footer from "../components/Footer";
import fivestars from "../images/fivestars.svg";
import smallLine from "../images/small_line.svg";
import Gcard from "../components/Gcard";
import BrokenImg from "../components/BrokenImg";
import Hourglass from "../components/Hourglass";
import Trends from "../components/Trends";
import Head from "../components/Illustrations/headd.png";
import emailjs, { init } from "emailjs-com";
import Swal from "sweetalert2";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

init("user_GCaEVt5pBdXq2r2kUScDu");

gsap.registerPlugin(ScrollTrigger);

export default function GettingStarted() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".youneed",
      { x: 1000, scale: 0 },
      { duration: 0.5, x: 0, scale: 1 }
    )
      .fromTo(".unlock", { opacity: 0 }, { duration: 0.5, opacity: 1 })
      .fromTo(
        ".guaranteed",
        {
          x: 100,
          opacity: 0,
        },
        { duration: 0.25, x: 0, opacity: 1 }
      )
      .fromTo(
        ".boost",
        {
          x: 100,
          opacity: 0,
        },
        { duration: 0.25, x: 0, opacity: 1 }
      )
      .fromTo(
        ".bringing",
        {
          x: 100,
          opacity: 0,
        },
        { duration: 0.25, x: 0, opacity: 1 }
      )
      .fromTo(
        ".allin",
        {
          x: 100,
          opacity: 0,
        },
        { duration: 0.25, x: 0, opacity: 1 }
      )
      .fromTo(
        ".booknow",
        { y: -1000, opacity: 0 },
        { duration: 0.25, opacity: 1, y: 0 }
      );

    return () => {
      tl.kill();
    };
  }, []);

  const sendMail = () => {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.current.value.match(valid)) {
      const template = {
        from_name: name,
        to_name: "Visual Group",
        message: 'Inquiry from funnel',
        client_name: name,
        client_email: email, 
        client_company: company,
        client_location: location, 
        project_details: 'Lets chat inquiry' 
      };

      emailjs
        .send("service_e8f9jv7", "template_kysv18u", template)
        .then((res) => {
          if (res.status === 200) {
            window.location.assign("/book-now");
          } else {
            Swal.fire({
              title: "Oops...",
              text: "Something Went wrong",
              icon: "error",
              footer: "We're working to sort this out",
            });
          }
        });
    }
  };

  return (
    <Box backgroundColor={"#FFF5DF"}>
      <Box
        maxW="2000px"
        m={"auto"}
        backgroundColor={"#FFF5DF"}
        overflowX="hidden"
      >
        <SEO />
        <Flex>
          <SimplifiedNav />
        </Flex>
        <Flex
          backgroundRepeat={"no-repeat"}
          backgroundImage={Company}
          backgroundColor={"#212f3d "}
          backgroundSize={"cover"}
          w="100%"
          h={["700px", "700px", "800px", "800px", "850px"]}
          flexDirection={"row"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
          alignItems="center"
          px="1rem"
        >
          <Flex
            flexDirection={"column"}
            maxW="1200px"
            w={["100%", "100%", "100%", "100%", "50%"]}
            px={"1rem"}
          >
            <Text
              borderLeftWidth={"4px"}
              borderLeftColor={"#EE6F19"}
              borderTopWidth={"4px"}
              borderTopColor={"#EE6F19"}
              fontSize={["3rem", "3rem", "3.25rem", "4.25rem"]}
              color={"#ffff"}
              p="0.5rem"
              fontFamily={"DM Sans"}
              fontWeight={700}
              className={"youneed"}
            >
              You need a <u>GREAT DIGITAL MARKETING ALLY!</u>
            </Text>
            <Text
              py="0.5rem"
              fontSize={["1.75rem", "2rem", "2.5rem", "3rem"]}
              color="#ffff"
              fontWeight={700}
              className="unlock"
            >
              Unlock your business' full potential with us!
            </Text>
            <Box>
              <Flex alignItems="center" my="0.5rem" className="guaranteed">
                <CheckBadge />
                <Text
                  fontFamily={"dm-sans"}
                  fontSize={["1.25rem", "1.15rem", "1.25rem", "1.5rem"]}
                  color="#ffff"
                  fontWeight="bold"
                  px="1rem"
                >
                  Guaranteed boost in clients
                </Text>
              </Flex>
              <Flex alignItems="center" py="0.5rem" className="boost">
                <CheckBadge />
                <Text
                  fontFamily={"dm-sans"}
                  fontSize={["1.25rem", "1.15rem", "1.25rem", "1.5rem"]}
                  color="#ffff"
                  fontWeight="bold"
                  px="1rem"
                >
                  100% Boost in online presence
                </Text>
              </Flex>
              <Flex alignItems="center" py="0.5rem" className="bringing">
                <CheckBadge />
                <Text
                  fontFamily={"dm-sans"}
                  fontSize={["1.25rem", "1.15rem", "1.25rem", "1.5rem"]}
                  color="#ffff"
                  fontWeight="bold"
                  px="1rem"
                >
                  Bringing new customers to you
                </Text>
              </Flex>
              <Flex alignItems="center" py="0.5rem" className="allin">
                <CheckBadge />
                <Text
                  fontFamily={"dm-sans"}
                  fontSize={["1.25rem", "1.15rem", "1.25rem", "1.5rem"]}
                  color="#ffff"
                  fontWeight="bold"
                  px="1rem"
                >
                  All in one web solutions
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            w={["100%", "100%", "100%", "100%", "50%"]}
            justifyContent={"center"}
            display={["none", "none", "none", "none", "flex"]}
          >
            <Box
              w={"500px"}
              h={"700px"}
              backgroundColor="#ffff"
              borderRadius={5}
              px={"0.5rem"}
              className={"booknow"}
            >
              <Flex
                justifyContent={"space-around"}
                alignItems="center"
                py="1rem"
              >
                <Text
                  fontSize={"4rem"}
                  fontWeight={700}
                  color="#0A2F53"
                  fontFamily={"dm-sans"}
                >
                  Book Now!
                </Text>
                <Image src={Head} w="7rem" />
              </Flex>
              <Box w="100%" p={"1rem"}>
                <Text my="1rem" fontSize={"1.25rem"} fontFamily={"dm-sans"}>
                  Your Name
                </Text>
                <Input
                  w="100%"
                  size="md"
                  onChange={(e) => setName(e.target.value)}
                />
                <Text my="1rem" fontSize={"1.25rem"} fontFamily={"dm-sans"}>
                  Location
                </Text>
                <Input
                  w="100%"
                  size="md"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Text my="1rem" fontSize={"1.25rem"} fontFamily={"dm-sans"}>
                  Company Name
                </Text>
                <Input
                  w="100%"
                  size="md"
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Text my="1rem" fontSize={"1.25rem"} fontFamily={"dm-sans"}>
                  Email
                </Text>
                <Input
                  w="100%"
                  size="md"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  w="100%"
                  backgroundColor="#0A2F53"
                  my="1rem"
                  p="1.5rem"
                  color="#FFFFFF"
                >
                  Let's Chat!
                </Button>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Flex
          px="1rem"
          my="1.5rem"
          justifyContent={"space-around"}
          flexWrap="wrap"
        >
          <Gcard
            icon={<BrokenImg />}
            title={"No clear strategy?"}
            content={
              "With us, we can choose clear, focused marketing objectives. Building a clear strategy that centers around your goals."
            }
            color={"#0A2F53"}
            buttonColor={"#EE6F19"}
          />
          <Gcard
            icon={<Hourglass />}
            title={"Lack of Time and Resources?"}
            content={
              "A clear, efficient process allows you to accomplish marketing activities more quickly, or delegate it to us."
            }
            color={"#EE6F19"}
            buttonColor={"#0A2F53"}
          />
          <Gcard
            icon={<Trends />}
            title={"Adapting to New Trends?"}
            content={
              "Understand that Digital Marketing is Constant Change. Thats why we’re here for you! Let's get you up and running!"
            }
            color={"#0A2F53"}
            buttonColor={"#EE6F19"}
          />
        </Flex>
        <Flex justifyContent="center" p={"3rem"}>
          <Text
            fontSize={["2.5rem", "2.5rem", "2.5rem", "3rem"]}
            color="#0A2F53"
            textAlign="center"
            fontFamily={"dm-sans"}
            fontWeight={700}
          >
            Our company helped <u>start-ups and corporations</u> improve their
            marketing and brand to <u>maximise their client potential.</u>
          </Text>
        </Flex>
        <Box w="100%">
          <Wave1 />
          <Flex
            flexDirection={"column"}
            w="100%"
            backgroundColor={"#0A2F53"}
            px={["2rem", "2rem", "2rem", "5rem", "5rem"]}
            py="2rem"
          >
            <Text
              fontFamily={"dm-sans"}
              fontSize={["1.25rem", "1.25rem", "1.5rem", "1.5rem", "1.5rem"]}
              fontWeight={"extrabold"}
              color="#ffff"
            >
              FOUNDER
            </Text>
            <Text
              fontFamily={"dm-sans"}
              fontSize={["2.5rem", "2.5rem", "2.5rem", "3rem", "3rem"]}
              fontWeight={"extrabold"}
              color="#ffff"
            >
              RICKY INGRAM
            </Text>
            <Text
              fontFamily={"dm-sans"}
              fontSize={["1.25rem", "1.25rem", "1.5rem", "1.5rem", "1.5rem"]}
              fontWeight={"extrabold"}
              color="#ffff"
            >
              CHIEF EXECUTIVE OFFICER OF VISUAL GROUP DIGITAL
            </Text>
            <Text
              fontFamily={"dm-sans"}
              fontSize="1rem"
              color="#ffff"
              py="1rem"
              maxW="1500px"
            >
              Visual Group Digital leading marketing, branding and web
              development agency. Who strategically plan the design of websites
              that empower your business.Throughout the company’s growth, our
              team has maintained the same attention to detail with each client
              we work with. Every member of our growing team understands that
              our differentiating factor among other marketing agencies is the
              one-of-a-kind thought that we put into each new account.
            </Text>
          </Flex>
          <Wave2 />
        </Box>

        <Flex
          alignItems={"center"}
          flexDirection="column"
          justifyContent="center"
          fontFamily={"dm-sans"}
          w="100%"
          px={["2rem", "2rem", "2rem", "5rem", "5rem"]}
        >
          <Text
            color="#0A2F53"
            fontFamily={"dm-sans"}
            fontSize={"3rem"}
            fontWeight="extrabold"
          >
            <span
              style={{
                color: "#EE6F19",
              }}
            >
              <u>Our 3 Easy Steps</u>
            </span>
            &nbsp; to Successful Marketing
          </Text>
          <Process removedToggle />
        </Flex>
        <Flex w="100%" justifyContent={"center"} my="3rem">
          <Text
            fontFamily={"dm-sans"}
            fontSize={["2rem", "2rem", "2rem", "3rem"]}
            fontWeight="extrabold"
            color="#0A2F53"
            maxW="1000px"
            textAlign={"center"}
          >
            We’ve worked with more than 100 companies since 2015 Check out some
            of the fantastic clients we have brought to the UK and International
            Markets.
          </Text>
        </Flex>
        <LogoIndex removedToggle />
        <Flex
          w="100%"
          alignItems="center"
          flexDirection="column"
          backgroundColor={"#0A2F53"}
          py="2rem"
          my="3rem"
        >
          <Text
            fontFamily={"dm-sans"}
            fontSize={["2.25rem", "2.25rem", "2.5rem", "3rem", "3rem"]}
            fontWeight="extrabold"
            color={"#ffff"}
            textAlign="center"
          >
            WHAT OUR CLIENTS HAVE TO SAY
          </Text>
          <Flex
            justifyContent={"center"}
            flexDirection={"row"}
            flexWrap="wrap"
            w="100%"
          >
            <Box w="500px" my="20px" mx="20px" className="testimonial1">
              <Flex justifyContent="center" alignItems="center">
                <img src={fivestars} alt="fivestars.svg" />
              </Flex>
              <Box className="statement2">
                <Text fontSize={"3xl"} as={"h3"}>
                  “I’ve been using Visual <br />
                  Group for over 2 months.”
                </Text>
                <Text as="p" fontSize={"md"}>
                  "My experience has been amazing and they have really helped me
                  grow my business and progress it to the next level. We speak
                  daily and continuously track progress and discuss how we can
                  keep growing the business further. Really great company to
                  work with and I would recommend them to anyone!"
                </Text>
              </Box>
              <Flex justifyContent="center" alignItems="center" pt="20px">
                <Box>
                  <img src={smallLine} alt="line.svg" />
                </Box>
                <Box pl="10px">
                  <h3 style={{ color: "#EE6F19" }}>Matt</h3>
                </Box>
              </Flex>
            </Box>
            <Box w="500px" my="20px" mx="20px" className="testimonial2">
              <Flex justifyContent="center" alignItems="center">
                <img src={fivestars} alt="fivestars.svg" />
              </Flex>
              <Box className="statement2">
                <Text fontSize="3xl" as="h3">
                  “Fantastic service. Highly <br />
                  recommend!”
                </Text>
                <Text as="p" fontSize="md">
                  "We came across Ricky by chance and so glad we did. Originally
                  we approached Ricky with my project that needed to be
                  completely transformed. I have been working with the
                  visualgroup.online for a few months since and Ricky has always
                  been a man of his word, constantly deliveres quality and
                  continues too. I highly recommend."
                </Text>
              </Box>
              <Flex justifyContent="center" alignItems="center" pt="20px">
                <Box>
                  <img src={smallLine} alt="line.svg" />
                </Box>
                <Box pl="10px">
                  <h3 style={{ color: "#EE6F19" }}>Leah Murray</h3>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            w="100%"
            justifyContent={"center"}
            flexWrap="wrap"
            flexDirection={"row"}
          >
            <Box w="500px" mx="20px" my="20px" className="testimonial3">
              <Flex justifyContent="center" alignItems="center">
                <img src={fivestars} alt="fivestars.svg" />
              </Flex>
              <Box className="statement2">
                <Text fontSize="3xl" as="h3">
                  “I can’t express how <br />
                  impressed I am with their results!”
                </Text>
                <Text as="p">
                  "Visual Group have been running my ads for the last 4 months
                  and I can’t express enough how impressed I am with their
                  results! They’ve increased my sales and allowed me to take my
                  business to the level I wanted it to be at, but Wasn’t sure
                  how to get there. They also helped me not just with a paid
                  marketing plan but they also gave me advice on how to grow my
                  business organically. Thank you so much! 2021 is going to be a
                  big year!"
                </Text>
              </Box>
              <Flex justifyContent="center" alignItems="center" pt="20px">
                <Box>
                  <img src={smallLine} alt="line.svg" />
                </Box>
                <Box pl="10px">
                  <h3 style={{ color: "#EE6F19" }}>Sarah Bricker</h3>
                </Box>
              </Flex>
            </Box>
            <Box w="500px" mx="20px" my="20px" className="testimonial4">
              <Flex justifyContent="center" alignItems="center">
                <img src={fivestars} alt="fivestars.svg" />
              </Flex>
              <Box className="statement2">
                <Text fontSize="3xl" as="h3">
                  “Visual Group have been <br />
                  excellent in getting my business <br />
                  out of a rut.”
                </Text>
                <Text as="p">
                  "I had a very bad experience with a marketing firm who charged
                  me an excessive amount of money but didn't complete the works.
                  Visual Group have since helped with my business to make it
                  consistent and tied together with an effect and profitable
                  marketing strategy, created 3 effective websites and have
                  begun a marketing campaign that has generated leads, all
                  within a 3 month time period! Very quick and efficient at what
                  they do. Very happy with the results! Would highly recommend
                  them!"
                </Text>
              </Box>
              <Flex justifyContent="center" alignItems="center" pt="20px">
                <Box>
                  <img src={smallLine} alt="line.svg" />
                </Box>
                <Box pl="10px">
                  <h3 style={{ color: "#EE6F19" }}>Samantha Harris</h3>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex px={"3rem"} justifyContent="center" flexWrap={"wrap"}>
          <Text
            fontSize={["2.75rem", "2.75rem", "3rem", "3rem", "3rem"]}
            fontWeight="extrabold"
            color="#0A2F53"
            maxW={"500px"}
          >
            READY FOR THE NEXT BIG LEAP?
          </Text>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            w={["100%", "100%", "100%", "50%", "50%"]}
          >
            <Button
              backgroundColor="#EE6F19"
              my="1rem"
              p="2.5rem"
              color="#FFFFFF"
              w={["90%", "80%", "80%", "60%", "60%"]}
              onClick={() => {
                window.location.assign("/book-now");
              }}
            >
              Book an appointment now!
            </Button>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
}
