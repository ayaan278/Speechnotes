import React from 'react'
import { Button, Heading, Flex, Link, HStack, VStack, Stack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <Flex 
    position= 'relative'
    wrap="wrap"
    w="100%"
    as="footer" 
    color='white'
    h="5em">
        <HStack w="100%" bg="black">

          <HStack w="60%" >
            <Heading fontSize={{base: 'xs',md: 'xs',lg: 'sm'}} pl="2em"> Copyright &copy; Ayaan Ahmad</Heading>
          </HStack>

          <HStack w="40%" gap="1em" pt="1em">
            <Link>
              <span size='md' class="inline-block h-12 w-12 rounded-full ring-white">
                <FaFacebook  style={{fontSize: '30px'}}/>
              </span>
            </Link>
            <Link href="https://www.instagram.com/_.ayaanii._/">
              <span size='md' class="inline-block h-12 w-12 ring-white" >
                <FaInstagram style={{fontSize: '30px'}}/>
              </span>
            </Link>
            <Link href="https://github.com/ayaan278">
              <span size='md' class="inline-block h-12 w-12 ring-white">
                <FaGithub  style={{fontSize: '30px'}}/>
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/ayaan-ahmad-06545614a">
              <span size='md' class="inline-block h-12 w-12 ring-white">
                <FaLinkedin style={{fontSize: '30px'}}/>
              </span>
            </Link>
          </HStack>
        </HStack>
  </Flex>
  )
}

export default Footer