import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Flex, Text ,Image} from '@chakra-ui/react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content"
const App = () => {
  return (
    <ChakraProvider>
        <Navbar />
        <Box minHeight="100vh" display="flex" flexDirection="column">
        <Content/>
        </Box>
       
        <Footer/>

    </ChakraProvider>
  );
};

export default App;