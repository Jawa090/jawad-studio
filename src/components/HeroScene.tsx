
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroScene = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <div className="w-full h-full relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black/50 animate-gradient" />
        
        {/* Floating circles */}
        {mounted && (
          <>
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 12, // Fixed: replaced 'a' with a specific duration value
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ top: "30%", left: "20%" }}
            />
            
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ top: "40%", right: "10%" }}
            />
            
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"
              animate={{
                x: [0, 20, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ bottom: "15%", left: "30%" }}
            />
          </>
        )}
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </div>
  );
};

export default HeroScene;
