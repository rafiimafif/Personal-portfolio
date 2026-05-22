import project5 from "@/assets/projects_img/project-5.png";
import project6 from "@/assets/projects_img/project-6.png";
import project7 from "@/assets/projects_img/project-7-sync.png";
import project8 from "@/assets/projects_img/project-8-erp.png";
import project9 from "@/assets/projects_img/project-9-ai.png";
import project10 from "@/assets/projects_img/project-10-scrapelab.png";
import project11 from "@/assets/projects_img/project-11-traffic.png";
import project12 from "@/assets/projects_img/project-12-cyberops.png";

export const projects = [
  {
    title: "CyberOps AIO — Security Operations Center (SOC) Platform",
    description:
      "A modular, high-performance Security Operations Center (SOC) platform designed for real-time security analysis. Combines a secure login gateway, live SIEM event feed with CSV log ingestion (PapaParse), interactive MITRE ATT&CK STIX browser, IP-API threat intelligence proxy, WebCrypto browser-native forensics (SHA-256/SHA-512 & magic bytes detection), VirusTotal API integration, database-backed Incident Response Kanban Board, and automated Intelligence Report Generator (Executive and Technical outputs).",
    image: project12,
    github: "https://github.com/rafiimafif/aio-soc-platform",
    tags: ["React 18", "Express.js", "PostgreSQL", "TailwindCSS", "Recharts", "WebCrypto", "MITRE ATT&CK", "STIX Feed", "VirusTotal API", "Docker", "Kanban Board", "SOC Platform"],
  },
  {
    title: "AI Smart Traffic System — Computer Vision & Adaptive Control",
    description:
      "A production-grade, real-time traffic optimization platform powered by custom YOLOv8 computer vision. Features automated emergency vehicle prioritization using HSV color filtration, dynamically adjusting signal queues, multi-intersection 'green wave' coordination, and a premium dark-themed live Socket.IO monitoring dashboard.",
    image: project11,
    github: "https://github.com/rafiimafif/automateTraffic",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask", "Socket.IO", "MQTT", "Docker Compose", "PyTest", "Adaptive Control", "Computer Vision"],
  },
  {
    title: "ScrapeLab — Advanced Data Engineering & Monitoring",
    description:
      "A Python-powered end-to-end data engineering platform featuring an automated Data Watchdog for drift detection and anomaly alerts. Orchestrated with Docker, it integrates a dual-engine scraper, a robust Pandas-based cleaning pipeline, and a premium Dash dashboard. Engineered for reliability with automated scheduling and production-grade code quality monitored by SonarQube.",
    image: project10,
    github: "https://github.com/rafiimafif/scrapelab",
    tags: ["Python", "Dash", "Docker", "Pandas", "Selenium", "BeautifulSoup", "APScheduler", "SonarQube", "Data Engineering", "Automation"],
  },
  {
    title: "Production AI System",
    description:
      "A production-grade, GPU-accelerated AI ecosystem built exclusively with local Qwen 2.5 models. Fully containerized using Docker Compose, it features optimized memory management for NVIDIA RTX GPUs, agentic workflows via LangGraph, and a standardized tool layer using the Model Context Protocol (MCP).",
    image: project9,
    github: "https://github.com/rafiimafif/production-ai",
    tags: ["Next.js", "Ollama", "Qwen 2.5", "LangGraph", "ChromaDB", "Langfuse", "MCP", "Docker Compose", "FastAPI"],
  },
  {
    title: "automateERP — Full-Stack Enterprise SaaS Platform",
    description:
      "A high-performance enterprise ecosystem featuring 16+ modules including a POS Terminal, Kanban-based Sales Pipeline, and Subscription management. Built with a decoupled architecture (React 19 + Django 5), it delivers a premium Vercel-inspired UI with glassmorphism and AI insights. Engineered for security and reliability with Playwright-powered E2E automation, Trivy container scanning, and unified SonarCloud metrics achieving 80%+ test coverage.",
    image: project8,
    github: "https://github.com/rafiimafif/automate-erp",
    tags: ["React 19", "Vite", "Django 5", "DRF", "Playwright", "Vitest", "Tailwind v4", "Docker", "CI/CD", "SonarCloud", "Trivy", "Glassmorphism", "Kanban", "POS", "AI Insights", "uv"],
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
