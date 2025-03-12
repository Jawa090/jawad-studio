
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Shield, 
  BarChart3,
  Cpu, 
  BrainCircuit, 
  Bot, 
  MessageSquareText, 
  FileText, 
  LineChart,
  PaintBucket, 
  Palette, 
  Layers, 
  Image, 
  Film, 
  Layout
} from "lucide-react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceItem = ({ icon, title, description, index }: ServiceItemProps) => {
  // Create an array of parts from the title, splitting by the & character
  const titleParts = title.split('&');
  
  return (
    <motion.div
      className="glass-card p-6 rounded-xl transition-all duration-300 hover:neon-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1 text-neon-blue">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold mb-2 text-white">
            {titleParts.map((part, index) => (
              <span key={index}>
                {index > 0 && <span className="font-normal">&amp;</span>} {part}
              </span>
            ))}
          </h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const mernServices = [
    {
      icon: <Code size={24} />,
      title: "Custom Web Application Development",
      description: "Tailored web applications built with the MERN stack (MongoDB, Express.js, React, Node.js) to meet your specific business requirements.",
    },
    {
      icon: <Database size={24} />,
      title: "Database Design & Management",
      description: "Efficient database architecture and management using MongoDB, ensuring optimal performance and scalability for your applications.",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Deployment & DevOps",
      description: "Seamless deployment of your applications to cloud platforms with CI/CD pipelines for continuous integration and delivery.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive & Mobile-First Design",
      description: "Creating responsive web applications that provide optimal user experience across all devices and screen sizes.",
    },
    {
      icon: <Shield size={24} />,
      title: "Security Implementation",
      description: "Robust security measures including authentication, authorization, data encryption, and protection against common web vulnerabilities.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "API Development & Integration",
      description: "Building custom RESTful APIs and integrating third-party services to extend your application's functionality.",
    },
  ];

  const aiServices = [
    {
      icon: <Cpu size={24} />,
      title: "Machine Learning Integration",
      description: "Implementing machine learning algorithms to enable predictive capabilities and data-driven decision making in your applications.",
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Natural Language Processing",
      description: "Leveraging NLP technologies to enable your applications to understand, interpret, and generate human language.",
    },
    {
      icon: <Bot size={24} />,
      title: "Chatbots & Virtual Assistants",
      description: "Creating intelligent conversational interfaces that can assist users, answer questions, and automate customer support.",
    },
    {
      icon: <MessageSquareText size={24} />,
      title: "Sentiment Analysis",
      description: "Analyzing text data to determine emotional tone and customer sentiment for better business insights.",
    },
    {
      icon: <FileText size={24} />,
      title: "Document Processing & OCR",
      description: "Automated document processing, text extraction, and classification using optical character recognition and AI algorithms.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Predictive Analytics",
      description: "Utilizing historical data to forecast trends, behaviors, and outcomes for informed business planning.",
    },
  ];

  const designServices = [
    {
      icon: <PaintBucket size={24} />,
      title: "Brand Identity Design",
      description: "Creating comprehensive brand identities including logos, color palettes, typography, and brand guidelines.",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Intuitive user interface and experience design that enhances usability and creates memorable interactions.",
    },
    {
      icon: <Layers size={24} />,
      title: "Print & Packaging Design",
      description: "Eye-catching print materials and packaging designs that effectively communicate your brand message.",
    },
    {
      icon: <Image size={24} />,
      title: "Social Media Graphics",
      description: "Engaging social media assets optimized for different platforms to boost your online presence.",
    },
    {
      icon: <Film size={24} />,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and animations that bring your brand to life and capture audience attention.",
    },
    {
      icon: <Layout size={24} />,
      title: "Marketing Collateral",
      description: "Professional marketing materials including brochures, flyers, banners, and presentations to support your sales efforts.",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader 
          title="Our Services"
          subtitle="We offer a comprehensive range of services to help your business thrive in the digital landscape."
        />

        <div className="space-y-24">
          {/* MERN Stack Services */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-neon-blue">MERN Stack Development</span>
              </h2>
              <p className="text-white/70 max-w-4xl">
                Our MERN stack development services focus on creating robust, scalable web applications 
                using MongoDB, Express.js, React, and Node.js. We deliver high-performance solutions
                that meet modern business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mernServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* AI Services */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-neon-purple">AI Solutions</span>
              </h2>
              <p className="text-white/70 max-w-4xl">
                We harness the power of artificial intelligence to create intelligent applications 
                that can learn, adapt, and provide valuable insights. Our AI solutions are designed 
                to automate processes, enhance decision-making, and improve user experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Design Services */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-gradient">Graphic Design</span>
              </h2>
              <p className="text-white/70 max-w-4xl">
                Our graphic design services transform ideas into visually compelling assets 
                that communicate your brand message effectively. We combine creativity with 
                strategic thinking to create designs that resonate with your target audience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Process Section */}
        <section className="mt-24">
          <SectionHeader 
            title="Our Process"
            subtitle="We follow a structured process to ensure every project is delivered with the highest quality and efficiency."
          />

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {/* Step 1 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">1. Discovery & Planning</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We start by understanding your business goals, target audience, and project requirements to create a solid foundation for your project.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Requirement gathering and analysis</li>
                    <li>Market and competitor research</li>
                    <li>Project scope definition</li>
                    <li>Timeline and milestone planning</li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-1">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Wireframing and prototyping</li>
                    <li>UI/UX design development</li>
                    <li>Architecture planning</li>
                    <li>Technology stack finalization</li>
                  </ul>
                </div>
                <div className="md:pl-12 relative md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">2. Design & Strategy</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We create comprehensive designs and technical strategies that align with your business objectives and user expectations.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">3. Development & Implementation</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    Our development team brings designs to life, creating robust, scalable, and maintainable code with regular progress updates.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Frontend and backend development</li>
                    <li>Database implementation</li>
                    <li>API integration</li>
                    <li>Regular code reviews and testing</li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-1">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Functionality testing</li>
                    <li>Performance optimization</li>
                    <li>Security testing</li>
                    <li>User acceptance testing</li>
                  </ul>
                </div>
                <div className="md:pl-12 relative md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">4. Testing & Quality Assurance</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We rigorously test all aspects of your project to ensure functionality, performance, and security meet the highest standards.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">5. Deployment & Launch</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We handle the deployment process to ensure a smooth and successful launch of your project with minimal downtime.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Deployment planning</li>
                    <li>Environment setup</li>
                    <li>Data migration (if required)</li>
                    <li>Launch coordination</li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 6 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-1">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Ongoing maintenance</li>
                    <li>Performance monitoring</li>
                    <li>Feature enhancements</li>
                    <li>Technical support</li>
                  </ul>
                </div>
                <div className="md:pl-12 relative md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">6. Maintenance & Support</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We provide ongoing support and maintenance services to ensure your project continues to perform optimally and evolve with your business.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
