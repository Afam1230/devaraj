
import { useRef, useState } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Input, 
  Button, 
  Flex, 
  FormControl,
  useToast,
  Icon,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "You're now subscribed to our cosmic updates.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Box 
      bg="gray.900" 
      py={16} 
      position="relative" 
      borderTop="1px solid" 
      borderColor="gray.800"
      overflow="hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <Box 
        position="absolute" 
        left="5%" 
        top="20%" 
        width="200px" 
        height="200px" 
        borderRadius="full" 
        bg="purple.900" 
        filter="blur(80px)" 
        opacity={0.4} 
      />
      
      <Box 
        position="absolute" 
        right="5%" 
        bottom="20%" 
        width="200px" 
        height="200px" 
        borderRadius="full" 
        bg="indigo.900" 
        filter="blur(80px)" 
        opacity={0.4} 
      />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <MotionBox 
          textAlign="center" 
          mb={8}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <MotionFlex 
            justify="center" 
            align="center" 
            mb={3}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Icon as={Star} color="purple.400" mr={2} />
            <Text color="purple.400" fontWeight="bold">COSMIC UPDATES</Text>
            <Icon as={Star} color="purple.400" ml={2} />
          </MotionFlex>
          
          <MotionHeading 
            as="h3" 
            size="xl" 
            color="white" 
            mb={4}
            fontFamily="heading"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Subscribe to Celestial Insights
          </MotionHeading>
          
          <MotionText 
            color="gray.300" 
            maxW="700px" 
            mx="auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Join my newsletter to receive monthly astrological forecasts, spiritual guidance, 
            exclusive offers, and early access to new readings and products.
          </MotionText>
        </MotionBox>
        
        <MotionBox 
          as="form" 
          onSubmit={handleSubmit}
          maxW="600px" 
          mx="auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Flex 
            direction={{ base: "column", md: "row" }}
            gap={4}
          >
            <FormControl flex="1">
              <InputGroup size="lg">
                <Input 
                  placeholder="Enter your email address" 
                  bg="rgba(30, 30, 60, 0.6)"
                  border="1px solid"
                  borderColor="purple.800"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  _hover={{ borderColor: "purple.600" }}
                  _focus={{ 
                    borderColor: "purple.400",
                    boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  borderRadius="full"
                  fontSize="md"
                  height="56px"
                />
              </InputGroup>
            </FormControl>
            
            <MotionButton 
              type="submit"
              colorScheme="purple" 
              size="lg"
              isLoading={isSubmitting}
              loadingText="Subscribing..."
              px={8}
              bgGradient="linear(to-r, purple.500, indigo.600)"
              _hover={{ bgGradient: "linear(to-r, purple.400, indigo.500)" }}
              boxShadow="0 4px 15px rgba(114, 49, 198, 0.3)"
              height="56px"
              borderRadius="full"
              rightIcon={<ArrowRight size={16} />}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </MotionButton>
          </Flex>
          
          <MotionText 
            fontSize="sm" 
            color="gray.400" 
            mt={3} 
            textAlign="center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            By subscribing, you agree to receive promotional emails. You can unsubscribe at any time.
          </MotionText>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Newsletter;
