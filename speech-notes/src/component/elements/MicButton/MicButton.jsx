import React from 'react'
import { Button } from '@chakra-ui/react'
import { BsFillMicFill } from "react-icons/bs";
// import { speech } from "../../modules/Form/speechRecognition"
const MicButton = () => {
  return (
    <Button value="Start" 
        bg="#00C6C2"
        color="#fffffe"
        // onclick={speech}
        //  class="button"
      >
          <BsFillMicFill/>
    </Button>
  )
}

export default MicButton