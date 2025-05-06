
import { Box, Container, Heading, SimpleGrid, Image, Text, Link } from "@chakra-ui/react";

const BlogPost = ({ image, title, excerpt, date }) => {
  return (
    <Box 
      overflow="hidden" 
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Image 
        src={image} 
        alt={title} 
        mb={4} 
        h="200px" 
        w="100%" 
        objectFit="cover"
      />
      <Text 
        fontSize="xs" 
        color="brand.500" 
        mb={1}
      >
        {date}
      </Text>
      <Heading 
        as="h3" 
        fontSize="md" 
        mb={2}
        fontFamily="'Playfair Display', serif"
        color="brand.800"
      >
        {title}
      </Heading>
      <Text 
        fontSize="sm" 
        color="gray.600" 
        noOfLines={3}
        mb={2}
      >
        {excerpt}
      </Text>
      <Link 
        color="brand.500" 
        fontSize="sm"
        fontWeight="medium"
        _hover={{ textDecoration: "none", color: "brand.600" }}
      >
        Read More →
      </Link>
    </Box>
  );
};

const BlogSection = () => {
  const posts = [
    {
      title: "HOW MOON PHASES AFFECT YOUR MOOD",
      excerpt: "Discover the profound connection between lunar cycles and your emotional well-being. This guide explores how different moon phases influence our moods and energy levels.",
      date: "MAY 15, 2025",
      image: "https://images.unsplash.com/photo-1532013377688-9a4f13402788?auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "UNDERSTANDING YOUR RISING SIGN",
      excerpt: "Your rising sign shapes how others perceive you. Learn about this important astrological component and how it influences your personal presentation and first impressions.",
      date: "MAY 8, 2025",
      image: "https://images.unsplash.com/photo-1518128160709-c2f4a86aa1e9?auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "CRYSTALS FOR BEGINNERS",
      excerpt: "Start your crystal healing journey with confidence. This beginner's guide covers essential crystals, their properties, and how to incorporate them into your daily spiritual practice.",
      date: "APRIL 29, 2025",
      image: "https://images.unsplash.com/photo-1611523522477-211757286f32?auto=format&fit=crop&w=400&h=250"
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
          FROM OUR BLOG
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BlogSection;
