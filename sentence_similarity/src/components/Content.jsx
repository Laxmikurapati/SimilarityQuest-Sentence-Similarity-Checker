import React, { useState } from 'react';
import { Box, Text ,Grid,Flex, Image,Input, Button} from '@chakra-ui/react';
import img from "./img.jpg"

const Content = () => {

  const [sentence1, setSentence1] = useState('');
  const [sentence2, setSentence2] = useState('');
  const [similarityScore, setSimilarityScore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/calculate_similarity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentence1, sentence2 }),
      });

      const data = await response.json();
      console.log(data.similarity_score);
      setSimilarityScore(data.similarity_score);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'sentence1') {
      setSentence1(value);
    } else if (name === 'sentence2') {
      setSentence2(value);
    }
  };

  return (
    <Box textAlign="center" mt="4%">
      <Grid templateColumns="repeat(2, 1fr)" gap={1} >
      <Box height="85vh" mt={10}>
        <Image src={img} width="100%" height="100%" objectFit="contain"></Image>
      </Box>
        <Box bgColor="rgb(245, 247, 248)" height="60vh" borderRadius="25px" mt="15%" border="2px null"  minW="200px" mr="10%" p={7} shadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Sentence 1
              </Text>
              <Input
                name="sentence1"
                placeholder="Enter sentence 1"
                value={sentence1}
                borderRadius="lg"
                resize="vertical"
                minHeight="100px"
                fontSize="20px"
                onChange={handleChange}
                focusBorderColor="black"
              />
            </Box>
            <Box>
              <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Sentence 2
              </Text>
              <Input
                name="sentence2"
                placeholder="Enter sentence 2"
                value={sentence2}
                borderRadius="lg"
                resize="vertical"
                minHeight="100px"
                fontSize="20px"
                onChange={handleChange}
                focusBorderColor="black"
              />
            </Box>
          </Grid>
          <Button mt={10} p={7}  borderRadius={30} onClick={handleSubmit} bgColor="rgb(165, 221, 155)"  fontSize="20px" fontWeight="bold">Calculate</Button>
          <Flex justifyContent="center" mt={7}>
            <Box height="20%" width="50%"  border="2px" fontSize="20px" borderRadius="30px" p={5} mt={2}>
            {similarityScore !== null ? (
              <Box>
                <p>Similarity Score: {(similarityScore * 100).toFixed(2)}%</p>
              </Box>
            ) : (
              <p>Error</p>
            )}
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};
export default Content;