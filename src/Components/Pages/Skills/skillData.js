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
  } from "react-icons/si";
  import {DiNodejs} from "react-icons/di"
  import { FaHtml5, FaCss3Alt} from "react-icons/fa"

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
      logo: <SiHeroku />,
      title: "Heroku",
      color:"purple"
    },
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
    title: "Netlify",
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