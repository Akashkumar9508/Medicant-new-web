import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Sparkles, Microscope, Award, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { 
    icon: Stethoscope, 
    title: "Surgery", 
    desc: "State-of-the-art surgical interventions utilizing minimally invasive techniques and precision robotics for optimal recovery.", 
    gradient: "from-blue-500/20 to-cyan-500/20",
    color: "text-blue-500 dark:text-blue-400"
  },
  { 
    icon: Sparkles, 
    title: "Laser & Aesthetic Treatments", 
    desc: "Advanced dermatological and aesthetic procedures to rejuvenate, refine, and restore your natural glow.", 
    gradient: "from-purple-500/20 to-pink-500/20",
    color: "text-purple-500 dark:text-purple-400"
  },
  { 
    icon: Microscope, 
    title: "Advanced Procedures", 
    desc: "Next-generation diagnostics and specialized medical procedures ensuring the highest level of detail and care.", 
    gradient: "from-amber-500/20 to-orange-500/20",
    color: "text-amber-500 dark:text-amber-400"
  },
  { 
    icon: Award, 
    title: "Centers of Excellence", 
    desc: "Dedicated specialized hubs for cardiology, oncology, and neurology, bringing multidisciplinary experts together.", 
    gradient: "from-emerald-500/20 to-teal-500/20",
    color: "text-emerald-500 dark:text-emerald-400"
  },

];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-background" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">Premium Healthcare</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Specialized care across{" "}
            <span className="text-gradient">every discipline</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl leading-relaxed"
          >
            From life-saving surgeries to cutting-edge aesthetic treatments, our centers are equipped to deliver unparalleled healthcare experiences.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative flex flex-col justify-between h-full p-8 sm:p-10 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Card Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none`} />
              
              <div className="relative z-10 flex-grow">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-background shadow-sm border border-border/50 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-border/40">
                <Button 
                  variant="ghost" 
                  className="w-full sm:w-auto justify-between sm:justify-start gap-4 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    Book Appointment
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
