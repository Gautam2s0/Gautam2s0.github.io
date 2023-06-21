import React from "react";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SiJavascript, SiRedux, SiChakraui, SiReact } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { Language } from "./Language";


export const ProjectCard = ({img,title,demo,github,desc,language}) => {
  const handleClick = (src) => {
    window.open(src);
  };

  return (
    <Box border={"transparent"}
    className="pcard"
    // transition="width 2s"
     pb="5%" m="auto" borderRadius="5%" boxSizing="border-box" backgroundColor={"#101010"} color="#ffff" h="100%" 
    
    _hover={{backgroundColor:"#202020",width:"105%"}}
    >
      <Stack w="90%" margin={"auto"} justifyContent="center">
        <Box className="ProjectImageBox"   >
          <Image w="100%"
            src={
             img
            }
            alt="Gautam Sonkar"
            maxHeight="40vh"
            mt="5%"
          />
        </Box>
        <Stack className="desc" justify={"center"} align="center" m="auto" >
          <Heading w="80%" mb='2.5%'>{title}</Heading>
          <Text>
            {desc}
          </Text>
        </Stack>
        <Stack
          className="pButton"
          direction={['column','column','row', 'row']}
          justify="center"
          align={"center"}
          pt="5%"
        >
          <Button w="100%" colorScheme='#308D46' variant='outline'
          _hover={{color:"#fff",backgroundColor:"gray.900"}}
            onClick={() => {
              handleClick(demo);
            }}
          >
            Demo
          </Button>
          <Button w="100%" colorScheme='#308D46' variant='outline'
          _hover={{color:"#fff",backgroundColor:"gray.900"}}
            onClick={() => {   
              handleClick(github);
            }}
          >
            Github Code
          </Button>
        </Stack>
        <Stack
          className="logo"
          direction={"row"}
          fontSize={["1rem","1.5rem","2rem","2.2rem"]}
          justify={"center"}
          spacing="8%"
          align="center"
          pt="5%"
        >
          {
            language.map((el,i)=>{
                return(
                    <Language {...el} key={i}/>
                )
            })
          }
        </Stack>
      </Stack>
    </Box>
  );
};
