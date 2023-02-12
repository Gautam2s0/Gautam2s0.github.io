import React from "react";
import styles from "../Styles/About.module.css";
import Gautam from "../../images/Gautam Sonkar.jpeg";
import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';

export const About = () => {
  return (
    <Box id="about" bg="#fff" color={"black"}  >
      <Heading pt={"5%"}mb="5%">My Story</Heading>
      <Stack direction={['column', 'row']} spacing={["2rem", "5rem"]} justifyContent="center" pb={"5%"}>
        <Box w={["100%", "20%"]} >
          <Image className={styles.AboutImage} src={Gautam} alt="Gautam" shadow='lg'  borderRadius="15%" w={"100%"}/>
        </Box>
        <Box className={styles.AboutBox} w={["100%", "35%"]} fontSize={{ base: '14px', md: '16px', lg: '18px' }} textAlign="left" shadow='lg' boxSizing={"border-box"} p="2% 2% 0 3%" borderRadius="5%">
          <Text fontSize={{ base: '16px', md: '24px', lg: '26px' }} color="blue" mb="5%"> Hi there! I am <span style={{fontWeight:600}}>Gautam Sonkar</span></Text>
          <Text>I am currently learning full stack web development at Masai School. I am passionate about solving real-world problems and actively looking for opportunities in the field of web development and software engineering.</Text>
          <Stack direction={"column"} w="70%" m={"auto"} mt="5%" textAlign={"left"} fontWeight="600" fontStyle={"italic"}  >
            <Flex justifyContent={"left"} alignItems={"center"}gap="5px" >
              <MdEmail/>
              <Text>gautamsonkar334@gmail.com</Text>
            </Flex>
            <Flex justifyContent={"left"} alignItems={"center"}gap="5px">
              <MdPhone/>
              <Text>+91 8354810120</Text>
            </Flex>
            <Flex justifyContent={"left"} alignItems={"center"} gap="5px" mb={["5%","0"]}>
              <MdLocationOn/>
              <Text>Azamgarh U.P</Text>
            </Flex>

          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
