import { Education } from "@/types/portfolio";

export const educationList: Education[] = [
  {
    degree: "MCA Information Security",
    institution: "Jain University",
    period: "2026 - 2028",
    status: "Current",
    gpa: "Pursuing",
    description: "Postgraduate master's degree focusing on advanced cyber threat intelligence, cloud security infrastructure, cryptography, ethical hacking, application security, and enterprise security management.",
    coursework: [
      "Cloud Security & Virtualization Safeguards",
      "Applied Cryptography & PKI Management",
      "Network Penetration Testing & Vulnerability Assessment",
      "Secure Software Engineering & Code Auditing",
      "Incident Response & Computer Forensics",
      "Enterprise Identity & Access Management (IAM)"
    ]
  },
  {
    degree: "B.Sc Computer Science and Applications",
    institution: "Presidency College / Recognized University",
    period: "2023 - 2026",
    status: "Completed",
    gpa: "First Class with Distinction",
    description: "Foundational undergraduate degree in computer science principles, database systems, object-oriented programming, data structures & algorithms, web technology, and computer network protocols.",
    coursework: [
      "Data Structures & Algorithms in C++/Java",
      "Database Management Systems & SQL Security",
      "Computer Networks & TCP/IP Architecture",
      "Operating Systems & Linux Systems Administration",
      "Web Technologies (HTML, CSS, JavaScript, PHP)",
      "Software Engineering Lifecycle"
    ]
  }
];
