import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const caseStudies = [
  {
    id: 1,
    title: "Boutique Fashion Brand Launch",
    category: "E-commerce",
    description: "Grew Instagram following from 0 to 50K in 6 months with strategic content and influencer partnerships.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    results: "+50K Followers",
  },
  {
    id: 2,
    title: "Tech Startup Social Strategy",
    category: "B2B",
    description: "Increased LinkedIn engagement by 300% through thought leadership content and employee advocacy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    results: "300% Engagement",
  },
  {
    id: 3,
    title: "Local Restaurant Rebrand",
    category: "Food & Beverage",
    description: "Complete social media overhaul resulting in 200% increase in reservations through Instagram.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    results: "200% Bookings",
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how I've helped brands transform their social presence.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={study.image}
                    alt={study.title}
                    className="w-full aspect-[16/10] object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-bold rounded-full">
                      {study.results}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
