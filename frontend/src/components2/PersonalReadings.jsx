
import { useRef } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Flex, 
  SimpleGrid, 
  Button, 
  Icon,
  Badge,
  useBreakpointValue
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Clock, Star } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const ReadingCard = ({ title, description, price, duration, featured, benefits, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <MotionBox
      ref={ref}
      position="relative"
      bg={featured ? "rgba(90, 50, 120, 0.3)" : "rgba(30, 30, 60, 0.3)"}
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor={featured ? "purple.500" : "purple.800"}
      transition="all 0.3s"
      boxShadow={featured ? "0 0 20px rgba(114, 49, 198, 0.3)" : "none"}
      _hover={{ boxShadow: "0 10px 30px rgba(114, 49, 198, 0.3)" }}
      height="100%"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      {featured && (
        <MotionBox
          position="absolute"
          top={0}
          right={0}
          bg="purple.500"
          color="white"
          py={1}
          px={4}
          borderBottomLeftRadius="md"
          fontWeight="bold"
          fontSize="sm"
          initial={{ x: 100 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ 
            delay: 0.3 + (0.1 * index),
            type: "spring",
            stiffness: 100
          }}
        >
          Most Popular
        </MotionBox>
      )}
      
      <Box p={6}>
        <MotionHeading 
          as="h3" 
          size="md" 
          color="white" 
          mb={2}
          fontFamily="heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 + (0.1 * index) }}
        >
          {title}
        </MotionHeading>
        
        <MotionText 
          color="gray.300" 
          fontSize="sm" 
          mb={4}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + (0.1 * index) }}
        >
          {description}
        </MotionText>
        
        <MotionFlex 
          align="center" 
          mb={4}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + (0.1 * index) }}
        >
          <Icon as={Clock} color="purple.300" mr={2} />
          <Text color="purple.300" fontSize="sm">
            {duration} minutes
          </Text>
        </MotionFlex>
        
        <Box mb={6}>
          {benefits.map((benefit, idx) => (
            <MotionFlex 
              key={idx} 
              mb={2}
              align="center"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + (0.05 * idx) + (0.1 * index) }}
            >
              <Box color="purple.400" fontSize="0.6rem" mr={2}>●</Box>
              <Text color="gray.400" fontSize="sm">{benefit}</Text>
            </MotionFlex>
          ))}
        </Box>
      </Box>
      
      <Box p={6} pt={0}>
        <MotionFlex 
          justify="space-between" 
          align="center" 
          mb={4}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + (0.1 * index) }}
        >
          <Text color="white" fontSize="2xl" fontWeight="bold">
            ${price}
          </Text>
          <Badge colorScheme={featured ? "purple" : "gray"}>
            {featured ? "Premium" : "Standard"}
          </Badge>
        </MotionFlex>
        
        <MotionButton
          width="100%"
          colorScheme="purple"
          size="lg"
          borderRadius="full"
          bgGradient={featured ? "linear(to-r, purple.500, indigo.600)" : ""}
          _hover={{
            bgGradient: featured ? "linear(to-r, purple.400, indigo.500)" : "",
            bg: featured ? "" : "purple.600"
          }}
          boxShadow={featured ? "0 4px 15px rgba(114, 49, 198, 0.4)" : ""}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 + (0.1 * index) }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Reading
        </MotionButton>
      </Box>
    </MotionBox>
  );
};

const PersonalReadings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  
  const readings = [
    {
      title: "Natal Chart Reading",
      description: "Comprehensive analysis of your birth chart to understand your life path and potential.",
      price: 149,
      duration: 60,
      featured: false,
      benefits: [
        "Complete planetary analysis",
        "Personality insights",
        "Life path guidance",
        "PDF report included"
      ]
    },
    {
      title: "Cosmic Life Alignment",
      description: "In-depth reading with personalized guidance to align your life with cosmic energies.",
      price: 199,
      duration: 90,
      featured: true,
      benefits: [
        "Natal chart analysis",
        "Current transits interpretation",
        "6-month forecast",
        "Personalized action plan",
        "30-day follow-up support"
      ]
    },
    {
      title: "Relationship Synastry",
      description: "Explore the compatibility and dynamics between you and your partner or potential match.",
      price: 179,
      duration: 75,
      featured: false,
      benefits: [
        "Both natal charts analysis",
        "Compatibility assessment",
        "Relationship strengths & challenges",
        "Growth opportunities"
      ]
    }
  ];

  return (
    <Box bg="gray.900" py={16} position="relative" id="readings">
      {/* Background decoration */}
      <Box
        position="absolute"
        left="0"
        bottom="20%"
        width="300px"
        height="300px"
        bg="purple.900"
        filter="blur(150px)"
        opacity={0.4}
        zIndex={0}
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
            PERSONAL READINGS
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
            Transform Your Life With Cosmic Guidance
          </MotionHeading>

          <MotionText
            color="gray.300"
            maxW="800px"
            mx="auto"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Each reading is carefully prepared based on your unique celestial blueprint.
            Choose the option that resonates with your current needs and begin your journey to alignment.
          </MotionText>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={10}>
          {readings.map((reading, index) => (
            <ReadingCard
              key={index}
              title={reading.title}
              description={reading.description}
              price={reading.price}
              duration={reading.duration}
              featured={reading.featured}
              benefits={reading.benefits}
              index={index}
            />
          ))}
        </SimpleGrid>
        
        <MotionBox
          bg="rgba(30, 30, 60, 0.4)"
          borderRadius="xl"
          p={6}
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="purple.700"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Flex align="center">
            <Icon as={Star} color="gold.300" w={6} h={6} mr={3} />
            <Box>
              <Heading size="md" color="white" fontFamily="heading">Need a Custom Reading?</Heading>
              <Text color="gray.300">Contact me for a tailored astrological consultation</Text>
            </Box>
          </Flex>
          
          <Button
            colorScheme="purple"
            variant="outline"
            borderWidth={2}
            size="lg"
            borderRadius="full"
            px={8}
            _hover={{ bg: "rgba(114, 49, 198, 0.2)" }}
          >
            Contact Me
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default PersonalReadings;
