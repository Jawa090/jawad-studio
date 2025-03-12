
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Upload, X, Check, ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";
// import SectionHeader from "@/components/SectionHeader";

// const AdminVideoUpload = () => {
//   const navigate = useNavigate();
//   const [videoTitle, setVideoTitle] = useState("");
//   const [videoDescription, setVideoDescription] = useState("");
//   const [videoCategory, setVideoCategory] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");
//   const [thumbnailUrl, setThumbnailUrl] = useState("");
//   const [duration, setDuration] = useState("");
//   const [isUploading, setIsUploading] = useState(false);

//   const categories = [
//     "React", "Next.js", "AI", "Machine Learning", "CSS", "WebAssembly", "TypeScript", "Node.js"
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!videoTitle || !videoDescription || !videoCategory || !videoUrl) {
//       toast({
//         variant: "destructive",
//         title: "Missing Fields",
//         description: "Please fill out all required fields.",
//       });
//       return;
//     }

//     setIsUploading(true);

//     // Simulate upload process
//     setTimeout(() => {
//       setIsUploading(false);
//       toast({
//         title: "Video Uploaded",
//         description: "Your video has been successfully uploaded.",
//       });
      
//       // Reset form
//       setVideoTitle("");
//       setVideoDescription("");
//       setVideoCategory("");
//       setVideoUrl("");
//       setThumbnailUrl("");
//       setDuration("");
      
//       // In a real application, this would send data to a backend
//     }, 2000);
//   };

//   return (
//     <div className="pt-32 pb-20 px-6">
//       <div className="container mx-auto max-w-4xl">
//         <SectionHeader 
//           title="Admin Video Upload"
//           subtitle="Upload new tech demo videos to showcase on your platform."
//         />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="glass-card p-6 rounded-xl"
//         >
//           <Button
//             variant="outline"
//             className="mb-6"
//             onClick={() => navigate("/videos")}
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Videos
//           </Button>

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-4 md:col-span-2">
//                 <label className="block text-white/80 text-sm font-medium">
//                   Video Title*
//                 </label>
//                 <input
//                   type="text"
//                   value={videoTitle}
//                   onChange={(e) => setVideoTitle(e.target.value)}
//                   className="w-full p-3 rounded bg-background border border-white/20 text-white"
//                   placeholder="Enter video title"
//                   required
//                 />
//               </div>

//               <div className="space-y-4 md:col-span-2">
//                 <label className="block text-white/80 text-sm font-medium">
//                   Video Description*
//                 </label>
//                 <textarea
//                   value={videoDescription}
//                   onChange={(e) => setVideoDescription(e.target.value)}
//                   className="w-full p-3 rounded bg-background border border-white/20 text-white h-32"
//                   placeholder="Enter video description"
//                   required
//                 />
//               </div>

//               <div className="space-y-4">
//                 <label className="block text-white/80 text-sm font-medium">
//                   Category*
//                 </label>
//                 <select
//                   value={videoCategory}
//                   onChange={(e) => setVideoCategory(e.target.value)}
//                   className="w-full p-3 rounded bg-background border border-white/20 text-white"
//                   required
//                 >
//                   <option value="">Select a category</option>
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="space-y-4">
//                 <label className="block text-white/80 text-sm font-medium">
//                   Duration*
//                 </label>
//                 <input
//                   type="text"
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   className="w-full p-3 rounded bg-background border border-white/20 text-white"
//                   placeholder="e.g., 12:45"
//                   required
//                 />
//               </div>

//               <div className="space-y-4">
//                 <label className="block text-white/80 text-sm font-medium">
//                   Video URL (YouTube or Vimeo Embed URL)*
//                 </label>
//                 <input
//                   type="url"
//                   value={videoUrl}
//                   onChange={(e) => setVideoUrl(e.target.value)}
//                   className="w-full p-3 rounded bg-background border border-white/20 text-white"
//                   placeholder="https://www.youtube.com/embed/..."
//                   required
//                 />
//               </div>

//               <div className="space-y-4">
//                 <label className="block text-white/80 text-sm font-medium">
//                   Thumbnail URL*
//                 </label>
//                 <input
//                   type="url"
//                   value={thumbnailUrl}
//                   onChange={(e) => setThumbnailUrl(e.target.value)}
//                   className="w-full p-3 rounded bg-background border border-white/20 text-white"
//                   placeholder="https://example.com/thumbnail.jpg"
//                   required
//                 />
//               </div>

//               <div className="md:col-span-2 text-center mt-6">
//                 <Button
//                   type="submit"
//                   className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white px-8 py-2"
//                   disabled={isUploading}
//                 >
//                   {isUploading ? (
//                     <>
//                       <span className="animate-spin mr-2">
//                         <Upload className="h-5 w-5" />
//                       </span>
//                       Uploading...
//                     </>
//                   ) : (
//                     <>
//                       <Upload className="mr-2 h-5 w-5" /> Upload Video
//                     </>
//                   )}
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AdminVideoUpload;
