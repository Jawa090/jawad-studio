
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/-alijawad/" },
    { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/Jawa090" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "https://twitter.com/" },
    { name: "Email", icon: <Mail size={18} />, url: "mailto:jstudio899@gmail.com" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="neo-blur border-t border-white/10 py-12 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-xl mb-4 text-gradient">J&A Studio</h3>
            <p className="text-sm text-white/70 max-w-md">
              Premium MERN stack development,  DevOps, UI/UX design, and machine learning services. We bring your ideas to life with modern technologies and creative design.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg mb-4 text-white">Contact</h3>
            <p className="text-sm text-white/70 mb-2">Lahore, Pakistan</p>
            <p className="text-sm text-white/70 mb-2">Jstudio899@gmail.com</p>
            <p className="text-sm text-white/70">+92 3434364680</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/50">
            &copy; {year} J&A Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/50 mt-2 md:mt-0">
            Designed & Developed with ❤️ by Jawad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
