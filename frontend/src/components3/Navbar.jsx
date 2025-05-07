import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  useColorModeValue,
  Text,
  Collapse,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { keyframes } from '@emotion/react';


const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Horoscope", href: "#horoscope" },
  { name: "Shop", href: "#shop" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(1.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = useColorModeValue("whiteAlpha.90", "gray.900");
  const linkHoverColor = "orange.400";

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={999}
      bg={scrolled ? bgColor : "transparent"}
      boxShadow={scrolled ? "md" : "none"}
      backdropFilter={scrolled ? "blur(8px)" : "none"}
      transition="all 0.3s ease-in-out"
      py={scrolled ? 2 : 4}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={4}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <HStack spacing={3}>
          <Flex
            position="relative"
            w="2rem"
            h="2rem"
            align="center"
            justify="center"
          >
            <Box
              position="absolute"
              inset={0}
              bg="orange.300"
              rounded="full"
              animation={`${pulse} 2s infinite`}
              zIndex={0}
            />
            <Flex
              position="absolute"
              inset="2px"
              bg="white"
              rounded="full"
              align="center"
              justify="center"
              zIndex={1}
            >
              <Text fontWeight="bold" color="yellow.500" fontSize="lg">
                A
              </Text>
            </Flex>
          </Flex>
          <Text fontSize="xl" fontWeight="bold" fontFamily="serif">
            Astrodevaraj
          </Text>
        </HStack>

        {/* Desktop Nav */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: linkHoverColor }}
            >
              {link.name}
            </Link>
          ))}
          <Button colorScheme="orange">Book Now</Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "inline-flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={bgColor}
          pb={6}
          px={4}
          display={{ md: "none" }}
          backdropFilter="blur(6px)"
        >
          <Stack spacing={4} mt={4}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                fontWeight="medium"
                textAlign="center"
                py={2}
                _hover={{ color: linkHoverColor }}
                onClick={onToggle}
              >
                {link.name}
              </Link>
            ))}
            <Button colorScheme="orange" width="full">
              Book Now
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
