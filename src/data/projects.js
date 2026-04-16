import project5 from "@/assets/projects_img/project-5.png";
import project6 from "@/assets/projects_img/project-6.png";
import project7 from "@/assets/projects_img/project-7-sync.png";
import project8 from "@/assets/projects_img/project-8-erp.png";

export const projects = [
  {
    title: "automateERP — Full-Featured ERP Platform",
    description:
      "A modern, full-featured ERP system for startups and SMEs. Built with a decoupled React + Vite frontend and Django REST Framework backend, fully containerized with Docker. Features a robust CI/CD pipeline using GitHub Actions for automated linting, testing, Trivy security scanning, SonarCloud code quality analysis, and automated Docker image deployment to GHCR.",
    image: project8,
    github: "https://github.com/rafiimafif/automate-erp",
    tags: ["React 19", "Vite", "Django", "DRF", "Docker", "CI/CD", "GitHub Actions", "SonarCloud", "Trivy", "GHCR"],
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
