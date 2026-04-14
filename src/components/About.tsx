import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroImg from "@/assets/hospital-hero.jpg";

const stats = [
  { value: 50, suffix: "K+", label: "Patients Treated" },
  { value: 200, suffix: "+", label: "Expert Doctors" },
  { value: 25, suffix: "+", label: "Specializations" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-card" ref={ref}>
      <div className="px-6 md:px-10 py-20">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="text-sm font-medium text-foreground">Who we are</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={heroImg}
              alt="MEDICANT Hospital facility"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-display text-3xl md:text-5xl text-foreground mb-6"
            >
              We care where{" "}
              <span className="text-gradient">health</span> meets{" "}
              <span className="text-gradient">compassion</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              MEDICANT Hospital is a leading multi-specialty healthcare institution committed to
              providing patient-centered care. With state-of-the-art facilities and a team of
              world-renowned specialists, we're redefining what it means to heal.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="heading-display text-3xl md:text-4xl text-foreground mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
