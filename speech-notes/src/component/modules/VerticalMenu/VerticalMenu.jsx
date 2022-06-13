import React from 'react'
import { saveCache, saveFile, printDiv, copyToClipboard, clearAll, } from './MenuFunction'
import MenuBotton from '../../elements/MenuButton/MenuBotton'
import { VStack, Center, Container} from '@chakra-ui/react'
import { TbDeviceFloppy, TbDownload, TbClipboardText} from "react-icons/tb";
import { BiPrinter } from "react-icons/bi";
import { RiDeleteBinLine, RiInformationFill } from "react-icons/ri";
const VerticalMenu = () => {
  function alert(){
    alert("Are you sure you want to clear all of your work");
}
  return (
    <Center >
      <Container maxW="container.sm">
        <VStack p="1em" w="100%">
            <MenuBotton functionName={saveCache} 
                        title="Save data on browser"
                        icon={<TbDeviceFloppy/>}/>
            <MenuBotton functionName={saveFile} 
                        title="Download File as a text"
                        icon={<TbDownload/>}/>
            <MenuBotton functionName={printDiv} 
                        title="Print"
                        icon={<BiPrinter/>}/>
            <MenuBotton functionName={copyToClipboard} 
                        title="Copy to Clipboard"
                        icon={<TbClipboardText/>}/>
            <MenuBotton functionName={clearAll} 
                        title="Save data on browser"
                        icon={<RiDeleteBinLine/>}/>
            <MenuBotton functionName={alert}
                        title="Information about Icons"
                        icon={<RiInformationFill/>}/>
        </VStack>
      </Container>
    </Center>
  )
}

export default VerticalMenu
