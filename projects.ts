import { Project } from "@/types/portfolio";

export const projectsList: Project[] = [
  {
    id: "distributed-job-portal-ml",
    title: "Distributed Job Portal System with ML Matching",
    tagline: "Scalable distributed architecture leveraging machine learning algorithms for candidate-job matching",
    description: "An enterprise-grade distributed job portal platform featuring an intelligent Machine Learning recommendation engine that matches candidate resumes with job postings using TF-IDF and Cosine Similarity.",
    fullDescription: "The Distributed Job Portal System is a high-performance web platform built using a microservices-inspired architecture. It features an automated Machine Learning matching pipeline that parses candidate skills, experience, and resumes to generate precise similarity scores against job requirements. The system enforces strict Role-Based Access Control (RBAC), secure JWT authentication, input sanitization, and automated notifications for employers and job seekers.",
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Python",
      "Scikit-Learn (ML)",
      "TF-IDF Vectorizer",
      "React 19",
      "Tailwind CSS",
      "REST API",
      "JWT & Auth",
      "Docker"
    ],
    features: [
      "Machine Learning resume & candidate job-matching algorithm (TF-IDF & Cosine Similarity)",
      "Distributed microservices architecture for concurrent application processing",
      "Role-Based Access Control (RBAC) for Candidates, Employers, and System Admins",
      "Real-time application status tracking, bookmarking, and recruiter search",
      "Interactive analytics dashboard for job posting engagement and skill match distribution"
    ],
    securityHighlights: [
      "Strict JWT session authentication with SameSite=Strict HttpOnly security cookies",
      "Input sanitization & parametrized SQL query execution preventing Injection attacks",
      "Secure file upload validation for resume PDF/DOCX parsing against malware payloads",
      "Rate-limited API endpoints preventing automated job scraping & brute-force attacks"
    ],
    githubUrl: "https://github.com/rohitpranav/DISTRIBUTED-JOB-PORTAL-SYSTEM-WITH-ML",
    liveUrl: "https://job-portal-ml.vercel.app"
  }
];
