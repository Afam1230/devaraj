
import { useRef } from "react";
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  Button, 
  Flex, 
  Badge,
  Icon,
  HStack,
  Tag
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

const ProductCard = ({ product, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MotionBox
      ref={ref}
      bg="rgba(30, 30, 60, 0.5)"
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="purple.800"
      position="relative"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", borderColor: "purple.500" }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {product.isNew && (
        <Badge 
          position="absolute" 
          top={3} 
          left={3} 
          colorScheme="green" 
          variant="solid"
          zIndex={2}
        >
          New
        </Badge>
      )}
      
      {product.discount && (
        <Badge 
          position="absolute" 
          top={3} 
          right={3} 
          colorScheme="red" 
          variant="solid"
          zIndex={2}
        >
          {product.discount}% Off
        </Badge>
      )}
      
      <MotionBox
        h="200px"
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 + (0.1 * index) }}
      >
        <Image 
          src={product.image}
          alt={product.name}
          width="100%"
          height="100%"
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(to top, rgba(30, 30, 60, 0.8), rgba(30, 30, 60, 0) 50%)"
        />
      </MotionBox>
      
      <Box p={5}>
        <MotionFlex 
          justify="space-between" 
          align="center" 
          mb={2}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + (0.1 * index) }}
        >
          <Tag size="sm" colorScheme="purple" variant="subtle">
            {product.category}
          </Tag>
          
          <HStack>
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                as={Star} 
                color={i < product.rating ? "gold.400" : "gray.500"} 
                w={3} 
                h={3} 
              />
            ))}
          </HStack>
        </MotionFlex>
        
        <MotionHeading 
          as="h3" 
          size="md" 
          mb={2} 
          color="white"
          fontFamily="heading"
          noOfLines={1}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + (0.1 * index) }}
        >
          {product.name}
        </MotionHeading>
        
        <MotionText 
          color="gray.300" 
          fontSize="sm" 
          mb={4}
          noOfLines={2}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + (0.1 * index) }}
        >
          {product.description}
        </MotionText>
        
        <MotionFlex 
          justify="space-between" 
          align="center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + (0.1 * index) }}
        >
          <Flex align="baseline">
            <Text color="white" fontWeight="bold" fontSize="xl">
              ${product.discountedPrice || product.price}
            </Text>
            
            {product.discountedPrice && (
              <Text color="gray.500" fontSize="sm" textDecoration="line-through" ml={2}>
                ${product.price}
              </Text>
            )}
          </Flex>
          
          <Button
            leftIcon={<ShoppingCart size={16} />}
            colorScheme="purple"
            size="sm"
            variant="ghost"
            _hover={{ bg: "purple.800" }}
          >
            Add
          </Button>
        </MotionFlex>
      </Box>
    </MotionBox>
  );
};

const ShopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const products = [
    {
      name: "Amethyst Crystal Necklace",
      description: "Handcrafted genuine amethyst pendant for spiritual protection and clarity.",
      price: 89.99,
      discountedPrice: null,
      image: "https://images.unsplash.com/photo-1611324204543-ebc98769132a?w=500&auto=format",
      category: "Jewelry",
      rating: 5,
      isNew: true,
      discount: null
    },
    {
      name: "Cosmic Alignment Meditation Kit",
      description: "Complete kit with crystals, incense, and guided audio for spiritual practices.",
      price: 129.99,
      discountedPrice: 99.99,
      image: "https://images.unsplash.com/photo-1545509915-ee5df6d92938?w=500&auto=format",
      category: "Meditation",
      rating: 4,
      isNew: false,
      discount: 23
    },
    {
      name: "Celestial Wisdom Oracle Cards",
      description: "Beautifully illustrated deck with 52 cards for daily guidance and divination.",
      price: 34.99,
      discountedPrice: null,
      image: "https://images.unsplash.com/photo-1633374769555-15372d87e46c?w=500&auto=format",
      category: "Divination",
      rating: 5,
      isNew: false,
      discount: null
    },
    {
      name: "Astral Journey Incense Bundle",
      description: "Premium organic incense sticks with holder for meditation and energy clearing.",
      price: 24.99,
      discountedPrice: 19.99,
      image: "https://images.unsplash.com/photo-1525695230005-efd074980869?w=500&auto=format",
      category: "Aromatherapy",
      rating: 4,
      isNew: false,
      discount: 20
    }
  ];

  return (
    <Box bg="gray.900" py={16} id="shop">
      <Container maxW="container.xl" ref={ref}>
        <Box textAlign="center" mb={10}>
          <MotionText
            color="purple.400"
            fontWeight="bold"
            mb={3}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            SPIRITUAL SHOP
          </MotionText>

          <MotionHeading
            as="h2"
            size="xl"
            color="white"
            mb={5}
            fontFamily="heading"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sacred Tools For Your Journey
          </MotionHeading>

          <MotionText
            color="gray.300"
            maxW="800px"
            mx="auto"
            mb={8}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enhance your spiritual practice with carefully selected products.
            Each item is energetically cleansed and blessed before shipping.
          </MotionText>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </SimpleGrid>
        
        <MotionFlex 
          justify="center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            colorScheme="purple"
            px={8}
            borderRadius="full"
            variant="outline"
            borderWidth={2}
            _hover={{ bg: "rgba(114, 49, 198, 0.1)" }}
            rightIcon={<Icon as={ShoppingCart} />}
          >
            View All Products
          </Button>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default ShopSection;
