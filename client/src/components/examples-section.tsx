import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, AlertTriangle, ChevronLeft, ChevronRight, Mail, Globe, MessageCircle, Shield, X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const phishingExamples = [
  {
    id: 1,
    type: "email",
    title: "Fake Amazon Security Alert",
    domain: "amazon.com",
    isPhishing: true,
    content: {
      from: "security@amaz0n-alerts.com",
      subject: "URGENT: Your account will be suspended!",
      body: "Your Amazon account has been compromised. Click here immediately to verify your identity: https://secure-amazon-verify.netlify.app/login",
    },
    redFlags: [
      "Suspicious sender domain (amaz0n instead of amazon)",
      "Creates false urgency with threats",
      "Suspicious URL using third-party domain",
      "Generic greeting without personalization"
    ],
    tags: ["Email", "Impersonation", "URL Manipulation"]
  },
  {
    id: 2,
    type: "website",
    title: "Legitimate PayPal Login",
    domain: "paypal.com",
    isPhishing: false,
    content: {
      url: "https://www.paypal.com/signin",
      features: "Secure HTTPS connection, official domain, proper SSL certificate",
    },
    positiveFlags: [
      "Official PayPal domain",
      "Secure HTTPS connection",
      "Proper SSL certificate",
      "Consistent branding and design"
    ],
    tags: ["Website", "Legitimate", "Secure"]
  },
  {
    id: 3,
    type: "sms",
    title: "Fake Bank SMS",
    domain: "bank.com",
    isPhishing: true,
    content: {
      from: "+1-555-BANK",
      message: "ALERT: Unusual activity detected on your account. Reply with your PIN to verify: bit.ly/bank-verify-123",
    },
    redFlags: [
      "Requests sensitive information via SMS",
      "Uses shortened URL to hide destination",
      "Creates urgency with security alert",
      "Asks for PIN verification via text"
    ],
    tags: ["SMS", "Social Engineering", "Information Theft"]
  },
  {
    id: 4,
    type: "email",
    title: "Legitimate Microsoft Update",
    domain: "microsoft.com",
    isPhishing: false,
    content: {
      from: "microsoft-noreply@microsoft.com",
      subject: "Your Microsoft 365 subscription renewal",
      body: "Your subscription will renew on March 15th. View details in your account dashboard.",
    },
    positiveFlags: [
      "Official Microsoft domain",
      "No urgent action required",
      "Directs to official account dashboard",
      "Professional tone and formatting"
    ],
    tags: ["Email", "Legitimate", "Subscription"]
  },
  {
    id: 5,
    type: "website",
    title: "Fake Netflix Login Page",
    domain: "netflix.com",
    isPhishing: true,
    content: {
      url: "https://netfllx-login.herokuapp.com/signin",
      features: "Mimics Netflix design but uses suspicious domain",
    },
    redFlags: [
      "Typo in domain (netfllx instead of netflix)",
      "Uses third-party hosting (herokuapp.com)",
      "May lack proper SSL certificate",
      "Harvests login credentials"
    ],
    tags: ["Website", "Domain Spoofing", "Credential Theft"]
  },
  {
    id: 6,
    type: "email",
    title: "CEO Impersonation Scam",
    domain: "company.com",
    isPhishing: true,
    content: {
      from: "ceo@company-urgent.com",
      subject: "Urgent Wire Transfer Required",
      body: "I need you to process an urgent wire transfer of $50,000. This is confidential - don't discuss with anyone.",
    },
    redFlags: [
      "Impersonates authority figure",
      "Requests immediate financial action",
      "Asks for secrecy and confidentiality",
      "Domain doesn't match company's official domain"
    ],
    tags: ["Email", "CEO Fraud", "Business Email Compromise"]
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "Is this a phishing attempt?",
    exampleId: 1,
    correctAnswer: true,
    explanation: "This is a phishing email with multiple red flags including a suspicious domain and urgent language."
  },
  {
    id: 2,
    question: "Is this website legitimate?",
    exampleId: 2,
    correctAnswer: true,
    explanation: "This is the official PayPal website with proper security features."
  },
  {
    id: 3,
    question: "Should you trust this SMS message?",
    exampleId: 3,
    correctAnswer: false,
    explanation: "This is a phishing SMS that asks for sensitive information and uses a shortened URL."
  }
];

