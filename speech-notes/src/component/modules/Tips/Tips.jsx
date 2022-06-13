import React from 'react'
import {Center, Container, Heading, HStack, VStack, } from '@chakra-ui/react';

const Tips = () => {
  return (
    <Center>
      <Container maxW="container.lg">
        <HStack w="100%">
          <VStack w="100%">
            <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}
                    fontWeight="600"
                    color="#7f5af0"
                    >
              Tips</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                    fontWeight="450" color="#00C6C2"> 
              Click on the Mic button to start the Speech Recognition</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                    fontWeight="450" color="#00C6C2"> 
              Speak slowly and clearly in the mic.</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                    fontWeight="450" color="#00C6C2">
              Make sure your room is quiet with less background noise.</Heading>
          </VStack>
        </HStack>
      </Container>
    </Center>
  )
}

export default Tips