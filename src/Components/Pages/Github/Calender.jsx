import { Box, Heading, Stack } from '@chakra-ui/react'
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
            borderLeftRadius="50%">Days I code</Heading>
     <Box  w={["90%","90%","60%","60%"]} m="auto" fontSize={{sm:".5rem"}} >
     <GitHubCalendar username="gautam2s0" theme={"#000"}    />
     </Box>
   </Stack>
  )
}
