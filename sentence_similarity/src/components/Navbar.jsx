import React from 'react';
import { Box, Flex, Link,Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex bg="black" p={4}  alignItems="center" width="100%" maxWidth="100vw" position="fixed" opacity={0.96}> 
        <Text  alignContent="center" fontSize="30px" color="white" fontWeight="bold" ml="1%">
        SimilarityQuest
        </Text>
      
    </Flex>
  );
};

export default Navbar;