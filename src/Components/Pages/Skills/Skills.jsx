import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "../../styles/fontstyle.css";
import { Calender } from "../Github/Calender";
import { Scard } from "./Scard";
import {
  language,
  Front,
  database,
  version,
  backend,
  hosting,
} from "./skillData";

export const Skills = () => {
  return (
    <Stack
      id="skill"
      className="fontStyle"
      backgroundColor={"Highlight"}
      boxSizing="border-box"
      paddingBottom={["5%", "5%", "0", "0"]}
    >
      <Heading m="3% 0 2% 0" color="#fff">
        TECH SKILLS
      </Heading>
      <Stack
        direction={["column", "coumn", "row", "row"]}
        // spacing={["1%","2%","3%","5%"]}
        align="top"
        w={["50%", "50%", "100%", "80%"]}
        alignSelf="center"
        justify={["center", "center", "space-around", "space-around"]}
      >
        <Stack
          className="fronted"
          boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
          w={["100%", "100%", "30%", "30%"]}
          mb="10%"
          boxSizing="border-box"
          backgroundColor={"#fff"}
          _hover={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
        >
          <Heading
            fontWeight={"500"}
            fontStyle="oblique"
            fontFamily={"sans-serif"}
            fontSize={["2rem"]}
            mt="5%"
            mb="5%"
            borderBottom="2px solid blue"
            borderRightRadius={"50%"}
            borderLeftRadius="50%"
          >
            Fontend
          </Heading>
          <Stack spacing={["8%"]} p="0 0 10% 10%">
            {Front.map((el,i) => {
              return <Scard {...el} key={i} />;
            })}
          </Stack>
        </Stack>
        <Stack className="BackendHosting" w={["100%", "100%", "30%", "30%"]}>
          <Stack
            className="Backend"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
            w="100%"
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            backgroundColor={"#fff"}
          >
            <Heading
              fontWeight={"500"}
              fontStyle="oblique"
              fontFamily={"sans-serif"}
              mt="5%"
              mb="4%"
              borderBottom="2px solid blue"
            borderRightRadius={"50%"}
            borderLeftRadius="50%"
            >
              Backend
            </Heading>
            <Stack spacing={["3%"]} p="0 0 8% 10%">
              {backend.map((el,i) => {
                return <Scard {...el} key={i} />;
              })}
            </Stack>
          </Stack>
          <Stack
            className="Hosting"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
            w="100%"
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            backgroundColor={"#fff"}
          >
            <Heading
              fontWeight={"500"}
              fontStyle="oblique"
              fontFamily={"sans-serif"}
              fontSize={["2.2rem"]}
              mt="5%"
              mb="5%"
              borderBottom="2px solid blue"
            borderRightRadius={"50%"}
            borderLeftRadius="50%"
            >
              Hosting Plateforms
            </Heading>
            <Stack spacing={["8%"]} p="0 0 10% 10%">
              {hosting.map((el,i) => {
                return <Scard {...el} key={i} />;
              })}
            </Stack>
          </Stack>
        </Stack>
        <Stack
          className="langauegeDabaseVersion"
          w={["100%", "100%", "30%", "30%"]}
        >
          <Stack
            className="language"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            w="100%"
            backgroundColor={"#fff"}
          >
            <Heading
              fontWeight={"500"}
              fontStyle="oblique"
              fontFamily={"sans-serif"}
              mt="5%"
              mb="5%"
              borderBottom="2px solid blue"
            borderRightRadius={"50%"}
            borderLeftRadius="50%"
            >
              Programming Language
            </Heading>
            <Stack spacing={["8%"]} p="0 0 10% 10%">
              {<Scard {...language} />}
            </Stack>
          </Stack>
          <Stack
            className="database"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            w="100%"
            backgroundColor={"#fff"}
          >
            <Heading
              fontWeight={"500"}
              fontStyle="oblique"
              fontFamily={"sans-serif"}
              mt="5%"
              mb="5%"
              borderBottom="2px solid blue"
            borderRightRadius={"50%"}
            borderLeftRadius="50%"
            >
              DataBase
            </Heading>
            <Stack spacing={["8%"]} p="0 0 10% 10%">
              <Scard {...database} />;
            </Stack>
          </Stack>
          <Stack
            className="version"
            _hover={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            w="100%"
            backgroundColor={"#fff"}
          >
            <Heading
              fontWeight={"500"}
              fontStyle="oblique"
              fontFamily={"sans-serif"}
              mt="5%"
              mb="5%"
              borderBottom="2px solid blue"
            borderRightRadius={"50%"}
            borderLeftRadius="50%"
            >
              Version <Text>Control</Text>
            </Heading>
            <Stack spacing={["8%"]} p="0% 0% 10% 10%">
              <Scard {...version} />;
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
