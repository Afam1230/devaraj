
import { 
    Box, 
    Flex, 
    Spacer, 
    Button, 
    Image, 
    HStack, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    Text,
    useMediaQuery
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { motion } from "framer-motion";
  import { useState, useEffect } from "react";
  
  // Create motion components
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  
  const Navbar = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);
    
    // Change navbar style on scroll
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <MotionFlex 
        py={4} 
        px={{ base: 4, md: 10 }} 
        position="sticky" 
        top={0} 
        zIndex={100} 
        bg={scrolled ? "rgba(13, 10, 30, 0.95)" : "transparent"} 
        backdropFilter={scrolled ? "blur(10px)" : "none"}
        borderBottom={scrolled ? "1px solid" : "none"}
        borderColor="purple.800"
        transition="all 0.3s ease"
        align="center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Flex align="center">
            <Box 
              boxSize={10} 
              borderRadius="full" 
              bg="purple.700" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              mr={2}
            >
              <Text fontSize="xl" fontWeight="bold" color="gold.300">AD</Text>
            </Box>
            <Box>
              <Text fontFamily="heading" fontSize="xl" fontWeight="bold" background="linear-gradient(90deg, #e3b5ff 0%, #a87ef0 100%)" backgroundClip="text">
                AstroDevaraj
              </Text>
              <Text fontSize="xs" color="gold.200" mt="-1">Astrology & Life Coaching</Text>
            </Box>
          </Flex>
        </MotionBox>
        
        <Spacer />
        
        {!isMobile ? (
          <>
            <HStack 
              spacing={8} 
              mr={8} 
              color="white"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              {["Home", "Services", "Horoscope", "Readings", "Shop", "Blog", "Contact"].map((item, index) => (
                <MotionBox 
                  key={item}
                  position="relative"
                  _hover={{ color: "purple.300", cursor: "pointer" }}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Text>{item}</Text>
                  <Box 
                    position="absolute" 
                    bottom="-2px" 
                    left="50%" 
                    transform="translateX(-50%)" 
                    height="2px" 
                    width="0"
                    bg="purple.400"
                    transition="width 0.3s ease"
                    _groupHover={{ width: "100%" }}
                  />
                </MotionBox>
              ))}
            </HStack>
            
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                colorScheme="purple" 
                size="md" 
                borderRadius="full"
                px={6}
                bgGradient="linear(to-r, purple.500, indigo.600)"
                _hover={{ bgGradient: "linear(to-r, purple.400, indigo.500)" }}
                boxShadow="0 4px 15px rgba(114, 49, 198, 0.4)"
              >
                Book Session
              </Button>
            </MotionBox>
          </>
        ) : (
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            colorScheme="purple"
            onClick={onOpen}
          />
        )}
        
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay bg="rgba(0, 0, 0, 0.4)" backdropFilter="blur(5px)" />
          <DrawerContent bgGradient="linear(to-b, gray.900, purple.900)">
            <DrawerCloseButton color="white" />
            <DrawerHeader borderBottomWidth="1px" borderColor="purple.800">
              <Flex align="center">
                <Box 
                  boxSize={8} 
                  borderRadius="full" 
                  bg="purple.700"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  <Text fontSize="lg" fontWeight="bold" color="gold.300">AD</Text>
                </Box>
                <Text color="white" fontFamily="heading">AstroDevaraj</Text>
              </Flex>
            </DrawerHeader>
            <DrawerBody mt={4}>
              <VStack spacing={4} align="stretch">
                {["Home", "Services", "Horoscope", "Readings", "Shop", "Blog", "Contact"].map((item) => (
                  <Button
                    key={item}
                    variant="ghost" 
                    justifyContent="flex-start" 
                    colorScheme="purple" 
                    w="full"
                    fontWeight="normal"
                    fontSize="lg"
                  >
                    {item}
                  </Button>
                ))}
                <Box pt={6}>
                  <Button 
                    colorScheme="purple" 
                    size="lg" 
                    w="full" 
                    borderRadius="full"
                    mt={4}
                    bgGradient="linear(to-r, purple.600, indigo.700)"
                    _hover={{ bgGradient: "linear(to-r, purple.500, indigo.600)" }}
                  >
                    Book Session
                  </Button>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MotionFlex>
    );
  };
  
  export default Navbar;
  