import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  Eye,
  Terminal,
  ShieldCheck,
  Server,
  Cloud,
  CheckCircle2,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useTheme } from "../context/ThemeContext";
import { SSDLCFlowAnimation } from "@/components/SSDLCFlowAnimation";
import profileImg from "@/assets/profile/profile.jpg";

const keyMetrics = [
  {
    value: "5+ Years",
    label: "DevOps & DevSecOps",
    detail: "Enterprise IT & platform delivery",
  },
  {
    value: "100%",
    label: "Gate Compliance",
    detail: "Zero-trust SSDLC gating policy",
  },
  {
    value: "Multi-Stack",
    label: "Pipeline Coverage",
    detail: "Java, .NET, Node.js, and PHP",
  },
  {
    value: "Zero-Trust",
    label: "Supply Chain Security",
    detail: "Cosign v3 signing & CycloneDX SBOM",
  },
];

const corePillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Shift-Left Security & Gating",
    tag: "Security Engineering",
    description:
      "Embedding automated security gates across every code commit and pull request. Orchestrating SAST (SonarQube, Snyk), SCA (Trivy), secret detection (Gitleaks), IaC scanning (Checkov), and DAST (OWASP ZAP).",
    highlights: [
      "SonarQube Quality Gate API verification",
      "Gitleaks commit history secret detection",
      "Checkov IaC compliance for Terraform & K8s",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-cyan-500" />,
    title: "Jenkins Shared Library Modernization",
    tag: "Platform Engineering",
    description:
      "Creating reusable, zero-boilerplate Groovy pipeline orchestrators that standardize build, security audit, artifact storage, and deployment workflows across diverse multi-stack squads.",
    highlights: [
      "Modular templates: templatePipelineOnprem, legacyDotnetPipeline",
      "Non-blocking warning stage resilience",
      "Standardized build & deploy for enterprise squads",
    ],
  },
  {
    icon: <Cloud className="w-6 h-6 text-indigo-500" />,
    title: "Container Attestation & Cloud Delivery",
    tag: "Cloud & Infrastructure",
    description:
      "Hardening container supply chains with Sigstore Cosign v3 offline image signing, automated CycloneDX SBOM generation, and zero-downtime rolling rollouts on Red Hat OpenShift.",
    highlights: [
      "Offline Cosign signing with SHA256 image digest pinning",
      "CycloneDX Software Bill of Materials (SBOM)",
      "OpenShift Pod Disruption Budgets & rolling updates",
    ],
  },
];

const toolCategories = [
  {
    category: "Security & Governance",
    tools: [
      "SonarQube",
      "Snyk Code",
      "Trivy",
      "Gitleaks",
      "Checkov",
      "Sigstore Cosign",
      "OWASP ZAP",
      "CycloneDX SBOM",
    ],
  },
  {
    category: "CI/CD & Cloud Infrastructure",
    tools: [
      "Jenkins",
      "Jenkins Shared Libraries",
      "Red Hat OpenShift",
      "Kubernetes",
      "Docker",
      "JFrog Artifactory",
      "AWS",
    ],
  },
  {
    category: "Testing, Automation & Scripting",
    tools: [
      "Playwright E2E",
      "Groovy",
      "Bash",
      "Shell Scripting",
      "Linux",
      "GitOps",
      "Jira",
      "ServiceNow",
    ],
  },
];

