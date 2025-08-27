import { motion } from "framer-motion";
import { Book, Search, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    id: 1,
    icon: Book,
    title: "Module 1: What is Phishing?",
    description: "Learn the basics of phishing attacks, common tactics, and why they're so effective.",
    duration: "15 minutes",
    color: "primary",
  },
  {
    id: 2,
    icon: Search,
    title: "Module 2: Recognizing Phishing",
    description: "Identify red flags in emails, websites, and messages that indicate phishing attempts.",
    duration: "20 minutes",
    color: "accent",
  },
  {
    id: 3,
    icon: Users,
    title: "Module 3: Social Engineering",
    description: "Understand psychological manipulation tactics used by cybercriminals.",
    duration: "18 minutes",
    color: "destructive",
  },
];

export default function TrainingModules() {
  const handleModuleClick = (moduleId: number) => {
    // In a real application, this would navigate to the module content
    console.log(`Opening module ${moduleId}`);
  };

  return (
    <section id="training" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Training Modules
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive lessons designed to build your phishing detection skills step by step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="bg-background border border-border card-glow cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleModuleClick(module.id)}
                  data-testid={`card-module-${module.id}`}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-${module.color}/20 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`text-${module.color} h-6 w-6`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                    <p className="text-muted-foreground mb-4">{module.description}</p>
                    <div className="flex items-center text-primary text-sm">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
