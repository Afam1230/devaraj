import React, { useState, useEffect } from "react";
import { Box, Button, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo1 from "../images/logo1.png"

const heroContents = [
  {
    title: "Discover Your Cosmic Path",
    subtitle: "Unveil the secrets written in the stars",
    description:
      "Personalized astrological guidance to illuminate your journey and reveal your true potential.",
  },
  {
    title: "Align With Celestial Forces",
    subtitle: "Harness the power of planetary movements",
    description:
      "Understand how cosmic energies shape your destiny and learn to flow with their rhythms.",
  },
  {
    title: "Navigate Life's Crossroads",
    subtitle: "Let the stars guide your decisions",
    description:
      "Astrological insights to help you make confident choices during life's pivotal moments.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="hero"
      position="relative"
      minH="100vh"
      bg="astral.cream"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      className="bg-stars" // Custom class for star background if applicable
    >
      {/* Animated Circles */}
      <Box position="absolute" inset={0}>
        <Box
          position="absolute"
          top="25%"
          left="25%"
          w="8rem"
          h="8rem"
          bg="astral.peach"
          borderRadius="full"
          opacity={0.6}
          filter="blur(50px)"
          className="animate-float"
        />
        <Box
          position="absolute"
          bottom="33%"
          right="25%"
          w="10rem"
          h="10rem"
          bg="astral.orange"
          opacity={0.3}
          borderRadius="full"
          filter="blur(50px)"
          className="animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Box
          position="absolute"
          top="50%"
          right="33%"
          w="6rem"
          h="6rem"
          bg="astral.gold"
          opacity={0.4}
          borderRadius="full"
          filter="blur(50px)"
          className="animate-float"
          style={{ animationDelay: "2s" }}
        />
      </Box>

      {/* Star Elements */}
      {[...Array(12)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          className="animate-pulse-gentle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Star color="#D4AF37" fill="#D4AF37" opacity={0.6} size={12} />
        </Box>
      ))}

      {/* Content */}
      <Box maxW="100%" textAlign="center" px={4} pt={24} zIndex={10}>
        {/* Animated Symbol */}
        <Box position="relative" w={{md:"50vw", base:"80vw",}} h={{base:"20rem", md:"30rem"}} mx="auto" mb={8}>
  <Box
    position="absolute"
    inset={0}
    border="3px solid"
    borderColor="astral.gold"
    borderRadius="full"
    className="animate-spin-slow"
  />
  <Box
    position="absolute"
    inset="20px"
    border="4px solid"
    borderColor="astral.orange"
    borderRadius="full"
    className="animate-spin-slow"
    style={{ animationDirection: "reverse" }}
  />
  <Box
    position="absolute"
    inset="40px"
    border="3px solid"
    borderColor="astral.gold"
    borderRadius="full"
    className="animate-spin-slow"
    style={{ animationDuration: "15s" }}
  />
  <Flex position="absolute" inset={0} align="center" justify="center">
    <img src={logo1} style={{ maxWidth: "60%", maxHeight: "60%" }} />
  </Flex>
</Box>



        <Box position="relative" minH="240px">
          {heroContents.map((content, index) => (
            <Box
              key={index}
              transition="all 1s"
              opacity={currentIndex === index ? 1 : 0}
              transform={
                currentIndex === index ? "translateY(0)" : "translateY(1rem)"
              }
              position={currentIndex === index ? "relative" : "absolute"}
            >
              <Text
                color="astral.orange"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="medium"
                letterSpacing="wide"
              >
                {content.subtitle}
              </Text>
              <Heading
                fontSize={["3xl", "5xl", "6xl"]}
                fontFamily="serif"
                fontWeight="bold"
                mt={3}
                mb={6}
              >
                {content.title}
              </Heading>
              <Text
                fontSize={["lg", "xl"]}
                color="gray.600"
                maxW="xl"
                mx="auto"
                mb={8}
              >
                {content.description}
              </Text>
            </Box>
          ))}
        </Box>

        {/* Buttons */}
        <Flex
          direction={["column", "row"]}
          justify="center"
          mt={6}
          gap={4}
        >
          <Button
            bg="astral.orange"
            _hover={{ bg: "astral.orangeAlpha.800" }}
            color="white"
            borderRadius="full"
            px={8}
            onClick={() => { navigate("/book") }}
          >
            Get Reading
          </Button>
          <Button
            variant="outline"
            borderColor="astral.gold"
            color="astral.gold"
            _hover={{ bg: "astral.goldAlpha.100" }}
            borderRadius="full"
            px={8}
            onClick={() => { navigate("/about") }}

          >
            Learn More
          </Button>
        </Flex>
      </Box>

      {/* Bottom Wave SVG */}
      <Box position="absolute" bottom={-1} left={0} right={0}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,112C120,128,240,160,360,186.7C480,213,600,235,720,208C840,181,960,107,1080,96C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default HeroSection;
