import { motion } from "framer-motion";
import { Play, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToTraining = () => {
    const element = document.querySelector('#training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExamples = () => {
    const element = document.querySelector('#examples');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cyber-gradient overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-cyber-glow">
            Spot the Phish. <span className="text-primary">Stay Secure.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how to identify phishing attacks and protect yourself online with our comprehensive, interactive training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToTraining}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-start-training"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Training
            </Button>
            <Button 
              onClick={scrollToExamples}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
              data-testid="button-view-examples"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary text-2xl" />
      </motion.div>
    </section>
  );
}
