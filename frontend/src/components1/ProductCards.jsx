
import { Box, Container, SimpleGrid, Image, Text, Heading, Flex } from "@chakra-ui/react";

const ProductCard = ({ image, title, subtitle }) => {
  return (
    <Box 
      position="relative" 
      overflow="hidden" 
      _hover={{ transform: "translateY(-5px)" }} 
      transition="transform 0.3s"
    >
      <Image 
        src={image} 
        alt={title} 
        w="100%" 
        objectFit="cover" 
        h="300px" 
      />
      <Flex 
        position="absolute" 
        bottom="0" 
        left="0" 
        right="0" 
        p={4} 
        bg="rgba(0,0,0,0.7)" 
        color="white"
        direction="column"
        align="center"
      >
        <Text 
          fontSize="xl" 
          fontWeight="bold"
          fontFamily="'Playfair Display', serif"
        >
          {title}
        </Text>
        <Text fontSize="sm">{subtitle}</Text>
      </Flex>
    </Box>
  );
};

const ProductCards = () => {
  return (
    <Box py={8} bg="beige.50">
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          textAlign="center" 
          mb={12} 
          fontFamily="'Playfair Display', serif"
          color="brand.800"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          SPECIAL OFFERS
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <ProductCard 
            image="https://images.unsplash.com/photo-1530263578414-95e5e3cf2951?auto=format&fit=crop&w=600&h=300"
            title="CRYSTAL HEALING"
            subtitle="DISCOVER ENERGY"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1562159203-22100d33b4dc?auto=format&fit=crop&w=600&h=300"
            title="MOON READING"
            subtitle="LUNAR GUIDANCE"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProductCards;
