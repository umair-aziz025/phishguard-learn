import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Search, Users, Clock, ChevronRight, ChevronLeft, X, Play, Target, Shield, AlertTriangle, Lock, Eye, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trainingModules } from "@/data/training-data";

const additionalModules = [
  {
    id: 4,
    icon: Shield,
    title: "Module 4: Advanced Defense Strategies",
    description: "Master advanced techniques to protect yourself and your organization from sophisticated attacks.",
    duration: "25 minutes",
    color: "primary",
    content: {
      sections: [
        {
          title: "Multi-Factor Authentication",
          content: "Implement robust MFA solutions to add layers of security beyond passwords. Learn about different authentication methods and their effectiveness.",
        },
        {
          title: "Email Security Best Practices",
          content: "Configure email filters, recognize advanced email threats, and implement organizational policies for email security.",
        },
        {
          title: "Network Security Awareness",
          content: "Understand how phishing attacks can compromise network security and learn defensive measures.",
        }
      ]
    }
  },
  {
    id: 5,
    icon: AlertTriangle,
    title: "Module 5: Incident Response",
    description: "Learn how to respond effectively when a phishing attack is detected or suspected.",
    duration: "22 minutes",
    color: "destructive",
    content: {
      sections: [
        {
          title: "Immediate Response Steps",
          content: "Critical actions to take immediately after detecting a phishing attempt, including containment and reporting.",
        },
        {
          title: "Recovery Procedures",
          content: "Steps to recover from a successful phishing attack, including password changes and system scans.",
        },
        {
          title: "Prevention for Future",
          content: "Learn from incidents to strengthen defenses and prevent similar attacks in the future.",
        }
      ]
    }
  },
  {
    id: 6,
    icon: Brain,
    title: "Module 6: Psychology of Cybersecurity",
    description: "Deep dive into the psychological aspects of cybersecurity and human behavior.",
    duration: "20 minutes",
    color: "accent",
    content: {
      sections: [
        {
          title: "Cognitive Biases in Security",
          content: "Understand how cognitive biases affect security decisions and how attackers exploit them.",
        },
        {
          title: "Building Security Mindset",
          content: "Develop critical thinking skills and security awareness as part of daily habits.",
        },
        {
          title: "Team Security Culture",
          content: "Foster a security-conscious culture in teams and organizations.",
        }
      ]
    }
  }
];

const allModules = [...trainingModules, ...additionalModules];

const moduleQuizzes = [
  {
    moduleId: 1,
    questions: [
      {
        question: "What is the primary goal of phishing attacks?",
        options: ["To damage computer systems", "To steal sensitive information", "To show off hacking skills", "To test security systems"],
        correct: 1,
        explanation: "Phishing attacks primarily aim to steal sensitive information like passwords, financial data, and personal details."
      },
      {
        question: "Why are phishing attacks often successful?",
        options: ["They use advanced technology", "They exploit human psychology", "They target weak passwords", "They bypass antivirus software"],
        correct: 1,
        explanation: "Phishing attacks succeed because they exploit human psychology, using tactics like urgency, fear, and trust to manipulate victims."
      }
    ]
  },
  {
    moduleId: 2,
    questions: [
      {
        question: "What should you do when you receive a suspicious email?",
        options: ["Click the link to investigate", "Forward it to colleagues", "Verify through official channels", "Delete it immediately"],
        correct: 2,
        explanation: "Always verify suspicious emails through official channels before taking any action."
      }
    ]
  },
  {
    moduleId: 3,
    questions: [
      {
        question: "Which psychological principle do attackers commonly exploit?",
        options: ["Authority", "Complexity", "Technology", "Speed"],
        correct: 0,
        explanation: "Attackers often impersonate authority figures to pressure victims into complying with their requests."
      }
    ]
  }
];

