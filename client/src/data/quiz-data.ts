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
  {
    question: "You receive a text message from your 'bank' asking you to call a number to verify suspicious activity. What should you do?",
    options: [
      {
        value: "a",
        text: "Call the number immediately to protect your account",
      },
      {
        value: "b",
        text: "Call your bank using the official number from their website or your card",
      },
      {
        value: "c",
        text: "Reply to the text with your account information",
      },
      {
        value: "d",
        text: "Wait and see if they send another message",
      },
    ],
    correctAnswer: "b",
    explanation: "Always use official contact information from trusted sources rather than numbers provided in suspicious messages.",
  },
  {
    question: "Which domain name is legitimate for Netflix?",
    options: [
      {
        value: "a",
        text: "netfllx.com",
      },
      {
        value: "b",
        text: "netflix-security.com",
      },
      {
        value: "c",
        text: "netflix.com",
      },
      {
        value: "d",
        text: "netfl1x.com",
      },
    ],
    correctAnswer: "c",
    explanation: "Only netflix.com is the legitimate domain. The others use character substitution or additional words to deceive users.",
  },
  {
    question: "What is 'spear phishing'?",
    options: [
      {
        value: "a",
        text: "A generic phishing attack sent to thousands of people",
      },
      {
        value: "b",
        text: "A targeted phishing attack aimed at specific individuals or organizations",
      },
      {
        value: "c",
        text: "A phishing attack that uses only phone calls",
      },
      {
        value: "d",
        text: "A phishing attack that targets social media accounts only",
      },
    ],
    correctAnswer: "b",
    explanation: "Spear phishing is a highly targeted attack that uses specific information about the victim to make the attack more convincing.",
  },
  {
    question: "Which of these social engineering tactics involves impersonating someone in authority?",
    options: [
      {
        value: "a",
        text: "Pretexting",
      },
      {
        value: "b",
        text: "Baiting",
      },
      {
        value: "c",
        text: "Tailgating",
      },
      {
        value: "d",
        text: "Quid pro quo",
      },
    ],
    correctAnswer: "a",
    explanation: "Pretexting involves creating a fabricated scenario (often impersonating authority) to engage a victim and steal information.",
  },
  {
    question: "What should you do if you accidentally clicked on a suspicious link?",
    options: [
      {
        value: "a",
        text: "Close the browser and hope for the best",
      },
      {
        value: "b",
        text: "Immediately change passwords and run antivirus scans",
      },
      {
        value: "c",
        text: "Continue browsing normally",
      },
      {
        value: "d",
        text: "Only worry if you entered personal information",
      },
    ],
    correctAnswer: "b",
    explanation: "Quick action is essential: change passwords, run security scans, and monitor accounts for suspicious activity.",
  },
  {
    question: "Which email characteristic is NOT typically a red flag for phishing?",
    options: [
      {
        value: "a",
        text: "Generic greeting like 'Dear Customer'",
      },
      {
        value: "b",
        text: "Urgent language demanding immediate action",
      },
      {
        value: "c",
        text: "Professional email signature with contact information",
      },
      {
        value: "d",
        text: "Unexpected attachments or links",
      },
    ],
    correctAnswer: "c",
    explanation: "Professional signatures are normal for legitimate emails. However, be aware that scammers can copy them too.",
  },
  {
    question: "What is 'whaling' in cybersecurity?",
    options: [
      {
        value: "a",
        text: "Attacking underwater internet cables",
      },
      {
        value: "b",
        text: "Targeting high-profile individuals like executives or celebrities",
      },
      {
        value: "c",
        text: "Using very large email campaigns",
      },
      {
        value: "d",
        text: "Attacking maritime industry companies",
      },
    ],
    correctAnswer: "b",
    explanation: "Whaling specifically targets high-value individuals like CEOs, executives, or celebrities who have access to sensitive information or large amounts of money.",
  }
];
