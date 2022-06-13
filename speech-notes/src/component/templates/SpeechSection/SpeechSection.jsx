import React from 'react'
import { Center, Container, HStack, VStack, Heading, } from '@chakra-ui/react'
import VerticalMenu from '../../modules/VerticalMenu/VerticalMenu'
import Form from '../../modules/Form/Form'
import Tips from '../../modules/Tips/Tips'
const SpeechSection = () => {
  return (
    <Center bg="#00B1BA" pt="2em">
            <HStack w="100%" >
                <VStack w="8%">
                    <VerticalMenu/>
                </VStack>
                <VStack w="62%">
                    <Form/>
                </VStack>
                <VStack w="30%">
                    <Tips/>
                </VStack>
            </HStack>
    </Center>
  )
}

export default SpeechSection