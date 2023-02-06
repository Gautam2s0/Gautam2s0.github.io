import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
import "../Styles/Github.css"
export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    <>
      <Box className="section" >
        <Heading  className="section__title">
          Days I <span className="different"> Code</span>
        </Heading>
        <Githubcalendar className="git"
          username="Gautam2s0"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </Box>
    </>
  );
};
