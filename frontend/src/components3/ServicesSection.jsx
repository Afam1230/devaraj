import React, { useEffect } from "react";
import { Button, Box, Text, Stack, useBreakpointValue } from "@chakra-ui/react";
import { StarIcon, CalendarIcon, MoonIcon } from "@chakra-ui/icons";
import { GiCompass } from "react-icons/gi";

const services = [
  {
    icon: StarIcon,
    title: "Birth Chart Analysis",
    description:
      "Discover the cosmic blueprint of your life through a detailed birth chart reading revealing your strengths, challenges, and life purpose.",
  },
  {
    icon: GiCompass,
    title: "Planetary Transits",
    description:
      "Navigate life's changes with clarity by understanding how current planetary movements affect your personal energetic field.",
  },
  {
    icon: CalendarIcon,
    title: "Astrological Timing",
    description:
      "Choose the most auspicious moments for important life decisions and events using ancient timing techniques.",
  },
  {
    icon: MoonIcon,
    title: "Relationship Compatibility",
    description:
      "Understand the dynamics of your relationships through synastry charts that reveal karmic connections and growth opportunities.",
  },
];

const ServicesSection = () => {
  // Animation observer
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

  return (
    <section id="services" style={{ padding: "6rem 0", backgroundColor: "#ffffff" }}>
      <Box maxW="7xl" mx="auto" px="4">
        <Box textAlign="center" maxW="3xl" mx="auto" mb="16">
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontFamily="serif" fontWeight="bold" mb="4">
            Celestial Services
          </Text>
          <Box w="16" h="1" bg="#FF9A8B" mx="auto" mb="6" borderRadius="full"></Box>
          <Text color="gray.500">
            Discover how the ancient wisdom of the stars can illuminate your path and transform your life through our specialized astrological services.
          </Text>
        </Box>

        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          spacing="6"
          justify="center"
          wrap="wrap"
        >
          {services.map((service, index) => (
            <Box
              key={index}
              className="section-fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
              borderWidth="1px"
              borderColor="#FFDAB9"
              borderRadius="lg"
              overflow="hidden"
              _hover={{
                borderColor: "#FFD700",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box
                p="6"
                bg="#FFDAB9"
                borderRadius="full"
                w="12"
                h="12"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="4"
                _hover={{
                  bg: "#FF9A8B",
                }}
              >
                <service.icon color="#FF9A8B" boxSize="6" />
              </Box>
              <Box p="6">
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  {service.title}
                </Text>
                <Text color="gray.500" mb="4">
                  {service.description}
                </Text>
                <Button variant="ghost" colorScheme="orange" _hover={{ color: "#FF9A8B" }}>
                  Learn more &rarr;
                </Button>
              </Box>
            </Box>
          ))}
        </Stack>

        <Box textAlign="center" className="section-fade-in" mt="8">
          <Button
            bg="#FF9A8B"
            _hover={{ bg: "#FF9A8B", opacity: 0.9 }}
            color="white"
            rounded="full"
            px="8"
            py="3"
          >
            View All Services
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default ServicesSection;
