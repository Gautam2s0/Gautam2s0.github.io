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
     <Heading mb="2%" color={"blackAlpha.900"} borderBottom={"5px solid red"}>Days I code</Heading>
     <Box  w="60%" m="auto">
     <GitHubCalendar username="gautam2s0" color={"#000"}  />
     </Box>
   </Stack>
  )
}
