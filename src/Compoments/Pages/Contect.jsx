import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/contact.module.css"
import github from "../../images/GitHub-Mark.png"
import linkedin from "../../images/linkedin.png"
import hackerRank from "../../images/hackerrank.png"
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
// import Form from '../Component/Form'
import Contact from './../Component/Contact';

export const Contect = () => {
  return (
    <div id="contact" className={styles.conContainer}>
      
        <Box w="100%">
          <Contact/>
        </Box>
    </div>
  )
}
