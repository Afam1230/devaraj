import React, { useState } from 'react';
import {
    Box,
    VStack,
    Text,
    Heading,
    Switch,
    HStack,
    Divider,
    Button,
    Icon,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const services = [
    { label: 'Consultation', price: 100, defaultChecked: true },
    { label: 'Tarot reading', price: 60 },
    { label: 'Natal chart', price: 120, defaultChecked: true },
    { label: 'Sinastry report', price: 130, defaultChecked: true },
    { label: 'Yearly guidance', price: 90, badge: true },
    { label: 'Compatibility', price: 80 },
];

export default function PackageSelector() {
    const [selected, setSelected] = useState(() => {
        const initial = {};
        services.forEach((item) => {
            initial[item.label] = !!item.defaultChecked;
        });
        return initial;
    });

    const handleToggle = (label) => {
        setSelected((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const totalPrice = Object.entries(selected).reduce((sum, [label, isOn]) => {
        if (isOn) {
            const item = services.find((s) => s.label === label);
            return sum + (item?.price || 0);
        }
        return sum;
    }, 0);

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            bg="white"
            color="#8B5E3C"
            p={{ base: 6, md: 12 }}
            fontFamily="'Georgia', serif"
            maxW="500px"
            mx="auto"
        >
            <VStack spacing={6} align="start">
                <Box position="relative">
                    <Heading fontFamily="'Playfair Display', serif" fontSize="2xl">
                        FIND THE PACKAGE THAT SUITS YOU
                    </Heading>
                    <Box position="absolute" right="-3" top="-3" textAlign="center">
                        <Box
                            bg="#C68B3C"
                            color="white"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="full"
                            transform="rotate(15deg)"
                        >
                            TOP
                        </Box>
                    </Box>
                </Box>

                <Text fontSize="md">
                    Begin your journey to a better life with peace, love, beauty, and happiness.
                </Text>

                <VStack align="start" spacing={1}>
                    {['Personal advisor', 'Experienced team', 'Personalized program'].map((item) => (
                        <HStack key={item} spacing={2}>
                            <Icon as={FaStar} boxSize={2} color="#8B5E3C" />
                            <Text fontSize="sm">{item}</Text>
                        </HStack>
                    ))}
                </VStack>

                <Box
                    w="100%"
                    border="1px solid #e5e5e5"
                    borderRadius="md"
                    p={4}
                    bg="white"
                >
                    {services.map((item, idx) => (
                        <Box key={item.label} position="relative">
                            <HStack justify="space-between" py={3}>
                                <Switch
                                    colorScheme="orange"
                                    isChecked={selected[item.label]}
                                    onChange={() => handleToggle(item.label)}
                                />
                                <Text fontSize="md">{item.label}</Text>
                            </HStack>
                            {idx !== services.length - 1 && <Divider />}
                            {item.badge && (
                                <Box
                                    position="absolute"
                                    right="-2"
                                    top="0"
                                    textAlign="center"
                                >
                                </Box>
                            )}
                        </Box>
                    ))}
                    {/* total price */}
                    <VStack spacing={4} align="center" w="100%">
                        <Text fontSize="4xl" fontWeight="medium">${totalPrice}</Text>
                        <Text fontSize="xs" color="gray.500">
                            PER MONTH
                        </Text>
                        <Text fontSize="sm" textAlign="center">
                            Not sure what’s the right choice for you?
                        </Text>
                        <Button
                            bg="black"
                            color="white"
                            _hover={{ bg: '#222' }}
                            px={6}
                            fontWeight="medium"
                            fontSize="sm"
                            rounded="none"
                        >
                            ✦ CONTACT US
                        </Button>
                    </VStack>
                </Box>


            </VStack>
        </Box>
    );
}
