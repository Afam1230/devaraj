
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useDisclosure,
  Image,
  Container,
  Button
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box 
      position="sticky" 
      top="0" 
      zIndex="1000" 
      bg="white" 
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex
          color="gray.600"
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justify="space-between"
        >
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontFamily={"Playfair Display, serif"}
              fontWeight="bold"
              fontSize="xl"
              color="brand.800"
            >
              ASTRO-DEVARAJ
            </Text>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <Link 
              href={"#"}
              fontSize={"sm"}
              fontWeight={500}
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              HOME
            </Link>
            <Link
              href={"#"}
              fontSize={"sm"}
              fontWeight={500}
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              SERVICES
            </Link>
            <Link
              href={"#"}
              fontSize={"sm"}
              fontWeight={500}
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              ABOUT
            </Link>
            <Link
              href={"#"}
              fontSize={"sm"}
              fontWeight={500}
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              SHOP
            </Link>
            <Link
              href={"#"}
              fontSize={"sm"}
              fontWeight={500}
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              CONTACT
            </Link>
            <Button 
              bg="brand.800" 
              color="white" 
              size="sm" 
              _hover={{ bg: "brand.700" }}
              rounded="none"
            >
              BOOK NOW
            </Button>
          </Stack>

          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg="white"
            p={4}
            display={{ md: "none" }}
            borderBottomWidth={1}
            borderColor="gray.200"
          >
            <Stack spacing={4}>
              <Link href={"#"} _hover={{ color: "brand.500" }}>HOME</Link>
              <Link href={"#"} _hover={{ color: "brand.500" }}>SERVICES</Link>
              <Link href={"#"} _hover={{ color: "brand.500" }}>ABOUT</Link>
              <Link href={"#"} _hover={{ color: "brand.500" }}>SHOP</Link>
              <Link href={"#"} _hover={{ color: "brand.500" }}>CONTACT</Link>
              <Button 
                bg="brand.800" 
                color="white" 
                size="sm" 
                _hover={{ bg: "brand.700" }}
                rounded="none"
                w="150px"
              >
                BOOK NOW
              </Button>
            </Stack>
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;
