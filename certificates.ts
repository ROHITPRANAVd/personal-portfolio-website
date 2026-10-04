import { Certificate } from "@/types/portfolio";

export const certificatesList: Certificate[] = [
  {
    id: "simplilearn-introduction-to-cissp",
    title: "Introduction to CISSP",
    issuer: "Simplilearn SkillUp",
    issueDate: "22nd June 2026",
    credentialId: "10378651",
    verificationUrl: "https://www.simplilearn.com/skillup-free-online-courses",
    pdfUrl: "/certificates/simplilearn-cissp.html",
    category: "Cyber Security",
    skillsLearned: [
      "Information Systems Security",
      "Security Architecture & Governance",
      "Applied Cryptography",
      "Access Control & Risk Management"
    ]
  },
  {
    id: "ibm-skillsbuild-introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "IBM SkillsBuild",
    issueDate: "22nd June 2026",
    credentialId: "ALM-COURSE_4058978",
    verificationUrl: "https://skills.yourlearning.ibm.com/certificate/ALM-COURSE_4058978",
    pdfUrl: "/certificates/ibm-cybersecurity.html",
    category: "Cyber Security",
    skillsLearned: [
      "Cybersecurity Fundamentals",
      "Threat Landscape & Vectors",
      "Network Security Controls",
      "Incident Response & Mitigation"
    ]
  },
  {
    id: "great-learning-introduction-to-cyber-attacks",
    title: "Introduction to Cyber Attacks",
    issuer: "Great Learning Academy",
    issueDate: "October 2024",
    credentialId: "ODBPYKKA",
    verificationUrl: "https://www.mygreatlearning.com/certificate/ODBPYKKA",
    pdfUrl: "/certificates/great-learning-cyber-attacks.html",
    category: "Cyber Security",
    skillsLearned: [
      "Cyber Attack Vectors & Techniques",
      "Vulnerability Exploitation Basics",
      "Phishing & Malware Analysis",
      "Defensive Security Safeguards"
    ]
  }
];
