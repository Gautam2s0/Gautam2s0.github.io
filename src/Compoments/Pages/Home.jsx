import React from 'react'
import styles from "../Styles/Home.module.css"
import Typewriter from "typewriter-effect";
import resume from "../../doc/Gautam Sonkar-resume.pdf"
import { Box, Heading,Link } from '@chakra-ui/react';
import { AiOutlineArrowDown } from "react-icons/ai"
export const Home = () => {
  return (
    <div id='home' className={styles.names} >
      <div className={styles.divcon}>
        <h1 data-text="Gautam Sonakr">Gautam Sonkar</h1>
        {/* <h3 className={styles.h3} data-text="Programmer . Web Developer">Programmer . Web Developer</h3> */}
        <Heading className={styles.hrtp}>
          <Typewriter
            style={{ color: "red", lineHeight: "17px" }}
            options={{
              strings: ["A Full Stack Developer", "A MERN Stack Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50
            }}
          />
        </Heading>
      </div>
      <Box mt={"5%"} >
      <Link href={resume} download="Gautam Sonkar-Resume" target='_blank' className={styles.buttonRes}   color={"black"} >
        Resume
      </Link>
      </Box>

    </div>
  )
}
