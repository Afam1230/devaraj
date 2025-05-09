import { useState, useEffect } from "react";
import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  useToast,
  Divider,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import { FaSun, FaMoon, FaMercury, FaVenus, FaStar, FaInfinity, FaHandSparkles } from "react-icons/fa";
import { ArrowForwardIcon, DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product"; // Import Zustand store
import hero1 from "../images/hero1.jpg"
import articles from "../store/articles";
import { motion } from "framer-motion";
import Text1 from "../components1/Text1";
import PackageSelector from "../components1/PackageSelector";
import HeroSection from "../components3/HeroSection";
import ServicesSection from "../components3/ServicesSection"
import ShopSection from "../components3/ShopSection"; // Adjust path as needed
import HoroscopeSection from "../components3/HoroscopeSection";
import ConsultationSection from "../components3/ConsultationSection"
import ContactSection from "../components3/ContactSection"
import NewsletterSection from "../components3/NewsletterSection"
import BlogSection from "../components3/BlogSection"
import logo1 from "../images/logo1.png"

const MotionBox = motion(Box);


const HomePage = () => {
  const { products, fetchProducts } = useProductStore(); // Get products & fetch function

  useEffect(() => {
    fetchProducts(); // Fetch products when the page loads
  }, []);


  return (
    <Box>
      <Box mt={55}>
        {/* Hero Section */}
        <HeroSection />
        <Box
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
          as="section"
          position="relative"
          px={{ base: 6, md: 10, lg: 16 }}
          display="flex"
          justifyContent="center"
        >
          <Stack
            direction={{ base: "row", lg: "row" }}
            alignItems="center"
            spacing={{ base: 1, lg: 16 }}
            maxW="1200px"
            w="full"
          >



            {/* Text Section */}
            <MotionBox flex={1} textAlign={{ base: "center", lg: "left" }} initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            >
              <Heading
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                color="orange.900"
                fontFamily="DM Serif Text"
              >
                Discover Your Cosmic Path
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "lg" }}
                color={"#4A4A4A"}
                mt={4}
              >
                Expert Vedic Astrology & Life Coaching to Guide Your Journey
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                mt={6}
                justify={{ base: "center", lg: "flex-start" }}
              >
                <Link to={'/book'}>
                  <Button bg="orange.600" color="white" _hover={{ bg: "orange.700" }} w={'full'}>
                    Book Consultation
                  </Button>
                </Link>

              </Stack>
            </MotionBox>

            {/* Image Section */}
            <MotionBox flex={1} display="flex" justifyContent="center" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} >
              <Box
                aspectRatio={1} // Ensures circular aspect ratio
                borderRadius="full"
                overflow="hidden"
                shadow="xl"
              >
                <Image
                  src={hero1} // Change to actual image path
                  alt="Astrologer"
                  objectFit="cover"
                  w="full"
                  h="full"
                  aspectRatio={1}
                  objectPosition={'100% 0vh'}
                  zIndex={1}
                />
              </Box>
            </MotionBox>
          </Stack>
        </Box>
        <ServicesSection />

        <HoroscopeSection />
        {/* Daily Planetary Influences */}
        <Container maxW="100%" py={{ base: '10', md: '20' }} textAlign="center">
          <Heading fontSize="3xl" fontFamily="'Georgia', serif">Daily Planetary Influences</Heading>
          <Box w={16} h={1} bg="orange.400" mx="auto" mb={6} borderRadius="full" />
          <Text mt={2} color="gray.600">Discover how the stars align for you today</Text>
          <Flex wrap="wrap" justify="center" mt={6} gap={{ base: 4, xl: 5 }}>
            {[
              { icon: FaSun, title: "Sun", desc: "Currently in Aries, bringing energy and initiative" },
              { icon: FaMoon, title: "Moon", desc: "Waxing in Taurus, enhancing stability" },
              { icon: FaMercury, title: "Mercury", desc: "Direct in Gemini, favoring communication" },
              { icon: FaVenus, title: "Venus", desc: "In Libra, harmonizing relationships" }
            ].map(({ icon: Icon, title, desc }) => (
              <Flex key={title} p={{ base: '5', md: '50px' }} borderColor={'yellow.400'} shadow={"lg"} borderRadius="md" borderWidth={3} align="center" w={{ base: "90%", md: "48%", lg: "40%", xl: '20%' }}>
                <Icon size={40} color="orange" />
                <MotionBox ml={{ xl: 3, base: '20%' }} initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} >
                  <Text align={'center'} fontSize={{ base: 15, md: 25 }} fontWeight="bold" fontFamily="'Georgia', serif">{title}</Text>
                  <Text fontSize={{ base: 'sm', md: 17 }} color="gray.600">{desc}</Text>
                </MotionBox>
              </Flex>
            ))}
          </Flex>
        </Container>

        {/* My Expertise */}
        <Box bg="" py={10}>
          <Container maxW={{ xl: "100%", base: '6xl' }} textAlign="center">
            <Heading fontSize="3xl" fontFamily="'Georgia', serif">My Expertise</Heading>
            <Box w={16} h={1} bg="orange.400" mx="auto" mb={6} borderRadius="full" />
            <Text mt={2} color="gray.600">Comprehensive spiritual guidance for your journey</Text>
            <Flex wrap="wrap" justify="center" mt={6} gap={4}>
              {[
                { icon: FaStar, title: "Vedic Astrology", desc: "In-depth birth chart analysis and life path guidance" },
                { icon: FaHandSparkles, title: "Life Coaching", desc: "Personal development and spiritual growth guidance" },
                { icon: FaInfinity, title: "Numerology", desc: "Understanding life's patterns through numbers" }
              ].map(({ icon: Icon, title, desc }) => (
                <Flex key={title} p={{ base: 6, lg: 7, xl: 10 }} bg="white" borderRadius="md" boxShadow="md" align="center" w={{ base: "100%", md: "48%", lg: "30%", xl: '25%' }}>
                  <Icon size={40} color="orange" />
                  <Link to={'/book'}>
                    <Box ml={{ xl: 3, base: '20%' }} _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
                    >
                      <Text fontWeight="bold" fontSize={{ base: 15, md: 25 }}>{title}</Text>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 15 }}>{desc}</Text>
                      <Text color="orange.500" mt={2} fontSize={{ base: 'sm', md: 20 }} cursor="pointer">Learn more →</Text>
                    </Box>
                  </Link>

                </Flex>
              ))}
            </Flex>
          </Container>
        </Box>

        <ConsultationSection />


        {/* Services Section */}
        <Box bgColor={"#F8F9FA"} bgGradient={"linear(to-br, #FFF9F0, #F8F9FA)"} shadow={"lg"} color={"orange.700"} py={5} paddingTop={{ base: '20', lg: '100', xl: '40' }}>
          <Text
            textAlign={"center"}
            fontSize={{ base: 35, md: 40 }}
            fontWeight={400}
            fontFamily="'Georgia', serif"          >
            Sacred Services
          </Text>
          <Box w={40} h={1} bg="orange.400" mx="auto" mt={2} borderRadius="full" />
          {/* Services Grid */}
          {/* <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={10}
          textAlign="center"
          color={"#2C3E50"}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} px={{ base: 4, md: 8, lg: 12 }} w="100%" maxW="80vw">
            {InfoCard.map((info, index) => (
              <Box key={index} display="flex" justifyContent="center" py={5}>
                <VStack
                  width={{ base: "90%", md: "40vh" }}
                  align="center"
                  borderWidth={1}
                  borderRadius={20}
                  shadow={"2xl"}
                  bgColor={"white"}
                  p={4}
                  _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
                >
                  <Image src={info.image} alt="image" borderRadius={20} w="full" />

                  <Text fontSize={{ base: 20, md: 25 }} fontWeight={"medium"} fontFamily={"Playfair Display"} color={"orange.700"}>
                    {info.title}
                  </Text>

                  <Text fontSize={{ base: 14, md: 16 }} px={2} >
                    {info.info}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box> */}
        </Box>

        {/* <PackageSelector/> */}
        <Text1 />

        {/* Articles Section */}
        <Container maxW="100%" py={12} bg="white" borderRadius={20} shadow="lg">
          <BlogSection/>
          {/* Section Heading */}
          {/* <Heading
            fontWeight={600}
            fontFamily="Playfair Display"
            size={{ base: "xl", md: "2xl", lg: "3xl" }}
            textAlign="center"
            mb={8}
            color="#2C3E50"
          >
            Wisdom Insights
          </Heading> */}
          {/* Articles Grid */}
          {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} px={2} justifyItems="center">
            {articles.map((articles, index) => (
              <Link to={`/article/${articles.id}`} key={articles.id} style={{ width: "100%" }}>
                <VStack
                  p={{ base: 0, md: 6, lg: 8 }}
                  borderWidth={3}
                  bg="white"
                  width="full"
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out", shadow: "xl" }}
                >
                  <Image src={articles.image} alt={articles.title} w={{ base: "full", xl: 300 }} maxH="250px" objectFit="cover" />
                  <Box>
                    <VStack>
                      <Text fontSize={{ base: "xl", md: "2xl" }} fontFamily="Playfair Display" px={5} textColor="orange.700" mt={3}>
                        {articles.title}
                      </Text>

                      <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} px={3} noOfLines={3}>
                        {articles.info}
                      </Text>

                      <Text fontWeight="bold" color="orange.700" mt={2} _hover={{ textDecoration: "underline" }}>
                        Read more <ArrowForwardIcon />
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </Link>
            ))}
          </SimpleGrid> */}
        </Container>

        {/* Shop Section */}
        <ShopSection />
        {/* Product Grid */}
        {/* <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
          {Array.isArray(products) ? (
            products.map((product) => (
              <Box key={product._id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Link to={'/shop'}>
                  <Image src={product.image} alt={product.name} h="200px" w="full" objectFit="cover" />
                  <VStack align="start" spacing={2} mt={3}>
                    <Heading size="md">{product.name}</Heading>
                    <Text fontSize="sm">{product.description.substring(0, 50)}...</Text>
                    <Text align={'center'} fontWeight="bold">${product.price}</Text>
                  </VStack>
                </Link>

                <Box mt={4} textAlign="center">
                  <Link to={'/shop'}>
                    <Button
                      colorScheme="orange"
                      size="sm"
                    >
                      go to shop
                    </Button>
                  </Link>
                </Box>


              </Box>

            ))
          ) : (
            <Text>Loading products...</Text>
          )}
        </SimpleGrid> */}
        <ContactSection />
        <NewsletterSection />
      </Box>
    </Box>


  );
};

export default HomePage;