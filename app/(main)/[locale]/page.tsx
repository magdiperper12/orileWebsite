import "../../globals.css"; // المسار الصحيح
// import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Ctasection from "@/components/sections/Ctasection";
import HowWork from "@/components/sections/HowWork";
import FaQSection from "@/components/sections/FaQSection";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";
import ContactUs from "@/components/sections/ContactUs";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="mt-16">
      {/* Hero Section */}

      <Hero />

      {/* About Section */}
      <About />

      {/* Medical Service Section */}
      <Services />

      {/* CTA Section */}
      <Ctasection />

      {/* How we Work Section */}
      <HowWork />
      {/* FAQ Section */}
      <FaQSection />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Recent Posts Section */}
      <Blog />

      {/* Contact Form Section */}
      <ContactUs />
    </div>
  );
}
