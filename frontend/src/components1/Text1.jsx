import {
  Box,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Custom MotionBox component
const MotionBox = motion(Box);

// Free stock image URL (can be replaced)
const authorImage = "https://scontent.fbni1-1.fna.fbcdn.net/v/t39.30808-6/484943951_1044816530999278_5833868020240667187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pNTEsGf4ixcQ7kNvwHTn9Uy&_nc_oc=AdnfC6W3_CTo6inwsorgMSrOxj3DmEKSUP7n8ML__TLYyJJtb3uKiCc58W4vqI33E3c&_nc_zt=23&_nc_ht=scontent.fbni1-1.fna&_nc_gid=IC1oKuCnYmdk92jtokuu8Q&oh=00_AfLmBtW4Fy_OhUE2wnkJiuwD3xIELZVEIOOw6RTgATbccw&oe=6822DB1B";

export default function Text1() {
  const isXL = useBreakpointValue({ base: false, xl: true });

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
      position="relative"
    >
      {/* Top-right image on small screens */}
      {!isXL && (
        <Image
          src={authorImage}
          alt="Author"
          boxSize="100px"
          borderRadius="full"
          position="absolute"
          bottom="4"
          right="4"
          boxShadow="dark-lg"
        />
      )}

      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={10} alignItems="center">
        <VStack spacing={8} align="start" maxW="100vh">
          <Heading
            fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }}
            fontWeight="medium"
            fontFamily="'Playfair Display', serif"
          >
            ASTROLOGY OF THE MOON BY JASON HERRING
          </Heading>

          <Text fontSize="md" lineHeight="1.8" color={"#4A4A4A"}>
            <Text
              as="span"
              fontSize="4xl"
              fontWeight="semibold"
              display="inline"
              color="#4A4A4A"
            >
              L
            </Text>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia
            deserunt mollit anim id est laborum Amet mauris commodo quis imperdiet.
          </Text>

          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            fontFamily="'Playfair Display', serif"
          >
            FUTURE CAN BE YOURS TODAY!
          </Heading>

          <Text fontSize="md" lineHeight="1.8" color={"#4A4A4A"}>
            Arcu non sodales neque sodales ut etiam sit amet. Semper risus in hendrerit gravida
            rutrum quisque non tellus orci ac placerat vest eu facilisis sed odio morbi quis. Egestas
            tellus rutrum tell.
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

        {/* Side image on xl screens */}
        {isXL && (
          <Box display="flex" justifyContent="center">
            <Image
              src={authorImage}
              alt="Author"
              boxSize="400px"
              borderRadius="full"
              boxShadow="2xl"
            />
          </Box>
        )}
      </SimpleGrid>
    </MotionBox>
  );
}
