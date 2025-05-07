import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20' },
];

const horoscopeTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const HoroscopeSection = () => {
  const [selectedSign, setSelectedSign] = useState('Aries');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('orange.200', 'orange.700');

  return (
    <Box as="section" id="horoscope" py={24} bg={bgColor} position="relative">
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/path-to-stars-background.jpg')"
        opacity={0.3}
        zIndex={-1}
      />

      <Box maxW="6xl" mx="auto" px={4}>
        <Box textAlign="center" maxW="3xl" mx="auto" mb={16}>
          <Heading as="h2" size="xl" mb={4}>
            Your Celestial Forecast
          </Heading>
          <Box w={16} h={1} bg="orange.400" mx="auto" mb={6} borderRadius="full" />
          <Text color="gray.600">
            Explore your personalized horoscope and discover what the stars have aligned for your journey ahead.
          </Text>
        </Box>

        <Box
          maxW="4xl"
          mx="auto"
          bg={bgColor}
          borderRadius="xl"
          boxShadow="lg"
          borderWidth={1}
          borderColor={borderColor}
          p={{ base: 6, md: 8 }}
        >
          <Tabs variant="enclosed" colorScheme="orange">
            <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
              <Box w={{ base: '100%', md: '33%' }}>
                <Heading as="h3" size="md" mb={3}>
                  Select Your Sign
                </Heading>
                <Grid templateColumns="repeat(3, 1fr)" gap={2} mb={6}>
                  {zodiacSigns.map((sign) => (
                    <Button
                      key={sign.name}
                      size="sm"
                      variant={selectedSign === sign.name ? 'solid' : 'outline'}
                      colorScheme="orange"
                      onClick={() => setSelectedSign(sign.name)}
                    >
                      {sign.name}
                    </Button>
                  ))}
                </Grid>

                <Heading as="h4" size="sm" mb={2}>
                  {selectedSign}
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={4}>
                  {zodiacSigns.find((sign) => sign.name === selectedSign)?.dates}
                </Text>

                <TabList>
                  {horoscopeTypes.map((type) => (
                    <Tab key={type}>{type}</Tab>
                  ))}
                </TabList>
              </Box>

              <Box w={{ base: '100%', md: '67%' }}>
                <TabPanels>
                  {horoscopeTypes.map((type) => (
                    <TabPanel key={type}>
                      <Box
                        bg="orange.50"
                        p={4}
                        borderRadius="lg"
                        borderWidth={1}
                        borderColor={borderColor}
                      >
                        <Flex justify="space-between" align="center" mb={4}>
                          <Heading as="h3" size="md">
                            {selectedSign} {type} Horoscope
                          </Heading>
                          <Flex>
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                boxSize={3}
                                color={i < 4 ? 'yellow.400' : 'gray.300'}
                                ml={1}
                              />
                            ))}
                          </Flex>
                        </Flex>

                        <Text mb={4} fontSize={{ base: 'sm', md: 'md' }}>
                          The cosmic energies are aligning in your favor, {selectedSign}. This {type.toLowerCase()} brings opportunities for growth in your personal relationships and career aspirations. Pay attention to subtle messages from the universe guiding you toward your true path.
                        </Text>

                        <Grid templateColumns="repeat(2, 1fr)" gap={3} mb={4}>
                          <Box
                            bg="whiteAlpha.700"
                            p={3}
                            borderRadius="md"
                            borderWidth={1}
                            borderColor="orange.200"
                          >
                            <Text fontWeight="medium" mb={1}>
                              Lucky Numbers
                            </Text>
                            <Text fontSize="sm">3, 7, 12, 28</Text>
                          </Box>
                          <Box
                            bg="whiteAlpha.700"
                            p={3}
                            borderRadius="md"
                            borderWidth={1}
                            borderColor="orange.200"
                          >
                            <Text fontWeight="medium" mb={1}>
                              Compatible With
                            </Text>
                            <Text fontSize="sm">Leo, Sagittarius, Libra</Text>
                          </Box>
                        </Grid>

                        <Button colorScheme="orange" w="full">
                          Get Full {type} Reading
                        </Button>
                      </Box>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Box>
            </Flex>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default HoroscopeSection;
