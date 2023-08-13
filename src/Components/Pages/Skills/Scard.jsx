import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Scard = ({logo,title,color}) => {
  return (
          <Flex justifyContent={"start"} gap="1%" border={"0px solid red"}  alignItems={"center"}
           >
            <Box color={color} fontSize={["1.5rem","2rem","2.5rem","3rem"]} maxW="100%" borderRadius="100%">
              {
                logo
              }
            </Box>
            <Text fontSize={[".8rem","1rem","1.1rem","1.2rem"]}>
              {
                title
              }
            </Text>
          </Flex>
        
  )
}
