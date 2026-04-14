import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/use-lenis";

const Index = () => {
  useLenis();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
