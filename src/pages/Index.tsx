import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StakeholderCards from "@/components/StakeholderCards";
import FeatureShowcase from "@/components/FeatureShowcase";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StakeholderCards />
      <FeatureShowcase />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;