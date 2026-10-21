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
  ArrowUpRight,
  ShieldCheck,
  Server,
  Code2,
  MapPin,
  User,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useTheme } from "../context/ThemeContext";
import { CONTACT_INFO } from "../config/contact";
import profileImg from "@/assets/profile/profile.jpg";

const keyMetrics = [
  {
    index: "01",
    value: "5+ Years",
    label: "Enterprise IT & DevSecOps",
    detail: "Production platform & release engineering",
  },
  {
    index: "02",
    value: "100%",
    label: "SSDLC Gate Enforcement",
    detail: "Automated SAST, SCA, secrets & SBOM policy",
  },
  {
    index: "03",
    value: "Production",
    label: "Freelance Full-Stack Delivery",
    detail: "Custom ERP, CRM & cloud sync architectures",
  },
  {
    index: "04",
    value: "Multi-Stack",
    label: "Polyglot Engineering",
    detail: "Jenkins, OpenShift, K8s, React, Django & Laravel",
  },
];

const securityGates = [
  { stage: "01", name: "Gitleaks Secret Detection", status: "ENFORCED" },
  { stage: "02", name: "SonarQube SAST Quality Gate", status: "PASSED" },
  { stage: "03", name: "Snyk & Trivy Container Audit", status: "0 CRITICAL" },
  { stage: "04", name: "CycloneDX SBOM Attestation", status: "VERIFIED" },
  { stage: "05", name: "OpenShift Zero-Downtime Rollout", status: "HEALTHY" },
];

const engineeringPillars = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Zero-Trust CI/CD & SSDLC",
    description:
      "Architecting automated Jenkins & GitLab pipelines with mandatory shift-left security gates before any artifact reaches staging or production.",
    tags: ["Jenkins", "SonarQube", "Snyk", "Trivy", "Gitleaks", "CycloneDX"],
  },
  {
    id: "02",
    icon: Server,
    title: "Cloud-Native & OpenShift",
    description:
      "Operating resilient containerized workloads across Red Hat OpenShift, Kubernetes, and hardened Linux infrastructure with full observability.",
    tags: ["OpenShift", "Kubernetes", "Docker", "AWS", "Linux", "Bash"],
  },
  {
    id: "03",
    icon: Code2,
    title: "Enterprise Full-Stack Systems",
    description:
      "Designing and shipping custom ERP/CRM platforms, multi-database synchronization engines, and modern web applications for freelance clients.",
    tags: ["React", "Django", "Laravel", "PostgreSQL", "REST API", "Tailwind"],
  },
];

