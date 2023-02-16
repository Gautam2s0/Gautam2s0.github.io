import ainak from "../../images/Ainak.png"
import bluefly from "../../images/bluefly.png"
import fabbag from "../../images/fabbag.png"
import Monster from "../../images/Monster.png"
import { SiJavascript, SiRedux, SiChakraui, SiReact, SiReactrouter, SiHtml5, SiCss3 } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
 const projects=[
    {
      img:ainak,
      title:"Lenskart Clone",
      github:"https://lenskartcom.netlify.app/",
      demo:"https://github.com/akshay123332/fun-trees-7619",
      desc:"Lenskart is an Indian multinational optical prescription eyewear retail chain, based in Faridabad . This was a collaborative project buit by team of 5 members in 4 days.",
      language:[
        {
            logo: <SiJavascript />,
            color:"yellow"
        },
        {
            logo: <SiReact/>,
            color:"teal"
        },
        {
            logo: <SiRedux />,
            color:"purple"
        },
        {
            logo: <SiReactrouter />,
            color:"gray"
        },
        {
            logo: <SiChakraui />,
            color:"teal"
        },
      ]
    },
    
    {
      img:fabbag,
      github:"https://github.com/KapilMaywade/U2p1-feb_bag",
      title:"Fab-bag Clone",
      demo:"https://fabbags.netlify.app/",
      desc:"This was a group project. fabbag is sells beuty product. We created this clone using HTML, CSS and Javascript. My work was here to create SignUp and Login Page.",
      language:[
        {
            logo: <SiHtml5 />,
            color:"tomato"
        },
        {
            logo: <SiCss3 />,
            color:"blue"
        },
        {
            logo: <SiJavascript />,
            color:"yellow"
        },
        
      ]
    },
    {
        img:bluefly,
        github:"https://github.com/Saiprasaddabbe/Bluefly.com",
        title:"BlueFly Clone",
        demo:"https://monsterindias.netlify.app/",
        desc:" Bluefly is E-commerce shopping app. This was a group project. We have created these website with the help of HTML, CSS And Javascript.",
        language:[
            {
                logo: <SiHtml5 />,
                color:"tomato"
            },
            {
                logo: <SiCss3 />,
                color:"blue"
            },
            {
                logo: <SiJavascript />,
                color:"yellow"
            },
            
          ]
      },
      {
        img:Monster,
        github:"https://github.com/Abhijeet-abhi/enormous-weight-975",
        title:"Monster India Clone",
        demo:"https://monsterindias.netlify.app/",
        desc:"Monster, has evolved from being a 'job board' to a global provider of everything you need for a successful career. It has been in the pursuit of connecting people with the right job opportunities for over two decades now. ",
        language:[
            {
                logo: <SiHtml5 />,
                color:"tomato"
            },
            {
                logo: <SiCss3 />,
                color:"blue"
            },
            {
                logo: <SiJavascript />,
                color:"yellow"
            },
            
          ]
      },
      
  ]

  export default  projects