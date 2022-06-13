import React from 'react'
import { Center, Container, Stack, VStack, HStack, } from '@chakra-ui/react'
import VerticalMenu from '../../modules/VerticalMenu/VerticalMenu'
import Form from '../../modules/Form/Form'
import Tips from '../../modules/Tips/Tips'
const SpeechSection = () => {
  return (
    <Center bg="#16161a" pt="2em">
            <Stack w="100%" align="center" direction={[ 'column', 'row']}>
              <HStack>
                <VStack w="8%">
                    <VerticalMenu/>
                </VStack>
                <VStack w="62%">
                    <Form/>
                </VStack>
              </HStack>
              <VStack w="30%">
                  <Tips/>
              </VStack>
            </Stack>
    </Center>
  )
}

export default SpeechSection