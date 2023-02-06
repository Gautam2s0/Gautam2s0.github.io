import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import {Link} from "react-scroll"
import Styles from "../Styles/Navbar.module.css"
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons"
import resume from "../../doc/Gautam Sonkar-resume.pdf"

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    const hendleResume=()=>{
        window.location.href=resume
    }
    return (
        <Flex className={Styles.NavFlex} id="navbar">
            <Box ml={"20px"} className="GautiBox"><Link to="home" smooth={true} offset={-60} >Home</Link></Box>
            <Flex className={Styles.flexNav2}>
            <Box className="GautiBox"><Link to="about" smooth={true} offset={-60} >About</Link></Box>
            <Box className="GautiBox"><Link to="skills" smooth={true} offset={-60} >Skills</Link></Box>
            <Box className="GautiBox"><Link to="project" smooth={true} offset={-60} >Project</Link></Box>
            <Box className="GautiBox"><Link to="contact" smooth={true} offset={-60} >Contact</Link></Box>
            <Box className="GautiBox" onClick={hendleResume}><Link to="resume" smooth={true} offset={-60} onClick={hendleResume}>Resume</Link></Box>
            </Flex>
            <Box onClick={handleClick} className={Styles.Hamburger}>
                {click?<CloseIcon w={8} h={20} />:<HamburgerIcon fontSize={40}/>}
                
            </Box>
        </Flex>
    );
};

export default Navbar;