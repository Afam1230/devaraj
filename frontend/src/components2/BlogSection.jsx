
import { useRef } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  Button, 
  Flex, 
  Badge,
  HStack,
  Link,
  Icon
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const BlogCard = ({ post, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MotionBox
      ref={ref}
      bg="rgba(30, 30, 60, 0.5)"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
      position="relative"
      cursor="pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      border="1px solid"
      borderColor="purple.800"
    >
      <MotionBox 
        h="200px" 
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 + (0.1 * index) }}
      >
        <Image
          src={post.image}
          alt={post.title}
          width="100%"
          height="100%"
          objectFit="cover"
          transition="transform 0.5s"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(to top, rgba(30, 30, 60, 0.8), transparent 50%)"
        />
        
        <Badge
          position="absolute"
          top={4}
          left={4}
          colorScheme="purple"
          borderRadius="full"
          px={3}
          py={1}
        >
          {post.category}
        </Badge>
      </MotionBox>

      <Box p={5}>
        <MotionHeading
          as="h3"
          size="md"
          mb={2}
          color="white"
          fontFamily="heading"
          noOfLines={2}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + (0.1 * index) }}
        >
          {post.title}
        </MotionHeading>

        <MotionText
          color="gray.300"
          fontSize="sm"
          mb={4}
          noOfLines={2}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + (0.1 * index) }}
        >
          {post.excerpt}
        </MotionText>

        <MotionFlex
          justify="space-between"
          fontSize="xs"
          color="gray.400"
          mb={4}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + (0.1 * index) }}
        >
          <HStack spacing={1}>
            <Icon as={Calendar} size={12} />
            <Text>{post.date}</Text>
          </HStack>
          
          <HStack spacing={1}>
            <Icon as={Clock} size={12} />
            <Text>{post.readTime} min read</Text>
          </HStack>
        </MotionFlex>

        <MotionButton
          variant="link"
          colorScheme="purple"
          size="sm"
          rightIcon={<ArrowRight size={16} />}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + (0.1 * index) }}
        >
          Read More
        </MotionButton>
      </Box>
    </MotionBox>
  );
};

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: "How Planetary Retrogrades Affect Your Energy",
      excerpt: "Discover the surprising ways that planetary movements can influence your mood, energy levels, and decision-making.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format",
      category: "Astrology",
      date: "May 2, 2025",
      readTime: 7
    },
    {
      title: "Ancient Moon Rituals for Modern Life",
      excerpt: "Learn how to incorporate powerful lunar practices into your busy schedule for increased spiritual connection.",
      image: "https://images.unsplash.com/photo-1518417823698-76226958ccb4?w=500&auto=format",
      category: "Spirituality",
      date: "Apr 24, 2025",
      readTime: 5
    },
    {
      title: "Manifestation Techniques That Actually Work",
      excerpt: "Beyond visualization: evidence-based approaches to harness cosmic energies for creating your desired reality.",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format",
      category: "Life Coaching",
      date: "Apr 15, 2025",
      readTime: 9
    }
  ];

  return (
    <Box bg="gray.900" py={16} id="blog">
      <Container maxW="container.xl" ref={ref}>
        <Box textAlign="center" mb={10}>
          <MotionText
            color="purple.400"
            fontWeight="bold"
            mb={3}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            COSMIC INSIGHTS
          </MotionText>

          <MotionHeading
            as="h2"
            size="xl"
            color="white"
            mb={5}
            fontFamily="heading"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest Articles & Guidance
          </MotionHeading>

          <MotionText
            color="gray.300"
            maxW="800px"
            mx="auto"
            mb={8}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore valuable insights on astrology, spirituality, and personal development.
            New articles are published weekly to support your spiritual journey.
          </MotionText>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={10}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </SimpleGrid>

        <MotionFlex
          justify="center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            size="lg"
            colorScheme="purple"
            px={8}
            borderRadius="full"
            rightIcon={<ArrowRight />}
            bgGradient="linear(to-r, purple.500, indigo.600)"
            _hover={{ bgGradient: "linear(to-r, purple.400, indigo.500)" }}
            boxShadow="0 4px 15px rgba(114, 49, 198, 0.4)"
          >
            View All Articles
          </Button>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default BlogSection;
