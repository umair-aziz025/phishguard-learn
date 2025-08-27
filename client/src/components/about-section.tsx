import { motion } from "framer-motion";
import { GraduationCap, Users, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Umair Aziz",
    role: "Cybersecurity Analyst and Ethical Hacker",
    image: "/profile.png",
  },
  
];

export default function AboutSection() {
  const contactTeam = () => {
    window.location.href = "mailto:contact@phishguard.com";
  };

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About This Project
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          This phishing awareness training platform was developed to help individuals and organizations 
          build stronger defenses against cybersecurity threats through education and hands-on practice.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background border border-border p-4 hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <CardContent className="p-0 relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Educational Focus</h3>
                <p className="text-muted-foreground">Interactive learning modules designed by cybersecurity experts to maximize retention and practical application.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background border border-border p-4 hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <CardContent className="p-0 relative z-10">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">Built with feedback from security professionals and updated regularly with the latest threat intelligence.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Development Team</h3>
          <div className="flex justify-center items-center space-x-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="text-center hover:scale-110 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover" 
                />
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div 
          className="border-t border-border pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Questions or suggestions? We'd love to hear from you.</p>
          <Button 
            onClick={contactTeam}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold"
            data-testid="button-contact-team"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
