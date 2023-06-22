import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import resume from "../../Docs/Gautam Sonkar-resume.pdf";
import { images } from "./Image";
import style from "../../styles/Home.css";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

export const Home = () => {
  const [src, setSrc] = useState(images[0]);
  

  return (
    <Stack
      className="fontStyle"
      id="home"
      dir="column"
      display={"flex"}
      h={["100vh", "100vh", "75vh", "150vh"]}
      align="center"
      justifyContent={"center"}
      color={"#fff"}
      backgroundImage={src}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      boxSizing="border-box"
      backdropBrightness={"55%"}
      transition="background "
      backgroundColor="transparent"
      mt={["4rem", "4rem", "4rem", "-9rem"]}
    >
      
      <Stack
        dir="column"
        display={"flex"}
        justifyContent={"center"}
        align="center"
      >
        <Flex
          fontSize={["1rem", "2rem"]}
          fontWeight={["400", "500"]}
          gap="20px"
        >
          <Fade top duration={3000}>
            <Box>Hi,</Box>
            <Box>I</Box>
            <Box>am</Box>
          </Fade>
        </Flex>
        <Fade bottom duration={3000}>
          <Heading fontSize={["2rem", "5rem"]} fontWeight={["400", "600"]}>
            Gautam Sonkar
          </Heading>
        </Fade>

        <Box
          fontSize={["1rem", "1.2rem", "1.8rem", "2rem"]}
          fontWeight={["400", "500"]}
        >
          <Typewriter
            style={{ color: "red", lineHeight: "17px" }}
            options={{
              strings: ["A Full Stack Developer", "A MERN Stack Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
            }}
          />
        </Box>

        <Stack>
          <Rotate bottom right duration={2000}>
            <Button
              id="hbut"
              rightIcon={<ArrowDownIcon />}
              mt="2rem"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1axU6Z7MoylN3FbQLXkbRQbehuAsaPuPT/view?usp=sharing"
                );
              }}
            >
              <Link
                id="hlink"
                href={resume}
                download="Gautam_Sonkar_Resume"
                colorScheme="teal"
                target="_blank"
                textDecoration={"none"}
                _hover={{ textDecoration: "none" }}
              >
                Resume
              </Link>
              <Box id="hi"></Box>
            </Button>
          </Rotate>
        </Stack>
      </Stack>
    </Stack>
  );
};
