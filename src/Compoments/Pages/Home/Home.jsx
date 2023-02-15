import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Stack, Text ,Button} from '@chakra-ui/react'
import React from 'react'
import Typewriter from "typewriter-effect";
import resume from "../../../doc/Gautam Sonkar-resume.pdf"
export const Home = () => {
  return (
    <Stack className='fontStyle'
      id="home"
      dir='column'
      display={"flex"}
      h={["100vh","100vh","75vh","150vh"]}
      align="center"
      justifyContent={"center"}
      color={"#fff"}
      // backgroundImage={"https://vaibhavraj.netlify.app/static/media/slide1.ce2fa051.jpeg"}
      backgroundImage="https://static.wixstatic.com/media/c7bef5_d10547d9317e4d33ad36145fb7e6eb1a~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7bef5_d10547d9317e4d33ad36145fb7e6eb1a~mv2.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      boxSizing="border-box"
      backgroundColor="transparent"
      mt={["4rem","4rem","4rem","-10rem"]}
     
    
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
        <Heading fontSize={["2rem","5rem"]} fontWeight={["400","600"]} shadow="lg">Gautam Sonkar</Heading>
        <Text fontSize={["1rem","1.2rem","1.8rem","2rem"]} fontWeight={["400","500"]}>
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
        <Button rightIcon={<ArrowDownIcon/>} colorScheme='teal' variant='solid' mt='2rem' _hover={{color:"red",bg:"black",shadow:"lg"}} shadow="lg">
          
          <Link href={resume} download="Gautam Sonkar-Resume" colorScheme='teal'  target='_blank' textDecoration={"none"}  _hover={{color:"red",bg:"black"}}>
        Resume
      </Link>
        </Button>
        </Stack>
        
      </Stack>

    </Stack>
  )
}
