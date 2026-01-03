import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// Sample posts data - replace with your actual content
const posts = [
  {
    id: 1,
    image: "https://ik.imagekit.io/r0owntd5ac/if%20you%20can%20bench%20press%20150%20KG%20You%20are%20stronger%20than%20about%2099_%20of%20people%20on%20earth.png",
    caption: "Value Based Post",
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/r0owntd5ac/HOW%20TO%20GET%20CHEST%20&%20BACK%20(1).png",
    caption: "Infomational Post",
  },
  {
    id: 3,
    image: "https://ik.imagekit.io/r0owntd5ac/Fitness.png",
    caption: "General Post about fitness 🏋️‍♂️",
  },
  {
    id: 4,
    image: "https://ik.imagekit.io/r0owntd5ac/Gym%20Sample%20Post.png",
    caption: "General Post about fitness 🏋️‍♂️",
  },
  {
    id: 5,
    image: "https://ik.imagekit.io/r0owntd5ac/High%20Protein%20snack.png",
    caption: "Infographic on high protein snacks ",
  },
  {
    id: 6,
    image: "https://ik.imagekit.io/r0owntd5ac/Meal%20Ideas%20Post.png",
    caption: "Infographic on meal ideas ",
  },
];

export const PostsShowcase = () => {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Posts Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of Instagram posts and content I've created for clients
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <StaggerItem key={post.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPost(post)}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-background text-sm font-medium line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-background rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                className="w-full aspect-square object-cover"
              />
              <div className="p-6">
                <p className="text-foreground">{selectedPost.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
