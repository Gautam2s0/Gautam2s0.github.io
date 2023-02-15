import { Box, Flex, Hide, Show, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import "../Styles/navbar.css"
import {Link} from "react-scroll"
import { useState } from 'react';
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import resume from "../../doc/Gautam Sonkar-resume.pdf"
const Navbar = () => {
    const [click, setClick] = useState(false)
    const [display, setDisplay] = useState("none")
    const handleClick = () => {
        setClick(!click)
        setDisplay(display === "none" ? "flex" : "none")
    }

    return (

        <Stack className='nvabs' direction={['column', 'column', "row", 'row']} w="100%" bg={["blue", "blue", "teal", "black"]} color={["#fff", "yellow", "#fff", "#fff"]} cursor="pointer" h="4rem" position={"fixed"} top="0px" alignItems={"center"} fontFamily="Roboto Mono', monospace">
            <Flex justifyContent={"space-between"} w="100%" display={["none", "none", "flex", "flex"]}>
                <Link to="home" smooth={true}>
                    <Flex fontSize={"1.5rem"} align="center" ml="15%" _hover={{color:{sm:"teal",md:"pink",lg:"yellow",xl:"teal"}}}>
                        <Box color={"red"} fontSize="2rem">G</Box>
                        <Box>autam</Box>
                        <Box color={"red"} fontSize="2rem">S</Box>
                        <Box>onkar</Box>
                    </Flex>
                </Link>
                <Stack direction={['column', 'column', "row", 'row']} spacing={["1", "1", "2rem", "rem"]} justifyContent={['flex-end', 'flex-end', 'flex-end', 'flex-end']} ml={["0", "0", "0%", "0%"]} fontSize={["0", "0", "1.2rem", "1.5rem"]} mr="5%" alignItems={"center"} >
                    <Box _hover={{ color: "red" }}><Link to="home" smooth="true" offset={-60}>Home</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="about" smooth="true"  offset={-60}>About</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="skill" smooth="true"  offset={-60}>Skills</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="project" smooth="true"  offset={-60}>Project</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="contact" smooth="true"  offset={-60}>Contact</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="resume" smooth="true"  offset={-60}
                    onClick={()=>{
                        window.open(resume)
                    }}
                    >Resume</Link></Box>
                    

                </Stack>
            </Flex>
            <Show below='md' position="right" >
                <Flex justify={"flex-end"} pr="5%" onClick={handleClick} fontSize="2rem" boxSizing='border-box' w="100%">
                    {
                        click ? <CloseIcon fontSize="1.4rem" /> : <HamburgerIcon />
                    }
                </Flex>
            </Show>
            <Hide above='md'>
                <Stack
                 direction="column" 
                 display={display}
                 spacing='24px' 
                 fontSize={"1.5rem"} 
                 fontWeight="500" 
                 bg={["blue", "blue", "teal", "black"]}
                 color={["#fff", "yellow", "#fff", "#fff"]} 
                 cursor="pointer"
                 w="100%"
                 >
                    <Box _hover={{ color: "red" }}><Link to="home" smooth="true" offset={-60} onClick={handleClick}>Home</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="about" smooth="true"  offset={150} onClick={handleClick}>About</Link></Box>
                    <Box _hover={{ color: "red" }} ><Link to="skill" smooth="true"  offset={0} onClick={handleClick}>Skills</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="project" smooth="true"  offset={0} onClick={handleClick}>Project</Link></Box>
                    <Box _hover={{ color: "red" }}><Link to="contact" smooth="true"  offset={160} onClick={handleClick}>Contact</Link></Box>
                    <Box _hover={{ color: "red" }}><Link  onClick={()=>{
                        window.open(resume)
                    }}>Resume</Link></Box>
                </Stack>
            </Hide>

        </Stack>
    )
}

export default Navbar