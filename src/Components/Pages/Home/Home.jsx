import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Stack, Text ,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import resume from "../../Docs/Gautam Sonkar-resume.pdf"
import { images } from './Image';
export const Home = () => {
  let i=0
  const [src,setSrc]=useState(images[i])
  const changeIndex=()=>{
    if(i===images.length-1){
      i=0
      setSrc(images[0])
    }
    else{
      i++
      setSrc(images[i])
    }
    return i
  }

  useEffect(()=>{
    setInterval(changeIndex,2000)

  },[])


  return (
    <Stack className='fontStyle'
      id="home"
      dir='column'
      display={"flex"}
      h={["100vh","100vh","75vh","150vh"]}
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
      mt={["4rem","4rem","4rem","-9rem"]}
      >
      <Stack
        dir='column'
        display={"flex"}
        justifyContent={"center"}
        align="center"
        
        >
        <Flex fontSize={["1rem","2rem"]} fontWeight={["400","500"]} gap="20px" >
          <Box>Hi,</Box>
          <Box>I</Box>
          <Box>am</Box>
        </Flex>
        <Heading fontSize={["2rem","5rem"]}   fontWeight={["400","600"]} >Gautam Sonkar</Heading>
        <Text fontSize={["1rem","1.2rem","1.8rem","2rem"]} fontWeight={["400","500"]} >
        <Typewriter
          style={{ color: "red", lineHeight: "17px" }}
          options={{
            strings: ["A Full Stack Developer", "A MERN Stack Developer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 20
          }}
        />
        </Text>
        <Stack>
        <Button rightIcon={<ArrowDownIcon/>} colorScheme='teal'  variant='solid' mt='2rem' _hover={{color:"red",bg:"black",shadow:"lg"}} shadow="lg">
          
          <Link href={resume} download="Gautam Sonkar-Resume" colorScheme='teal'  target='_blank' textDecoration={"none"}  _hover={{color:"red",bg:"black"}}>
        Resume
      </Link>
        </Button>
        </Stack>
        
      </Stack>

    </Stack>
  )
}
