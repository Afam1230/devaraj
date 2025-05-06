
import { useState, useEffect } from "react";
import { Box, Container, Heading, Button, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "DISCOVER YOUR BIRTH CHART",
      subtext: "THROUGH THE STARS",
      bg: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1400&h=700')",
    },
    {
      heading: "UNLOCK YOUR DESTINY",
      subtext: "LET THE STARS GUIDE YOU",
      bg: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1400&h=700')",
    },
    {
      heading: "COSMIC GUIDANCE",
      subtext: "FOR YOUR SPIRITUAL JOURNEY",
      bg: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1400&h=700')",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Box
      h={{ base: "60vh", md: "80vh" }}
      bgImage={slides[currentSlide].bg}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      transition="background-image 1s ease-in-out"
    >
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        right="0" 
        bottom="0" 
        bg="rgba(0,0,0,0.4)"
      />
      <Container 
        maxW="container.xl" 
        h="100%" 
        position="relative" 
        zIndex="1"
      >
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          h="100%" 
          textAlign="center"
          px={4}
        >
          <Heading 
            as="h1" 
            size="2xl" 
            color="white" 
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
            mb={4}
            className="animate-fade-in"
            opacity="0"
            animation="fadeIn 1s forwards"
          >
            {slides[currentSlide].heading}
          </Heading>
          <Text 
            color="white" 
            mb={8} 
            fontSize="lg"
            fontWeight="light"
            letterSpacing="3px"
            className="animate-fade-in"
            opacity="0"
            animation="fadeInDelay 1s forwards 0.5s"
          >
            {slides[currentSlide].subtext}
          </Text>
          <Button 
            bg="brand.800" 
            color="white" 
            size="lg" 
            rounded="none"
            px={8}
            _hover={{ bg: "brand.700" }}
            className="animate-fade-in"
            opacity="0"
            animation="fadeInDelay 1s forwards 1s"
          >
            EXPLORE NOW
          </Button>
        </Flex>
      </Container>

      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDelay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
