import React from 'react'
import { Center, Container, HStack, VStack, Heading, } from '@chakra-ui/react'
import Info from '../../../assets/Lottie/Info.json'
import { Player } from '@lottiefiles/react-lottie-player';

const InfoSection = () => {
  return (
    <Center p="3em" bg="#04D2CA" color="white">
      <Container maxW="container.xl">
        <HStack>
        <VStack w="40%">
        <Player
              autoplay
              loop
              src={Info}
              style={{ height: '300px', width: '300px' }}
            ></Player>
        </VStack>
        <VStack w="60%">
          <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}>
            <i class="fa fa-info-circle"></i>
            Information
          </Heading>
            <VStack alignItems="left">
              <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}>
                Speech Recognition offers users some functions to reduce their efforts
              </Heading>

              <i class="fa fa-floppy-o fa-2x" ></i>
              <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}>&emsp;Save the typed words in the browser cache.</Heading>

              <i class="fa fa-download fa-lg" ></i>
              <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}>&emsp;Download you work as Heading Text file</Heading>

              <i class="fa fa-print fa-2x" ></i>
              <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}>&emsp;Print your work </Heading>

              <i class="fa fa-clipboard fa-2x" ></i>
              <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}>&emsp;Copy your work on clipboard</Heading>

              <i class="fa fa-trash-o fa-2x" ></i>
              <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}>&emsp;Delete everything</Heading>

            </VStack>
        </VStack>
        </HStack>
      </Container>  
    </Center>
  )
}

export default InfoSection