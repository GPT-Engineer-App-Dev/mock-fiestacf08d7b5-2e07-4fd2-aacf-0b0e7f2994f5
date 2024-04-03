// Complete the Index page component here
// Use chakra-ui
import { Box, Heading, Input, UnorderedList } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box maxWidth="600px" mx="auto" mt={8}>
      <Heading mb={8}>My Todo List</Heading>
      <Input placeholder="Enter a new todo item" mb={4} />
      <UnorderedList>{}</UnorderedList>
    </Box>
  );
};

export default Index;
