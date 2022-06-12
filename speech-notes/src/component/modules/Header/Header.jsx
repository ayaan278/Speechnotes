import React from 'react'
import { Center, Container, HStack, Heading} from '@chakra-ui/react'

const Header = () => {
  return (
    <Center>
      <Container>
        <HStack>
          <Heading>Speech Notes</Heading>
        </HStack>
      </Container>
    </Center>
  )
}

export default Header