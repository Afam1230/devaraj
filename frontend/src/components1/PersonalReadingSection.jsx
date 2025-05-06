
import { Box, Container, Heading, Text, Button, Flex, Image, Stack } from "@chakra-ui/react";

const PersonalReadingSection = () => {
  return (
    <Box py={16} bg="white">
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: "column", md: "row" }} 
          align="center" 
          justify="space-between"
          gap={8}
        >
          <Box flex={1}>
            <Image 
              src="https://images.unsplash.com/photo-1604608678051-64d46d8d8d39?auto=format&fit=crop&w=600&h=700" 
              alt="Personal reading session" 
              borderRadius="md" 
              w="100%"
            />
          </Box>
          
          <Box flex={1}>
            <Heading 
              as="h2" 
              mb={6}
              fontFamily="'Playfair Display', serif"
              color="brand.800"
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              CONNECT WITH YOUR PERSONAL SPIRITUAL GUIDE
            </Heading>
            
            <Text color="gray.600" mb={6}>
              Experience a deeply personal spiritual session with Astro-Devaraj, who has been practicing ancient 
              astrological methods for over 20 years. Our personal reading sessions are designed to give you 
              clarity and guidance for your specific life questions.
            </Text>
            
            <Stack spacing={6}>
              <Flex align="center">
                <Box 
                  w={4} 
                  h={4} 
                  borderRadius="full" 
                  bg="brand.500" 
                  mr={4}
                />
                <Text>Comprehensive birth chart analysis</Text>
              </Flex>
              
              <Flex align="center">
                <Box 
                  w={4} 
                  h={4} 
                  borderRadius="full" 
                  bg="brand.500" 
                  mr={4}
                />
                <Text>Personalized spiritual guidance</Text>
              </Flex>
              
              <Flex align="center">
                <Box 
                  w={4} 
                  h={4} 
                  borderRadius="full" 
                  bg="brand.500" 
                  mr={4}
                />
                <Text>Future trajectory predictions</Text>
              </Flex>
              
              <Button 
                mt={4} 
                bg="brand.800" 
                color="white" 
                rounded="none"
                px={8}
                _hover={{ bg: "brand.700" }}
                alignSelf={{ base: "center", md: "flex-start" }}
                size="lg"
              >
                BOOK A SESSION
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default PersonalReadingSection;
