import React from 'react'
import Menu from './MenuFunction'
import { VStack, Button, Center, Container} from '@chakra-ui/react'

const VerticalMenu = () => {
  return (
    <Center >
      <Container maxW="container.sm">
        <VStack p="1em" w="100%">
            <Button onclick="saveCache()">
                <span title="Save data on browser">
                    <i class="fa fa-floppy-o"></i>
                </span>
            </Button>
            <Button onclick="saveFile()">
                <span title="Download File as a text">
                    <i class="fa fa-download"></i>
                </span>
            </Button>
            <Button onclick="printDiv()">
                <span title="Print">
                    <i class="fa fa-print"></i>
                </span>
            </Button>
              <Button onclick="copyToClipboard()">
                <span title="Copy to Clipboard">
                    <i class="fa fa-clipboard"></i>
                </span>
              </Button>
              <Button onclick="clearAll()">
                  <span title="Clear All">
                    <i class="fa fa-trash-o"></i>
                  </span>
              </Button>
              <Button onclick="">
                <span title="Information's">
                    <i class="fa fa-info-circle"></i>
                </span>
              </Button>
        </VStack>
      </Container>
    </Center>
  )
}

export default VerticalMenu