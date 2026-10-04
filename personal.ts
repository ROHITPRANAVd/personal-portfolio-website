import { PersonalInfo } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "ROHIT PRANAV D",
  title: "MCA Information Security Student",
  roles: [
    "Cloud Security Specialist",
    "Cyber Security Researcher",
    "Application Security Engineer",
    "DevSecOps Practitioner",
    "Full Stack Security Developer"
  ],
  bio: "Passionate Information Security postgraduate student specializing in Cloud Security, Application Security, OWASP Top 10 mitigation, and DevSecOps pipelines. Dedicated to designing resilient, attack-proof enterprise architectures and high-performance full-stack applications.",
  objective: "To leverage deep technical expertise in threat detection, secure code auditing, cloud infrastructure hardening, and full-stack development to build enterprise-grade software that withstands modern cyber threats.",
  email: "rohitpranav056@gmail.com",
  location: "Bengaluru, Karnataka, India",
  availability: "Available for Security Engineering & Full-Stack Roles / Internships",
  currentLearning: [
    "Advanced AWS Cloud Security Architectures (S3, IAM, GuardDuty, AWS WAF)",
    "Kubernetes Security Posture Management & Container Hardening",
    "Zero Trust Architecture & Microsegmentation Protocols",
    "Automated Static & Dynamic Application Security Testing (SAST/DAST in CI/CD)"
  ],
  values: [
    {
      title: "Defense in Depth",
      description: "Implementing layered security controls at network, application, identity, and data tiers to eliminate single points of compromise.",
      icon: "ShieldCheck"
    },
    {
      title: "Zero Trust Mindset",
      description: "Never trust, always verify. Enforcing strict identity verification and least-privilege authorization for every request.",
      icon: "Lock"
    },
    {
      title: "Automated Security (DevSecOps)",
      description: "Shifting security left by embedding vulnerability scanners, dependency auditing, and compliance checks into automated CI/CD workflows.",
      icon: "Cpu"
    },
    {
      title: "Performance & Craftsmanship",
      description: "Combining bulletproof cybersecurity with lightning-fast user experiences, clean component architecture, and modern UX design.",
      icon: "Zap"
    }
  ],
  stats: [
    { label: "Featured Project", value: 1, suffix: "" },
    { label: "Certifications", value: 3, suffix: "" },
    { label: "Labs & CTFs Solved", value: 140, suffix: "+" },
    { label: "Vulnerabilities Audited", value: 85, suffix: "+" }
  ]
};
