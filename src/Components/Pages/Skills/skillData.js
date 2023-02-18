import {
    SiJavascript,
    SiRedux,
    SiChakraui,
    SiHeroku,
    SiVercel,
    SiNetlify,
    SiGithub,
    SiMongodb,
    SiNodedotjs,
    SiGit,
    SiReact,
    SiExpress,
    SiTypescript,
    SiCycling74,
  } from "react-icons/si";
  import {DiNodejs} from "react-icons/di"
  import { FaHtml5, FaCss3Alt} from "react-icons/fa"
import { Image } from "@chakra-ui/react";

const Front = [
    {
      logo: <FaHtml5 />,
      title: "Html5",
      color:"tomato"
    },
    {
      logo: <FaCss3Alt />,
      title: "CSS",
      color:"blue"
    },
    {
      logo: <SiJavascript />,
      title: "Javascript",
      color:"yellow"
    },
    {
      logo: <SiReact />,
      title: "React",
      color:"teal"
    },
    {
      logo: <SiRedux />,
      title: "Redux",
      color:"purple"
    },
    {
        logo: <SiTypescript />,
        title: "TypeScript",
        color:"#2E2EFF"
      },
    {
      logo: <SiChakraui />,
      title: "ChakraUI",
      color:"teal"
    },
  ];
  const hosting=[
    
    {
      logo: <SiVercel />,
      title: "Vercel",
      color:"black"
    },
    {
      logo: <SiGithub />,
      title: "GitHub",
      color:"black"
    },
    {
      logo: <SiNetlify />,
      title: "Netlify",
      color:"aqua"
    },
    {
      logo: <Image src="https://cdn-1.webcatalog.io/catalog/cyclic-sh/cyclic-sh-icon-filled-256.png"width={"3rem"} borderRadius="50%" />,
      title: "Cyclic",
      color:"purple"
    },
  ]

  const backend=[
    {
      logo: <SiNodedotjs />,
      title: "Nodejs",
      color:"green"
    },
    {
        logo: <SiExpress />,
        title: "Expressjs",
        color:"gray"
      },
  

]
  const version={
    logo: <SiGit />, 
    title: "Git",
    color:"tomato"
  }
  const database={
    logo: <SiMongodb />,
    title: "MongoDB",
    color:"green"
  }
  const language={
    logo: <SiJavascript />,
    title: "JavaScript",
    color:"yellow"
  }

  export {language,Front,database,version,backend,hosting}