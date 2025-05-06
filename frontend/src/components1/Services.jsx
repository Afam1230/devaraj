
import { Box, Container, SimpleGrid, Text, Flex, Circle, Image, Heading } from "@chakra-ui/react";

const ServiceCard = ({ imageSrc, title }) => {
  return (
    <Flex direction="column" align="center" mb={6}>
      <Circle size="120px" overflow="hidden" mb={4}>
        <Image src={imageSrc} alt={title} w="100%" h="100%" objectFit="cover" />
      </Circle>
      <Text fontWeight="medium" fontSize="sm" color="brand.800" textAlign="center">
        {title}
      </Text>
    </Flex>
  );
};

const Services = () => {
  const services = [
    {
      title: "BIRTH CHART READING",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=250&h=250",
    },
    {
      title: "TAROT READING",
      image: "https://images.unsplash.com/photo-1591089627083-d5d25b6a7d43?auto=format&fit=crop&w=250&h=250",
    },
    {
      title: "PALM READING",
      image: "https://images.unsplash.com/photo-1604177091072-2f9a1d49c483?auto=format&fit=crop&w=250&h=250",
    },
  ];

  return (
    <Box py={16} bg="white">
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          textAlign="center" 
          mb={10} 
          fontFamily="'Playfair Display', serif"
          color="brand.800"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          DISCOVER YOUR BIRTH CHART
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} justifyItems="center">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              imageSrc={service.image} 
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
