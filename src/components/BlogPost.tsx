
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  index: number;
}

const BlogPost = ({ title, excerpt, date, readTime, image, category, index }: BlogPostProps) => {
  // Create slug from title for URL
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-neon-blue/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-4 flex-grow">{excerpt}</p>
        
        <Link to={`/blog/${slug}`} className="mt-auto">
          <Button
            variant="ghost"
            className="group text-white hover:text-neon-blue px-0"
          >
            Read More
            <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPost;
