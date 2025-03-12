
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Play, Calendar, Clock } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface VideoProps {
//   video: {
//     id: string;
//     title: string;
//     description: string;
//     thumbnail: string;
//     videoUrl: string;
//     date: string;
//     duration: string;
//     category: string;
//   };
//   index: number;
// }

// const VideoCard = ({ video, index }: VideoProps) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Format date to be more readable
//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <motion.div
//       className="glass-card overflow-hidden rounded-xl relative group"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//     >
//       {!isPlaying ? (
//         <>
//           <div className="relative">
//             <img 
//               src={video.thumbnail} 
//               alt={video.title} 
//               className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
//               onError={(e) => {
//                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581591524083-b2ea25fa1254?q=80&w=1917&auto=format&fit=crop";
//               }}
//             />
//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <button
//                 className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all"
//                 onClick={() => setIsPlaying(true)}
//               >
//                 <Play className="w-8 h-8 text-white fill-white" />
//               </button>
//             </div>
//             <div className="absolute top-3 right-3 bg-black/70 text-white text-xs py-1 px-2 rounded">
//               {video.duration}
//             </div>
//             <div className="absolute top-3 left-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs py-1 px-2 rounded">
//               {video.category}
//             </div>
//           </div>
//           <div className="p-4">
//             <h3 className="font-display font-semibold text-lg mb-2">{video.title}</h3>
//             <p className="text-white/70 text-sm mb-3 line-clamp-2">{video.description}</p>
//             <div className="flex items-center gap-4 text-xs text-white/60">
//               <div className="flex items-center gap-1">
//                 <Calendar className="w-3 h-3" />
//                 <span>{formatDate(video.date)}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Clock className="w-3 h-3" />
//                 <span>{video.duration}</span>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="aspect-video h-full">
//           <iframe
//             src={video.videoUrl}
//             title={video.title}
//             className="w-full h-full"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//           <button
//             className="absolute top-4 right-4 bg-black/70 text-white p-1 rounded-full"
//             onClick={() => setIsPlaying(false)}
//           >
//             ✕
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default VideoCard;
