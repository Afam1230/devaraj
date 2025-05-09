import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
  Link,
} from "@chakra-ui/react";
import { Mail, MapPin, Phone } from "lucide-react";


const ContactSection = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".section-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking request");
      }

      // WhatsApp redirection
      const { name, email, subject, message } = formData;
      const adminPhone = "233556960714"; // Replace with the admin's WhatsApp number (no `+`, no spaces)

      const whatsappMessage = `📬 New Contact Message

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}
📝 Message: ${message}

Please respond to this inquiry.`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappURL = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

      // Redirect user to WhatsApp
      window.location.href = whatsappURL;

      // Reset form and show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll respond to your inquiry soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending request",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: ["Astrotvgh@gmail.com", "Devarishidas@gmail.com"],
      link: ["mailto:Astrotvgh@gmail.com", "mailto:Devarishidas@gmail.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      value: ["+(233) 54 194-0276", "+(233) 55 696-0714"],
      link: ["tel:+233541940276", "tel:+233556960714"]
    },
    {
      icon: MapPin,
      title: "Location",
      value: ["ACCRA, GHANA", "Kaduna, Nigeria"],
      link: "#",
    },
  ];

  return (
    <Box as="section" id="contact" py={{ base: 12, md: 24 }} bg="white" position="relative" overflow="hidden">
      <Box position="absolute" inset={0} bg="gray.100" opacity="0.3" zIndex={0} />
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6 }} position="relative" zIndex={1}>
        <Box textAlign="center" maxW="3xl" mx="auto" mb={{ base: 10, md: 16 }}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={4} fontFamily="serif">
            Connect With The Cosmos
          </Heading>
          <Box w={16} h={1} bg="orange.400" mx="auto" mb={6} borderRadius="full" />
          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            Reach out for personal inquiries, cosmic guidance, or to schedule a consultation.
            Let's explore your celestial journey together.
          </Text>
        </Box>

        <Stack direction={{ base: "column", lg: "row" }} spacing={10}>
          {/* Left Side Form */}
          <Box
            className="section-fade-in"
            bg="gray.50"
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="md"
            border="1px solid"
            borderColor="orange.100"
            flex={1}
          >
            <Heading size="lg" fontFamily="serif" mb={6}>
              Send a Message
            </Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we assist with your cosmic journey?" rows={4} />
                </FormControl>
                <Button colorScheme="orange" type="submit" isLoading={isSubmitting} width="full">
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Right Side Info + Map */}
          <VStack spacing={6} className="section-fade-in" align="stretch" flex={1}>
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
              {contactInfo.map((item, index) => (
                <GridItem
                  key={index}
                  colSpan={index === 2 ? { base: 1, sm: 2 } : 1}
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="orange.100"
                  _hover={{ borderColor: "orange.400" }}
                >
                  <Box display="flex" alignItems="start">
                    <Box
                      h={10}
                      w={10}
                      bg="orange.100"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mr={4}
                    >
                      <Icon as={item.icon} color="orange.400" />
                    </Box>
                    <Box>
                      <Text fontWeight="medium" mb={1}>
                        {item.title}
                      </Text>
                      {item.value.map((val, i) => (
                        <Link
                          key={i}
                          href={item.link[i]}
                          color="gray.600"
                          fontSize="sm"
                          _hover={{ color: "orange.400" }}
                          display="block"
                          mb={i < item.value.length - 1 ? 1 : 0}
                        >
                          {val}
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>

            {/* <Box bg="white" borderRadius="xl" overflow="hidden" boxShadow="md" border="1px solid" borderColor="orange.100" h={{ base: "250px", md: "300px" }}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830921266!2d-74.11976383878909!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1651561581742!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box> */}
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactSection;
