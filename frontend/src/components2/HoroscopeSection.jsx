
import { useRef, useState } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex, 
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

const zodiacSigns = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water" }
];

const getElementColor = (element) => {
  switch(element) {
    case "Fire": return { bg: "red.900", text: "red.200", border: "red.700" };
    case "Earth": return { bg: "green.900", text: "green.200", border: "green.700" };
    case "Air": return { bg: "cyan.900", text: "cyan.200", border: "cyan.700" };
    case "Water": return { bg: "blue.900", text: "blue.200", border: "blue.700" };
    default: return { bg: "purple.900", text: "purple.200", border: "purple.700" };
  }
};

const ZodiacCard = ({ sign, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const elementColor = getElementColor(sign.element);
  
  return (
    <MotionBox
      ref={ref}
      bg="rgba(30, 30, 60, 0.5)"
      borderRadius="lg"
      overflow="hidden"
      border="1px solid"
      borderColor="purple.800"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", borderColor: elementColor.border }}
      position="relative"
      cursor="pointer"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 * index }}
    >
      <MotionBox 
        bg={`${elementColor.bg}40`} 
        py={4}
        textAlign="center"
        borderBottom="1px solid"
        borderColor="purple.800"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 + (0.05 * index) }}
      >
        <Text fontSize="4xl" fontFamily="serif" lineHeight="1">
          {sign.symbol}
        </Text>
      </MotionBox>
      
      <MotionBox py={4} px={4} textAlign="center">
        <Heading size="md" fontFamily="heading" color="white" mb={1}>
          {sign.name}
        </Heading>
        <Text fontSize="sm" color="gray.400">
          {sign.dates}
        </Text>
        <Text 
          fontSize="xs" 
          color={elementColor.text} 
          fontWeight="bold" 
          mt={2}
          bg={`${elementColor.bg}60`}
          display="inline-block"
          px={2}
          py={0.5}
          borderRadius="full"
        >
          {sign.element}
        </Text>
      </MotionBox>
      
      {/* Modal for zodiac details */}
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="gray.900" borderColor="purple.700" borderWidth={1}>
          <ModalHeader bgGradient={`linear(to-r, ${elementColor.bg}, purple.900)`} py={4}>
            <Flex align="center" justify="center" direction="column">
              <Text fontSize="5xl" mb={2}>{sign.symbol}</Text>
              <Heading size="lg" fontFamily="heading">{sign.name}</Heading>
              <Text fontSize="sm" color="gray.300">{sign.dates}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={4}>
            <Box mb={4}>
              <Text fontWeight="bold" color={elementColor.text} mb={1}>Element: {sign.element}</Text>
              <Text fontWeight="bold" color="purple.300" mb={3}>
                Ruling Planet: {
                  ["Mercury", "Venus", "Mars", "Moon", "Sun", "Mercury", "Venus", "Pluto", "Jupiter", "Saturn", "Uranus", "Neptune"][zodiacSigns.findIndex(s => s.name === sign.name)]
                }
              </Text>
              
              <Heading size="sm" color="white" mb={2}>Today's Horoscope</Heading>
              <Text color="gray.300" mb={3}>
                The cosmic energies are aligning in your favor today. Focus on personal growth and don't be afraid to take that leap of faith. Your intuition is especially strong - trust it.
              </Text>
              
              <Heading size="sm" color="white" mb={2}>Compatibility</Heading>
              <Text color="gray.300">
                Best matches: {
                  sign.element === "Fire" ? "Air and Fire signs" : 
                  sign.element === "Earth" ? "Water and Earth signs" : 
                  sign.element === "Air" ? "Fire and Air signs" : 
                  "Earth and Water signs"
                }
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button 
              colorScheme="purple" 
              mr={3} 
              onClick={onClose}
              size="sm"
            >
              Close
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              _hover={{ bg: elementColor.bg }}
            >
              Full Reading
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

const HoroscopeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box bg="gray.900" py={16} position="relative">
      {/* Background decoration */}
      <Box 
        position="absolute" 
        top="10%" 
        right="5%" 
        width="300px" 
        height="300px" 
        bgGradient="radial(circle, purple.700, transparent 70%)" 
        filter="blur(60px)" 
        opacity={0.3} 
      />

      <Container maxW="container.xl" position="relative" zIndex={1} ref={ref}>
        <Box textAlign="center" mb={10}>
          <MotionText 
            color="purple.400" 
            fontWeight="bold" 
            mb={3}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            COSMIC GUIDANCE
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
            Daily Horoscope Insights
          </MotionHeading>
          
          <MotionText 
            color="gray.300" 
            maxW="800px" 
            mx="auto"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore your zodiac sign to receive cosmic guidance tailored to your astrological profile.
            Click on your sign to reveal today's personalized horoscope reading.
          </MotionText>
        </Box>
        
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={4}>
          {zodiacSigns.map((sign, index) => (
            <ZodiacCard key={sign.name} sign={sign} index={index} />
          ))}
        </SimpleGrid>
        
        <MotionBox
          textAlign="center"
          mt={10}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            colorScheme="purple"
            size="lg"
            px={8}
            borderRadius="full"
            bgGradient="linear(to-r, purple.500, indigo.600)"
            _hover={{ bgGradient: "linear(to-r, purple.400, indigo.500)" }}
            boxShadow="0 4px 15px rgba(114, 49, 198, 0.4)"
          >
            Get Full Monthly Forecast
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default HoroscopeSection;
