
import { Box } from "@chakra-ui/react";
import Navbar from "../components1/Navbar";
import Hero from "../components1/Hero";
import Services from "../components1/Services";
import ProductCards from "../components1/ProductCards";
import BookSession from "../components1/BookSession";
import TestimonialSection from "../components1/TestimonialSection";
import ShopSection from "../components1/ShopSection";
import CrystalSection from "../components1/CrystalSection";
import PersonalReadingSection from "../components1/PersonalReadingSection";
import BlogSection from "../components1/BlogSection";
import Newsletter from "../components1/Newsletter";
import Footer from "../components1/Footer";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Services />
      <ProductCards />
      <BookSession />
      <ShopSection />
      <CrystalSection />
      <PersonalReadingSection />
      <BlogSection />
      <TestimonialSection />
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default Index;
