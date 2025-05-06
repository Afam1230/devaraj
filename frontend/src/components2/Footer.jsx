
import { 
    Box, 
    Container, 
    Text, 
    Flex, 
    VStack, 
    HStack, 
    Link, 
    SimpleGrid, 
    Divider, 
    Icon 
  } from "@chakra-ui/react";
  import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
  import { motion } from "framer-motion";
  
  // Motion components
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const MotionText = motion(Text);
  
  const Footer = () => {
    // Animation variants
    const footerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    
    const currentYear = new Date().getFullYear();
    
    return (
      <MotionBox 
        bg="gray.900" 
        color="white" 
        borderTop="1px solid" 
        borderColor="gray.800"
        position="relative"
        overflow="hidden"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background decoration */}
        <Box 
          position="absolute" 
          bottom="-150px" 
          right="-150px" 
          width="300px" 
          height="300px" 
          bg="purple.900" 
          filter="blur(150px)" 
          opacity={0.3} 
        />
        
        <Container maxW="container.xl" py={12} position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={10}>
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={4}>
                <Flex align="center">
                  <Box 
                    boxSize={10} 
                    borderRadius="full" 
                    bg="purple.700" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    mr={2}
                  >
                    <Text fontSize="xl" fontWeight="bold" color="gold.300">AD</Text>
                  </Box>
                  <Box>
                    <Text fontFamily="heading" fontSize="xl" fontWeight="bold" background="linear-gradient(90deg, #e3b5ff 0%, #a87ef0 100%)" backgroundClip="text">
                      AstroDevaraj
                    </Text>
                    <Text fontSize="xs" color="gold.200" mt="-1">Astrology & Life Coaching</Text>
                  </Box>
                </Flex>
                
                <Text color="gray.400" fontSize="sm">
                  Guiding souls through the cosmic wisdom of the stars. Personalized astrological readings
                  and spiritual coaching to help you navigate life's journey with clarity and purpose.
                </Text>
                
                <HStack spacing={4}>
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Youtube, label: "YouTube" }
                  ].map((social, index) => (
                    <Box 
                      key={index}
                      as="a" 
                      href="#" 
                      aria-label={social.label}
                      rounded="full" 
                      w={8} 
                      h={8} 
                      bg="gray.800" 
                      display="flex" 
                      alignItems="center" 
                      justifyContent="center"
                      transition="all 0.3s"
                      _hover={{ bg: "purple.700", transform: "translateY(-3px)" }}
                    >
                      <Icon as={social.icon} boxSize={4} />
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </MotionBox>
            
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold" fontSize="lg" fontFamily="heading">Services</Text>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Natal Chart Reading</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Transit Analysis</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Solar Return Reading</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Relationship Compatibility</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Spiritual Coaching</Link>
              </VStack>
            </MotionBox>
            
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold" fontSize="lg" fontFamily="heading">Quick Links</Text>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Book a Session</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Daily Horoscope</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Shop</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Blog</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Testimonials</Link>
              </VStack>
            </MotionBox>
            
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold" fontSize="lg" fontFamily="heading">Legal</Text>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Privacy Policy</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Terms of Service</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Cookie Policy</Link>
                <Link color="gray.400" _hover={{ color: "purple.300" }}>Disclaimer</Link>
              </VStack>
            </MotionBox>
          </SimpleGrid>
          
          <Divider borderColor="gray.800" my={6} />
          
          <MotionFlex 
            direction={{ base: "column", md: "row" }} 
            justify="space-between" 
            align={{ base: "center", md: "center" }}
            color="gray.500"
            fontSize="sm"
            variants={itemVariants}
          >
            <Text>© {currentYear} AstroDevaraj. All rights reserved.</Text>
            <HStack spacing={4} mt={{ base: 4, md: 0 }}>
              <Link _hover={{ color: "purple.300" }}>Privacy</Link>
              <Link _hover={{ color: "purple.300" }}>Terms</Link>
              <Link _hover={{ color: "purple.300" }}>Contact</Link>
            </HStack>
          </MotionFlex>
        </Container>
      </MotionBox>
    );
  };
  
  export default Footer;
  