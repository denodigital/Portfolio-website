import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// Sample reels data - replace with your actual content
const reels = [
  {
    id: 1,
    thumbnail: "",
    video: "https://res.cloudinary.com/dfa1ausex/video/upload/v1766997724/Fuel_Your_Gains_1_fghmqp.mp4",
    title: "Captioned Video Content",
    
  },
  
  {
    id: 2,
    thumbnail: "",
    video: "https://res.cloudinary.com/dfa1ausex/video/upload/v1765625348/MrBeastRaw_1_sua4og.mp4",
    title: "3D Animated Video (just for showcasing my skill)",
  },
  {
    id: 3,
    thumbnail: "",
    video: "https://res.cloudinary.com/dfa1ausex/video/upload/v1767434447/Ant_-_TEST_VIDEO_iyksp8.mp4",
    title: "Advance Editing (just for showcasing my skill)",
  },
 
];

const ReelCard = ({ reel }: { reel: typeof reels[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={reel.video}
        poster={reel.thumbnail}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-background/90 rounded-full flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-foreground" />
            ) : (
              <Play className="w-8 h-8 text-foreground ml-1" />
            )}
          </div>
        </div>
      </div>

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-16">
        <p className="text-background text-sm font-medium line-clamp-2">{reel.title}</p>
      </div>
    </motion.div>
  );
};

export const ReelsShowcase = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Video Content
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Reels Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Short-form video content that captures attention and drives engagement
          </p>
        </AnimatedSection>

        
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.map((reel) => (
            <StaggerItem key={reel.id}>
              <ReelCard reel={reel} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        

        
      </div>
    </section>
  );
};
