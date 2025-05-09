import {
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  Flex,
  Avatar,
  HStack,
  Stack,
  useColorModeValue,
  SimpleGrid
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import BlogExtra from "../components/BlogExtra";
import { FaSquareXTwitter, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import BlogSection from "../components3/BlogSection"

const MotionBox = motion(Box);

const BlogPage = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const gradientBg = useColorModeValue("linear(to-b, orange.50, white)", "gray.700");

  return (
    <Box w="100%" bg={bgColor} mt={{ base: 50 }}>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        position="relative"
        maxW="100%"
        display="flex"
        justifyContent="center"
      >
        <Image
          src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/485057968_1046071844207080_313747992668637985_n.jpg"
          objectFit="cover"
          width={{ base: "full", xl: "50%" }}
          borderRadius="lg"
          boxShadow="xl"
        />
      </MotionBox>

      {/* Header Section */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        bgGradient={gradientBg}
        py={{ base: 10, md: 16 }}
        textAlign="center"
        px={4}
      >
        <Heading fontSize={{ base: "3xl", md: "4xl" }} color="orange.600">
          Astrological Insights & Wisdom
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mt={3} color="gray.600">
          Explore the mysteries of the cosmos through our articles on astrology, zodiac signs, and celestial events.
        </Text>
      </MotionBox>

            <BlogSection/>


      {/* Featured Post Section */}
      <SimpleGrid
        column={{ base: 1, md: 2 }}
        px={{ base: 4, md: 10 }}
        py={10}
        alignItems="center"
        justifyContent="center"
        gap={10}
        bg={useColorModeValue("gray.50", "gray.900")}
      >
        {/* Blog Content */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          flex={{ base: 1, md: 0.5 }}
          bg="white"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Text fontSize="sm" fontWeight="bold" color="orange.500" mb={1}>
            Featured Post
          </Text>
          <Heading fontSize={{ base: "xl", md: "2xl" }} color="gray.800">
            The Great Conjunction of 2025: What It Means For You
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} mt={3} color="gray.600">
            Discover how this rare celestial event will impact each zodiac sign and what transformations it may bring to your life journey.
          </Text>

          <Flex alignItems="center" mt={5} gap={3}>
            <Avatar size="sm" src="/author.jpg" name="Devarishi Das Asamoah" />
            <Text fontSize="sm" color="gray.700">
              Devarishi Das Asamoah
            </Text>
          </Flex>

          <HStack spacing={4} mt={4}>
            <a href="https://youtube.com/@astrodevaraj108?si=kyY-4IE-RvHo9uDi" target="_blank" rel="noopener noreferrer">
              <IconButton icon={<FaYoutube />} aria-label="YouTube" colorScheme="red" isRound />
            </a>
            <a href="https://x.com/AsamoahDas108" target="_blank" rel="noopener noreferrer">
              <IconButton icon={<FaSquareXTwitter />} aria-label="X (Twitter)" colorScheme="gray" isRound />
            </a>
            <a href="https://web.facebook.com/DevaRishiDasAsamoah/" target="_blank" rel="noopener noreferrer">
              <IconButton icon={<FaFacebook />} aria-label="Facebook" colorScheme="facebook" isRound />
            </a>
            <a href="https://wa.me/2348175725656" target="_blank" rel="noopener noreferrer">
              <IconButton icon={<FaWhatsapp />} aria-label="WhatsApp" colorScheme="whatsapp" isRound />
            </a>
          </HStack>

          <Text mt={4} fontWeight="semibold" fontSize="sm" color="orange.600" cursor="pointer" _hover={{ textDecoration: "underline" }}>
            Subscribe to Channel
          </Text>
        </MotionBox>
      </SimpleGrid>

      <BlogExtra />
    </Box>
  );
};

export default BlogPage;
