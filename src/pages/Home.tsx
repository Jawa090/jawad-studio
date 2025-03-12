
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroScene from "@/components/HeroScene";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Cpu, 
  PaintBucket, 
  ChevronRight, 
  MonitorSmartphone, 
  Database, 
  Layers,
  Terminal,
  BrainCircuit,
  Server
} from "lucide-react";

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: <Code size={40} />,
      title: "MERN Stack Development",
      description:
        "Full-stack web solutions with MongoDB, Express.js, React, and Node.js. We build scalable, modern applications tailored to your business needs.",
    },
    {
      icon: <Cpu size={40} />,
      title: "AI Solutions",
      description:
        "Leverage the power of artificial intelligence for your business. From chatbots to data analysis, we implement cutting-edge AI technologies.",
    },
    {
      icon: <PaintBucket size={40} />,
      title: "Graphic Design",
      description:
        "Eye-catching visual designs that communicate your brand message effectively. Logos, marketing materials, UI designs, and more.",
    },
    {
      icon: <Terminal size={40} />,
      title: "Python Development",
      description:
        "Custom Python solutions for backend services, data processing, and automation. We create efficient and maintainable Python applications.",
    },
    {
      icon: <Database size={40} />,
      title: "Data Analysis",
      description:
        "Transform raw data into actionable insights. We provide comprehensive data analysis services to help you make informed business decisions.",
    },
    {
      icon: <BrainCircuit size={40} />,
      title: "Machine Learning",
      description:
        "Advanced ML solutions that help your business automate processes and gain valuable insights from your data using state-of-the-art algorithms.",
    },
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      description:
        "A full-featured e-commerce platform with product management, user authentication, and payment processing.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      category: "AI Solution",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      description:
        "An AI-powered content generation tool that helps create marketing copy, blog posts, and social media content.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fashion Brand Identity",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1600694077061-7c0a2582f15a?q=80&w=1000&auto=format&fit=crop",
      description:
        "Complete brand identity design for a modern fashion label, including logo, packaging, and marketing materials.",
      liveUrl: "#",
    },
    {
      title: "Data Processing Pipeline",
      category: "Python Development",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      description:
        "Automated data processing system built with Python that efficiently handles large volumes of data and generates meaningful reports.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Market Trend Analysis",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      description:
        "Comprehensive market trend analysis dashboard that helps businesses identify opportunities and make data-driven strategic decisions.",
      liveUrl: "#",
    },
    {
      title: "Predictive Maintenance System",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1000&auto=format&fit=crop",
      description:
        "ML-powered predictive maintenance system for industrial equipment that forecasts failures before they occur, reducing downtime and maintenance costs.",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        <HeroScene />
        
        <motion.div 
          className="container mx-auto relative z-10 text-center pt-20"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="inline-block mb-4 text-sm md:text-base px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue">
              MERN Stack Development, AI Solutions, and Graphic Design
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight md:leading-tight max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Bringing Your <span className="text-gradient">Digital Vision</span> to Life
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Expert MERN Stack Development, Python Solutions, AI Integration, Data Analysis, Machine Learning, and Graphic Design Services
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link to="/portfolio">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg px-6 py-6 hover:opacity-90 transition-all">
                View Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Who We Are"
            subtitle="We are a team of experts dedicated to creating exceptional digital experiences through code, data, and design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-neon-blue">Tech Expertise</span>
              </h3>
              <p className="text-white/70 mb-6">
                Our team consists of skilled developers specialized in MERN stack, Python, Machine Learning, and DevOps. We bring technical precision and innovation to every project, ensuring robust and scalable solutions.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <MonitorSmartphone className="text-neon-blue h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Full-Stack Development</p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <BrainCircuit className="text-neon-green h-6 w-6 mb-2" />
                  <p className="text-sm text-white">AI & ML Integration</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-neon-purple">Creative & Data Insights</span>
              </h3>
              <p className="text-white/70 mb-6">
                Our design and data teams transform concepts into visually appealing designs and actionable insights that captivate audiences, strengthen brand identities, and drive data-informed decisions.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <PaintBucket className="text-neon-purple h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Visual Design</p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <Database className="text-neon-purple h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Data Analysis</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/about">
              <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                Explore All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Take a look at some of our recent work showcasing our expertise and creativity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                description={item.description}
                liveUrl={item.liveUrl}
                githubUrl={item.githubUrl}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-black/40 to-black/60">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to bring your <span className="text-gradient">ideas to life</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Let's collaborate to create something amazing together. We're excited to hear about your project!
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg px-8 py-6 hover:opacity-90 transition-all">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
