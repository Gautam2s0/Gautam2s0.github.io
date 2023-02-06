import React from "react";
import styles from "../Styles/About.module.css";
import Gautam from "../../images/Gautam Sonkar.jpeg";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Box id="about" className={styles.names}>
      <Heading>My Story</Heading>
      <Grid className={styles.AboutGrid}>
        <Box className={styles.AboutimgBox}>
          <Image src={Gautam} alt="Gautam" />
        </Box>
        <Box className={styles.stext}>
          <Text className={styles.tex}>
            Hi Everyone, I am Gautam Sonkar from Azamgarh, Uttar Pradesh. I have
            completed B.tech (CSE) from Chandra Shekhar Azad University of
            Agriculture & Technology Kanpur. A passionate Full Stack Web
            Developer with the ability to learn and collaborate in rapidly
            changing environments and compositions.Worked through 1000+ hours of
            Bootcamp structure learning Javascript,Nodejs,Reactjs,MongoBD,Express,HTML, and CSS.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
