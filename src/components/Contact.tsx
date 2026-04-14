import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-foreground" ref={ref}>
      <div className="px-6 md:px-10 py-20 text-card">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-card/70">Get in touch</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-5xl tracking-tight leading-[0.95] mb-6"
            >
              Ready to take care of your{" "}
              <span className="text-primary">health</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-card/60 text-lg mb-8"
            >
              Schedule an appointment today. Our patient coordinators are available 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-card/70"
            >
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>123 Healthcare Blvd, Medical District, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <span>hello@medicant.care</span>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-xl bg-card/10 border border-card/20 text-card placeholder:text-card/40 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 rounded-xl bg-card/10 border border-card/20 text-card placeholder:text-card/40 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-4 rounded-xl bg-card/10 border border-card/20 text-card placeholder:text-card/40 focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Tell us about your needs..."
              rows={4}
              className="w-full px-5 py-4 rounded-xl bg-card/10 border border-card/20 text-card placeholder:text-card/40 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-all hover:scale-[1.02] duration-200"
            >
              Request Appointment →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
