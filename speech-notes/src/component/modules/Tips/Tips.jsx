import React from 'react'
import {Center, Container, Heading, HStack, VStack, } from '@chakra-ui/react';

const Tips = () => {
  return (
    <Center>
      <Container maxW="container.xl">
        <HStack w="100%">
        <VStack color="white">
          <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}
                  fontWeight="600"
                  >
            Tips</Heading>
          <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                  fontWeight="450"> 
            Click on the Mic button to start the Speech Recognition</Heading>
          <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                  fontWeight="450"> 
            Speak slowly and clearly in the mic.</Heading>
          <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                  fontWeight="450">
            Make sure your room is quiet with less background noise.</Heading>
          </VStack>
        </HStack>
      </Container>
    </Center>
  )
}

export default Tips