export interface QuizQuestion {
  question: string;
  options: {
    value: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation?: string;
}

export const quizData: QuizQuestion[] = [
  {
    question: "Which of the following is the most reliable way to verify if an email is legitimate?",
    options: [
      {
        value: "a",
        text: "Check if the email has professional formatting and company logos",
      },
      {
        value: "b",
        text: "Contact the organization directly using official contact information",
      },
      {
        value: "c",
        text: "Look for spelling and grammar mistakes in the email",
      },
      {
        value: "d",
        text: "Check if the sender's email address looks official",
      },
    ],
    correctAnswer: "b",
    explanation: "The most reliable way is to contact the organization directly using verified contact information from their official website or documentation.",
  },
  {
    question: "What should you do if you receive an urgent email asking you to update your password immediately?",
    options: [
      {
        value: "a",
        text: "Click the link in the email and update your password quickly",
      },
      {
        value: "b",
        text: "Forward the email to your IT department",
      },
      {
        value: "c",
        text: "Go directly to the official website and check your account",
      },
      {
        value: "d",
        text: "Ignore the email completely",
      },
    ],
    correctAnswer: "c",
    explanation: "Always navigate to the official website independently rather than clicking links in suspicious emails.",
  },
  {
    question: "Which URL is most likely to be a phishing attempt?",
    options: [
      {
        value: "a",
        text: "https://www.amazon.com/account",
      },
      {
        value: "b",
        text: "https://amaz0n-security.netlify.app",
      },
      {
        value: "c",
        text: "https://amazon.com/signin",
      },
      {
        value: "d",
        text: "https://www.amazon.co.uk/account",
      },
    ],
    correctAnswer: "b",
    explanation: "This URL uses character substitution (0 instead of o) and a suspicious domain (netlify.app) to mimic Amazon.",
  },
  {
    question: "What is a common characteristic of phishing emails?",
    options: [
      {
        value: "a",
        text: "They are always poorly written with many spelling errors",
      },
      {
        value: "b",
        text: "They create a sense of urgency or fear",
      },
      {
        value: "c",
        text: "They never include company logos",
      },
      {
        value: "d",
        text: "They are always sent during business hours",
      },
    ],
    correctAnswer: "b",
    explanation: "Phishing emails often create urgency or fear to pressure victims into acting quickly without thinking critically.",
  },
  {
    question: "Which of these is the best practice when dealing with suspicious links?",
    options: [
      {
        value: "a",
        text: "Click the link to see where it goes",
      },
      {
        value: "b",
        text: "Hover over the link to preview the destination",
      },
      {
        value: "c",
        text: "Copy and paste the link into a new browser window",
      },
      {
        value: "d",
        text: "Share the link with colleagues to get their opinion",
      },
    ],
    correctAnswer: "b",
    explanation: "Hovering over links allows you to preview the destination without actually visiting potentially malicious websites.",
  },
];
