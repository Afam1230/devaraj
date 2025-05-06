
import { useRef } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Flex, 
  Image, 
  Stack, 
  Icon, 
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Heart } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionStack = motion(Stack);
const MotionListItem = motion(ListItem);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box bg="gray.900" py={16} id="about">
      <Container maxW="container.xl" ref={ref}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={10}
        >
          <MotionBox 
            flex={1} 
            position="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Background decoration */}
            <Box
              position="absolute"
              top="-5%"
              left="-5%"
              width="110%"
              height="110%"
              bg="purple.900"
              opacity={0.15}
              borderRadius="2xl"
              zIndex={0}
              transform="rotate(-2deg)"
            />
            
            <MotionImage
              src="https://images.unsplash.com/photo-1535368459444-9bcb6089ef3d?w=500&auto=format"
              alt="Astro Devaraj"
              borderRadius="xl"
              objectFit="cover"
              boxShadow="xl"
              border="3px solid"
              borderColor="purple.700"
              position="relative"
              zIndex={1}
              width="100%"
              maxH="500px"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            {/* Decorative element */}
            <MotionBox
              position="absolute"
              bottom="-20px"
              right="-20px"
              width="100px"
              height="100px"
              borderRadius="full"
              bg="purple.500"
              backgroundImage="url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')"
              border="2px solid"
              borderColor="purple.400"
              boxShadow="0 4px 20px rgba(114, 49, 198, 0.5)"
              zIndex={2}
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.4,
                type: "spring", 
                stiffness: 200 
              }}
            />
            
            {/* Experience badge */}
            <MotionBox
              position="absolute"
              top="-15px"
              right="20px"
              bg="indigo.600"
              color="white"
              px={4}
              py={2}
              borderRadius="lg"
              fontWeight="bold"
              boxShadow="md"
              border="1px solid"
              borderColor="indigo.400"
              zIndex={2}
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              15+ Years Experience
            </MotionBox>
          </MotionBox>
          
          <MotionBox 
            flex={1}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <MotionText 
              color="purple.400" 
              fontWeight="bold" 
              mb={3}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              ABOUT ME
            </MotionText>
            
            <MotionHeading 
              as="h2" 
              size="xl" 
              color="white" 
              mb={5}
              fontFamily="heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Guiding Your Journey Through The Stars
            </MotionHeading>
            
            <MotionText 
              color="gray.300" 
              mb={6}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              I'm Devaraj, a professional astrologer and spiritual life coach with over 15 years of experience helping people find clarity, purpose, and direction in their lives through cosmic wisdom.
            </MotionText>
            
            <MotionText 
              color="gray.300" 
              mb={6}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              My journey into astrology began in my youth when I experienced a profound spiritual awakening that revealed the interconnectedness of the cosmos and human experience. Since then, I've dedicated my life to mastering both Eastern and Western astrological traditions, along with various spiritual practices.
            </MotionText>
            
            <MotionStack 
              spacing={4}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <Heading size="md" color="purple.300" fontFamily="heading">Qualifications</Heading>
              
              <List spacing={3}>
                {[
                  "Master's Degree in Vedic Philosophy",
                  "Certified Life Coach & Spiritual Counselor",
                  "Expert in Western, Vedic & Chinese Astrology",
                  "Published Author on Cosmic Spirituality"
                ].map((item, index) => (
                  <MotionListItem 
                    key={index} 
                    display="flex" 
                    alignItems="center"
                    color="gray.300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                  >
                    <ListIcon as={CheckCircle} color="purple.400" />
                    {item}
                  </MotionListItem>
                ))}
              </List>
            </MotionStack>
            
            <MotionFlex 
              mt={8} 
              gap={6}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              <Flex align="center">
                <Icon as={Award} color="gold.400" w={6} h={6} mr={2} />
                <Box>
                  <Text fontWeight="bold" color="white">1200+</Text>
                  <Text fontSize="sm" color="gray.400">Client Sessions</Text>
                </Box>
              </Flex>
              
              <Flex align="center">
                <Icon as={Heart} color="red.400" w={6} h={6} mr={2} />
                <Box>
                  <Text fontWeight="bold" color="white">98%</Text>
                  <Text fontSize="sm" color="gray.400">Client Satisfaction</Text>
                </Box>
              </Flex>
            </MotionFlex>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;