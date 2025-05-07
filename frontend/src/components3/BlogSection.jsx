import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Planetary Retrogrades",
    excerpt:
      "Discover how retrograde planets influence your life and how to navigate these cosmic shifts effectively.",
    date: "May 15, 2025",
    category: "Astrological Events",
    imageUrl:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a23cca?fit=crop&w=600&h=400",
  },
  {
    title: "The North Node: Finding Your Soul's Purpose",
    excerpt:
      "Learn how the position of the North Node in your birth chart reveals your soul's mission in this lifetime.",
    date: "May 3, 2025",
    category: "Vedic Astrology",
    imageUrl:
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?fit=crop&w=600&h=400",
  },
  {
    title: "Full Moon Rituals for Manifestation",
    excerpt:
      "Harness the powerful energy of the full moon with these ancient rituals to manifest your deepest desires.",
    date: "April 28, 2025",
    category: "Lunar Magic",
    imageUrl:
      "https://images.unsplash.com/photo-1532013925094-19697e29cf05?fit=crop&w=600&h=400",
  },
];

const BlogSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".section-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Box as="section" id="blog" py="24" bg="astral.cream">
      <Container maxW="7xl" px={4}>
        {/* Header */}
        <Box textAlign="center" maxW="3xl" mx="auto" mb={16} className="section-fade-in">
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontFamily="serif" fontWeight="bold" mb={4}>
            Astral Insights
          </Heading>
          <Box w="16" h="1" bg="astral.orange" mx="auto" mb={6} borderRadius="full" />
          <Text color="gray.600">
            Explore our collection of astrological wisdom, cosmic events, and spiritual practices to deepen your celestial knowledge.
          </Text>
        </Box>

        {/* Blog Grid */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {blogPosts.map((post, index) => (
            <Box
              key={index}
              className="section-fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              transition="box-shadow 0.3s"
              _hover={{ boxShadow: "lg" }}
              display="flex"
              flexDirection="column"
              border="1px solid"
              borderColor="astral.peach"
            >
              {/* Image */}
              <Box position="relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  objectFit="cover"
                  w="100%"
                  h="12rem"
                />
                <Tag
                  position="absolute"
                  top="1rem"
                  right="1rem"
                  bg="astral.orange"
                  color="white"
                  fontSize="xs"
                  py="1"
                  px="2"
                  borderRadius="md"
                >
                  {post.category}
                </Tag>
              </Box>

              {/* Content */}
              <Stack p={6} flexGrow={1}>
                <Flex align="center" fontSize="sm" color="gray.500" mb={2}>
                  <Icon as={Calendar} h={4} w={4} mr={1} />
                  {post.date}
                </Flex>
                <Heading fontSize="xl" fontFamily="serif" fontWeight="semibold" mb={2}>
                  {post.title}
                </Heading>
                <Text color="gray.600" noOfLines={3}>
                  {post.excerpt}
                </Text>
              </Stack>

              {/* Button */}
              <Box px={6} pb={6}>
                <Button
                  variant="outline"
                  w="full"
                  borderColor="astral.gold"
                  color="astral.gold"
                  _hover={{ bg: "astral.goldAlpha.50" }}
                  rounded="full"
                >
                  Read Article
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* CTA */}
        <Box mt={12} textAlign="center" className="section-fade-in">
          <Button
            bg="astral.orange"
            color="white"
            _hover={{ bg: "astral.orangeAlpha.800" }}
            rounded="full"
            px={8}
          >
            View All Articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
