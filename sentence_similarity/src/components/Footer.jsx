import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box  p={4} color="white" textAlign="center" position="relative" bottom="0">
      <Text fontSize="18px" color="black">
        &copy; {new Date().getFullYear()} Similarity Quest
      </Text>
    </Box>
  );
};

export default Footer;