import React from 'react'
import { Flex, HStack, Heading} from '@chakra-ui/react'

const Header = () => {

  return (
    <Flex as="header" w="100%"
    wrap="wrap"
    p={7}
    bg="#7f5af0"
    color='white'
    justifyContent={'Center'}>
        <HStack>
          <Heading>Speech Notes</Heading>
        </HStack>
    </Flex>
  )
}

export default Header