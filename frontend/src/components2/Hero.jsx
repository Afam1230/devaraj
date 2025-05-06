
import { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  Flex, 
  Image, 
  Stack,
  Icon,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const Hero = () => {
  // Dynamic content that rotates
  const [contentIndex, setContentIndex] = useState(0);
  const heroContent = [
    {
      heading: "Discover Your True Potential",
      subtext: "Unlock the secrets written in the stars and transform your destiny",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format"
    },
    {
      heading: "Navigate Life's Journey",
      subtext: "Let the cosmic guidance illuminate your path to success and fulfillment",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format"
    },
    {
      heading: "Align With Your Purpose",
      subtext: "Harness planetary energies to manifest your deepest desires",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&auto=format"
    }
  ];
  
  // Auto-rotate content
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentContent = heroContent[contentIndex];
  const isDesktop = useBreakpointValue({ base: false, md: true });
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <Box position="relative" py={20} overflow="hidden">
      {/* Decorative elements */}
      <Box 
        position="absolute" 
        top="20%" 
        left="5%" 
        width="200px" 
        height="200px" 
        bgGradient="linear(to-r, purple.700, purple.900)" 
        filter="blur(90px)" 
        borderRadius="full" 
        opacity={0.4} 
      />
      
      <Box 
        position="absolute" 
        bottom="10%" 
        right="5%" 
        width="250px" 
        height="250px" 
        bgGradient="linear(to-r, indigo.700, purple.800)" 
        filter="blur(100px)" 
        borderRadius="full" 
        opacity={0.3} 
      />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionFlex 
          direction={{ base: "column", lg: "row" }} 
          align="center"
          justify="space-between"
          gap={10}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <MotionBox flex={1} variants={itemVariants}>
            <MotionBox 
              mb={4} 
              display="inline-flex" 
              alignItems="center"
              px={3}
              py={1}
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(4px)"
              borderRadius="full"
              border="1px solid"
              borderColor="purple.400"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Icon as={Star} color="gold.300" mr={2} />
              <Text color="purple.200" fontWeight="medium">Cosmic Guidance & Life Transformation</Text>
            </MotionBox>
            
            <MotionHeading 
              as="h1" 
              size="2xl" 
              fontWeight="bold" 
              mb={6} 
              fontFamily="heading"
              bgGradient="linear(to-r, purple.200, white)"
              backgroundClip="text"
              key={contentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentContent.heading}
            </MotionHeading>
            
            <MotionText 
              fontSize="xl" 
              color="gray.300" 
              mb={8} 
              maxW="600px"
              key={`text-${contentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentContent.subtext}
            </MotionText>
            
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <MotionButton 
                size="lg" 
                colorScheme="purple" 
                px={8}
                bgGradient="linear(to-r, purple.500, indigo.600)"
                _hover={{ bgGradient: "linear(to-r, purple.400, indigo.500)" }}
                borderRadius="full"
                boxShadow="0 4px 15px rgba(114, 49, 198, 0.4)"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Personal Reading
              </MotionButton>
              
              <MotionButton 
                size="lg" 
                variant="outline" 
                colorScheme="purple" 
                px={8}
                borderRadius="full"
                borderWidth="2px"
                _hover={{ bg: "rgba(114, 49, 198, 0.1)" }}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </MotionButton>
            </Stack>
          </MotionBox>
          
          <MotionBox 
            flex={1} 
            position="relative" 
            variants={itemVariants}
            animate={{ scale: [0.98, 1, 0.98], rotate: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Box
              position="absolute"
              width="300px"
              height="300px"
              borderRadius="full"
              bg="purple.500"
              filter="blur(80px)"
              opacity={0.3}
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
            
            <Box
              key={`image-container-${contentIndex}`}
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.4)"
              w="100%"
              h={{ base: "300px", md: "450px" }}
              borderWidth="3px"
              borderStyle="solid"
              borderColor="purple.800"
              bg="gray.900"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src={currentContent.image}
                alt="Astrology imagery" 
                objectFit="cover"
                w="100%"
                h="100%"
                opacity={0.8}
              />
              
              {/* Decorative symbols overlayed on the image */}
              <Box 
                position="absolute" 
                top="0" 
                left="0" 
                right="0" 
                bottom="0"
                bgGradient="linear(to-t, rgba(30, 30, 60, 0.7), transparent)"
              />
              
              {/* Astrological symbols */}
              {[1, 2, 3, 4, 5].map((i) => (
                <Box 
                  key={i}
                  position="absolute"
                  top={`${Math.random() * 80 + 10}%`}
                  left={`${Math.random() * 80 + 10}%`}
                  transform="translate(-50%, -50%)"
                  color="white"
                  opacity={0.6}
                  fontSize="2xl"
                  as={motion.div}
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"][i % 12]}
                </Box>
              ))}
            </Box>
          </MotionBox>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default Hero;
