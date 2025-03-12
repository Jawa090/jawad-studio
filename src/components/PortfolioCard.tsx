
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const PortfolioCard = ({
  title,
  category,
  image,
  description,
  liveUrl,
  githubUrl,
  index,
}: PortfolioCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective h-[400px] w-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="preserve-3d relative w-full h-full transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full rounded-xl overflow-hidden glass-card">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-all duration-300 p-6 flex flex-col justify-end">
              <span className="text-neon-blue text-sm font-medium mb-2">{category}</span>
              <h3 className="text-white text-xl md:text-2xl font-display font-bold">{title}</h3>
              <p className="mt-2 text-white/80 text-sm">Click to view details</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute backface-hidden rotate-y-180 w-full h-full glass-card rounded-xl p-6 flex flex-col">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-white">{title}</h3>
          <span className="text-neon-blue text-sm font-medium mb-4">{category}</span>
          <p className="text-white/70 flex-grow">{description}</p>
          
          <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neon-blue hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} className="mr-2" /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neon-blue hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} className="mr-2" /> View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
