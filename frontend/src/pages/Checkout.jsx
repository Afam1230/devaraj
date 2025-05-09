import React from "react";
import { useCartStore } from "../store/cart";
import { useAuthStore } from "../store/useAuthStore";
import { Box, Button, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, totalPrice } = useCartStore();
    const { user } = useAuthStore(); // get user info
    const navigate = useNavigate();

const handlePayment = async () => {
    try {
        console.log(user)
      if (!user) {
        alert("Please log in to place an order.");
        navigate("/login")
        return;
      }

      const orderData = {
        customer: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
        items: Object.values(cart).map((item) => ({
          id: item._id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        total: totalPrice,
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Order failed");

      const result = await response.json();
      console.log("Order placed:", result);

      navigate("/tnx");
    } catch (error) {
      console.error("Order error:", error.message);
      alert("Could not place the order.");
    }
  };


    return (
        <Box p={5} mt={{base:20, md:40}}>
            <Text fontSize="2xl" fontWeight="bold" p={10}>Checkout</Text>
            {Object.keys(cart).length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <VStack spacing={4} align="start">
                    {Object.values(cart).map((item) => (
                        <HStack key={item._id} justify="space-between" w="full">
                            <Image src={item.image} alt={item.name} boxSize={{base:"70px", md:"200px"}} />
                            <Text fontSize={{base:"xl", md:"xx-large"}}>QTY <b>{item.quantity}</b></Text>
                            <Text fontSize={{base:"xl", md:"xx-large"}} >{item.name} - <b>${item.price}</b></Text>
                        </HStack>
                    ))}
                    <Text fontWeight="bold" fontSize={{base:"xl", md:"xx-large"}} py={{base:10, md:20}}>Total: ${totalPrice}</Text>
                    <Button colorScheme="green" size={'lg'} onClick={handlePayment}>Proceed to place Order - ${totalPrice}</Button>
                </VStack>
            )}
        </Box>
    );
};

export default Checkout;
