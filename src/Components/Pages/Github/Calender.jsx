import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export const Calender = () => {
  return (
    <Stack className="github" bg={"Highlight"} color="#fff"
    fontWeight={"800"}
    pb="5%"
    
    align={"center"}
   >
     <Heading mb="2%" color={"yellow"} bg="#000" borderBottom="10px solid tomato" p="1%" mt={{md:"5%"}}
            borderRightRadius={"50%"}
            borderLeftRadius="50%">Github Status</Heading>
     <Box  w={["90%","90%","60%","60%"]} m="auto" fontSize={{sm:".5rem"}} pb="2%" >
     <GitHubCalendar username="gautam2s0" theme={"#000"}    />
     </Box>
     <Stack direction={['column', 'column', "row", 'row']}
     boxSizing="border-box"
      w={["90%","90%","60%","60%"]}
      justifyContent={["center","center","start","start"]}
      alignItems="center"
      
      
     >
     <Image  w={["80%","80%","30%","30%"]} src={"https://github-readme-stats.vercel.app/api/top-langs?username=gautam2s0&show_icons=true&locale=en&layout=compact"}/>
     <Image  w={["80%","80%","30%","30%"]}  src={"https://github-readme-stats.vercel.app/api?username=gautam2s0&show_icons=true&locale=en"}/>
     <Image  w={["80%","80%","30%","30%"]}  src={"https://github-readme-streak-stats.herokuapp.com/?user=gautam2s0&"}/>
     
     </Stack>
   </Stack>
  )
}
