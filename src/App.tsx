
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
// import Videos from "./pages/Videos";
import BlogDetails from "./pages/BlogDetails";

// Components
import Layout from "./components/Layout";
// import AdminVideoUpload from "./components/AdminVideoUpload";
import AdminBlogUpload from "./components/AdminBlogUpload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:blogId" element={<BlogDetails />} />
              {/* <Route path="videos" element={<Videos />} /> */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              {/* <Route path="admin/video-upload" element={<AdminVideoUpload />} /> */}
              <Route path="admin/blog-upload" element={<AdminBlogUpload />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