const Home = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const email = CONTACT_INFO.email;
  const displayRepos = projects.length.toString();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Split Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-left"
          >
            {/* Status Pill */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium mb-6 ${
                isLight
                  ? "bg-white/90 border-slate-200 text-slate-700 shadow-sm"
                  : "bg-slate-900/80 border-slate-800 text-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>DevSecOps Engineer &middot; AXA Insurance Indonesia</span>
              <span className="hidden sm:inline text-slate-500">&bull;</span>
              <span
                className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                  isLight
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-emerald-950/70 text-emerald-400 border border-emerald-800/60"
                }`}
              >
                Freelance Available
              </span>
            </div>

            {/* Eyebrow */}
            <div
              className={`text-xs font-mono uppercase tracking-[0.18em] mb-3 ${
                isLight ? "text-emerald-700 font-semibold" : "text-emerald-400"
              }`}
            >
              Zero-Trust Release Engineering &amp; Full-Stack Systems
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-5">
              <span className="gradient-text">Rafii Afif</span>
              <span
                className={`block text-xl sm:text-2xl lg:text-[28px] font-semibold tracking-tight mt-3 leading-snug ${
                  isLight ? "text-slate-700" : "text-slate-300"
                }`}
              >
                Securing enterprise CI/CD pipelines and shipping production full-stack architectures.
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p
              className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              With 5+ years of enterprise IT and platform engineering experience at{" "}
              <span className={isLight ? "text-slate-900 font-medium" : "text-slate-200 font-medium"}>
                AXA Insurance Indonesia
              </span>
              , I enforce automated SSDLC security governance across OpenShift and Kubernetes—while partnering with clients as a{" "}
              <span className={isLight ? "text-slate-900 font-medium" : "text-slate-200 font-medium"}>
                Freelance Software Engineer
              </span>{" "}
              to build custom ERP/CRM platforms and cloud automation systems.
            </p>

            {/* Primary & Secondary Action Row */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <Link
                to="/projects"
                className={`px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-2 border ${
                  isLight
                    ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800 shadow-sm"
                    : "bg-emerald-600 border-emerald-500/80 text-white hover:bg-emerald-500 shadow-[0_0_24px_-6px_rgba(16,185,129,0.45)]"
                }`}
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-colors inline-flex items-center gap-2 border ${
                  isLight
                    ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                    : "bg-slate-900/90 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
                }`}
              >
                <User className="w-4 h-4" aria-hidden="true" />
                <span>About &amp; Experience</span>
              </Link>

              <a
                href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
                download="DevSecOps_RafiiMuhammadAfif_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-colors inline-flex items-center gap-2 border ${
                  isLight
                    ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                    : "bg-slate-900/90 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
                }`}
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>

              <a
                href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3.5 py-2.5 min-h-[44px] rounded-xl text-sm font-medium transition-colors inline-flex items-center gap-1.5 border ${
                  isLight
                    ? "bg-slate-100/80 border-slate-200 text-slate-700 hover:bg-slate-200/70"
                    : "bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <Eye className="w-4 h-4" aria-hidden="true" />
                <span>Preview CV</span>
              </a>
            </div>

            {/* Unified Terminal Email + Social Strip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleEmailClick}
                className={`group flex items-center gap-2.5 py-2 px-3.5 min-h-[44px] rounded-xl transition-colors cursor-copy sm:cursor-pointer border ${
                  isLight
                    ? "bg-white border-slate-200/90 text-slate-800 hover:border-slate-300 shadow-sm"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
                aria-label={`Copy email address ${email}`}
              >
                <Terminal
                  className={`w-4 h-4 ${isLight ? "text-emerald-700" : "text-emerald-400"}`}
                  aria-hidden="true"
                />
                <span className="text-xs font-mono text-slate-500 select-none">$ mail</span>
                <span
                  className={`text-xs sm:text-sm font-mono font-medium ${
                    isLight ? "text-slate-800" : "text-slate-100"
                  }`}
                >
                  {email}
                </span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 ml-1" aria-hidden="true" />
                ) : (
                  <Copy
                    className={`w-3.5 h-3.5 ml-1 ${
                      isLight
                        ? "text-slate-400 group-hover:text-slate-700"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </button>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl border text-xs font-medium transition-colors ${
                  isLight
                    ? "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                    : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
                aria-label="Visit GitHub profile"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                    isLight ? "bg-slate-100 text-slate-700" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {displayRepos}
                </span>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl border text-xs font-medium transition-colors ${
                  isLight
                    ? "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                    : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl border text-xs font-medium transition-colors ${
                  isLight
                    ? "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                    : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Executive Profile & Live SSDLC Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="surface-card rounded-2xl p-5 sm:p-6 relative overflow-hidden">
              {/* Top Specular Accent Line */}
              <div
                className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"
                aria-hidden="true"
              />

              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-800/70 dark:border-slate-800/70">
                <div className="relative shrink-0">
                  <img
                    src={profileImg}
                    alt="Rafii Afif"
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border ${
                      isLight ? "border-slate-300 shadow-sm" : "border-slate-700/80 shadow-lg"
                    }`}
                  />
                  <span
                    className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-[#0b101b]"
                    title="Active & Available"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2
                      className={`text-base sm:text-lg font-bold truncate ${
                        isLight ? "text-slate-900" : "text-white"
                      }`}
                    >
                      Rafii Muhammad Afif
                    </h2>
                  </div>
                  <p
                    className={`text-xs sm:text-sm font-medium ${
                      isLight ? "text-emerald-700" : "text-emerald-400"
                    }`}
                  >
                    DevSecOps &amp; Platform Engineer
                  </p>
                  <div
                    className={`flex items-center gap-1.5 text-xs mt-1 ${
                      isLight ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Jakarta, Indonesia &middot; AXA Insurance</span>
                  </div>
                </div>
              </div>

              {/* SSDLC Pipeline Telemetry Sub-Panel */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                      isLight ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    Zero-Trust SSDLC Baseline
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      isLight
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-emerald-950/60 text-emerald-400 border-emerald-800/50"
                    }`}
                  >
                    5/5 GATES ACTIVE
                  </span>
                </div>

                <div className="space-y-2">
                  {securityGates.map((gate) => (
                    <div
                      key={gate.stage}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl border text-xs ${
                        isLight
                          ? "bg-slate-50/90 border-slate-200/80 text-slate-700"
                          : "bg-slate-900/75 border-slate-800/80 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                            isLight
                              ? "bg-slate-200/80 text-slate-600"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {gate.stage}
                        </span>
                        <span className="truncate font-medium">{gate.name}</span>
                      </div>
                      <span
                        className={`font-mono text-[10px] font-semibold shrink-0 ml-2 ${
                          isLight ? "text-emerald-700" : "text-emerald-400"
                        }`}
                      >
                        {gate.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link to Interactive Simulator */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 dark:border-slate-800/60">
                <span
                  className={`text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}
                >
                  Interactive pipeline architecture
                </span>
                <Link
                  to="/about"
                  className={`inline-flex items-center gap-1 text-xs font-mono font-semibold transition-colors ${
                    isLight
                      ? "text-emerald-700 hover:text-emerald-800"
                      : "text-emerald-400 hover:text-emerald-300"
                  }`}
                >
                  <span>Inspect SSDLC Flow</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Architectural Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16"
        >
          {keyMetrics.map((item) => (
            <div
              key={item.label}
              className="surface-card rounded-2xl p-5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono ${
                    isLight ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  /{item.index}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              </div>
              <div>
                <div
                  className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight mb-1 ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                >
                  {item.value}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    isLight ? "text-slate-800" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </div>
                <div
                  className={`text-xs mt-1 leading-relaxed ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Core Engineering Domains (3-Column Architectural Bento) */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          aria-labelledby="engineering-domains-heading"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div
                className={`text-xs font-mono uppercase tracking-[0.16em] mb-1.5 ${
                  isLight ? "text-emerald-700 font-semibold" : "text-emerald-400"
                }`}
              >
                Core Capabilities
              </div>
              <h2
                id="engineering-domains-heading"
                className={`text-xl sm:text-2xl font-bold tracking-tight ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                Built for security compliance and production scale
              </h2>
            </div>
            <Link
              to="/projects"
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold min-h-[44px] ${
                isLight
                  ? "text-slate-700 hover:text-slate-900"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <span>View all {displayRepos} case studies</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engineeringPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="surface-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isLight
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : "bg-emerald-950/60 border-emerald-800/60 text-emerald-400"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-xs font-mono ${
                          isLight ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {pillar.id}
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold mb-2 ${
                        isLight ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                        isLight ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50 dark:border-slate-800/50">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                          isLight
                            ? "bg-slate-100 border-slate-200 text-slate-700"
                            : "bg-slate-900/90 border-slate-800 text-slate-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
