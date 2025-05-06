
import { Box, Container, Heading, Text, Image, SimpleGrid, Flex } from "@chakra-ui/react";

const ShopItem = ({ image, title, description }) => {
  return (
    <Box textAlign="center">
      <Flex 
        justifyContent="center" 
        alignItems="center" 
        h="200px" 
        mb={4} 
        overflow="hidden"
      >
        <Image 
          src={image} 
          alt={title} 
          h="100%" 
          objectFit="cover" 
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Flex>
      <Heading 
        as="h3" 
        fontSize="md" 
        mb={2} 
        color="brand.800"
        fontFamily="'Playfair Display', serif"
      >
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

const ShopSection = () => {
  const items = [
    {
      image: "https://images.unsplash.com/photo-1596356453886-72d92401cdbb?auto=format&fit=crop&w=300&h=200",
      title: "ASTROLOGY BOOK",
      description: "Explore the ancient wisdom of the stars"
    },
    {
      image: "https://images.unsplash.com/photo-1599717053877-9f7e2a816806?auto=format&fit=crop&w=300&h=200",
      title: "ZODIAC JOURNAL",
      description: "Document your spiritual journey"
    },
    {
      image: "https://images.unsplash.com/photo-1606248895514-b6b3d9c1ae1e?auto=format&fit=crop&w=300&h=200",
      title: "TAROT CARDS",
      description: "Divine guidance in your hands"
    },
  ];

  return (
    <Box py={16} bg="white">
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          textAlign="center" 
          mb={12}
          fontFamily="'Playfair Display', serif"
          color="brand.800"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          SHOP SECTION
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {items.map((item, index) => (
            <ShopItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ShopSection;
