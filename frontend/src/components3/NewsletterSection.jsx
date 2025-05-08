import React, { useState } from "react";
import { Button, Input, useToast, Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const NewsletterSection = () => {
  const  toast  = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our cosmic newsletter.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section style={{ background: "linear-gradient(to right,rgb(250, 122, 30) 50%, #FFD700 80%)", padding: "4rem 0", position: "relative", overflow: "hidden" }}>
      {/* Background stars */}
      {[...Array(6)].map((_, i) => (
        <StarIcon
          key={i}
          boxSize={`${Math.random() * 20 + 15}px`}
          color="whiteAlpha.800"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse-gentle ${Math.random() * 5}s infinite`,
          }}
        />
      ))}

      <Box className="container" maxW="4xl" mx="auto" textAlign="center" color="white">
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontFamily="serif" fontWeight="bold" mb={4}>
          Join Our Celestial Newsletter
        </Text>
        <Text color="whiteAlpha.800" mb={8} maxW="2xl" mx="auto">
          Subscribe to receive monthly astrological forecasts, cosmic event notifications, and exclusive spiritual guidance directly in your inbox.
        </Text>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "600px", margin: "0 auto" }}>
          <Box display="flex" flexDirection={{ base: "column", sm: "row" }} gap={3}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              size="lg"
              bg="whiteAlpha.700"
              borderColor="whiteAlpha.300"
              _placeholder={{ color: "white" }}
              _focus={{ borderColor: "#FF9A8B" }}
              color="white"
              h="12"
            />
            <Button
              type="submit"
              h="12"
              px={6}
              bg="#FF9A8B"
              color="white"
              _hover={{ bg: "#FF9A8B", opacity: 0.9 }}
              isLoading={isSubmitting}
              loadingText="Subscribing..."
            >
              Subscribe
            </Button>
          </Box>
        </form>

        <Text mt={4} fontSize="sm" color="whiteAlpha.700">
          We respect your privacy. Unsubscribe at any time.
        </Text>
      </Box>
    </section>
  );
};

export default NewsletterSection;
