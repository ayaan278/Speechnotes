import React from 'react'
import { Center, Container, HStack, VStack, Heading, } from '@chakra-ui/react'
import VerticalMenu from '../../modules/VerticalMenu/VerticalMenu'
import Form from '../../modules/Form/Form'
import MicButton from '../../elements/MicButton/MicButton'
import Tips from '../../modules/Tips/Tips'
const SpeechSection = () => {
  return (
    <Center bg="#005ea2">
        <Container>
            <HStack>
                <VStack w="10%">
                    <VerticalMenu/>
                </VStack>
                <VStack w="65%">
                    <MicButton/>
                    <Form/>
                </VStack>
                <VStack w="25%">
                    <Tips/>
                </VStack>
            </HStack>
        </Container>
    </Center>
  )
}

export default SpeechSection