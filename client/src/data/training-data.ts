export interface TrainingModule {
  id: number;
  title: string;
  description: string;
  content: {
    sections: {
      title: string;
      content: string;
      interactive?: boolean;
    }[];
  };
  duration: string;
  objectives?: string[];
  icon?: any;
  color?: string;
}

export const trainingModules: TrainingModule[] = [
  {
    id: 1,
    title: "Module 1: What is Phishing?",
    description: "Learn the basics of phishing attacks, common tactics, and why they're so effective.",
    duration: "15 minutes",
    icon: "Book",
    color: "primary",
    objectives: [
      "Define phishing and understand its purpose",
      "Identify common phishing attack vectors",
      "Understand why phishing attacks are successful",
      "Recognize the psychological tactics used by attackers",
    ],
    content: {
      sections: [
        {
          title: "Introduction to Phishing",
          content: "Phishing is a type of cyber attack where criminals impersonate legitimate organizations to steal sensitive information such as usernames, passwords, credit card details, and other personal data. The term 'phishing' is a play on 'fishing' - attackers cast out bait and wait for victims to bite.",
        },
        {
          title: "Common Attack Vectors",
          content: "Phishing attacks commonly use email, SMS messages, phone calls, and fake websites. Email phishing is the most prevalent, often appearing to come from trusted sources like banks, social media platforms, or employers.",
        },
        {
          title: "Why Phishing Works",
          content: "Phishing exploits human psychology rather than technical vulnerabilities. Attackers use urgency, fear, curiosity, and authority to manipulate victims into acting without thinking critically about the request.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Module 2: Recognizing Phishing",
    description: "Identify red flags in emails, websites, and messages that indicate phishing attempts.",
    duration: "20 minutes",
    icon: "Search",
    color: "accent",
    objectives: [
      "Identify suspicious email characteristics",
      "Recognize fake websites and URLs",
      "Understand common phishing techniques",
      "Practice spotting phishing attempts",
    ],
    content: {
      sections: [
        {
          title: "Email Red Flags",
          content: "Suspicious emails often contain generic greetings, urgent language, spelling errors, mismatched sender addresses, and unexpected attachments. Always verify the sender's identity before taking any action.",
        },
        {
          title: "URL and Website Analysis",
          content: "Examine URLs carefully for typos, unusual domains, and HTTPS certificates. Legitimate websites typically use secure connections and have consistent branding and professional design.",
        },
        {
          title: "Interactive Examples",
          content: "Practice identifying phishing attempts with real-world examples. Look for inconsistencies, suspicious requests, and verify information through official channels.",
          interactive: true,
        },
      ],
    },
  },
  {
    id: 3,
    title: "Module 3: Social Engineering",
    description: "Understand psychological manipulation tactics used by cybercriminals.",
    duration: "18 minutes",
    icon: "Users",
    color: "destructive",
    objectives: [
      "Understand social engineering principles",
      "Recognize manipulation techniques",
      "Learn to resist psychological pressure",
      "Develop critical thinking skills",
    ],
    content: {
      sections: [
        {
          title: "Psychology of Social Engineering",
          content: "Social engineering exploits human nature - our tendency to trust, help others, and avoid conflict. Attackers leverage authority, reciprocity, social proof, and scarcity to manipulate victims.",
        },
        {
          title: "Common Manipulation Techniques",
          content: "Techniques include impersonation of authority figures, creating false urgency, appealing to helpfulness, using fear tactics, and building false relationships to gain trust over time.",
        },
        {
          title: "Defense Strategies",
          content: "Develop a healthy skepticism, verify requests through independent channels, take time to think before acting, and establish clear protocols for handling sensitive information requests.",
        },
      ],
    },
  },
];
