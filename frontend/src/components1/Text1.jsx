import { Box, Text, Heading, VStack, SimpleGrid, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// Custom MotionBox component
const MotionBox = motion(Box);

export default function Text1() {
  return (
    <MotionBox
      bgGradient="linear(to-l, rgb(250, 240, 199), white)"
      color="#8B5E3C"
      px={{ base: 4, md: 10 }}
      py={{ base: 6, md: 16 }}
      fontFamily="'Georgia', serif"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <VStack spacing={8} align="start" maxW="600px" mx="auto">
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="medium"
          fontFamily="'Playfair Display', serif"
        >
          ASTROLOGY OF THE MOON BY JASON HERRING
        </Heading>

        <Text fontSize="md" lineHeight="1.8" color={"#4A4A4A"}>
          <Text as="span" fontSize="4xl" fontWeight="semibold" display="inline" color="#4A4A4A">
            L
          </Text>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur officia deserunt mollit anim id
          est laborum Amet mauris commodo quis imperdiet.
        </Text>

        <Box position="relative" pl={4}>
        </Box>

        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          fontFamily="'Playfair Display', serif"
        >
          FUTURE CAN BE YOURS TODAY!
        </Heading>

        <Text fontSize="md" lineHeight="1.8" color={"#4A4A4A"}>
          Arcu non sodales neque sodales ut etiam sit amet. Semper risus in hendrerit gravida rutrum
          quisque non tellus orci ac placerat vest eu facilisis sed odio morbi quis. Egestas tellus
          rutrum tell.
        </Text>

        <Box>
          <Text fontWeight="bold" color="#2C7A7B">
            Jason H.
          </Text>
          <Text fontSize="xs" color="gray.500">
            AWARD WINNING AUTHOR
          </Text>
        </Box>
      </VStack>
    </MotionBox>
  );
}
