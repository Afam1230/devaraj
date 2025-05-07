import React, { useState, useEffect } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      aria-label="Back to top"
      icon={<ArrowUpIcon />}
      onClick={scrollToTop}
      position="fixed"
      bottom="6"
      right="6"
      width="12"
      height="12"
      borderRadius="full"
      backgroundColor="astral.orange"
      color="white"
      _hover={{
        backgroundColor: "astral.orange.90",
      }}
      boxShadow="lg"
      zIndex="40"
      transition="all 0.3s"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(10px)"}
      pointerEvents={isVisible ? "auto" : "none"}
    />
  );
};

export default BackToTop;
