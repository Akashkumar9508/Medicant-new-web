
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Services", "Doctors"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-card shadow-sm border-b border-border" : "bg-transparent border-transparent"}`}
    >
      <div className="px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isScrolled ? 'bg-primary' : 'bg-white'}`}>
            <span className={`font-bold text-sm transition-colors ${isScrolled ? 'text-primary-foreground' : 'text-primary'}`}>M</span>
          </div>
          <span className={`font-display text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>

            MEDICANT
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}

              className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}

            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-foreground text-card hover:opacity-90' : 'bg-white text-foreground hover:bg-white/90 shadow-sm'}`}
          >
            Contact Us

          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${isScrolled ? 'border-border' : 'border-white/30 hover:bg-white/10'}`}
        >
          <div className="flex flex-col gap-1">
            <span className={`w-5 h-0.5 transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""} ${isScrolled ? 'bg-foreground' : 'bg-white'}`} />
            <span className={`w-5 h-0.5 transition-all ${mobileOpen ? "opacity-0" : ""} ${isScrolled ? 'bg-foreground' : 'bg-white'}`} />
            <span className={`w-5 h-0.5 transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""} ${isScrolled ? 'bg-foreground' : 'bg-white'}`} />

          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-card/95 backdrop-blur-xl p-6 border-b border-border"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-foreground border-b border-border last:border-0"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block text-center px-5 py-3 rounded-2xl bg-foreground text-card text-sm font-medium"
            >
              Contact Us

            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
