import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Clock, Star } from "lucide-react";

const consultations = [
  {
    title: "Cosmic Discovery",
    duration: "30 min",
    price: "$75",
    description:
      "A brief introduction to your astrological profile, perfect for first-time clients seeking quick insights.",
    features: [
      "Birth Chart Overview",
      "Current Transit Analysis",
      "One Key Question Answered",
    ],
    popular: false,
  },
  {
    title: "Celestial Guidance",
    duration: "60 min",
    price: "$150",
    description:
      "Our most popular comprehensive reading that explores your cosmic blueprint in detail.",
    features: [
      "Complete Birth Chart Analysis",
      "Yearly Forecast",
      "Three Questions Explored",
      "Recorded Session",
      "Follow-up Email",
    ],
    popular: true,
  },
  {
    title: "Astral Mastery",
    duration: "90 min",
    price: "$225",
    description:
      "An in-depth cosmic exploration for those seeking profound understanding and transformation.",
    features: [
      "Advanced Chart Techniques",
      "Past Life Insights",
      "Career & Relationship Guidance",
      "12-Month Personalized Timeline",
      "Recorded Session",
      "Two Follow-up Emails",
    ],
    popular: false,
  },
];

const ConsultationSection = () => {
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
    <Box as="section" id="consultations" py={24} bg="astral.cream" position="relative" overflow="hidden">
      {/* Background decorations */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w="33%"
        h="33%"
        bg="astral.orangeAlpha.50"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        w="50%"
        h="50%"
        bg="astral.goldAlpha.50"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
      />

      <Container maxW="100%" position="relative" zIndex={1}>
        <Box textAlign="center" maxW="3xl" mx="auto" mb={16} className="section-fade-in">
          <Heading fontSize={{ base: "2xl", md: "4xl", xl:'5xl' }} fontFamily="serif" fontWeight="bold" mb={4}>
            Personal Consultations
          </Heading>
          <Box w={16} h={1} bg="astral.orange" mx="auto" mb={6} borderRadius="full" />
          <Text color="gray.600" fontSize={{ base: "xl", md: "2xl"}} >
            Discover clarity and guidance through personalized astrological readings tailored to your unique cosmic blueprint.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
          {consultations.map((consultation, index) => (
            <Box
              key={index}
              className="section-fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
              position="relative"
              mt={consultation.popular ? { lg: "-1rem" } : "0"}
              mb={consultation.popular ? { lg: "1rem" } : "0"}
            >
              <Box
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                h="full"
                borderWidth="1px"
                borderColor={consultation.popular ? "astral.orange" : "astral.peach"}
                _hover={{
                  boxShadow: "xl",
                  borderColor: consultation.popular ? "astral.orange" : "astral.gold",
                }}
                transition="all 0.3s"
                position="relative"
                p={6}
              >
                {consultation.popular && (
                  <Tag
                    position="absolute"
                    top={5}
                    right={5}
                    bg="astral.orange"
                    color="white"
                    fontSize="xs"
                    fontWeight="semibold"
                    borderRadius="full"
                    px={3}
                    py={1}
                    zIndex={1}
                  >
                    Most Popular
                  </Tag>
                )}

                <VStack align="start" spacing={4}>
                  <Box>
                    <Heading fontSize={{ base: "xl", md: "2xl", xl:'4xl' }}  fontFamily="serif">
                      {consultation.title}
                    </Heading>
                    <Flex align="center" mt={1} color="gray.500" fontSize="sm">
                      <Icon as={Clock} boxSize={{base:4, md:6, xl:10}} mr={1} />
                      {consultation.duration} session
                    </Flex>
                  </Box>

                  <Box>
                    <Text fontSize="3xl" fontWeight="bold">
                      {consultation.price}
                      <Text as="span" fontSize="md" color="gray.500"> / session</Text>
                    </Text>
                  </Box>

                  <Text color="gray.600" fontSize={{ base: "md", md: "lg", xl:'xl' }} >{consultation.description}</Text>

                  <Stack spacing={2}>
                    {consultation.features.map((feature, idx) => (
                      <Flex key={idx} align="center">
                        <Icon as={Star} boxSize={{base:4, md:"6", xl:'10'}} color="astral.gold" mr={2} />
                        <Text fontSize={{ base: "md", md: "lg", xl:'xl' }} >{feature}</Text>
                      </Flex>
                    ))}
                  </Stack>
                </VStack>

                <Button
                  mt={6}
                  w="full"
                  bg={consultation.popular ? "astral.orange" : "astral.gold"}
                  color="white"
                  _hover={{
                    bg: consultation.popular ? "astral.orangeAlpha.800" : "astral.goldAlpha.800",
                  }}
                  rounded="full"
                  fontSize={{xl:20, base:10}}
                >
                  Book Now
                </Button>

                {consultation.popular && (
                  <Box
                    position="absolute"
                    bottom={-1}
                    right={-1}
                    w="8rem"
                    h="8rem"
                    bg="astral.orangeAlpha.50"
                    borderRadius="full"
                    filter="blur(60px)"
                    zIndex={0}
                  />
                )}
              </Box>
            </Box>
          ))}
        </Grid>

        {/* CTA */}
        <Box mt={12} textAlign="center" className="section-fade-in">
          <Text color="gray.600" mb={4}>
            Not sure which consultation is right for you?
          </Text>
          <Button
            variant="outline"
            borderColor="astral.gold"
            color="astral.gold"
            _hover={{ bg: "astral.goldAlpha.50" }}
            rounded="full"
          >
            Schedule a Free 15-Minute Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ConsultationSection;
