import { motion } from "framer-motion";
import { MailOpen, Link, AlertTriangle, Lock, Shield, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const bestPractices = [
  {
    icon: MailOpen,
    title: "Check Sender's Email",
    description: "Always verify the sender's email address for typos, suspicious domains, or impersonation attempts.",
    color: "primary",
  },
  {
    icon: Link,
    title: "Verify URLs",
    description: "Hover over links to preview URLs and look for suspicious domains or redirects.",
    color: "accent",
  },
  {
    icon: AlertTriangle,
    title: "Beware of Urgency",
    description: "Be suspicious of messages creating false urgency or pressure to act immediately.",
    color: "destructive",
  },
  {
    icon: Lock,
    title: "Use 2FA",
    description: "Enable two-factor authentication on all important accounts for an extra layer of security.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Keep Software Updated",
    description: "Regularly update your browsers, antivirus, and operating system to patch security vulnerabilities.",
    color: "accent",
  },
  {
    icon: Phone,
    title: "Verify Phone Calls",
    description: "If contacted by phone, hang up and call the organization directly using official contact information.",
    color: "destructive",
  },
];

export default function BestPractices() {
  return (
    <section id="practices" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Best Practices
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Essential tips and techniques to protect yourself from phishing attacks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bestPractices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg h-24">
                  <CardContent className="p-4 flex items-center space-x-4 h-full">
                    <div className={`w-10 h-10 bg-${practice.color}/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${practice.color}/30 transition-colors`}>
                      <Icon className={`text-${practice.color} h-5 w-5`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold mb-1 truncate">{practice.title}</h3>
                      <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">{practice.description}</p>
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
