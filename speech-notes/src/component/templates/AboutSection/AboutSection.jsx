import React from 'react'
import { Center, Container, HStack, VStack, Heading, } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player';
import Speech from '../../../assets/Lottie/Speech.json'
const AboutSection = () => {
  return (
    <Center p="3em" bg="#005ea2">
      <Container maxW="container.xl" w="100%">
        <HStack>
          <VStack w="60%" color="white">
            <Heading fontSize={{base: 'lg',md: '2xl',lg: '3xl'}}
                      p="1em"
                      fontWeight="650">
              About Speech Recognition</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                      fontWeight="450">
              Speech Recognition is a website with online Notepad that allows it users to convert any audio to text. </Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                      fontWeight="450">
              It uses webkitSpeechRecognition from Javascript to transcribe audio to text.</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                      fontWeight="450">
              For the first time only: Your browser will pop up a request for you to allow the site to listen to your mic. Click "Allow".</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                      fontWeight="450">
              In case if Speech Recognition is not working make sure you check following things.
              <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                      fontWeight="450">
                The website only works on Google Chrome and Safari Browsers for now.
                You can use Mobile or PC for that.</Heading>
            </Heading>
          </VStack> 
          <VStack w="40%">
            {/* <Lottie animationData={Speech} loop={true}/> */}
            <Player
              autoplay
              loop
              src={Speech}
              style={{ height: '300px', width: '300px' }}
            ></Player>
          </VStack>
        </HStack>
    </Container>
  </Center>
  )
}

export default AboutSection