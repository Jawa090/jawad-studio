
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import PortfolioCard from "@/components/PortfolioCard";
import { cn } from "@/lib/utils";

type Category = "all" | "mern" | "ai" | "design" | "python" | "data";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "mern",
      categoryLabel: "MERN Stack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      description:
        "A full-featured e-commerce platform with product management, user authentication, and payment processing. Built with MongoDB, Express, React, and Node.js.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Hospital Management System",
      category: "mern",
      categoryLabel: "MERN Stack",
      image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=1000&auto=format&fit=crop",
      description:
        "A comprehensive hospital management system for appointment scheduling, patient records, and billing. Includes real-time updates and secure authentication.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Marketplace",
      category: "mern",
      categoryLabel: "MERN Stack",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      description:
        "A property listing platform with advanced search features, virtual tours, and agent-client messaging. Uses MongoDB for efficient data storage and retrieval.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      category: "ai",
      categoryLabel: "AI Solution",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      description:
        "An AI-powered content generation tool that helps create marketing copy, blog posts, and social media content. Utilizes GPT-based models for natural language generation.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sentiment Analysis Dashboard",
      category: "ai",
      categoryLabel: "AI Solution",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      description:
        "A tool that analyzes customer feedback and social media mentions to gauge sentiment towards brands or products. Features interactive visualizations of sentiment trends.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Inventory Predictor",
      category: "ai",
      categoryLabel: "AI Solution",
      image: "https://images.unsplash.com/photo-1566137147977-7d51d6c1c778?q=80&w=1000&auto=format&fit=crop",
      description:
        "An inventory management system that uses machine learning to predict stock requirements based on historical data and seasonal trends. Optimizes inventory levels to reduce costs.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fashion Brand Identity",
      category: "design",
      categoryLabel: "Graphic Design",
      image: "https://images.unsplash.com/photo-1600694077061-7c0a2582f15a?q=80&w=1000&auto=format&fit=crop",
      description:
        "Complete brand identity design for a modern fashion label, including logo, packaging, and marketing materials. Created a cohesive visual language that resonates with the target audience.",
      liveUrl: "#",
    },
    {
      title: "Food Delivery App UI",
      category: "design",
      categoryLabel: "Graphic Design",
      image: "https://images.unsplash.com/photo-1615359723361-0ee4c22fb838?q=80&w=1000&auto=format&fit=crop",
      description:
        "User interface design for a food delivery mobile application, focusing on intuitive navigation and visually appealing food presentation. Includes user flow optimization and visual design.",
      liveUrl: "#",
    },
    {
      title: "Tech Conference Branding",
      category: "design",
      categoryLabel: "Graphic Design",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
      description:
        "Comprehensive branding for a technology conference, including logo, promotional materials, signage, and digital assets. Created a modern, tech-forward aesthetic that appeals to industry professionals.",
      liveUrl: "#",
    },
    // Python projects
    {
      title: "Automated Web Scraper",
      category: "python",
      categoryLabel: "Python Development",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      description:
        "A scalable web scraping solution that automatically collects and processes data from multiple sources. Built with Python, Scrapy, and BeautifulSoup with scheduling capabilities.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Inventory Management API",
      category: "python",
      categoryLabel: "Python Development",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1000&auto=format&fit=crop",
      description:
        "A high-performance RESTful API for inventory management built with Django REST Framework. Features include real-time stock updates, order processing, and authentication.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Machine Learning Recommendation Engine",
      category: "python",
      categoryLabel: "Python Development",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
      description:
        "A recommendation system built with Python and TensorFlow that analyzes user behavior to provide personalized product recommendations. Improves conversion rates by 35%.",
      liveUrl: "#",
      githubUrl: "#",
    },
    // Data Analysis projects
    {
      title: "Financial Performance Dashboard",
      category: "data",
      categoryLabel: "Data Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      description:
        "An interactive dashboard that visualizes key financial metrics and performance indicators for executive decision-making. Built with Python, Pandas, and Tableau.",
      liveUrl: "#",
    },
    {
      title: "Customer Segmentation Analysis",
      category: "data",
      categoryLabel: "Data Analysis",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
      description:
        "A comprehensive analysis that segments customers based on purchasing behavior, demographics, and engagement metrics. Provides actionable insights for targeted marketing campaigns.",
      liveUrl: "#",
    },
    {
      title: "Predictive Sales Forecasting",
      category: "data",
      categoryLabel: "Data Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      description:
        "A predictive modeling solution that forecasts sales trends with 92% accuracy using historical data and market indicators. Helps optimize inventory and staffing decisions.",
      liveUrl: "#",
    },
  ];

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mern", label: "MERN Stack" },
    { id: "ai", label: "AI Solutions" },
    { id: "design", label: "Graphic Design" },
    { id: "python", label: "Python Dev" },
    { id: "data", label: "Data Analysis" },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader 
          title="Our Portfolio"
          subtitle="Explore our projects showcasing our expertise in MERN development, AI solutions, Python development, data analysis, and graphic design."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  : "glass-card text-white/70 hover:text-white"
              )}
              onClick={() => setActiveCategory(category.id as Category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.title}
                title={item.title}
                category={item.categoryLabel}
                image={item.image}
                description={item.description}
                liveUrl={item.liveUrl}
                githubUrl={item.githubUrl}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-white/70 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
