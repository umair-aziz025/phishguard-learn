import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OverviewSection from "@/components/overview-section";
import TrainingModules from "@/components/training-modules";
import BestPractices from "@/components/best-practices";
import ExamplesSection from "@/components/examples-section";
import QuizSection from "@/components/quiz-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <TrainingModules />
      <BestPractices />
      <ExamplesSection />
      <QuizSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
