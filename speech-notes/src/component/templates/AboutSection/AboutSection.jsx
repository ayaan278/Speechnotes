import React from 'react'
import { Center, Container, Spacer, VStack, Heading, Stack} from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player';
import Speech from '../../../assets/Lottie/Speech.json'
const AboutSection = () => {
  return (
    <Center p="3em" bg="#16161a">
      <Container maxW="container.xl" w="100%">
        <Stack direction={[ 'column', 'row']} 
                align="center"
                gap="0.3em">
          <VStack w={[250, 300, 400, 600, 800]}
                  color="#00C6C2"
                  gap="0.4em"
                  p="0.3em"
                  >
            <Heading fontSize={{base: 'lg',md: '2xl',lg: '3xl'}}
                      p="1em"
                      fontWeight="650"
                      color="#7f5af0">
              About</Heading>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                      fontWeight="450">
              Speech Recognition is a website with online Notepad that allows it users to convert any audio to text.</Heading>
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
          <Spacer/>
          <VStack w={[200, 250, 300, 350, 400, 600]}
                  p="0.3em">
            {/* <Lottie animationData={Speech} loop={true}/> */}
            <Player
              autoplay
              loop
              src={Speech}
              style={{ height: '300px', width: '300px', borderRadius: '25px' }}
            ></Player>
          </VStack>
        </Stack>
    </Container>
  </Center>
  )
}

export default AboutSection