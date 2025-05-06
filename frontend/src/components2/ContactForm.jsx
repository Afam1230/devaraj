
import { useRef, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  VStack,
  useToast,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, User, MessageCircle } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);
const MotionVStack = motion(VStack);

const ContactForm = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@astrodevaraj.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Office Address",
      content: "123 Cosmic Way, Serenity Valley, CA 90210",
    }
  ];

  return (
    <Box bg="gray.900" py={16} id="contact">
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
            GET IN TOUCH
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
            Have Questions? Reach Out
          </MotionHeading>

          <MotionText
            color="gray.300"
            maxW="800px"
            mx="auto"
            mb={10}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm here to assist with any questions about my services or how astrology
            can help guide your path. Fill out the form below for a prompt response.
          </MotionText>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
          <MotionVStack
            spacing={8}
            align="flex-start"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactInfo.map((item, index) => (
              <MotionFlex
                key={index}
                align="center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                <Box
                  p={3}
                  bg="purple.900"
                  borderRadius="lg"
                  mr={4}
                  boxShadow="0 0 15px rgba(149, 76, 233, 0.3)"
                >
                  <Icon as={item.icon} color="purple.300" boxSize={5} />
                </Box>
                <Box>
                  <Text color="white" fontWeight="medium" mb={1}>
                    {item.title}
                  </Text>
                  <Text color="gray.300">{item.content}</Text>
                </Box>
              </MotionFlex>
            ))}

            <MotionBox
              bg="rgba(30, 30, 60, 0.5)"
              p={6}
              borderRadius="xl"
              border="1px solid"
              borderColor="purple.800"
              width="100%"
              mt={4}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Heading as="h3" size="md" color="white" mb={4} fontFamily="heading">
                Office Hours
              </Heading>
              <VStack align="stretch" spacing={3}>
                <Flex justify="space-between">
                  <Text color="gray.300">Monday - Friday</Text>
                  <Text color="white">9:00 AM - 6:00 PM</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.300">Saturday</Text>
                  <Text color="white">10:00 AM - 4:00 PM</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.300">Sunday</Text>
                  <Text color="white">Closed</Text>
                </Flex>
              </VStack>
            </MotionBox>
          </MotionVStack>

          <MotionBox
            gridColumn={{ lg: "2 / span 2" }}
            bg="rgba(30, 30, 60, 0.5)"
            p={8}
            borderRadius="xl"
            border="1px solid"
            borderColor="purple.800"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            as="form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
              <FormControl isRequired>
                <FormLabel color="gray.300">Name</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={User} color="purple.400" />
                  </InputLeftElement>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    bg="rgba(30, 30, 60, 0.6)"
                    border="1px solid"
                    borderColor="purple.800"
                    _focus={{
                      borderColor: "purple.400",
                      boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                    }}
                    _hover={{ borderColor: "purple.600" }}
                    placeholder="Your name"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={Mail} color="purple.400" />
                  </InputLeftElement>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    bg="rgba(30, 30, 60, 0.6)"
                    border="1px solid"
                    borderColor="purple.800"
                    _focus={{
                      borderColor: "purple.400",
                      boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                    }}
                    _hover={{ borderColor: "purple.600" }}
                    placeholder="Your email"
                  />
                </InputGroup>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
              <FormControl>
                <FormLabel color="gray.300">Phone</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={Phone} color="purple.400" />
                  </InputLeftElement>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    bg="rgba(30, 30, 60, 0.6)"
                    border="1px solid"
                    borderColor="purple.800"
                    _focus={{
                      borderColor: "purple.400",
                      boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                    }}
                    _hover={{ borderColor: "purple.600" }}
                    placeholder="Your phone (optional)"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="gray.300">Subject</FormLabel>
                <Select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  bg="rgba(30, 30, 60, 0.6)"
                  border="1px solid"
                  borderColor="purple.800"
                  _focus={{
                    borderColor: "purple.400",
                    boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                  }}
                  _hover={{ borderColor: "purple.600" }}
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Readings">Readings</option>
                  <option value="Consultations">Consultations</option>
                  <option value="Products">Products</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            </SimpleGrid>

            <FormControl isRequired mb={6}>
              <FormLabel color="gray.300">Message</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" height="100%">
                  <Icon as={MessageCircle} color="purple.400" />
                </InputLeftElement>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  bg="rgba(30, 30, 60, 0.6)"
                  border="1px solid"
                  borderColor="purple.800"
                  _focus={{
                    borderColor: "purple.400",
                    boxShadow: "0 0 0 1px var(--chakra-colors-purple-400)"
                  }}
                  _hover={{ borderColor: "purple.600" }}
                  placeholder="Your message"
                  rows={5}
                  pl={10}
                />
              </InputGroup>
            </FormControl>

            <MotionButton
              type="submit"
              colorScheme="purple"
              size="lg"
              width="100%"
              isLoading={isSubmitting}
              loadingText="Sending..."
              bgGradient="linear(to-r, purple.500, indigo.600)"
              _hover={{ bgGradient: "linear(to-r, purple.400, indigo.500)" }}
              boxShadow="0 4px 15px rgba(114, 49, 198, 0.4)"
              borderRadius="full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </MotionButton>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactForm;
