import { FaNodeJs } from "react-icons/fa";
import ainak from "../../images/Ainak.png"
import train from "../../images/train.jpg"
import fabbag from "../../images/fabbag.png"
import fashionGallary from "../../images/fashiongallary.jpg"
import { SiJavascript, SiRedux, SiChakraui, SiReact, SiReactrouter, SiHtml5, SiCss3, SiExpress, SiMongodb } from "react-icons/si";

 const projects=[
    {
        img:fashionGallary,
        github:"https://github.com/Durgesh9871/Fashion-Gallery",
        title:"Fashion Gallary", 
        demo:"https://fashion-gallery.vercel.app/",
        desc:`Fashion Gallery is a premier online destination for men's
        fashion, featuring a carefully curated selection of clothing,
        shoes, and accessories from top brands `,
        language:[
            {
                logo: <SiReact/>,
                color:"teal"
            },
            {
                logo: <SiRedux />,
                color:"purple"
            },
            
            {
                logo: <SiChakraui />,
                color:"teal"
            },
            {
                logo:<FaNodeJs/>,
                color:"#215732"
            },
            {
                logo:<SiExpress/>,
                color:"gray"
            },{
                logo:<SiMongodb/>,
                color:"green"
            }
            
          ]
      },
    
    {
        img:train,
        github:"https://github.com/Gautam2s0/Train-booking",
        title:"Train Booking",
        demo:"https://train-booking-gautam2s0.vercel.app/",
        desc:` Train Booking is a MERN stack application that allows users
        to book seat for a train. The app includes an attractive UI
        and multiple features.`,
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
                logo: <SiChakraui />,
                color:"teal"
            },
            {
                logo:<FaNodeJs/>,
                color:"#215732"
            },
            {
                logo:<SiExpress/>,
                color:"gray"
            },{
                logo:<SiMongodb/>,
                color:"green"
            }
           
            
          ]
      },
      {
        img:ainak,
        title:"Lenskart Clone",
        demo:"https://ainak-five.vercel.app/",
        github:"https://github.com/akshay123332/fun-trees-7619",
        desc:"Lenskart is an Indian multinational optical prescription eyewear retail chain, based in Faridabad . This was a collaborative project built by team of 4 members in 4 days.",
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
      
  ]

  export default  projects