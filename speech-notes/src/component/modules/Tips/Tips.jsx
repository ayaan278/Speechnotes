import React from 'react'
import {Heading, HStack, VStack, } from '@chakra-ui/react';

const Tips = () => {
  return (
    <HStack class="container-xl" id="tips">
      <VStack>
        <Heading >Tips</Heading>
        <Heading> Click on the Mic button to start the Speech Recognition</Heading>
        <Heading> Speak slowly and clearly in the mic.</Heading>
        <Heading> Make sure your room is quiet with less background noise.</Heading>
      </VStack>
    </HStack>
  )
}

export default Tips