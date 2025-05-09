import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Circle,
  useColorModeValue,
} from "@chakra-ui/react";
import hero from "../images/hero.jpg"

const AboutSection = () => {
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
    <Box as="section" id="about" py="24" bg="astral.cream" position="relative" overflow="hidden">
      {/* Decorative Blurs */}
      <Box
        position="absolute"
        top={{ md: "5rem" }}
        left={{ md: "2.5rem", }}
        w="12rem"
        h="12rem"
        bg="astral.goldAlpha.100"
        filter="blur(60px)"
        borderRadius="full"
      />


      <Container maxW="7xl" px="4">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
          {/* Text Content */}
          <GridItem className="section-fade-in" order={{ base: 2, lg: 1 }}>
            <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontFamily="serif" fontWeight="bold" mb={4}>
              Meet Astrodevaraj
            </Heading>
            <Box h="1" w="16" bg="astral.orange" mb={6} borderRadius="full" />
            <VStack spacing={4} align="start" color="gray.600">
              <Text>
                With over 20 years of experience in Vedic and Western astrology, I have dedicated my life to understanding
                the cosmic forces that shape our existence and helping others navigate their unique life paths.
              </Text>
              <Text>
                My journey into astrology began after a profound spiritual awakening during a retreat in the Himalayas. Since
                then, I've studied under renowned astrologers in India and abroad, combining ancient wisdom with modern insights.
              </Text>
              <Text mb={2}>
                I believe that astrology is not about predicting a fixed future, but about understanding the energetic patterns
                that influence our lives and empowering you to make conscious choices that align with your highest potential.
              </Text>
            </VStack>
            <Flex mt={6} flexWrap="wrap" gap={4} align="center">
              <Button bg="astral.orange" color="white" _hover={{ bg: "astral.orangeAlpha.800" }} borderRadius="full" px={6}>
                My Approach
              </Button>
              <Flex align="center">
                <Flex gap={-2}>
                  {["A", "B", "C"].map((label, i) => (
                    <Circle
                      key={i}
                      size="10"
                      bg="astral.peach"
                      border="2px solid white"
                      fontWeight="medium"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {label}
                    </Circle>
                  ))}
                </Flex>
                <Text ml={4} fontSize="sm" color="gray.500">
                  Trusted by 1000+ clients worldwide
                </Text>
              </Flex>
            </Flex>
          </GridItem>

          {/* Image Content */}
          <GridItem className="section-fade-in" order={{ base: 1, lg: 2 }}>
            <Box position="relative" w="full">
              {/* Image container */}
              <Box
                bg="white"
                p={3}
                shadow="lg"
                borderRadius="lg"
                transform="rotate(2deg)"
                zIndex={10}
                position="relative"
              >
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  bgGradient="linear(to-br, astral.peach, astral.orange)"
                  aspectRatio={4 / 5}
                  backgroundImage={"https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/495300313_1084213220392942_2842729744296527586_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P_65xJ65kWUQ7kNvwHK0M-o&_nc_oc=Adk4q-qeJfzf30TXDsrcTQBcKUtNyuMWJ2glgGuQ6upffqoekh8cGhRr6MkHao5l6cc&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&_nc_gid=e4EQf3-YmoEIQ2xyQEAAeA&oh=00_AfKOEs3OMcE-M2ddld_o67oAQ-gV5Z3rHpE3ZQFAsbEjVA&oe=6823249F"}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  w="full"
                  h="full"
                  zIndex={1}
                >
                  {/* Decorative blur inside image container */}
                  <Box
                    position="absolute"
                    bottom="1rem"
                    right="1rem"
                    w="10rem"
                    h="10rem"
                    bg="astral.orangeAlpha.800"
                    filter="blur(60px)"
                    borderRadius="full"
                    zIndex={-11}
                  />
                  <Box
                    position="absolute"
                    bottom="1rem"
                    right="1rem"
                    w="10rem"
                    h="10rem"
                    bg="astral.orangeAlpha.800"
                    filter="blur(60px)"
                    borderRadius="full"
                    zIndex={-11}
                  />
                  <Box
                    position="absolute"
                    bottom="1rem"
                    right="1rem"
                    w="10rem"
                    h="10rem"
                    bg="astral.orangeAlpha.800"
                    filter="blur(60px)"
                    borderRadius="full"
                    zIndex={-11}
                  />
                </Box>
              </Box>

              {/* Badge */}
              <Flex
                position="absolute"
                bottom="2.5rem"
                right="-1.25rem"
                bg="white"
                rounded="full"
                w="6rem"
                h="6rem"
                border="4px solid"
                borderColor="astral.cream"
                boxShadow="lg"
                align="center"
                justify="center"
                zIndex={20}
                className="animate-float"
                textAlign="center"
              >
                <Box>
                  <Text fontWeight="bold" fontSize="xl" color="astral.orange">
                    10+
                  </Text>
                  <Text fontSize="10px" textTransform="uppercase" letterSpacing="wider">
                    Years Exp
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
