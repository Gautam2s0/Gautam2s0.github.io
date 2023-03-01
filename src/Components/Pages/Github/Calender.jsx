import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export const Calender = () => {
  return (
    <Stack className="github" bg={"#2F4F4F"} color="#fff"
    fontWeight={"800"}
    pb="5%"
    
    align={"center"}
   >
     <Heading mb="2%" color={"yellow"} bg="#2F4F4F" borderBottom="10px solid tomato" p="1%" mt={{md:"3%"}}
            borderRightRadius={"50%"}
            borderLeftRadius="50%">Github Status</Heading>
     <Box  w={["90%","90%","60%","60%"]} m="auto"
     borderRadius={'5px'}
     fontSize={{sm:".5rem"}}       border={"4px solid grey"}
     >
     <GitHubCalendar username="gautam2s0" theme={"#000"}  style={{margin:'auto',padding:"3% .5%",backgroundColor:"#2f4f4f"}}  />
     </Box>
     <Stack direction={['column', 'column', "row", 'row']}
     boxSizing="border-box"
      w={["90%","90%","60%","60%"]}
      justifyContent={["center","center","start","start"]}
      spacing={4}
      pt="2%"
      alignItems='center'>

     <Box w={["80%","80%","30%","30%"]}>
     <Image   src={"https://github-readme-stats.vercel.app/api/top-langs?username=gautam2s0&show_icons=true&locale=en&layout=compact"}/>
     </Box>
     
     <Box w={["80%","80%","30%","30%"]}>
     <Image  src={"https://github-readme-stats.vercel.app/api?username=gautam2s0&show_icons=true&locale=en"}/>
     </Box>
     <Box w={["80%","80%","30%","30%"]}>
     <Image  src={"https://github-readme-streak-stats.herokuapp.com/?user=gautam2s0&"}/>
</Box>     
     </Stack>
   </Stack>
  )
}
// w={["80%","80%","30%","30%"]}