export default function TrainingModules() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoScroll && selectedModule) {
      const module = allModules.find(m => m.id === selectedModule);
      if (module && module.content) {
        interval = setInterval(() => {
          setCurrentSection(prev => {
            if (prev < module.content.sections.length - 1) {
              return prev + 1;
            } else {
              setAutoScroll(false);
              return prev;
            }
          });
        }, 5000);
      }
    }
    return () => clearInterval(interval);
  }, [autoScroll, selectedModule, currentSection]);

  const handleModuleClick = (moduleId: number) => {
    setSelectedModule(moduleId);
    setCurrentSection(0);
    setAutoScroll(false);
    setShowQuiz(false);
  };

  const closeModule = () => {
    setSelectedModule(null);
    setCurrentSection(0);
    setAutoScroll(false);
    setShowQuiz(false);
  };

  const nextSection = () => {
    const module = allModules.find(m => m.id === selectedModule);
    if (module && module.content && currentSection < module.content.sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const toggleAutoScroll = () => {
    setAutoScroll(!autoScroll);
  };

  const startModuleQuiz = () => {
    setShowQuiz(true);
    setCurrentQuiz(0);
    setQuizAnswer(null);
    setShowResult(false);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setQuizAnswer(answerIndex);
    setShowResult(true);
  };

  const nextQuizQuestion = () => {
    const moduleQuiz = moduleQuizzes.find(q => q.moduleId === selectedModule);
    if (moduleQuiz && currentQuiz < moduleQuiz.questions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setQuizAnswer(null);
      setShowResult(false);
    } else {
      setShowQuiz(false);
    }
  };

  if (selectedModule) {
    const module = allModules.find(m => m.id === selectedModule);
    const moduleQuiz = moduleQuizzes.find(q => q.moduleId === selectedModule);
    
    if (showQuiz && moduleQuiz) {
      const question = moduleQuiz.questions[currentQuiz];
      
      return (
        <section id="training" className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-background border border-border p-8">
                <CardContent className="p-0">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Module Quiz</h3>
                    <Button 
                      onClick={() => setShowQuiz(false)}
                      variant="outline"
                      size="sm"
                      data-testid="button-close-quiz"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Question {currentQuiz + 1} of {moduleQuiz.questions.length}
                    </p>
                    <h4 className="text-lg font-semibold mb-4">{question.question}</h4>
                    
                    {!showResult && (
                      <div className="space-y-3">
                        {question.options.map((option, index) => (
                          <Button
                            key={index}
                            onClick={() => handleQuizAnswer(index)}
                            variant="outline"
                            className="w-full text-left justify-start p-4 h-auto"
                            data-testid={`quiz-option-${index}`}
                          >
                            <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                            {option}
                          </Button>
                        ))}
                      </div>
                    )}

                    {showResult && (
                      <div className="space-y-4">
                        <div className={`p-4 rounded-lg ${quizAnswer === question.correct ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                          <p className="font-semibold">
                            {quizAnswer === question.correct ? '✅ Correct!' : '❌ Incorrect!'}
                          </p>
                          <p className="text-sm mt-2">{question.explanation}</p>
                        </div>
                        
                        <Button 
                          onClick={nextQuizQuestion}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          data-testid="button-next-quiz"
                        >
                          {currentQuiz < moduleQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      );
    }

    if (module) {
      const getIcon = (iconName: string) => {
        switch (iconName) {
          case "Book": return Book;
          case "Search": return Search;
          case "Users": return Users;
          case "Shield": return Shield;
          case "AlertTriangle": return AlertTriangle;
          case "Brain": return Brain;
          default: return Book;
        }
      };
      const Icon = module.icon ? getIcon(module.icon) : Book;
      const currentSectionData = module.content?.sections[currentSection];
      
      return (
        <section id="training" className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-background border border-border p-8">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-${module.color}/20 rounded-lg flex items-center justify-center`}>
                        <Icon className={`text-${module.color} h-6 w-6`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{module.title}</h3>
                        <p className="text-muted-foreground flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {module.duration}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        onClick={toggleAutoScroll}
                        variant={autoScroll ? "default" : "outline"}
                        size="sm"
                        data-testid="button-auto-scroll"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {autoScroll ? 'Stop Auto' : 'Auto Scroll'}
                      </Button>
                      <Button 
                        onClick={closeModule}
                        variant="outline"
                        size="sm"
                        data-testid="button-close-module"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {module.content && (
                    <>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-muted-foreground">
                            Section {currentSection + 1} of {module.content.sections.length}
                          </span>
                          <div className="flex space-x-2">
                            {module.content.sections.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                  index === currentSection ? 'bg-primary' : 'bg-muted-foreground/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                          >
                            <h4 className="text-xl font-semibold mb-4">{currentSectionData?.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{currentSectionData?.content}</p>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="flex justify-between items-center">
                        <Button 
                          onClick={prevSection}
                          disabled={currentSection === 0}
                          variant="outline"
                          data-testid="button-prev-section"
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                        
                        <div className="flex space-x-2">
                          {moduleQuiz && (
                            <Button 
                              onClick={startModuleQuiz}
                              variant="outline"
                              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              data-testid="button-start-module-quiz"
                            >
                              <Target className="mr-2 h-4 w-4" />
                              Take Quiz
                            </Button>
                          )}
                        </div>
                        
                        <Button 
                          onClick={nextSection}
                          disabled={currentSection === module.content.sections.length - 1}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          data-testid="button-next-section"
                        >
                          Next
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      );
    }
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allModules.map((module, index) => {
            const getIcon = (iconName: string) => {
              switch (iconName) {
                case "Book": return Book;
                case "Search": return Search;
                case "Users": return Users;
                case "Shield": return Shield;
                case "AlertTriangle": return AlertTriangle;
                case "Brain": return Brain;
                default: return Book;
              }
            };
            const Icon = module.icon ? getIcon(module.icon) : Book;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="bg-background border border-border card-glow cursor-pointer transition-all duration-300 hover:scale-105 h-full"
                  onClick={() => handleModuleClick(module.id)}
                  data-testid={`card-module-${module.id}`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${module.color || 'primary'}/20 rounded-lg flex items-center justify-center`}>
                        <Icon className={`text-${module.color || 'primary'} h-6 w-6`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Module {module.id}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{module.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-primary text-sm">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
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
