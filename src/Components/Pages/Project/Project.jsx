import { Grid, Heading, Box } from '@chakra-ui/react';
import React from 'react'
import { ProjectCard } from './ProjectCard';
import projects from "./Projectdata"

export const Project = () => {
  const arr=[1,2,3,4,5,6]
  return (
    <Box  style={{width:"80%",margin:"auto"}}  boxSizing="border-box" pb={["20%","20%","2%","2%"]} backgroundColor="Highlight" >
      <Heading m="0% 0 4% 0" color={"#fff"} pt="1%">PROJECTS</Heading>
    <Grid
    templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}
   gap={["1%","1%","2%","2%"]}
    justifyContent={"space-around"}
    >
      {
        projects.map((el)=>{
          return(
            <ProjectCard {...el} />   
          )
        })
      }
    </Grid>
    </Box>
  )
}
