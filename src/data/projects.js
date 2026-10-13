import project7 from "@/assets/projects_img/project-7-sync.png";
import project8 from "@/assets/projects_img/project-8-erp.png";
import project9 from "@/assets/projects_img/project-9-ai.png";
import project12 from "@/assets/projects_img/project-12-cyberops.png";
import projectKelolaKos from "@/assets/projects_img/project-kelolakos.png";
import projectGoCut from "@/assets/projects_img/project-gocut.png";

export const projects = [
  // 1. Real Freelance Experience: automateERP
  {
    title: "automateERP: Full-Stack Enterprise Platform",
    systemId: "erp.enterprise.corp",
    systemType: "ERP & Automated QA",
    category: "freelance",
    badge: "Verified Client Delivery",
    role: "Lead Full-Stack & QA Automation Engineer",
    clientSector: "Wholesale & Multi-Branch Retail",
    businessProblem:
      "Client required a tailored, self-hosted ERP & POS ecosystem to replace fragmented subscription SaaS tools, supporting local Indonesian currency handling, multi-channel sales, and sub-second checkout.",
    deliveredImpact:
      "Engineered 16+ production modules (POS terminal, Kanban pipeline, subscriptions) with 80%+ Playwright E2E and unit test coverage, Trivy container security scans, and unified SonarCloud quality gates.",
    description:
      "A high-performance enterprise ecosystem featuring 16+ modules including a POS Terminal, Kanban-based Sales Pipeline, and Subscription management. Built with a decoupled architecture (React 19 + Django 5) and engineered for security and reliability with Playwright-powered E2E automation, Trivy container scanning, and unified SonarCloud metrics achieving 80%+ test coverage.",
    image: project8,
    github: "https://github.com/rafiimafif/automate-erp",
    tags: ["React 19", "Vite", "Django 5", "DRF", "Playwright", "Vitest", "TailwindCSS", "Docker", "CI/CD", "SonarCloud", "Trivy", "Kanban", "POS", "uv"],
  },
  // 2. Real Freelance Experience: automateCRM
  {
    title: "automateCRM: Hybrid Cloud Sync",
    systemId: "crm.sync.pipeline",
    systemType: "Hybrid Cloud CI/CD",
    category: "freelance",
    badge: "Verified Client Delivery",
    role: "DevOps & Data Integration Consultant",
    clientSector: "Multi-Store Retail SME",
    businessProblem:
      "Branch retail POS cash registers exported local offline Excel datasets; accounting and management suffered 4+ hours of manual reconciliation lag daily with frequent data discrepancies.",
    deliveredImpact:
      "Eliminated daily manual entry through an automated hybrid pipeline syncing local spreadsheets with Google Sheets via Apps Script, integrated into a containerized Laravel CRM with Jenkins CI/CD and AWS Terraform automation.",
    description:
      "A production-ready Laravel CRM featuring a high-performance Hybrid POS Data Pipeline that synchronizes local Excel datasets with Google Sheets via custom Apps Script. Fully automated DevOps toolchain: Docker, Jenkins, SonarCloud, and Terraform on AWS.",
    image: project7,
    github: "https://github.com/rafiimafif/automatecrm-cicd-pipeline",
    tags: ["Laravel", "Vue.js", "Google Sheets", "Apps Script", "Docker", "Jenkins", "SonarCloud", "Terraform", "AWS", "Redis"],
  },
  // 3. New Project: KelolaKos
  {
    title: "KelolaKos: Multi-Property Rental & PWA Platform",
    systemId: "kelolain.id.local",
    systemType: "PropTech PWA & Billing Engine",
    category: "build",
    badge: "Production PWA Build",
    role: "Full-Stack & PWA Architect",
    clientSector: "Property Rental & Kos Management",
    businessProblem:
      "Boarding house and rental property owners struggled to track room occupancy, lease renewals, and payment collection across multiple properties using paper notes and fragmented spreadsheets.",
    deliveredImpact:
      "Engineered a mobile-first PWA featuring real-time occupancy grid mapping, automated billing with Indonesian official printed receipts (terbilang rupiah), operational expense ledger, and 1-tap WhatsApp payment reminders.",
    description:
      "A modern, mobile-first PWA property management platform built for Indonesian boarding house (kos) and rental house owners. Features multi-property occupancy grid mapping, automated contract renewals, flexible cash/transfer billing with Indonesian official PDF receipt generation, operational expense ledger, 1-tap WhatsApp payment reminders, and UU PDP privacy compliance (NIK masking).",
    image: projectKelolaKos,
    github: "https://github.com/rafiimafif/KelolaKos",
    tags: ["Next.js 15", "React 19", "TypeScript", "Prisma ORM", "TailwindCSS", "SQLite", "PostgreSQL", "PWA", "Vitest", "WhatsApp API"],
  },
  // 4. New Project: GoCut
  {
    title: "GoCut: Barber Marketplace & Negotiation Engine",
    systemId: "gocut.marketplace.local",
    systemType: "Marketplace & Spatial PostGIS",
    category: "build",
    badge: "Full-Stack Monorepo Build",
    role: "Platform & Systems Architect",
    clientSector: "On-Demand Home Services & Grooming",
    businessProblem:
      "On-demand personal grooming needed a transparent deal negotiation workflow (service, pricing, home vs shop visit) backed by escrow fund security and high-speed geo-radius discovery.",
    deliveredImpact:
      "Architected a decoupled monorepo (NestJS + Next.js 14) with PostgreSQL 16 + PostGIS geospatial distance queries, Socket.io real-time chat, a 3-round negotiation deal engine, MinIO S3 object storage, and multi-stage Docker containerization.",
    description:
      "A modern, mobile-first marketplace platform connecting customers with elite barbers for shop bookings and home visits. Features GPS-based distance discovery via PostgreSQL 16 + PostGIS, Socket.io live chat with a 3-round deal negotiation engine, MinIO S3 object storage for portfolios, and multi-stage Docker Compose orchestration.",
    image: projectGoCut,
    github: "https://github.com/rafiimafif/GoCut",
    tags: ["Next.js 14", "NestJS", "TypeScript", "PostgreSQL", "PostGIS", "Redis 7", "MinIO S3", "Socket.io", "Docker Compose", "Nginx", "TailwindCSS"],
  },
  // 5. Engineering Lab: CyberOps AIO
  {
    title: "CyberOps AIO: Security Operations Center (SOC) Platform",
    systemId: "soc.platform.local",
    systemType: "SIEM & Forensics Lab",
    category: "build",
    badge: "Engineering Lab (Build Only)",
    role: "SecOps & Forensics Engineer",
    clientSector: "Defensive Cyber & SIEM Tooling",
    businessProblem:
      "Engineering reference architecture demonstrating real-time threat intelligence ingestion and browser-native cryptographic digital forensics without commercial enterprise tool lock-in.",
    deliveredImpact:
      "Combines a secure login gateway, live SIEM event feed with CSV log ingestion (PapaParse), interactive MITRE ATT&CK STIX browser, IP-API threat intelligence proxy, WebCrypto browser forensics, and automated incident reporting.",
    description:
      "A modular, high-performance Security Operations Center (SOC) platform designed for real-time security analysis. Combines a secure login gateway, live SIEM event feed with CSV log ingestion (PapaParse), interactive MITRE ATT&CK STIX browser, IP-API threat intelligence proxy, WebCrypto browser-native forensics (SHA-256/SHA-512 & magic bytes detection), VirusTotal API integration, database-backed Incident Response Kanban Board, and automated Intelligence Report Generator (Executive and Technical outputs).",
    image: project12,
    github: "https://github.com/rafiimafif/aio-soc-platform",
    tags: ["React 18", "Express.js", "PostgreSQL", "TailwindCSS", "Recharts", "WebCrypto", "MITRE ATT&CK", "STIX Feed", "VirusTotal API", "Docker", "Kanban Board", "SOC Platform"],
  },
  // 6. Engineering Lab: Production AI System
  {
    title: "Production AI System",
    systemId: "ai.cluster.local",
    systemType: "Local LLM & MCP Lab",
    category: "build",
    badge: "Engineering Lab (Build Only)",
    role: "AI Platform Engineer",
    clientSector: "Enterprise AI & Local Infrastructure",
    businessProblem:
      "Enterprise security constraints prohibiting cloud LLM API data transmission, requiring on-premise, air-gapped GPU memory optimization and standardized agent tooling.",
    deliveredImpact:
      "Delivered a 100% containerized local inference stack using Qwen 2.5, LangGraph agentic workflows, ChromaDB vector storage, Langfuse observability, and Model Context Protocol (MCP) server tooling.",
    description:
      "A production-grade, GPU-accelerated AI ecosystem built exclusively with local Qwen 2.5 models. Fully containerized using Docker Compose, it features optimized memory management for NVIDIA RTX GPUs, agentic workflows via LangGraph, and a standardized tool layer using the Model Context Protocol (MCP).",
    image: project9,
    github: "https://github.com/rafiimafif/production-ai",
    tags: ["Next.js", "Ollama", "Qwen 2.5", "LangGraph", "ChromaDB", "Langfuse", "MCP", "Docker Compose", "FastAPI"],
  },
];
