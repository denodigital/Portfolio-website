import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Sparkles,
    title: "Content Creation",
    description: "Eye-catching visuals, compelling copy, and scroll-stopping content designed to engage your audience and amplify your brand voice.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Full-service social media management including strategy, scheduling, community engagement, and performance analytics.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Data-driven marketing strategies that align with your business goals and deliver measurable results.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive social media services to help your brand stand out and grow
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 bg-background rounded-2xl border-2 border-transparent hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
