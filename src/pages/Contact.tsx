
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="container mx-auto py-24 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind? Let's create something amazing together."
      />

      <motion.div
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;
