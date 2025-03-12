import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail, Terminal, Database, Code, Server, BrainCircuit, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
    dribbble?: string;
    whatsapp?: string;
  };
  index: number;
}

const TeamMember = ({
  name,
  role,
  image,
  bio,
  socialLinks,
  index,
}: TeamMemberProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRoleIcon = () => {
    if (role.toLowerCase().includes("python")) {
      return <Terminal className="absolute bottom-3 right-3 text-neon-blue/20" size={50} />;
    } else if (role.toLowerCase().includes("data")) {
      return <Database className="absolute bottom-3 right-3 text-neon-purple/20" size={50} />;
    } else if (role.toLowerCase().includes("ml") || role.toLowerCase().includes("machine learning")) {
      return <BrainCircuit className="absolute bottom-3 right-3 text-neon-green/20" size={50} />;
    } else if (role.toLowerCase().includes("devops")) {
      return <Server className="absolute bottom-3 right-3 text-neon-orange/20" size={50} />;
    } else if (role.toLowerCase().includes("developer")) {
      return <Code className="absolute bottom-3 right-3 text-neon-blue/20" size={50} />;
    }
    return null;
  };

  const socialIcons = [
    { key: "linkedin", icon: <Linkedin size={16} />, url: socialLinks.linkedin },
    { key: "github", icon: <Github size={16} />, url: socialLinks.github },
    { key: "twitter", icon: <Twitter size={16} />, url: socialLinks.twitter },
    { key: "email", icon: <Mail size={16} />, url: socialLinks.email && `mailto:${socialLinks.email}` },
    { key: "whatsapp", icon: <MessageSquare size={16} />, url: socialLinks.whatsapp && `https://wa.me/${socialLinks.whatsapp}` },
  ].filter((item) => item.url);

  return (
    <motion.div
      className="glass-card rounded-xl overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col items-center pt-6">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h3 className="text-lg font-display font-bold text-white">{name}</h3>
        <p className={cn(
          "font-medium text-xs mt-1 mb-2",
          role.toLowerCase().includes("python") ? "text-neon-blue" : 
          role.toLowerCase().includes("data") ? "text-neon-purple" : 
          role.toLowerCase().includes("ml") ? "text-neon-green" :
          role.toLowerCase().includes("devops") ? "text-neon-orange" :
          role.toLowerCase().includes("developer") ? "text-neon-blue" :
          "text-neon-blue"
        )}>{role}</p>
      </div>
      <div className="p-4 relative">
        {getRoleIcon()}
        <div className="relative">
          <p className={cn(
            "text-white/70 text-xs mb-3 text-center transition-all duration-300",
            isExpanded ? "" : "line-clamp-3"
          )}>{bio}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-full text-white/50 hover:text-white transition-colors text-xs gap-1"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Read More <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
        
        {socialIcons.length > 0 && (
          <div className="flex justify-center space-x-2 mt-3">
            {socialIcons.map(({ key, icon, url }) => (
              <motion.a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-neon-blue transition-colors p-1.5 glass-card rounded-full"
                whileHover={{ scale: 1.1 }}
                aria-label={key}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember;
