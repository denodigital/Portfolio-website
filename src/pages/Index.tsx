import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PostsShowcase } from "@/components/PostsShowcase";
import { ReelsShowcase } from "@/components/ReelsShowcase";
import { CaseStudies } from "@/components/CaseStudies";
import { Results } from "@/components/Results";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <PostsShowcase />
      </section>
      <section id="reels">
        <ReelsShowcase />
      </section>
      <section id="case-studies">
        {/* <CaseStudies /> */}
      </section>
      <section id="results">
        <Results />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