export default function ExamplesSection() {
  const [currentExample, setCurrentExample] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % phishingExamples.length);
    setIsFlipped(false);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + phishingExamples.length) % phishingExamples.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuiz(0);
    setQuizAnswer(null);
    setShowResult(false);
  };

  const handleQuizAnswer = (answer: boolean) => {
    setQuizAnswer(answer);
    setShowResult(true);
  };

  const nextQuiz = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setQuizAnswer(null);
      setShowResult(false);
    } else {
      setShowQuiz(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email": return Mail;
      case "website": return Globe;
      case "sms": return MessageCircle;
      default: return Shield;
    }
  };

  const currentExampleData = phishingExamples[currentExample];
  const TypeIcon = getTypeIcon(currentExampleData.type);

  if (showQuiz) {
    const quiz = quizQuestions[currentQuiz];
    const quizExample = phishingExamples.find(ex => ex.id === quiz.exampleId);
    
    return (
      <section id="examples" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-background border border-border p-8">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Quiz Mode</h3>
                  <p className="text-muted-foreground">Question {currentQuiz + 1} of {quizQuestions.length}</p>
                </div>

                {quizExample && (
                  <div className="mb-6">
                    <div className="bg-card border border-border rounded-lg p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{quizExample.title}</span>
                        </div>
                      </div>
                      
                      {quizExample.type === "email" && (
                        <div className="space-y-2 text-sm">
                          <p><strong>From:</strong> {quizExample.content.from}</p>
                          <p><strong>Subject:</strong> {quizExample.content.subject}</p>
                          <p className="bg-muted p-3 rounded">{quizExample.content.body}</p>
                        </div>
                      )}
                      
                      {quizExample.type === "website" && (
                        <div className="space-y-2 text-sm">
                          <p><strong>URL:</strong> <code className="bg-muted px-2 py-1 rounded">{quizExample.content.url}</code></p>
                          <p>{quizExample.content.features}</p>
                        </div>
                      )}
                      
                      {quizExample.type === "sms" && (
                        <div className="space-y-2 text-sm">
                          <p><strong>From:</strong> {quizExample.content.from}</p>
                          <p className="bg-muted p-3 rounded">{quizExample.content.message}</p>
                        </div>
                      )}
                    </div>

                    <div className="text-center mb-6">
                      <h4 className="text-lg font-semibold mb-4">{quiz.question}</h4>
                      
                      {!showResult && (
                        <div className="flex justify-center space-x-4">
                          <Button 
                            onClick={() => handleQuizAnswer(true)}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                            data-testid="button-quiz-yes"
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Yes
                          </Button>
                          <Button 
                            onClick={() => handleQuizAnswer(false)}
                            variant="outline"
                            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground px-6 py-3"
                            data-testid="button-quiz-no"
                          >
                            <X className="mr-2 h-4 w-4" />
                            No
                          </Button>
                        </div>
                      )}

                      {showResult && (
                        <div className="space-y-4">
                          <div className={`p-4 rounded-lg ${quizAnswer === quiz.correctAnswer ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                            <p className="font-semibold">
                              {quizAnswer === quiz.correctAnswer ? '✅ Correct!' : '❌ Incorrect!'}
                            </p>
                            <p className="text-sm mt-2">{quiz.explanation}</p>
                          </div>
                          
                          <Button 
                            onClick={nextQuiz}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                            data-testid="button-quiz-next"
                          >
                            {currentQuiz < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

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
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Interactive flashcards to help you identify phishing attempts across different domains and platforms.
          </motion.p>
          
          <Button 
            onClick={startQuiz}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold mb-8"
            data-testid="button-start-examples-quiz"
          >
            <Target className="mr-2 h-4 w-4" />
            Start Interactive Quiz
          </Button>
        </div>

        {/* Interactive Flashcard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <Button 
                onClick={prevExample}
                variant="outline"
                className="border-border hover:bg-muted/50"
                data-testid="button-prev-example"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {currentExample + 1} of {phishingExamples.length}
              </span>
              
              <Button 
                onClick={nextExample}
                variant="outline"
                className="border-border hover:bg-muted/50"
                data-testid="button-next-example"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="perspective-1000">
              <motion.div
                className="w-full h-96 relative preserve-3d cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onClick={flipCard}
                data-testid="flashcard-container"
              >
                {/* Front of card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden bg-background border border-border card-glow">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <TypeIcon className="h-5 w-5 text-primary" />
                        <span className="font-semibold">{currentExampleData.title}</span>
                      </div>
                      <div className="flex space-x-2">
                        {currentExampleData.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg border-2 ${currentExampleData.isPhishing ? 'border-destructive bg-destructive/5' : 'border-green-500 bg-green-500/5'} mb-4`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">Domain: {currentExampleData.domain}</span>
                        <Badge variant={currentExampleData.isPhishing ? "destructive" : "default"}>
                          {currentExampleData.isPhishing ? "🚨 PHISHING" : "✅ LEGITIMATE"}
                        </Badge>
                      </div>
                      
                      {currentExampleData.type === "email" && (
                        <div className="space-y-2 text-sm">
                          <p><strong>From:</strong> <code className="bg-muted px-2 py-1 rounded">{currentExampleData.content.from}</code></p>
                          <p><strong>Subject:</strong> {currentExampleData.content.subject}</p>
                          <p className="bg-muted p-3 rounded mt-2">{currentExampleData.content.body}</p>
                        </div>
                      )}
                      
                      {currentExampleData.type === "website" && (
                        <div className="space-y-2 text-sm">
                          <p><strong>URL:</strong> <code className="bg-muted px-2 py-1 rounded">{currentExampleData.content.url}</code></p>
                          <p>{currentExampleData.content.features}</p>
                        </div>
                      )}
                      
                      {currentExampleData.type === "sms" && (
                        <div className="space-y-2 text-sm">
                          <p><strong>From:</strong> {currentExampleData.content.from}</p>
                          <p className="bg-muted p-3 rounded">{currentExampleData.content.message}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center text-muted-foreground text-sm">
                      Click to reveal analysis →
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-background border border-border card-glow">
                  <CardContent className="p-6 h-full">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <AlertTriangle className={`mr-2 h-5 w-5 ${currentExampleData.isPhishing ? 'text-destructive' : 'text-green-500'}`} />
                      Analysis
                    </h4>
                    
                    <div className="space-y-3">
                      {currentExampleData.redFlags && currentExampleData.redFlags.map((flag, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <AlertTriangle className="text-destructive h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{flag}</span>
                        </div>
                      ))}
                      
                      {currentExampleData.positiveFlags && currentExampleData.positiveFlags.map((flag, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <Check className="text-green-500 h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{flag}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center text-muted-foreground text-sm mt-4">
                      Click to return to example →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Example Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {phishingExamples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExample(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentExample ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
              data-testid={`example-indicator-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
