import { motion } from "framer-motion";
import { HelpCircle, AlertTriangle, Shield } from "lucide-react";

const overviewItems = [
  {
    icon: HelpCircle,
    title: "What is Phishing?",
    description: "Understand the fundamentals of phishing attacks and how cybercriminals exploit human psychology.",
    color: "primary",
  },
  {
    icon: AlertTriangle,
    title: "Why It's Dangerous",
    description: "Learn about the real-world consequences of falling victim to phishing attacks.",
    color: "destructive",
  },
  {
    icon: Shield,
    title: "How We Help You Stay Safe",
    description: "Discover practical techniques and tools to protect yourself from phishing attempts.",
    color: "accent",
  },
];

export default function OverviewSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {overviewItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`text-${item.color} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
