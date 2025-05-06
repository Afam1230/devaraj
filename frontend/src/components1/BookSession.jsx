
import { Box, Container, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";

const BookSession = () => {
  return (
    <Box 
      py={20} 
      position="relative" 
      bgImage="url('https://images.unsplash.com/photo-1552503618-b5932c553b27?auto=format&fit=crop&w=1600')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box 
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bg="rgba(0,0,0,0.7)"
      />
      
      <Container maxW="container.xl" position="relative" zIndex="1">
        <Flex 
          direction="column" 
          alignItems="center" 
          textAlign="center" 
          color="white"
        >
          <Heading 
            as="h2" 
            mb={6}
            fontFamily="'Playfair Display', serif"
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            WOULD YOU LIKE TO KNOW<br />
            YOUR PERSONAL DESTINY?
          </Heading>
          
          <Button 
            bg="brand.500" 
            color="white" 
            size="lg" 
            rounded="none"
            px={8}
            _hover={{ bg: "brand.400" }}
            mb={10}
          >
            BOOK NOW
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default BookSession;
