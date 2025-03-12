
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-t-2 border-b-2 border-neon-blue rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-12 h-12 border-t-2 border-b-2 border-neon-purple rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
      <motion.p
        className="mt-8 text-xl font-display text-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        J&A Studio
      </motion.p>
    </div>
  );
};

export default Loader;
