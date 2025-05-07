import React, { useEffect } from "react";
import Navbar from "../components3/Navbar";
import HeroSection from "../components3/HeroSection";
import ServicesSection from "../components3/ServicesSection";
import AboutSection from "../components3/AboutSection";
import HoroscopeSection from "../components3/HoroscopeSection";
import ConsultationSection from "../components3/ConsultationSection";
import ShopSection from "../components3/ShopSection";
import BlogSection from "../components3/BlogSection";
import ContactSection from "../components3/ContactSection";
import NewsletterSection from "../components3/NewsletterSection";
import Footer from "../components3/Footer";
import BackToTop from "../components3/BackToTop";

const Index = () => {
  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".section-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HoroscopeSection />
      <ConsultationSection />
      <ShopSection />
      <BlogSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
