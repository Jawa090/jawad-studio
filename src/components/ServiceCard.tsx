
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create URL-friendly version of the title for linking
  const serviceSlug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 h-full transition-all duration-500 group",
        isHovered && "neon-border"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="mb-6 relative">
        <motion.div
          className="text-neon-blue"
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
        {title}
      </h3>
      <p className="text-white/70 mb-6">{description}</p>
      <Link to={`/services#${serviceSlug}`}>
        <motion.div
          className="flex items-center text-neon-blue text-sm font-medium cursor-pointer"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
