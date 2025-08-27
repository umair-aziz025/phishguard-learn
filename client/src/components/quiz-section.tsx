import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight, Medal, RotateCcw, Share } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { quizData } from "@/data/quiz-data";

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = quizData.length;
  const progress = (answers.length / totalQuestions) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const nextQuestion = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(newAnswers[currentQuestion + 1] || "");
      } else {
        // Calculate final score
        const finalScore = newAnswers.reduce((acc, answer, index) => {
          return acc + (answer === quizData[index].correctAnswer ? 1 : 0);
        }, 0);
        setScore(finalScore);
        setShowResults(true);
      }
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResults(false);
    setScore(0);
  };

  const shareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: "PhishGuard Quiz Results",
        text: `I scored ${score}/${totalQuestions} on the PhishGuard phishing awareness quiz!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`I scored ${score}/${totalQuestions} on the PhishGuard phishing awareness quiz! ${window.location.href}`);
    }
  };

  if (showResults) {
    return (
      <section id="quiz" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border border-border p-8">
              <CardContent className="p-0 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-primary h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  You scored <span className="text-primary font-bold">{score}</span> out of {totalQuestions}
                </p>
                
                {/* Achievement Badge */}
                <div className="inline-flex items-center bg-primary/20 border border-primary/30 rounded-lg px-4 py-2 mb-6">
                  <Medal className="text-primary mr-2 h-5 w-5" />
                  <span className="font-semibold">
                    {score >= 4 ? "Phishing Detective Badge Earned!" : "Keep Learning Badge Earned!"}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={retakeQuiz}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 font-semibold"
                    data-testid="button-retake-quiz"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                  <Button 
                    onClick={shareResults}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold"
                    data-testid="button-share-results"
                  >
                    <Share className="mr-2 h-4 w-4" />
                    Share Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  const currentQuiz = quizData[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Test Your Knowledge
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Take our interactive quiz to validate your phishing detection skills.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card border border-border p-8">
            <CardContent className="p-0">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">
                    Question {currentQuestion + 1} of {totalQuestions}
                  </span>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{currentQuiz.question}</h3>
                
                <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                  <div className="space-y-3">
                    {currentQuiz.options.map((option, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                        <Label htmlFor={option.value} className="text-sm cursor-pointer flex-1">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button 
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="px-6 py-2 border border-border hover:bg-muted/50 transition-colors disabled:opacity-50"
                  data-testid="button-previous-question"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button 
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 transition-colors disabled:opacity-50"
                  data-testid="button-next-question"
                >
                  {currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
