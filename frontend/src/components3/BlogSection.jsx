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
import articles from "../store/articles";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate()

  return (
    <Box as="section" id="blog" py="24" bg="white">
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
          {articles.map((article, index) => (
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
                  src={article.image}
                  alt={article.title}
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
                  {article.category}
                </Tag>
              </Box>

              {/* Content */}
              <Stack p={6} flexGrow={1}>
                <Flex align="center" fontSize="sm" color="gray.500" mb={2}>
                  <Icon as={Calendar} h={4} w={4} mr={1} />
                  {article.date}
                </Flex>
                <Heading fontSize="xl" fontFamily="serif" fontWeight="semibold" mb={2}>
                  {article.title}
                </Heading>
                <Text color="gray.600" noOfLines={3}>
                  {article.content}
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
                  onClick={()=>navigate(`/article/${article.id}`)}
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
