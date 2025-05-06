
import { Box, Container, Heading, Text, Input, Button, Flex, FormControl } from "@chakra-ui/react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing with:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };
  
  return (
    <Box 
      py={16} 
      bg="beige.100"
    >
      <Container maxW="container.md" textAlign="center">
        <Heading 
          as="h2" 
          mb={4}
          fontFamily="'Playfair Display', serif"
          color="brand.800"
          fontSize={{ base: "xl", md: "2xl" }}
        >
          JOIN OUR NEWSLETTER
        </Heading>
        
        <Text mb={8} color="gray.600">
          Subscribe to receive celestial updates, special offers, and spiritual guidance directly to your inbox.
        </Text>
        
        <Flex 
          as="form" 
          onSubmit={handleSubmit}
          direction={{ base: "column", md: "row" }}
          maxW="500px"
          mx="auto"
          gap={4}
        >
          <FormControl flex="1">
            <Input
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
            />
          </FormControl>
          
          <Button 
            type="submit"
            bg="brand.800"
            color="white"
            _hover={{ bg: "brand.700" }}
            px={8}
          >
            SUBSCRIBE
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Newsletter;
