
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const blogPosts = [
  {
    id: "premium-mern-stack-development",
    title: "Premium MERN Stack Development",
    content: `
      <p class="mb-4">Our expert development team specializes in creating robust, scalable applications using MongoDB, Express, React, and Node.js. We deliver high-performance web solutions tailored to your business needs.</p>
      
      <h2 class="text-xl font-bold mb-3 mt-6">What Makes MERN Stack Special</h2>
      <p class="mb-4">The MERN stack is a powerful combination of technologies that enables rapid development of full-stack web applications. MongoDB provides a flexible, document-based database that scales with your application. Express offers a minimal and flexible Node.js web application framework. React delivers a responsive and dynamic front-end user interface. And Node.js enables server-side JavaScript execution for consistent development across your entire application.</p>
      
      <h2 class="text-xl font-bold mb-3 mt-6">Our Development Process</h2>
      <p class="mb-4">We follow a rigorous development process that ensures high-quality results:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Requirements gathering and analysis</li>
        <li class="mb-2">Architecture design and planning</li>
        <li class="mb-2">Development sprints with regular client feedback</li>
        <li class="mb-2">Comprehensive testing and quality assurance</li>
        <li class="mb-2">Deployment and ongoing support</li>
      </ul>
      
      <h2 class="text-xl font-bold mb-3 mt-6">Case Studies</h2>
      <p class="mb-4">We've delivered successful MERN stack applications for clients across various industries, including e-commerce, healthcare, finance, and education. Our applications are known for their performance, scalability, and user-friendly interfaces.</p>
      
      <p class="mb-4">Contact us today to discuss how our MERN stack development services can help your business succeed in the digital landscape.</p>
    `,
    date: "2024-05-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    category: "Development",
  },
  {
    id: "advanced-ai-solutions",
    title: "Advanced AI Solutions",
    content: `
      <p class="mb-4">Leverage cutting-edge artificial intelligence to transform your business. Our AI specialists create custom solutions for automation, data analysis, and intelligent decision-making systems.</p>
      
      <h2 class="text-xl font-bold mb-3 mt-6">AI Technologies We Use</h2>
      <p class="mb-4">We work with a range of AI technologies to deliver the best solutions for our clients:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Machine Learning (ML) for pattern recognition and prediction</li>
        <li class="mb-2">Natural Language Processing (NLP) for text analysis and generation</li>
        <li class="mb-2">Computer Vision for image and video analysis</li>
        <li class="mb-2">Reinforcement Learning for optimizing complex systems</li>
        <li class="mb-2">Deep Learning for solving complex problems</li>
      </ul>
      
      <h2 class="text-xl font-bold mb-3 mt-6">Business Applications</h2>
      <p class="mb-4">Our AI solutions can be applied to various business challenges:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Customer service automation with intelligent chatbots</li>
        <li class="mb-2">Predictive analytics for business forecasting</li>
        <li class="mb-2">Recommendation systems for personalized customer experiences</li>
        <li class="mb-2">Process automation for increased efficiency</li>
        <li class="mb-2">Fraud detection and security enhancements</li>
      </ul>
      
      <p class="mb-4">Partner with us to harness the power of AI and stay ahead in today's competitive marketplace.</p>
    `,
    date: "2024-05-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1677442135017-cccf91b68ecd?q=80&w=2070&auto=format&fit=crop",
    category: "Technology",
  },
  {
    id: "creative-graphic-design",
    title: "Creative Graphic Design",
    content: `
      <p class="mb-4">Our creative team delivers eye-catching visual designs that communicate your brand message effectively. From logos to marketing materials, we bring your vision to life.</p>
      
      <h2 class="text-xl font-bold mb-3 mt-6">Design Services</h2>
      <p class="mb-4">We offer a comprehensive range of graphic design services:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Brand identity development (logos, color schemes, typography)</li>
        <li class="mb-2">Marketing materials (brochures, flyers, business cards)</li>
        <li class="mb-2">Social media graphics and digital advertising</li>
        <li class="mb-2">Website design and UI/UX</li>
        <li class="mb-2">Packaging design</li>
        <li class="mb-2">Illustration and custom artwork</li>
      </ul>
      
      <h2 class="text-xl font-bold mb-3 mt-6">Our Design Process</h2>
      <p class="mb-4">We follow a collaborative design process to ensure your satisfaction:</p>
      <ol class="list-decimal pl-6 mb-4">
        <li class="mb-2">Discovery: We learn about your brand, goals, and target audience</li>
        <li class="mb-2">Concept Development: We create initial design concepts</li>
        <li class="mb-2">Feedback and Refinement: We refine the designs based on your feedback</li>
        <li class="mb-2">Finalization: We polish the designs and prepare them for delivery</li>
        <li class="mb-2">Implementation: We help you implement the designs across your channels</li>
      </ol>
      
      <p class="mb-4">Let us help you create visually stunning designs that elevate your brand and captivate your audience.</p>
    `,
    date: "2024-05-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1969&auto=format&fit=crop",
    category: "Design",
  }
];

const BlogDetails = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  
  const blogPost = blogPosts.find(post => post.id === blogId);
  
  if (!blogPost) {
    console.error("404 Error: User attempted to access non-existent route: /blog/" + blogId);
    return (
      <div className="container mx-auto py-32 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
      </div>
    );
  }
  
  return (
    <section className="container mx-auto pt-32 pb-16 px-6 md:px-12">
      <Button 
        variant="outline" 
        className="mb-8"
        onClick={() => navigate("/blog")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Button>
      
      <motion.div 
        className="glass-card overflow-hidden rounded-xl p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full h-64 md:h-96 mb-6 overflow-hidden rounded-lg">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1000&auto=format&fit=crop";
            }}
          />
        </div>
        
        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{blogPost.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{blogPost.readTime}</span>
          </div>
          <span className="px-3 py-1 bg-neon-blue/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            {blogPost.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{blogPost.title}</h1>
        
        <div 
          className="prose prose-invert max-w-none" 
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </motion.div>
    </section>
  );
};

export default BlogDetails;
