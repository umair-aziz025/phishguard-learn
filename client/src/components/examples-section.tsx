import { useState } from "react";
import { motion } from "framer-motion";
import { Target, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const redFlags = [
  {
    title: "Suspicious Email Address",
    description: "The sender uses 'securityteam@amaz0n-security.com' instead of the legitimate 'security@amazon.com'",
  },
  {
    title: "Urgent Language",
    description: "\"IMMEDIATE ACTION REQUIRED\" and threats of account suspension create false urgency",
  },
  {
    title: "Suspicious Link",
    description: "The link points to 'secure-amazon-verify.netlify.app' instead of Amazon's official domain",
  },
];

const examples = [
  {
    title: "Business Email Compromise",
    description: "CEO impersonation requesting urgent wire transfer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Fake Banking Website",
    description: "Counterfeit login page harvesting credentials",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
  {
    title: "Social Media Scam",
    description: "Fake security alert requesting password reset",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  },
];

export default function ExamplesSection() {
  const [currentExample, setCurrentExample] = useState(0);

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
  };

  const viewExample = (index: number) => {
    setCurrentExample(index);
  };

  return (
    <section id="examples" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real-World Examples
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Learn to identify phishing attempts through real examples with highlighted red flags.
          </motion.p>
        </div>

        {/* Interactive Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-background border border-border p-8 mb-12">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <Target className="mr-2 h-6 w-6" />
                Interactive Challenge: Spot the Phish!
              </h3>
              <Card className="bg-card border border-border p-6 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                  alt="Cybersecurity threat detection interface" 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                
                <div className="space-y-4">
                  {redFlags.map((flag, index) => (
                    <motion.div
                      key={flag.title}
                      className="bg-destructive/10 border border-destructive/20 rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="text-destructive h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-destructive mb-1">{flag.title}</h4>
                          <p className="text-sm text-muted-foreground">{flag.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-primary mb-4">🎉 Great job! You identified all the red flags!</p>
                <Button 
                  onClick={nextExample}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold"
                  data-testid="button-next-example"
                >
                  Try Another Example
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Examples Carousel */}
        <div className="relative">
          <h3 className="text-xl font-semibold mb-6 text-center">More Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="bg-background border border-border card-glow cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => viewExample(index)}
                  data-testid={`card-example-${index}`}
                >
                  <CardContent className="p-4">
                    <img 
                      src={example.image} 
                      alt={example.title} 
                      className="w-full h-32 object-cover rounded mb-3" 
                    />
                    <h4 className="font-semibold mb-2">{example.title}</h4>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
