import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

const doctors = [
  { name: "Dr. James Mitchell", role: "Chief Cardiologist", img: doc1 },
  { name: "Dr. Sarah Chen", role: "Head of Neurology", img: doc2 },
  { name: "Dr. Arjun Patel", role: "Orthopedic Surgeon", img: doc3 },
];

const Doctors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="doctors" className="bg-card" ref={ref}>
      <div className="px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="text-sm font-medium text-foreground">Our Doctors</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-display text-3xl md:text-5xl text-foreground mb-4 max-w-3xl"
        >
          Meet our{" "}
          <span className="text-gradient">expert team</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          Our physicians are leaders in their fields, dedicated to advancing medicine and improving lives.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mb-4 relative">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{doc.name}</h3>
              <p className="text-sm text-muted-foreground">{doc.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
