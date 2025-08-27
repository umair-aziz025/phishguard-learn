import { Shield, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const handleSocialShare = (platform: string) => {
    console.log(`Sharing on ${platform}`);
  };

  const downloadGuide = () => {
    console.log("Downloading guide");
  };

  const viewCertificate = () => {
    console.log("Viewing certificate");
  };

  const contactSupport = () => {
    window.location.href = "mailto:support@phishguard.com";
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="text-primary h-6 w-6 mr-2" />
              <span className="text-xl font-bold">PhishGuard</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering individuals and organizations to recognize and defend against phishing attacks through comprehensive cybersecurity education.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialShare('twitter')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialShare('linkedin')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialShare('github')}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Training</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('#training')}
                  className="hover:text-primary transition-colors"
                  data-testid="link-modules"
                >
                  Modules
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#practices')}
                  className="hover:text-primary transition-colors"
                  data-testid="link-best-practices"
                >
                  Best Practices
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#examples')}
                  className="hover:text-primary transition-colors"
                  data-testid="link-examples"
                >
                  Examples
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#quiz')}
                  className="hover:text-primary transition-colors"
                  data-testid="link-quiz"
                >
                  Quiz
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={downloadGuide}
                  className="hover:text-primary transition-colors"
                  data-testid="link-download-guide"
                >
                  Download Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={viewCertificate}
                  className="hover:text-primary transition-colors"
                  data-testid="link-certificate"
                >
                  Certificate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="hover:text-primary transition-colors"
                  data-testid="link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={contactSupport}
                  className="hover:text-primary transition-colors"
                  data-testid="link-support"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PhishGuard. All rights reserved. Built for cybersecurity education and awareness.</p>
        </div>
      </div>
    </footer>
  );
}
