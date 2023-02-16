import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [message,setMessage]=useState('')
  const HandleClick = (src) => {
    window.open(src);
  };
  const handleButton=()=>{
    
      if(email!=="" && name!=="" && message!==""){
        window.alert("message send successfully")
      }
      else if(email===""|| name==="" || message===""){
        window.alert(" please fill all fields")
      }
   

  }
  return (
    <Container
      id="contact"
      bg="#000"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      {/* <ToastContainer position='top-center' theme='colored' /> */}
      <Heading color="#fff">Get in Touch</Heading>
      <Flex>
        <Box
          bg="#101010"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Text fontSize={"lg"} mb="5%" borderBottom="1px solid gray" borderLeftRadius={"100%"} borderRightRadius="100%">
            Liked my work? Want to get in touch? You can reach out to me at-
          </Text>
          <Box p={4}>
            <Wrap
              spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
              justify={"center"}
            >
              <WrapItem>
                <Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        maxW="100%"
                        variant="ghost"
                        color="#DCE2FF"
                        display={"flex"}
                        justifyContent="flex-start"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        gautamsonkar334@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        w="100%"
                        variant="ghost"
                        color="#DCE2FF"
                        display={"flex"}
                        justifyContent="flex-start"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-8354810120
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        w="100%"
                        variant="ghost"
                        color="#DCE2FF"
                        display={"flex"}
                        justifyContent="flex-start"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Uttar Pradesh, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsLinkedin size="28px" />}
                      onClick={() => {
                        HandleClick(
                          "https://www.linkedin.com/in/gautam-sonkar-330899199/"
                        );
                      }}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" />}
                      onClick={() => {
                        HandleClick("https://github.com/Gautam2s0");
                      }}
                    />
                    <IconButton
                      aria-label="HackerRank"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<FaHackerrank size="28px" />}
                      onClick={() => {
                        HandleClick(
                          "https://www.hackerrank.com/gautamsonkar334"
                        );
                      }}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md"
                           onChange={(e)=>setName(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" size="md"
                          onChange={(e)=>setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          onChange={(e)=>setMessage(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{ backgroundColor: "#000", color: "red" }}
                          onClick={handleButton}
                        >
                          Send Message
                        </Button>
                        
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
