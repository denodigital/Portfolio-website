import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Users, TrendingUp, Award } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const metrics = [
  {
    icon: Eye,
    value: 25,
    suffix: "K+",
    label: "Impressions Generated",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Followers Gained",
  },
  {
    icon: TrendingUp,
    value: 35,
    suffix: "%",
    label: "Avg. Engagement Increase",
  },
  {
    icon: Award,
    value: 3,
    suffix: "+",
    label: "Happy Clients",
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

export const Results = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Numbers That Speak</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results that demonstrate the impact of strategic social media management
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 bg-background rounded-2xl shadow-lg border border-border"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <metric.icon className="w-7 h-7 text-primary" />
                </div>
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                <p className="mt-2 text-muted-foreground font-medium">{metric.label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

       
      </div>
    </section>
  );
};
