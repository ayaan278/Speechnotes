import React from 'react'
import { Button } from '@chakra-ui/react'
const MicButton = () => {
  return (
    <Button value="Start" onclick="if(status===true){start()} else if(status===false){pause()}" class="button">
          <i class="fa fa-microphone"></i>
    </Button>
  )
}

export default MicButton