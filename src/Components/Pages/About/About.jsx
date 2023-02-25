import React from "react";
import { Image, Stack, Box, Flex, Heading } from "@chakra-ui/react";
import image from "../../images/Gautam Sonkar.png";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { MdLocationPin } from "react-icons/md";

export const About = () => {
  return (
    <Box id="about" maxW={"100%"} mb="3%">
      <Heading color={"blue.900"} fontStyle="oblique">ABOUT ME</Heading>
      <Stack
      mt="2%"
      direction={["column","column","row", "row"]}
      spacing={["2rem","2rem","5rem", "5rem"]}
      boxSize="border-box"
      justifyContent={["center","center","center","center"]}
      align={["center","center","center","center"]}
    >
      <Box
        boxSize={['sm','sm','xs','xs']} 
        boxShadow= "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
        border={"1px solid"} 
        borderRadius={"15px"} 
        _hover={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" ,border:"none"}}
        maxW={["60%","60%","50%","50%"]} >
        <Image
          src={image}
          alt="Gautam Sonkar"
          objectFit="cover"
          borderRadius="15px"
          w={"100%"}
          h="100%"
          
        />
      </Box>
      <Box
        justifyContent={"center"}
        maxW={["80%","80%","30%","30%"]}
        m="auto"
        boxShadow= "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        borderRadius={"15px"}
        boxSizing="border-box"
        padding={"1.8rem"}
        border={"1px solid"}
        align={["center","center","start","start"]}
        _hover={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" ,border:"none"}}
        
      >
        <Flex gap={"1%"} mb="8%">
          <Box>Hi there! I am</Box>
          <Box fontWeight={"600"} color="blue.600">Gautam Sonkar</Box>
        </Flex>
        <Box textAlign={"start"} lineHeight={"2.2rem"}>
          I am currently learning full stack web development at Masai School. I
          am passionate about solving real-world problems and actively looking
          for opportunities in the field of web development and software
          engineering.
        </Box>
        {/* <Stack
          dir="column"
          align="center"
          fontStyle={"italic"}
          fontWeight="600"
          mt={"5%"}
          ml="20%"
          lineHeight={"1rem"}
          fontSize={[".4rem",".5rem",".8rem","1rem"]}
          
        >
          <Flex gap="5%" justify="start" w="100%">
            <Box>
              <EmailIcon fontSize={"lg"} />
            </Box>
            <Box >gautamsonkar334@gmail.com</Box>
          </Flex>
          <Flex gap="5%" justify="start" w="100%">
            <Box>
              <PhoneIcon fontSize={"lg"} />
            </Box>
            <Box>+91 8354810120</Box>
          </Flex>
          <Flex gap="5%" justify="start" w="100%">
            <Box>
              <MdLocationPin fontSize={"24px"} />
            </Box>
            <Box>Azamgarh U.P, India</Box>
          </Flex>
        </Stack> */}
      </Box>
    </Stack>
    </Box>
  );
};
