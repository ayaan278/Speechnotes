import React from 'react'
import { Center, Container, HStack, VStack, Heading, Stack } from '@chakra-ui/react'
import Info from '../../../assets/Lottie/Info.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { TbDeviceFloppy, TbDownload, TbClipboardText} from "react-icons/tb";
import { BiPrinter } from "react-icons/bi";
import { RiDeleteBinLine, RiInformationFill } from "react-icons/ri";

const InfoSection = () => {
  return (
    <Center p="3em" bg="#16161a" color="#00C6C2">
      <Container maxW="container.xl">
        <Stack direction={[ 'column', 'row']} align="center">
          <VStack w={[200, 250, 300, 400, 600]}>
          <Player
                autoplay
                loop
                src={Info}
                style={{ height: '300px', width: '300px' }}
              ></Player>
          </VStack>
          <VStack w={[250, 300, 400, 600, 800]}>
            <HStack color="#7f5af0">
              <RiInformationFill fontSize="26px" />
              <Heading fontSize={{base: 'lg',md: '2xl',lg: '3xl'}}
                        fontWeight="650">
                Information
              </Heading>
            </HStack>
              <VStack alignItems="left" 
                      fontSize='26px'
                      pt="1em"
                      gap="0.3em">
                <Heading fontSize={{base: 'md',md: 'lg',lg: '2xl'}}
                          fontWeight="500">
                  Speech Recognition offers users some functions to reduce their efforts
                </Heading>
                <HStack >
                  <TbDeviceFloppy />
                  <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                        fontWeight="450">&emsp;Save the typed words in the browser cache.</Heading>
                </HStack>
                <HStack>
                  <TbDownload/>
                  <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                        fontWeight="450">&emsp;Download you work as Heading Text file</Heading>
                </HStack>
                <HStack>
                  <BiPrinter/>
                  <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                        fontWeight="450">&emsp;Print your work </Heading>
                </HStack>     
                <HStack>
                  <TbClipboardText/>
                  <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                        fontWeight="450">&emsp;Copy your work on clipboard</Heading>
                </HStack>
                <HStack>
                <RiDeleteBinLine/>
                  <Heading fontSize={{base: 'sm',md: 'md',lg: 'lg'}}
                          fontWeight="450">&emsp;Delete everything</Heading>
                </HStack>
              </VStack>
          </VStack>
        </Stack>
      </Container>  
    </Center>
  )
}

export default InfoSection