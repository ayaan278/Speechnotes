import React from 'react'
import { Textarea, Heading, Flex, Link, HStack, VStack,
  FormLabel,
 } from '@chakra-ui/react';

const Form = () => {
  return (
    <VStack id="editor1">
        <HStack>
          <FormLabel >
            <Textarea placeholder="Your input comes here!" id="output" ></Textarea>
            <span id="interim"></span>
          </FormLabel>
        </HStack>
        <HStack id="showAlert" role="alert">
        </HStack>
      </VStack>
  )
}

export default Form