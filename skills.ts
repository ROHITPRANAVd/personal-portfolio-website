import { Skill } from "@/types/portfolio";

export const skillsList: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", level: 92, iconName: "SiPython", description: "Security scripting, automation, exploit POCs, data processing" },
  { name: "Java", category: "Programming", level: 85, iconName: "FaJava", description: "Object-oriented software development, enterprise applications" },
  { name: "JavaScript", category: "Programming", level: 94, iconName: "SiJavascript", description: "ES6+, async programming, DOM manipulation, full-stack" },
  { name: "TypeScript", category: "Programming", level: 90, iconName: "SiTypescript", description: "Strict type safety, generic interfaces, scalable web apps" },
  { name: "PHP", category: "Programming", level: 82, iconName: "SiPhp", description: "Backend web development, legacy app security auditing" },
  { name: "C", category: "Programming", level: 80, iconName: "SiC", description: "Low-level memory structure, buffer overflow analysis" },
  { name: "C++", category: "Programming", level: 84, iconName: "SiCplusplus", description: "Data structures, memory management, systems security" },

  // Frontend
  { name: "React", category: "Frontend", level: 94, iconName: "SiReact", description: "Component-driven architecture, state management, hooks" },
  { name: "Next.js", category: "Frontend", level: 92, iconName: "SiNextdotjs", description: "App Router, SSR, Server Components, API routes, performance" },
  { name: "HTML5", category: "Frontend", level: 96, iconName: "SiHtml5", description: "Semantic markup, accessibility (a11y), SEO optimization" },
  { name: "CSS3", category: "Frontend", level: 92, iconName: "SiCss3", description: "Flexbox, Grid, keyframe animations, responsive design" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, iconName: "SiTailwindcss", description: "Utility-first design system, dark mode, glassmorphism UI" },

  // Backend
  { name: "Node.js", category: "Backend", level: 88, iconName: "SiNodedotjs", description: "Asynchronous runtime, microservices, secure web servers" },
  { name: "Express", category: "Backend", level: 86, iconName: "SiExpress", description: "REST API routing, security headers (Helmet), middleware" },
  { name: "REST API", category: "Backend", level: 92, iconName: "Cpu", description: "API security, OAuth 2.0, JWT, rate limiting, OpenAPI" },
  { name: "Authentication", category: "Backend", level: 90, iconName: "Lock", description: "JWT, Session tokens, MFA, RBAC, OAuth2, SAML" },

  // Cloud
  { name: "AWS", category: "Cloud", level: 85, iconName: "SiAmazonaws", description: "EC2, S3 bucket policies, IAM roles, GuardDuty, AWS WAF, VPC" },
  { name: "Azure", category: "Cloud", level: 78, iconName: "SiMicrosoftazure", description: "Entra ID (Azure AD), Azure Key Vault, Security Center" },
  { name: "Google Cloud", category: "Cloud", level: 80, iconName: "SiGooglecloud", description: "GCP IAM, Security Command Center, Cloud Storage controls" },

  // Cyber Security
  { name: "OWASP Top 10", category: "Cyber Security", level: 95, iconName: "ShieldAlert", description: "SQLi, XSS, CSRF, SSRF, Broken Access Control mitigation" },
  { name: "IAM (Identity Access)", category: "Cyber Security", level: 90, iconName: "Key", description: "Least privilege access, RBAC, ABAC, Single Sign-On" },
  { name: "Threat Detection", category: "Cyber Security", level: 88, iconName: "Activity", description: "SIEM log analysis, intrusion detection, threat modeling" },
  { name: "Network Security", category: "Cyber Security", level: 86, iconName: "Network", description: "Firewalls, IDS/IPS, TLS/SSL inspection, VPN, Wireshark analysis" },
  { name: "Application Security", category: "Cyber Security", level: 92, iconName: "Code", description: "Static & Dynamic analysis, secure code auditing, input sanitization" },
  { name: "Cloud Security", category: "Cyber Security", level: 88, iconName: "Cloud", description: "Posture management (CSPM), bucket hardening, container security" },

  // DevOps
  { name: "Git", category: "DevOps", level: 92, iconName: "SiGit", description: "Version control, branching strategies, commit auditing" },
  { name: "GitHub", category: "DevOps", level: 94, iconName: "SiGithub", description: "Actions CI/CD pipelines, Dependabot security alerts, PR reviews" },
  { name: "Docker", category: "DevOps", level: 86, iconName: "SiDocker", description: "Containerization, distroless base images, rootless security" },
  { name: "Linux", category: "DevOps", level: 90, iconName: "SiLinux", description: "Bash scripting, SSH security, file permissions, system hardening" },

  // Tools
  { name: "Burp Suite", category: "Tools", level: 92, iconName: "Bug", description: "Web proxy, active scanning, intruder, repeater, extension scripts" },
  { name: "Wireshark", category: "Tools", level: 88, iconName: "Radio", description: "Packet inspection, PCAP analysis, protocol decoding, malware traffic" },
  { name: "Nmap", category: "Tools", level: 90, iconName: "Terminal", description: "Port scanning, NSE scripting, OS fingerprinting, vulnerability discovery" },
  { name: "Kali Linux", category: "Tools", level: 92, iconName: "SiKalilinux", description: "Penetration testing OS, Metasploit, Aircrack-ng, John the Ripper" },
  { name: "VS Code", category: "Tools", level: 95, iconName: "SiVisualstudiocode", description: "IDE configuration, debugging extensions, ESLint, security linters" }
];
