// import React, { useState } from 'react'
// import { Box } from '@chakra-ui/react';
// import { useEffect } from 'react';

// export const Carosuel = () => {
//     // let [index,setIndex]=useState(0)
//     let index=0
//     let image=[
//         "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//         "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
//         "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg",
//         "https://thumbs.dreamstime.com/b/northern-california-countryside-landscape-summer-redwood-area-close-to-eureka-humboldt-county-united-states-78526900.jpg"
//     ]
//     const [img,setImg]=useState(image[index])
    
//         useEffect(()=>{
//             setInterval(()=>{
//                 if(index===image.length){
//                     index=0
//                     setImg(image[0])
//                 }
//                 else{
//                     console.log(image[index])
//                 console.log(index)
//                 setImg(image[index])
//                 index++
//                 }
                
//             },3000)
//         },[])
    

//   return (
//     <Box width={"100vh"} h="50vh" backgroundImage={image[index]}>
        

//     </Box>
//   )
// }
