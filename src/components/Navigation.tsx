
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code, PaintBucket, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "neo-blur" : "bg-transparent"
      )}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          variants={itemVariants}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <Code className="text-neon-blue animate-pulse-slow" size={28} />
              <PaintBucket className="absolute -bottom-2 -right-2 text-neon-purple animate-pulse-slow" size={20} />
            </div>
            <span className="text-white font-display text-xl">
              <span className="text-gradient font-bold">J&A</span> Studio
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex items-center gap-8" variants={navVariants}>
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                to={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-neon-blue",
                  location.pathname === link.path
                    ? "text-neon-blue"
                    : "text-white/80"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-neon-blue"
                    layoutId="underline"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          variants={itemVariants}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full neo-blur py-6 px-6 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base py-2 transition-colors",
                  location.pathname === link.path
                    ? "text-neon-blue"
                    : "text-white/80"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navigation;
