import { Grid, Heading, Box } from '@chakra-ui/react';
import React from 'react'
import { ProjectCard } from './ProjectCard';
import projects from "./Projectdata"

export const Project = () => {
  return (
    <Box  style={{width:"80%",margin:"auto"}}  boxSizing="border-box" pb={["20%","20%","2%","2%"]}  >
      <Heading m="0% 0 4% 0" color={"#fff"} pt="1%">PROJECTS</Heading>
    <Grid
    templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}
   gap={["1%","1%","2%","4%"]}
    justifyContent={"space-around"}
    >
      {
        projects.map((el,i)=>{
          return(
            <ProjectCard {...el} key={i} />   
          )
        })
      }
    </Grid>
    </Box>
  )
}
