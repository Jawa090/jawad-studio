
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import SectionHeader from "@/components/SectionHeader";

const AdminBlogUpload = () => {
  const navigate = useNavigate();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [readTime, setReadTime] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Development", "Technology", "Design", "Business", "Marketing", "Tutorial"
  ];

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setAuthenticated(true);
      toast({
        title: "Authentication successful",
        description: "You can now upload blog posts.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "Incorrect password.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!blogTitle || !blogContent || !blogCategory || !imageUrl || !readTime) {
      toast({
        variant: "destructive",
        title: "Missing Fields",
        description: "Please fill out all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate upload process
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Blog Post Published",
        description: "Your blog post has been successfully published.",
      });
      
      // Reset form
      setBlogTitle("");
      setBlogContent("");
      setBlogCategory("");
      setImageUrl("");
      setReadTime("");
      
      // In a real application, this would send data to a backend
    }, 2000);
  };

  if (!authenticated) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-md">
          <SectionHeader 
            title="Admin Authentication"
            subtitle="Please enter your password to access the blog management panel."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-xl"
          >
            <form onSubmit={handleAuthentication}>
              <div className="space-y-4">
                <label className="block text-white/80 text-sm font-medium">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded bg-background border border-white/20 text-white"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              <div className="mt-6 text-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white px-8 py-2"
                >
                  Authenticate
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader 
          title="Admin Blog Management"
          subtitle="Create and publish new blog posts to showcase your expertise."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 rounded-xl"
        >
          <Button
            variant="outline"
            className="mb-6"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 md:col-span-2">
                <label className="block text-white/80 text-sm font-medium">
                  Blog Title*
                </label>
                <input
                  type="text"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  className="w-full p-3 rounded bg-background border border-white/20 text-white"
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="block text-white/80 text-sm font-medium">
                  Blog Content*
                </label>
                <textarea
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  className="w-full p-3 rounded bg-background border border-white/20 text-white h-64"
                  placeholder="Enter blog content (HTML formatting supported)"
                  required
                />
                <p className="text-xs text-white/60">You can use HTML tags for formatting.</p>
              </div>

              <div className="space-y-4">
                <label className="block text-white/80 text-sm font-medium">
                  Category*
                </label>
                <select
                  value={blogCategory}
                  onChange={(e) => setBlogCategory(e.target.value)}
                  className="w-full p-3 rounded bg-background border border-white/20 text-white"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <label className="block text-white/80 text-sm font-medium">
                  Read Time*
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full p-3 rounded bg-background border border-white/20 text-white"
                  placeholder="e.g., 5 min read"
                  required
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="block text-white/80 text-sm font-medium">
                  Feature Image URL*
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full p-3 rounded bg-background border border-white/20 text-white"
                  placeholder="https://example.com/image.jpg"
                  required
                />
                {imageUrl && (
                  <div className="mt-2 rounded overflow-hidden h-32 w-full">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1000&auto=format&fit=crop";
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="md:col-span-2 text-center mt-6">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white px-8 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">
                        <Upload className="h-5 w-5" />
                      </span>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-5 w-5" /> Publish Blog Post
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminBlogUpload;
