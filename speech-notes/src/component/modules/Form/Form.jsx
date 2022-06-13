import React from 'react'
import { Textarea, Heading, Flex, Link, HStack, VStack,
  FormLabel,
 } from '@chakra-ui/react';
 import MicButton from '../../elements/MicButton/MicButton'

const Form = () => {
  return (
    <HStack w="100%">
      <VStack w="100%" h="400px">
        <HStack>
          <FormLabel color="white" alignItems="left">
            Click on the mic to start the recognition  
          </FormLabel>
          <MicButton/>
        </HStack>
        <Textarea placeholder="Your input comes here!" 
                    id="output" 
                    resize="none"
                    size='lg'
                    bg="#fffffe"
                    border="2px solid black"
                    h="300px"
                    ></Textarea>
          <span id="interim"></span>
      </VStack>
    </HStack>
        // <HStack id="showAlert" role="alert">
        // </HStack>
  )
}

export default Form