
import { Box } from "@chakra-ui/react";
import Navbar from "../components2/Navbar";
import Hero from "../components2/Hero";
import Services from "../components2/Services";
import About from "../components2/About";
import StarryBackground from "../components2/StarryBackground";
import HoroscopeSection from "../components2/HoroscopeSection";
import PersonalReadings from "../components2/PersonalReadings";
import Testimonials from "../components2/Testimonials";
import BlogSection from "../components2/BlogSection";
import ContactForm from "../components2/ContactForm";
import ConsultationCards from "../components2/ConsultationCards";
import ShopSection from "../components2/ShopSection";
import Newsletter from "../components2/Newsletter";
import Footer from "../components2/Footer";

const Index = () => {
  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <StarryBackground />
      <Box position="relative" zIndex={1}>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <HoroscopeSection />
        <PersonalReadings />
        <ConsultationCards />
        <ShopSection />
        <Testimonials />
        <BlogSection />
        <ContactForm />
        <Newsletter />
        <Footer />
      </Box>
    </Box>
  );
};

export default Index;
