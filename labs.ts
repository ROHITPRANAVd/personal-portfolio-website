import { SecurityLab } from "@/types/portfolio";

export const securityLabsList: SecurityLab[] = [
  {
    id: "owasp-top-10",
    name: "OWASP Top 10 Security Audit & Remediation",
    platform: "OWASP",
    category: "Web Exploitation",
    proficiency: 95,
    completedModules: 10,
    totalModules: 10,
    rank: "Mastery Level",
    description: "Hands-on audit and code defense implementation against SQL Injection, XSS, CSRF, SSRF, Broken Authentication, IDOR, and Security Misconfigurations.",
    badges: ["Injection Defense", "XSS Mitigation", "Access Control Specialist", "CSRF Prevention"]
  },
  {
    id: "burp-suite-academy",
    name: "PortSwigger Burp Suite Certified Audit",
    platform: "Burp Suite",
    category: "Web Exploitation",
    proficiency: 92,
    completedModules: 42,
    totalModules: 45,
    rank: "Advanced Practitioner",
    description: "Advanced intercepting proxy labs, custom intruder payload generation, web socket analysis, authentication bypass, and automated security extensions.",
    badges: ["Web Proxy Master", "Intruder Specialist", "Repeater Wizard", "Decoder Pro"]
  },
  {
    id: "tryhackme-labs",
    name: "TryHackMe Security Paths & Offensive Labs",
    platform: "TryHackMe",
    category: "Defensive Security",
    proficiency: 90,
    completedModules: 85,
    totalModules: 90,
    rank: "Top 3% Globally",
    description: "Completed Web Fundamentals, DevSecOps, SOC Analyst Level 1, Cyber Defense, and Junior Penetration Tester learning paths on TryHackMe platform.",
    badges: ["Top 3% Rank", "100+ Day Streak", "SOC Specialist", "Jr Penetration Tester"]
  },
  {
    id: "hackthebox-machines",
    name: "Hack The Box Machine Exploitation & Privilege Escalation",
    platform: "Hack The Box",
    category: "Network Pentesting",
    proficiency: 85,
    completedModules: 28,
    totalModules: 35,
    rank: "Pro Hacker Tier",
    description: "Systematic enumeration, initial foothold exploitation, Linux/Windows local privilege escalation, and active directory penetration labs.",
    badges: ["Linux PrivEsc", "Windows PrivEsc", "User Pwned x28", "Root Pwned x25"]
  },
  {
    id: "dvwa-exploitation",
    name: "DVWA (Damn Vulnerable Web App) Pentesting",
    platform: "DVWA",
    category: "Web Exploitation",
    proficiency: 94,
    completedModules: 12,
    totalModules: 12,
    rank: "100% High Security Solved",
    description: "Tested and exploited web vulnerabilities across Low, Medium, and High security levels in DVWA environment, documenting remediation code patches.",
    badges: ["File Upload Bypass", "Command Injection", "Blind SQLi", "File Inclusion"]
  },
  {
    id: "nmap-recon",
    name: "Nmap Network Reconnaissance & Service Auditing",
    platform: "Nmap",
    category: "Network Pentesting",
    proficiency: 92,
    completedModules: 20,
    totalModules: 20,
    rank: "NSE Script Master",
    description: "Advanced TCP/UDP port scanning, OS fingerprinting, vulnerability script engine (NSE) execution, stealth SYN scans, and firewall evasion.",
    badges: ["NSE Scripting", "Stealth Scanning", "Service Enumeration", "Firewall Evasion"]
  },
  {
    id: "wireshark-forensics",
    name: "Wireshark Packet Analysis & PCAP Forensics",
    platform: "Wireshark",
    category: "Digital Forensics",
    proficiency: 88,
    completedModules: 18,
    totalModules: 20,
    rank: "Packet Analyst",
    description: "Deep inspection of network protocols (TCP, HTTP/2, TLS handshake, DNS, ARP), identifying malware C2 beaconing and unencrypted credential leaks.",
    badges: ["Display Filters", "Protocol Breakdown", "PCAP Forensics", "TLS Decryption"]
  },
  {
    id: "kali-linux-tools",
    name: "Kali Linux OffSec Tools Ecosystem",
    platform: "Kali Linux",
    category: "Network Pentesting",
    proficiency: 94,
    completedModules: 30,
    totalModules: 30,
    rank: "Red Team Specialist",
    description: "Proficient utilization of Kali Linux toolkit including Metasploit Framework, Hydra, John the Ripper, Gobuster, SQLmap, and Hashcat.",
    badges: ["Metasploit Pro", "Hashcat Cracker", "Gobuster Recon", "SQLmap Automation"]
  }
];
