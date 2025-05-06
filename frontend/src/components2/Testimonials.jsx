
import { Box, Container, Text, SimpleGrid, Avatar, Flex, Icon, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Testimonial = ({ name, quote, avatar, location }) => {
  return (
    <Box 
      p={6} 
      bg="white"
      boxShadow="sm" 
      borderRadius="md" 
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Flex mb={4}>
        {[...Array(5)].map((_, i) => (
          <Icon 
            key={i} 
            as={StarIcon} 
            color="gold.400" 
            mr={1}
          />
        ))}
      </Flex>
      
      <Text fontSize="sm" mb={6} color="gray.600">
        {quote}
      </Text>
      
      <Flex align="center">
        <Avatar size="sm" src={avatar} mr={4} />
        <Box>
          <Text fontWeight="bold" fontSize="sm">{name}</Text>
          <Text fontSize="xs" color="gray.500">{location}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Samantha R.",
      quote: "My reading with Astro-Devaraj was incredibly accurate! He predicted major life changes that came to pass exactly as he described. I'm a believer for life.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
      location: "New York, USA"
    },
    {
      name: "Michael T.",
      quote: "I was skeptical at first, but after my birth chart reading, I was amazed at the detailed insights. Astro-Devaraj has a true gift for connecting with celestial energies.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100",
      location: "London, UK"
    },
    {
      name: "Priya K.",
      quote: "The crystal healing session transformed my energy completely. I felt lighter and more balanced afterward. I've been recommending Astro-Devaraj to all my friends.",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&h=100",
      location: "Mumbai, India"
    },
  ];

  return (
    <Box py={16} >
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          textAlign="center" 
          mb={12}
          fontFamily="'Playfair Display', serif"
          color="brand.800"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          CLIENT TESTIMONIALS
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              location={testimonial.location}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials;
