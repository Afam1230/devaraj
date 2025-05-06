
import { useRef } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex, 
  Icon, 
  useBreakpointValue 
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Star, Moon, Sun, CloudMoon, Telescope, MapPin, GraduationCap } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const ServiceCard = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <MotionBox
      ref={ref}
      bg="rgba(30, 30, 60, 0.5)"
      p={6}
      borderRadius="xl"
      boxShadow="md"
      border="1px solid"
      borderColor="purple.800"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", borderColor: "purple.500" }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Flex direction="column" align="center" textAlign="center">
        <MotionBox
          bg="purple.900"
          p={3}
          borderRadius="full"
          mb={4}
          boxShadow="0 0 15px rgba(149, 76, 233, 0.5)"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 + index * 0.1 
          }}
        >
          <Icon as={icon} w={6} h={6} color="purple.300" />
        </MotionBox>
        
        <MotionHeading 
          as="h3" 
          size="md" 
          mb={3} 
          color="white"
          fontFamily="heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {title}
        </MotionHeading>
        
        <MotionText 
          color="gray.300"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {description}
        </MotionText>
      </Flex>
    </MotionBox>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  const services = [
    {
      icon: Star,
      title: "Birth Chart Reading",
      description: "Discover your unique cosmic blueprint and understand your inherent strengths, challenges, and life purpose."
    },
    {
      icon: Moon,
      title: "Transit Analysis",
      description: "Navigate upcoming planetary movements and their impact on your personal and professional life."
    },
    {
      icon: Sun,
      title: "Solar Return Reading",
      description: "Annual birthday reading that reveals the themes and energies of your upcoming year."
    },
    {
      icon: Telescope,
      title: "Relationship Compatibility",
      description: "Explore the cosmic connection between you and another person to understand relationship dynamics."
    },
    {
      icon: GraduationCap,
      title: "Spiritual Coaching",
      description: "One-on-one guidance to help you align with your highest self and manifest your desires."
    },
    {
      icon: CloudMoon,
      title: "Dream Analysis",
      description: "Uncover the hidden messages in your dreams with astrological and spiritual interpretation."
    }
  ];

  return (
    <Box bg="gray.900" py={16} id="services">
      <Container maxW="container.xl" ref={containerRef}>
        <Box textAlign="center" mb={12}>
          <MotionText 
            color="purple.400" 
            fontWeight="bold" 
            mb={3}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            MY OFFERINGS
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
            Spiritual Services
          </MotionHeading>
          
          <MotionText 
            color="gray.300" 
            maxW="800px" 
            mx="auto"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how the cosmic energies can guide you toward your highest potential.
            Each service is tailored to your unique natal chart and spiritual journey.
          </MotionText>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
