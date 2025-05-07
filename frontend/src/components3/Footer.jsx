import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FaFacebookF, label: "facebook" },
    { icon: FaTwitter, label: "twitter" },
    { icon: FaInstagram, label: "instagram" },
    { icon: FaYoutube, label: "youtube" },
  ];

  const quickLinks = ["Home", "Services", "About", "Horoscope", "Shop", "Blog", "Contact"];
  const services = [
    "Birth Chart Analysis",
    "Compatibility Reading",
    "Career Guidance",
    "Transit Predictions",
    "Yearly Forecast",
    "Remedial Measures",
  ];

  return (
    <Box as="footer" bg="white" pt={16} pb={8} borderTop="1px" borderColor="astral.peach.300" position="relative" zIndex={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={12}>
          <Box>
            <Flex align="center" gap={2} mb={4}>
              <Box position="relative" w={8} h={8}>
                <Box position="absolute" inset={0} bg="astral.orange" rounded="full" />
                <Flex
                  position="absolute"
                  inset={1}
                  bg="white"
                  rounded="full"
                  align="center"
                  justify="center"
                >
                  <Text color="astral.gold" fontWeight="bold" fontSize="xl">
                    A
                  </Text>
                </Flex>
              </Box>
              <Text fontSize="xl" fontWeight="bold" fontFamily="serif">
                Astrodevaraj
              </Text>
            </Flex>
            <Text color="muted.500" mb={4}>
              Illuminating paths through ancient wisdom and cosmic guidance. Let the stars guide your journey to self-discovery and fulfillment.
            </Text>
            <HStack spacing={3}>
              {socialIcons.map(({ icon, label }) => (
                <Link
                  key={label}
                  href={`#${label}`}
                  isExternal
                  rounded="full"
                  bg="astral.peach.100"
                  _hover={{ bg: "astral.orange.100" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w={9}
                  h={9}
                >
                  <Icon as={icon} color="astral.orange" boxSize={4} />
                  <Text srOnly>{label}</Text>
                </Link>
              ))}
            </HStack>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="medium" fontFamily="serif" mb={4}>
              Quick Links
            </Text>
            <VStack align="start" spacing={3}>
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  color="muted.500"
                  _hover={{ color: "astral.orange" }}
                >
                  {link}
                </Link>
              ))}
            </VStack>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="medium" fontFamily="serif" mb={4}>
              Services
            </Text>
            <VStack align="start" spacing={3}>
              {services.map((service) => (
                <Link
                  key={service}
                  href="#services"
                  color="muted.500"
                  _hover={{ color: "astral.orange" }}
                >
                  {service}
                </Link>
              ))}
            </VStack>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="medium" fontFamily="serif" mb={4}>
              Working Hours
            </Text>
            <VStack align="start" spacing={3} color="muted.500">
              <Flex w="full" justify="space-between">
                <Text>Monday - Friday:</Text>
                <Text>9:00 AM - 8:00 PM</Text>
              </Flex>
              <Flex w="full" justify="space-between">
                <Text>Saturday:</Text>
                <Text>10:00 AM - 6:00 PM</Text>
              </Flex>
              <Flex w="full" justify="space-between">
                <Text>Sunday:</Text>
                <Text>Closed</Text>
              </Flex>
            </VStack>
            <Button
              mt={6}
              w="full"
              bg="astral.orange"
              color="white"
              _hover={{ bg: "astral.orange.500" }}
            >
              Book Appointment
            </Button>
          </Box>
        </SimpleGrid>

        <Divider borderColor="astral.peach.300" />
        <Flex
          pt={6}
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          fontSize="sm"
          color="muted.500"
        >
          <Text mb={{ base: 4, sm: 0 }}>© {currentYear} Astrodevaraj. All rights reserved.</Text>
          <HStack spacing={4} wrap="wrap">
            <Link href="#privacy" _hover={{ color: "astral.orange" }}>
              Privacy Policy
            </Link>
            <Link href="#terms" _hover={{ color: "astral.orange" }}>
              Terms of Service
            </Link>
            <Link href="#sitemap" _hover={{ color: "astral.orange" }}>
              Sitemap
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;