import React, { useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product"; // Zustand store

const ShopSection = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts(); // Fetch products when component mounts
  }, []);

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
    <section id="shop" style={{ padding: "6rem 0", backgroundColor: "#ffffff" }}>
      <Box maxW="7xl" mx="auto" px="4">
        <Box textAlign="center" maxW="3xl" mx="auto" mb="16">
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontFamily="serif" fontWeight="bold" mb="4">
            Celestial Shop
          </Text>
          <Box w="16" h="1" bg="#FF9A8B" mx="auto" mb="6" borderRadius="full" />
          <Text color="gray.500">
            Explore our curated collection of astrological tools, crystals, and spiritual items to enhance your cosmic journey.
          </Text>
        </Box>

        <Stack
          direction={{ base: "column", sm: "row", md: "row" }}
          spacing="8"
          justify="center"
          wrap="wrap"
        >
          {products.map((product, index) => {
            const randomRating = Math.floor(Math.random() * 3) + 3; // 3 to 5
            const randomReviews = Math.floor(Math.random() * 11); // 0 to 10

            return (
              <Box
                key={index}
                className="section-fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
                borderWidth="1px"
                borderColor="#FFDAB9"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{
                  borderColor: "#FFD700",
                  boxShadow: "lg",
                }}
                maxW="sm"
                w="full"
              >
                <Box position="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    objectFit="cover"
                    w="100%"
                    h="200px"
                    transition="transform 0.5s"
                  />
                  <Box
                    position="absolute"
                    top="3"
                    right="3"
                    bg="white"
                    rounded="full"
                    p="2"
                    shadow="md"
                    opacity="0"
                    _hover={{ opacity: 1 }}
                    transition="opacity 0.3s"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-astral-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Box>
                </Box>

                <Box p="4">
                  <Text fontSize="lg" fontWeight="medium" isTruncated mb="2">
                    {product.name}
                  </Text>
                  <Stack direction="row" justify="space-between" align="center" mb="4">
                    <Text fontWeight="bold" color="#FF9A8B">
                      {product.price}
                    </Text>
                    <Stack direction="row" align="center">
                      <Stack direction="row" spacing="1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            boxSize={4}
                            color={i < randomRating ? "#D4AF37" : "gray.300"}
                          />
                        ))}
                      </Stack>
                      <Text fontSize="sm" color="gray.500">
                        ({randomReviews})
                      </Text>
                    </Stack>
                  </Stack>
                  <Button
                    variant="outline"
                    w="full"
                    borderColor="#FF9A8B"
                    color="#FF9A8B"
                    _hover={{
                      backgroundColor: "#FF9A8B",
                      color: "white",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Stack>

        <Box textAlign="center" className="section-fade-in" mt="12">
          <Button
            bg="#FF9A8B"
            _hover={{
              backgroundColor: "#FF9A8B",
              opacity: 0.9,
            }}
            color="white"
            rounded="full"
            px="8"
            py="3"
          >
            Visit Full Shop
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default ShopSection;
