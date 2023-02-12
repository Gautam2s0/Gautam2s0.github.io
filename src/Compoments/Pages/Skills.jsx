
import React from "react";
import "../Styles/Skills.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiTypescript
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { Box, Text } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react';

export const Skills = () => {
  return (
    <Box>
      <Box id="skills" className="section main">
        <Heading className="section__title different" color="#ffff" >
          Skills
        </Heading>
        <Box className="techsection">
          <Box>
            <SiHtml5 />
            <Text className="text">HTML</Text>
          </Box>
          <Box >
            <DiCss3 />
            <Text  className="text">CSS</Text>
          </Box>
          <Box >
            <SiJavascript />
            <Text className="text">Javascript</Text>
          </Box>
          <Box >
            <FaReact />
            <Text className="text">React</Text>
          </Box>
          <Box >
            <SiRedux />
            <Text className="text">Redux</Text>
          </Box>
          <Box >
            <SiTypescript />
            <Text className="text">Typescript</Text>
          </Box>
          <Box >
            <FaNodeJs />
            <Text className="text">Nodejs</Text>
          </Box>
          <Box >
            <DiMongodb />
            <Text className="text">MongoDB</Text>
          </Box>
          <Box >
            <SiExpress />
            <Text className="text">Express</Text>
          </Box>
          
          <Box >
            <VscGithub />
            <Text className="text">Github</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
