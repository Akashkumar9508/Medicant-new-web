import { motion } from "framer-motion";
import heroVideo from "@/assets/video.mp4";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-card">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}

          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* 40% dark overlay to ensure white text is perfectly legible while keeping video visible */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 py-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm border border-white/20"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff2761] animate-pulse" />

          Trusted by 50,000+ patients
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="heading-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-md"
        >
          World-class{" "}
          <span className="text-[#ff2761]">healthcare</span>

          {" "}for every patient
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"

        >
          At MEDICANT Hospital, we combine cutting-edge technology with compassionate care to deliver exceptional health outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"

            className="px-8 py-4 rounded-2xl bg-[#ff2761] text-white text-base font-medium hover:bg-[#e01b52] transition-colors shadow-lg"

          >
            Book Appointment 👋
          </a>
          <a
            href="#services"

            className="px-8 py-4 rounded-2xl border-2 border-white/30 text-white text-base font-medium hover:bg-white/10 backdrop-blur-sm transition-colors"

          >
            Our Services ↓
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex justify-center"
        >
          <a href="#marquee" className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-card animate-float">
            ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
