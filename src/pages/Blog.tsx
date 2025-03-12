
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import BlogPost from "@/components/BlogPost";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Premium MERN Stack Development",
      excerpt: "Our expert development team specializes in creating robust, scalable applications using MongoDB, Express, React, and Node.js. We deliver high-performance web solutions tailored to your business needs.",
      date: "2024-05-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      category: "Development",
    },
    {
      title: "Advanced AI Solutions",
      excerpt: "Leverage cutting-edge artificial intelligence to transform your business. Our AI specialists create custom solutions for automation, data analysis, and intelligent decision-making systems.",
      date: "2024-05-10",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1677442135017-cccf91b68ecd?q=80&w=2070&auto=format&fit=crop",
      category: "Technology",
    },
    {
      title: "Creative Graphic Design",
      excerpt: "Our creative team delivers eye-catching visual designs that communicate your brand message effectively. From logos to marketing materials, we bring your vision to life.",
      date: "2024-05-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1969&auto=format&fit=crop",
      category: "Design",
    }
  ];

  return (
    <section className="container mx-auto py-16 px-6 md:px-12">
      <div className="flex flex-col items-center mb-12">
        <SectionHeader
          title="Our Blog"
          subtitle="Premium MERN stack development, AI solutions, and graphic design services. We bring your ideas to life with modern technologies and creative design."
        />
        
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/admin/blog-upload">
            <Button 
              variant="outline"
              className="group bg-black/30 border border-neon-blue/50 hover:bg-neon-blue/20 hover:border-neon-blue transition-all"
            >
              <ShieldCheck className="mr-2 h-4 w-4 text-neon-blue group-hover:animate-pulse-slow" />
              <span className="text-gradient">Admin Access</span>
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} index={index} />
        ))}
      </motion.div>
      
      <div className="mt-16 text-center">
        <Link to="/contact">
          <motion.button 
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg px-6 py-3 hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team For More
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
