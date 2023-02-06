import React from 'react'
import styles from "../Styles/Home.module.css"
import Typewriter from "typewriter-effect";
import resume from "../../doc/Gautam Sonkar-resume.pdf"
import { Heading } from '@chakra-ui/react';

export const Home = () => {
  const handleClick=()=>{
    window.location.href=resume
  }

  return (
    <div id='home' className={styles.names} >
      <div className={styles.divcon}>
        <h1 data-text="Gautam Sonakr">Gautam Sonkar</h1>
        {/* <h3 className={styles.h3} data-text="Programmer . Web Developer">Programmer . Web Developer</h3> */}
        <Heading className={styles.hrtp}>
        <Typewriter
        style={{color:"red", lineHeight:"17px"}}
        options={{
          strings: ["A Full Stack Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
        </Heading>
      </div>
      {/* <a target="blank" href=""> */}
        <button className={styles.buttonRes} onClick={handleClick}>Resume
        </button>
      {/* </a> */}
    </div>
  )
}