const Home = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const email = "rafii.afif@gmail.com";
  const whatsappNumber = "+6285155103214";
  const displayRepos = projects.length.toString();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = "mailto:" + email;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 px-4">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto text-center relative z-10 mb-20 sm:mb-24">
        {/* Profile Avatar + Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 mb-6"
        >
          <div className="relative">
            <img
              src={profileImg}
              alt="Rafii Afif"
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 shadow-xl ${
                isLight ? "border-slate-300 shadow-slate-200" : "border-slate-700/80 shadow-black/60"
              }`}
            />
            <span
              className="absolute -bottom-1 -right-1 flex h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-[#0b0f17] dark:ring-[#0b0f17]"
              title="Active and ready for collaboration"
            />
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border text-xs sm:text-sm font-medium tracking-wide shadow-sm ${
              isLight
                ? "bg-white border-slate-300 text-slate-800"
                : "bg-slate-900/90 border-slate-800 text-slate-200"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>DevSecOps Engineer &middot; AXA Insurance Indonesia</span>
          </div>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 ${
            isLight ? "text-slate-900" : "text-white"
          }`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Rafii Afif
        </motion.h1>

        {/* Hero Tagline */}
        <motion.h2
          className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 tracking-tight max-w-3xl leading-snug mx-auto ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Automating release pipelines, embedding DevSecOps gates, and engineering resilient cloud platforms
        </motion.h2>

        {/* Summary Description */}
        <motion.p
          className={`text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-2 ${
            isLight ? "text-slate-600" : "text-slate-400"
          }`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          DevSecOps Engineer with 5+ years of experience in enterprise SSDLC governance, Jenkins Shared Library modernization, and multi-stack CI/CD automation. Hands-on with SonarQube, Snyk, Trivy, Gitleaks, Checkov, Cosign, OWASP ZAP, CycloneDX, OpenShift, and Artifactory.
        </motion.p>

        {/* Action Buttons & Terminal Email */}
        <motion.div
          className="flex flex-col items-center gap-5 sm:gap-6 mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800"
              }`}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              View CV
            </a>
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              download="DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800"
                  : "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-500"
              }`}
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download CV
            </a>
            <Link
              to="/projects"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800"
              }`}
            >
              <Boxes className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Explore Work
            </Link>
          </div>

          {/* Terminal Email Command */}
          <button
            onClick={handleEmailClick}
            className={`group relative flex items-center gap-2 py-2.5 px-4 min-h-[44px] rounded-lg transition-colors cursor-copy sm:cursor-pointer border ${
              isLight
                ? "bg-white border-slate-300 text-slate-800 hover:border-slate-400 shadow-sm"
                : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700"
            }`}
            aria-label={`Email: ${email}`}
          >
            <div className="flex items-center gap-2">
              <Terminal className={`w-4 h-4 ${isLight ? "text-slate-600" : "text-emerald-400"}`} aria-hidden="true" />
              <span className="text-xs sm:text-sm font-mono text-slate-400 select-none">$ mail</span>
              <span className={`text-xs sm:text-sm font-mono font-medium ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                {email}
              </span>
            </div>
            <div className="ml-2">
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              ) : (
                <Copy
                  className={`w-4 h-4 ${isLight ? "text-slate-400 group-hover:text-slate-700" : "text-slate-500 group-hover:text-slate-300"}`}
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </motion.div>

        {/* Key Metrics / Evidence Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {keyMetrics.map((item) => (
            <div
              key={item.label}
              className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-colors ${
                isLight
                  ? "bg-white border-slate-200 shadow-sm"
                  : "bg-slate-900/70 border-slate-800/90"
              }`}
            >
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono mb-1 ${
                isLight ? "text-slate-900" : "text-white"
              }`}>
                {item.value}
              </div>
              <div>
                <div className={`text-xs sm:text-sm font-semibold ${isLight ? "text-slate-800" : "text-slate-200"}`}>
                  {item.label}
                </div>
                <div className={`text-[11px] sm:text-xs mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 2. Interactive SSDLC Pipeline Showcase */}
      <section className="max-w-6xl mx-auto mb-20 sm:mb-28">
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${
              isLight ? "text-emerald-700" : "text-emerald-400"
            }`}>
              Interactive Architecture
            </p>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              Enterprise SSDLC Pipeline Simulation
            </h2>
          </div>
          <span className={`px-3 py-1 text-xs uppercase tracking-wider font-mono rounded-md border font-medium ${
            isLight
              ? "border-slate-300 bg-slate-100 text-slate-700"
              : "border-slate-700 bg-slate-800/80 text-slate-300"
          }`}>
            Live Orchestrator
          </span>
        </div>

        <p className={`text-sm sm:text-base leading-relaxed max-w-3xl mb-8 ${
          isLight ? "text-slate-600" : "text-slate-400"
        }`}>
          A live, interactive demonstration of the multi-stage DevSecOps pipeline orchestrator implemented at AXA Insurance Indonesia. Click through the stages below to inspect gating policies, container signing, and real-time security telemetry.
        </p>

        {/* Pipeline Visual Component */}
        <SSDLCFlowAnimation />
      </section>

      {/* 3. Core DevSecOps Pillars */}
      <section className="max-w-6xl mx-auto mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${
            isLight ? "text-emerald-700" : "text-emerald-400"
          }`}>
            Delivery Framework
          </p>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
            isLight ? "text-slate-900" : "text-white"
          }`}>
            Key Engineering Domains
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
            Architecting resilient, compliant, and scalable platforms with shift-left security principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {corePillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-colors ${
                isLight
                  ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? "bg-slate-50 border-slate-200" : "bg-slate-800/80 border-slate-700"
                  }`}>
                    {pillar.icon}
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border uppercase ${
                    isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                  }`}>
                    {pillar.tag}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-3 ${isLight ? "text-slate-900" : "text-white"}`}>
                  {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {pillar.description}
                </p>
              </div>

              <div className={`pt-4 border-t space-y-2 text-xs ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                {pillar.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                      isLight ? "text-emerald-600" : "text-emerald-400"
                    }`} />
                    <span className={`${isLight ? "text-slate-700" : "text-slate-300"}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technology Ecosystem Matrix */}
      <section className="max-w-6xl mx-auto mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${
            isLight ? "text-emerald-700" : "text-emerald-400"
          }`}>
            Technical Competencies
          </p>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
            isLight ? "text-slate-900" : "text-white"
          }`}>
            DevSecOps &amp; Infrastructure Ecosystem
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
            Production tooling utilized for security scanning, pipeline orchestration, container lifecycle, and cloud observability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {toolCategories.map((group) => (
            <div
              key={group.category}
              className={`p-6 rounded-xl border ${
                isLight
                  ? "bg-white border-slate-200 shadow-sm"
                  : "bg-slate-900/80 border-slate-800"
              }`}
            >
              <h3 className={`text-sm font-mono font-semibold uppercase tracking-wider mb-4 pb-2 border-b ${
                isLight ? "text-slate-800 border-slate-100" : "text-slate-200 border-slate-800"
              }`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 text-xs font-mono rounded-md border transition-colors ${
                      isLight
                        ? "bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300"
                        : "bg-slate-800/70 text-slate-200 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Quick Connect & Repositories */}
      <section className="max-w-4xl mx-auto text-center">
        <div
          className={`p-8 sm:p-10 rounded-2xl border relative overflow-hidden ${
            isLight
              ? "bg-white border-slate-200 shadow-sm"
              : "bg-slate-900/90 border-slate-800"
          }`}
        >
          <div className="relative z-10">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              Connect &amp; Collaborate
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}>
              Open for DevSecOps architecture, pipeline security audits, and enterprise platform delivery discussions.
            </p>

            <div className="grid grid-cols-3 justify-items-center gap-3 sm:gap-4 max-w-md mx-auto mb-8">
              <a
                href="https://github.com/rafiimafif"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center group w-full p-3 min-h-[44px] rounded-lg border transition-colors ${
                  isLight
                    ? "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    : "bg-slate-800/60 border-slate-700 hover:bg-slate-800"
                }`}
                aria-label="Visit GitHub profile"
              >
                <Github className={`w-5 h-5 mb-1.5 transition-colors ${
                  isLight ? "text-slate-700 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"
                }`} />
                <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>
                  {displayRepos}
                </span>
                <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                  GitHub Repos
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/rafii-muhammad-afif/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center group w-full p-3 min-h-[44px] rounded-lg border transition-colors ${
                  isLight
                    ? "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    : "bg-slate-800/60 border-slate-700 hover:bg-slate-800"
                }`}
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className={`w-5 h-5 mb-1.5 transition-colors ${
                  isLight ? "text-slate-700 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"
                }`} />
                <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>Connect</span>
                <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                  LinkedIn
                </span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center group w-full p-3 min-h-[44px] rounded-lg border transition-colors ${
                  isLight
                    ? "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    : "bg-slate-800/60 border-slate-700 hover:bg-slate-800"
                }`}
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className={`w-5 h-5 mb-1.5 transition-colors ${
                  isLight ? "text-slate-700 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"
                }`} />
                <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>Direct</span>
                <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                  WhatsApp
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold border transition-colors ${
                  isLight
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-slate-100 text-slate-900 hover:bg-white"
                }`}
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold border transition-colors ${
                  isLight
                    ? "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                    : "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"
                }`}
              >
                <span>Send a Direct Message</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
