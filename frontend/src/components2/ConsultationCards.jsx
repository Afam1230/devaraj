
import { useRef } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Button, 
  Icon, 
  Flex,
  Tag,
  HStack
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Video, User, Phone } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const ConsultationCard = ({ title, description, price, type, availability, duration, popular, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const getIcon = () => {
    switch(type.toLowerCase()) {
      case 'in-person':
        return MapPin;
      case 'video':
        return Video;
      case 'phone':
        return Phone;
      default:
        return User;
    }
  };
  
  return (
    <MotionBox
      ref={ref}
      bg="rgba(30, 30, 60, 0.5)"
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      border="1px solid"
      borderColor={popular ? "purple.500" : "purple.800"}
      boxShadow={popular ? "0 0 20px rgba(114, 49, 198, 0.2)" : "none"}
      _hover={{ 
        boxShadow: "0 10px 30px rgba(114, 49, 198, 0.3)",
        transform: "translateY(-5px)" 
      }}
      transition="all 0.3s ease"
    >
      {/* Top colorful strip */}
      <Box 
        h="8px" 
        bgGradient={popular ? 
          "linear(to-r, purple.500, indigo.600)" : 
          "linear(to-r, purple.700, purple.900)"
        } 
      />
      
      {popular && (
        <Box 
          position="absolute" 
          top="15px" 
          right="-25px" 
          bg="purple.500" 
          color="white" 
          py="2px" 
          px="30px" 
          fontSize="xs" 
          fontWeight="bold"
          transform="rotate(45deg)"
          boxShadow="sm"
          letterSpacing="wider"
        >
          POPULAR
        </Box>
      )}
      
      <Box p={6}>
        <Flex align="center" justify="space-between" mb={4}>
          <HStack spacing={2}>
            <Icon as={getIcon()} color="purple.300" />
            <Text color="purple.300" fontSize="sm">{type}</Text>
          </HStack>
          
          <Tag 
            size="sm"
            colorScheme={
              availability === 'Limited' ? "orange" :
              availability === 'Available' ? "green" : "red"
            }
          >
            {availability}
          </Tag>
        </Flex>
        
        <MotionHeading 
          as="h3" 
          size="md" 
          mb={2} 
          color="white"
          fontFamily="heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 + 0.1 * index }}
        >
          {title}
        </MotionHeading>
        
        <MotionText 
          color="gray.300" 
          fontSize="sm" 
          mb={4}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + 0.1 * index }}
        >
          {description}
        </MotionText>
        
        <MotionFlex 
          alignItems="center" 
          mb={5}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + 0.1 * index }}
        >
          <Icon as={Clock} color="purple.300" w={4} h={4} mr={2} />
          <Text color="purple.200" fontSize="sm">{duration} minutes</Text>
        </MotionFlex>
        
        <MotionFlex
          justify="space-between"
          align="center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + 0.1 * index }}
        >
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="white">${price}</Text>
            <Text fontSize="xs" color="gray.400">per session</Text>
          </Box>
          
          <MotionButton
            colorScheme="purple"
            size="md"
            borderRadius="full"
            px={6}
            bgGradient={popular ? "linear(to-r, purple.500, indigo.600)" : ""}
            _hover={{
              bgGradient: popular ? "linear(to-r, purple.400, indigo.500)" : "",
              bg: popular ? "" : "purple.600"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </MotionButton>
        </MotionFlex>
      </Box>
    </MotionBox>
  );
};

const ConsultationCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const consultations = [
    {
      title: "Destiny Path Reading",
      description: "One-on-one session to explore your unique spiritual path and life purpose.",
      price: 120,
      type: "Video",
      availability: "Available",
      duration: 60,
      popular: true
    },
    {
      title: "Spiritual Breakthrough",
      description: "Intensive session to overcome blocks and align with your highest potential.",
      price: 150,
      type: "In-person",
      availability: "Limited",
      duration: 90,
      popular: false
    },
    {
      title: "Quick Guidance",
      description: "Focused consultation for specific questions and immediate guidance.",
      price: 75,
      type: "Phone",
      availability: "Available",
      duration: 30,
      popular: false
    },
    {
      title: "Couples Alignment",
      description: "Joint session for partners to harmonize relationship dynamics and energy.",
      price: 180,
      type: "Video",
      availability: "Available",
      duration: 75,
      popular: false
    }
  ];

  return (
    <Box bg="gray.900" py={16} id="consultations">
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
            CONSULTATIONS
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
            Book Your Transformative Session
          </MotionHeading>

          <MotionText
            color="gray.300"
            maxW="800px"
            mx="auto"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the consultation format that works best for you. All sessions include
            personalized guidance and practical tools for spiritual growth.
          </MotionText>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {consultations.map((consultation, index) => (
            <ConsultationCard
              key={index}
              title={consultation.title}
              description={consultation.description}
              price={consultation.price}
              type={consultation.type}
              availability={consultation.availability}
              duration={consultation.duration}
              popular={consultation.popular}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ConsultationCards;
