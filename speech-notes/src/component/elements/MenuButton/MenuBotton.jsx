import React from 'react'
import { Button} from '@chakra-ui/react'
const MenuBotton = (props) => {
    
    const { functionName, title, icon } = props
    return (
        <Button onclick={functionName} 
                fontSize="20px"
                bg="#7f5af0"
                color="#fffffe">
            <span title={title}>
                {icon}
            </span>
        </Button>
  )
}

export default MenuBotton
