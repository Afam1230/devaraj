
import { Box, Container, Heading, SimpleGrid, Image, Text, Flex } from "@chakra-ui/react";

const CrystalCard = ({ image, name, description, price }) => {
  return (
    <Box textAlign="center" mb={6}>
      <Image 
        src={image} 
        alt={name} 
        mx="auto" 
        mb={4} 
        h="150px" 
        w="150px" 
        objectFit="cover"
        borderRadius="full"
      />
      <Heading 
        as="h3" 
        fontSize="md" 
        mb={2}
        fontFamily="'Playfair Display', serif"
        color="brand.800"
      >
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={2}>
        {description}
      </Text>
      <Text fontWeight="bold" color="brand.600">
        ${price}
      </Text>
    </Box>
  );
};

const CrystalSection = () => {
  const crystals = [
    {
      name: "AMETHYST",
      description: "Protection & Intuition",
      price: "24.99",
      image: "https://images.unsplash.com/photo-1603865797221-2d9f187ef26c?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "ROSE QUARTZ",
      description: "Love & Harmony",
      price: "19.99",
      image: "https://images.unsplash.com/photo-1609717539673-f2e050825079?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "CLEAR QUARTZ",
      description: "Energy & Clarity",
      price: "22.99",
      image: "https://images.unsplash.com/photo-1609465748618-3e143bc1f8a9?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "CITRINE",
      description: "Abundance & Manifestation",
      price: "29.99",
      image: "https://images.unsplash.com/photo-1613688258641-5d397339ddfa?auto=format&fit=crop&w=200&h=200"
    },
  ];

  return (
    <Box py={16} bg="beige.50">
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          textAlign="center" 
          mb={12}
          fontFamily="'Playfair Display', serif"
          color="brand.800"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          FIND YOUR CRYSTAL & STONES
        </Heading>
        
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          {crystals.map((crystal, index) => (
            <CrystalCard
              key={index}
              name={crystal.name}
              description={crystal.description}
              price={crystal.price}
              image={crystal.image}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CrystalSection;
