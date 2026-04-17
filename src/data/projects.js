import project5 from "@/assets/projects_img/project-5.png";
import project6 from "@/assets/projects_img/project-6.png";
import project7 from "@/assets/projects_img/project-7-sync.png";
import project8 from "@/assets/projects_img/project-8-erp.png";

export const projects = [
  {
    title: "automateERP — Full-Stack Enterprise Platform",
    description:
      "A premium, production-ready ERP ecosystem built with a decoupled architecture (React 19 + Django REST Framework). Features a stable, full-stack integration for 14 core business modules including a real-time POS Terminal with automatic tax/discount calculations, Kanban project management, and automated expense workflows. Optimized with comprehensive safety checks to ensure zero-crash UI rendering and high data integrity across all business operations. Fully containerized with a robust CI/CD pipeline.",
    image: project8,
    github: "https://github.com/rafiimafif/automate-erp",
    tags: ["React 19", "Vite", "Django", "REST API Integration", "Backend Stability", "Docker", "CI/CD", "Glassmorphism", "AI Insights", "POS", "Kanban", "SaaS", "Tailwind v4", "SonarCloud"],
  },
  {
    title: "automateCRM — Hybrid Cloud Sync",
    description:
      "A production-ready Laravel CRM featuring a high-performance Hybrid POS Data Pipeline that synchronizes local Excel datasets with Google Sheets via custom Apps Script. Fully automated DevOps toolchain: Docker, Jenkins, SonarCloud, and Terraform on AWS.",
    image: project7,
    github: "https://github.com/rafiimafif/automatecrm-cicd-pipeline",
    tags: ["Laravel", "Vue.js", "Google Sheets", "Apps Script", "Docker", "Jenkins", "SonarCloud", "Terraform", "AWS", "Redis"],
  },
  {
    title: "ASP.NET Core MVC Web Application with CI/CD",
    description:
      "A comprehensive DevOps infrastructure showcase transforming a .NET application using multi-stage Docker builds, Terraform for AWS, and GitHub Actions CI/CD with SonarCloud & Trivy.",
    image: project6,
    github: "https://github.com/rafiimafif/aspnet-core-mvc",
    tags: [".NET Core", "Docker", "Nginx", "GitHub Actions", "GHCR", "SonarCloud", "Trivy", "Terraform"],
  },
  {
    title: "Android CI/CD Pipeline",
    description:
      "A zero-cost automated CI/CD pipeline for Android apps using GitHub Actions, SonarCloud, and Firebase App Distribution.",
    image: project5,
    github: "https://github.com/rafiimafif/cicd-pipeline-android-apps-with-github-actions",
    tags: ["Android", "CI/CD", "GitHub Actions", "Firebase", "SonarCloud", "Automation"],
  },
];
