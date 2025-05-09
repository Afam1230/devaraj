import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
  ChakraProvider,
  Container,
  useBreakpointValue,
} from '@chakra-ui/react';

const Tnx = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Devarishidas@gmail.com',
      link: 'mailto:Devarishidas@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+(233) 54 194-0276',
      link: 'tel:+233541940276',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'ACCRA, GHANA',
      link: '#',
    },
  ];

  // Define motion animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
  };

  const headingVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <ChakraProvider>
      <Box
        position="relative"
        bg="linear-gradient(to bottom, #f5f5f5, #e0e0e0)"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={5}
      >
        {/* Background animation */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '0%',
            height: '0%',
            backgroundSize: 'cover',
            opacity: 0.1,
            pointerEvents: 'none',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        />

        {/* Thank you message */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          style={{
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          <VStack spacing={6}>
            <motion.div variants={headingVariants}>
              <Heading as="h1" size="2xl" color="orange.500">
                Thank You for Your Order!
              </Heading>
            </motion.div>

            <motion.div variants={textVariants}>
              <Text fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })} color="gray.700">
                We are processing your order and will contact you shortly.
                <br />
                If you have any questions, please reach out to us at:
              </Text>
            </motion.div>

            <Container maxW="container.lg" mt={6}>
              <Grid
                templateColumns={{ base: '1fr', sm: '1fr 1fr' }}
                gap={4}
                alignItems="stretch"
              >
                {contactInfo.map((item, index) => (
                  <GridItem
                    key={index}
                    colSpan={index === 2 ? { base: 1, sm: 2 } : 1}
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    border="1px solid"
                    borderColor="orange.100"
                    _hover={{ borderColor: 'orange.400' }}
                  >
                    <Box display="flex" alignItems="start">
                      <Box
                        h={10}
                        w={10}
                        bg="orange.100"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mr={4}
                      >
                        <Icon as={item.icon} color="orange.400" />
                      </Box>
                      <Box>
                        <Text fontWeight="medium" mb={1}>
                          {item.title}
                        </Text>
                        <Link
                          href={item.link}
                          color="gray.600"
                          fontSize="sm"
                          _hover={{ color: 'orange.400' }}
                        >
                          {item.value}
                        </Link>
                      </Box>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Container>

            <motion.div variants={textVariants}>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={() => (window.location.href = '/')}
              >
                Return to Home
              </Button>
            </motion.div>
          </VStack>
        </motion.div>
      </Box>
    </ChakraProvider>
  );
};

export default Tnx;
