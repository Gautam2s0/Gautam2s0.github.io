import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedinIn,FaHackerrank,FaGithub } from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        // bg: useColorModeValue('yellow', 'green'),
        color:"#0D74FF"
        //  bg: "#0D74FF" 
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
    const date=new Date()
    const year=date.getFullYear()
    const HandleClick=(src)=>{
        window.open(src)
    }

  return (
    <Box
      bg={useColorModeValue('#000')}
      color={useColorModeValue("#fff")}>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('red.200', 'red.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ sm: 'center',md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>Created By Gautam Sonkar | © {year}. All Rights Reserved</Text>
          <Stack direction={'row'} spacing={6}
            justify={{ sm: 'center',md: 'space-between' }}
           
            fontSize={["1rem","1.5rem","2rem","2.2rem"]}
            
            
          >
            <SocialButton   label={'LinedIn'}>
              <FaLinkedinIn 
              onClick={
                ()=>{
                  HandleClick("https://www.linkedin.com/in/gautam-sonkar-330899199/")
                }
              } />
            </SocialButton>
            <SocialButton label={'Github'}>
              <FaGithub 
              onClick={()=>{
                HandleClick("https://github.com/Gautam2s0")
              }}
              />
            </SocialButton>
            <SocialButton label={'HackerRank'} >
              <FaHackerrank
              onClick={()=>{
                HandleClick("https://github.com/Gautam2s0")
              }}
               />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}