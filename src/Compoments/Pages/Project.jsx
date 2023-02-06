import React from 'react'
import styles from "../Styles/Project.module.css"
import { Grid, Flex, Heading, Button } from '@chakra-ui/react';
import ainak from "../../images/Ainak.png"
import bluefly from "../../images/bluefly.png"
import fabbag from "../../images/fabbag.png"
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { ProductCard } from '../ProductCard';
export const Project = () => {
  let projects=[
    {
      img:ainak,
      title:"Lenskart Clone",
      src:"https://lenskartcom.netlify.app/",
      url:"https://github.com/akshay123332/fun-trees-7619",
      desc:"Lenskart is an Indian multinational optical prescription eyewear retail chain, based in Faridabad . This was a collaborative project buit by team of 5 members in 4 days."
    },
    {
      img:bluefly,
      url:"https://github.com/Saiprasaddabbe/Bluefly.com",
      title:"BlueFly Clone",
      src:"https://monsterindias.netlify.app/",
      desc:" Bluefly is E-commerce shopping app. This was a group project. We have created these website with the help of HTML, CSS And Javascript."
    },
    {
      img:fabbag,
      url:"https://github.com/KapilMaywade/U2p1-feb_bag",
      title:"Fab-bag Clone",
      src:"https://fabbags.netlify.app/",
      desc:"This was a group project. fabbag is sells beuty product. We created this clone using HTML, CSS and Javascript. My work was here to create SignUp and Login Page."
    }
  ]
  return (
    <div id="project" className={styles.project} >
      <Box>
        {
          projects.map((el,i)=>{
            return(
              <ProductCard {...el}/>
            )
          })
        }
      </Box>
      
    </div>
  )
}
