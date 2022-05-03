import React, { useEffect, useState } from "react";
import SEO from "../components/Seo";
import { Box, Flex, Button, Input, Text, Image } from "@chakra-ui/react";
import CheckBadge from "../components/CheckBadge";
import SimplifiedNav from "../components/SimplifiedNav";

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
import emailjs, { init } from "emailjs-com";
import Swal from "sweetalert2";
import blob from "../components/Illustrations/blob.svg";
import guy from "../components/Illustrations/guy.svg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import shape3 from "../images/Vector-circle.svg";
import shape4 from "../images/Vector-verysmall.svg";
import shape5 from "../images/small_circle.svg";
import shape6 from "../images/Polygon.svg";
import shape8 from "../images/back.svg";
import boost from "../components/Illustrations/boost.svg";

import consulting from "../components/Illustrations/30.svg";
import development from "../components/Illustrations/31.svg";
import marketing from "../components/Illustrations/32.svg";

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
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner-sec",
        scrub: 1,
        start: "60% center",
      },
    });

    tl2
      .to(".blob", {
        y: -10,
        zIndex: 0,
        duration: 1,
        ease: "ease",
      })
      .to(
        ".wearevgd",
        {
          y: -10,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".unlock",
        {
          y: -10,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".seShape5",
        {
          y: -10,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".seShape6",
        {
          y: -10,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".seShape7",
        {
          y: -10,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".seShape8",
        {
          y: -10,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".seShape4",
        {
          y: -50,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        ".calendar",
        {
          y: -50,
          duration: 1,
          ease: "ease",
        },
        "<"
      )
      .to(
        "booknow",
        {
          y: -20,
          duration: 1,
          ease: "ease",
        },
        "<"
      );

    return () => {
      tl2.kill();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bookmore",
        start: "top center",
      },
    });

    tl.fromTo(
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
        message: "Inquiry from funnel",
        client_name: name,
        client_email: email,
        client_company: company,
        client_location: location,
        project_details: "Lets chat inquiry",
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

        <img src={shape5} alt="svg" className="seShape4" />
        <img src={shape3} alt="svg" className="seShape5" />
        <img src={shape6} alt="svg" className="seShape6" />
        <img src={shape8} alt="svg" className="seShape7" />
        <img src={shape4} alt="svg" className="seShape8" />
        <Flex
          w="100%"
          h={["1100px", "1100px", "1400px", "200vh", "100vh"]}
          flexDirection={"row"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
          alignItems="center"
          className="banner-sec"
        >
          <Flex
            h={["70vh", "30vh", "71vh", "80vh"]}
            w={["100%", "100%", "100%", "65%", "55%", "45%"]}
            flexDirection={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            className="blob"
          >
            <Flex
              flexDirection="column"
              pl={["1rem", "1rem", "6.5rem", "6.5rem", "6.5rem"]}
            >
              <Text
                fontFamily={"DM Sans"}
                fontSize={["3rem", "3rem", "3rem", "3rem", "3.25rem"]}
                className="wearevgd"
              >
                WE ARE DIGITAL MARKETING
              </Text>
              <Text
                fontFamily={"DM Sans"}
                fontSize={["2rem", "2rem", "2rem", "2rem", "3rem"]}
                color={"#0A2F53"}
                className="unlock"
              >
                Unlock your business’ full potential with us!
              </Text>
              <Button
                className="booknow"
                rightIcon={<ArrowForwardIcon boxSize={"2rem"} />}
                fontSize="1.25rem"
                w="300px"
                p="2rem"
                borderRadius={20}
                color="#ffff"
                backgroundColor={"#ee6f19"}
                my="2rem"
                shadow={
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
                }
                onClick={() => {
                  window.location.assign("/book-now");
                }}
                _hover={{
                  backgroundColor: "#0a2f53",
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                  transition: "0.5 ease",
                }}
              >
                Book an appointment
              </Button>
            </Flex>
          </Flex>
          <Flex
            w={["100%", "100%", "100%", "100%", "45%", "40%"]}
            alignContent="center"
            justifyContent={"center"}
            maxH={"1200px"}
            minH={"450px"}
            backgroundImage={blob}
            backgroundPosition={"center"}
            backgroundSize={[
              "cover",
              "contain",
              "contain",
              "contain",
              "contain",
            ]}
            backgroundRepeat={"no-repeat"}
          >
            <Image
              src={guy}
              boxSize={["400px", "500px", "600px", "600px", "600px", "800px"]}
              objectFit={"contain"}
              className="calendar"
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection={"row"}
          flexWrap="wrap-reverse"
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Image
            src={boost}
            boxSize={["400px", "500px", "600px", "600px", "600px"]}
          />
          <Flex justifyContent={"center"} flexDirection="column" px="1rem">
            <Box>
              <Text
                fontSize={["2.5rem", "2.5rem", "2.5rem", "3rem"]}
                color="#0A2F53"
                fontWeight="bold"
                fontFamily={"DM Sans"}
                className="bookmore"
              >
                Book more clients and <br />
                Increase your sales
              </Text>
            </Box>
            <Flex alignItems="center" my="0.5rem" className="guaranteed">
              <CheckBadge />
              <Text
                fontFamily={"dm-sans"}
                fontSize={["1.25rem", "1.15rem", "1.25rem", "1.5rem"]}
                color="#0A2F53"
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
                color="#0A2F53"
                fontWeight="bold"
                px="1rem"
              >
                100% increase in online presence
              </Text>
            </Flex>
            <Flex alignItems="center" py="0.5rem" className="bringing">
              <CheckBadge />
              <Text
                fontFamily={"dm-sans"}
                fontSize={["1.25rem", "1.15rem", "1.25rem", "1.5rem"]}
                color="#0A2F53"
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
                color="#0A2F53"
                fontWeight="bold"
                px="1rem"
              >
                All in one web solutions
              </Text>
            </Flex>
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
            fontSize={["2rem", "2.5rem", "2.5rem", "3rem"]}
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
            fontSize={["2rem", "2.5rem", "2.5rem", "3rem"]}
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
          <Flex
            flexWrap="wrap"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Box w={["100%", "100%", "50%", "50%", "50%"]}>
              <h3 className="steps">STEP 1</h3>
              <Text className="stepName" fontSize="4xl">
                Consulting
              </Text>
              <Text className="stepP stepp1" fontSize="md">
                Initial consulting is a crucial part of a successful
                relationship. This is where we get together and determine the
                strengths and weaknesses of your business. Everything, including
                your business’ origin story, vision, and mission will be
                explored to gain a personalised view of your needs.
                Understanding your business will enable us to develop an
                interesting brand story that catches attention and converts!
              </Text>
            </Box>
            <Image
              src={consulting}
              boxSize={"300px"}
              objectFit={"cover"}
              display={["none", "none", "none", "block"]}
            />
          </Flex>
          <Flex
            flexWrap="wrap"
            pt={["50px", "50px", "30px", "0px", "0px"]}
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Box w={["100%", "100%", "50%", "50%", "50%"]}>
              <h3 className="steps">STEP 2</h3>
              <Text className="stepName" fontSize="4xl">
                Development
              </Text>
              <Text className="stepP" fontSize="md">
                Visual Group Digital will take the info from our initial
                consulting and overlay decades of combined experience to devise
                an effective brand strategy for your company. We’ll help you to
                create a brand that stands out, tells your story, and gets you
                RESULTS!
              </Text>
            </Box>
            <Image
              src={development}
              boxSize={"300px"}
              objectFit={"cover"}
              display={["none", "none", "none", "block"]}
            />
          </Flex>
          <Flex
            flexWrap="wrap"
            pt={["50px", "50px", "30px", "0px", "0px"]}
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Box w={["100%", "100%", "50%", "50%", "50%"]}>
              <h3 className="steps">STEP 3</h3>
              <Text className="stepName" fontSize="4xl">
                Marketing
              </Text>
              <Text fontSize="md" className="stepP">
                Lastly, we’ll reach the marketing step, where our planning comes
                to life. During this final step in the process, we’ll work with
                you to execute on your marketing strategy and drive results!
                Marketing will help you with your overall marketing strategy and
                ad campaigns. We will help you market your business effectively
                to build the ultimate lead generation machine that GETS YOU
                CLIENTS!
              </Text>
            </Box>
            <Image
              src={marketing}
              boxSize={"300px"}
              objectFit={"cover"}
              display={["none", "none", "none", "block"]}
            />
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent={"center"} my="3rem">
          <Text
            fontFamily={"dm-sans"}
            fontSize={["2rem", "2rem", "2rem", "3rem"]}
            fontWeight="extrabold"
            color="#0A2F53"
            maxW="1000px"
            textAlign={"center"}
            px="1rem"
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
