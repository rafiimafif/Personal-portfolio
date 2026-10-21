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
  Boxes,
  User,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useTheme } from "../context/ThemeContext";
import { CONTACT_INFO } from "../config/contact";
import profileImg from "@/assets/profile/profile.jpg";

const keyMetrics = [
  {
    value: "5+ Years",
    label: "DevOps & DevSecOps",
    detail: "Enterprise IT & platform delivery",
  },
  {
    value: "Production",
    label: "Freelance & Client Delivery",
    detail: "Full-stack ERP, CRM & cloud pipelines",
  },
  {
    value: "100%",
    label: "Gate Compliance",
    detail: "Zero-trust SSDLC gating policy",
  },
  {
    value: "Multi-Stack",
    label: "Engineering Stack",
    detail: "React, Django, Laravel, Jenkins & K8s",
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
    <div className="min-h-[calc(100vh-4rem)] pt-28 sm:pt-32 md:pt-36 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* 1. Clean Circular Portrait & Role Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 mb-6"
        >
          <div className="relative">
            <div
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 transition-transform duration-300 hover:scale-[1.03] ${
                isLight
                  ? "border-slate-200 shadow-[0_12px_30px_-8px_rgba(15,23,42,0.15)]"
                  : "border-white/15 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)]"
              }`}
            >
              <img
                src={profileImg}
                alt="Rafii Afif"
                className="w-full h-full object-cover object-[50%_12%] scale-125"
              />
            </div>
            <span
              className={`absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ${
                isLight ? "ring-[#f8fafc]" : "ring-[#090d16]"
              }`}
              title="Active & Ready for collaboration"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            </span>
          </div>

          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide flex-wrap justify-center ${
              isLight
                ? "bg-white/90 border-slate-200/90 text-slate-800 shadow-sm"
                : "bg-slate-900/70 border-white/10 text-slate-200 backdrop-blur-md"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>DevSecOps Engineer &middot; AXA Insurance Indonesia</span>
            <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">&bull;</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider ${
                isLight
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
              }`}
            >
              Freelance Software Engineer
            </span>
          </div>
        </motion.div>

        {/* 2. Centered Name & Headlines */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] mb-4 gradient-text"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Rafii Afif
        </motion.h1>

        <motion.h2
          className={`text-lg sm:text-2xl md:text-[26px] font-semibold mb-5 tracking-tight max-w-3xl leading-snug mx-auto ${
            isLight ? "text-slate-700" : "text-slate-200"
          }`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          DevSecOps Engineer &amp; Freelance Software Engineer building zero-trust release pipelines, enterprise automation, and custom web systems
        </motion.h2>

        <motion.p
          className={`text-sm sm:text-base mb-9 max-w-2xl mx-auto leading-relaxed px-2 ${
            isLight ? "text-slate-600" : "text-slate-400"
          }`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          DevSecOps Engineer at AXA Insurance Indonesia with 5+ years of enterprise experience in SSDLC governance and CI/CD security. Also delivering freelance full-stack systems, custom ERP/CRM architectures, and automated cloud sync pipelines for clients.
        </motion.p>

        {/* 3. Centered Pill CTA Buttons & Terminal Copy Bar */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                  : "surface-card text-slate-100 hover:border-white/20"
              }`}
            >
              <Eye className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>View CV</span>
            </a>

            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              download="DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-slate-900 border-slate-900 text-white hover:bg-slate-800 shadow-sm"
                  : "bg-emerald-600 border-emerald-500/80 text-white hover:bg-emerald-500 shadow-[0_0_24px_-6px_rgba(16,185,129,0.5)]"
              }`}
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>

            <Link
              to="/about"
              className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                  : "surface-card text-slate-100 hover:border-white/20"
              }`}
            >
              <User className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>About Me</span>
            </Link>

            <Link
              to="/projects"
              className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                  : "surface-card text-slate-100 hover:border-white/20"
              }`}
            >
              <Boxes className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>View Projects</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={handleEmailClick}
            className={`group relative flex items-center gap-2.5 py-2 px-4 min-h-[44px] rounded-full transition-all cursor-copy sm:cursor-pointer border ${
              isLight
                ? "bg-white/90 border-slate-200/90 text-slate-800 hover:border-slate-300 shadow-sm"
                : "bg-slate-900/60 border-white/10 text-slate-300 hover:border-white/20 backdrop-blur-md"
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
            <span
              className={`ml-1 p-1 rounded-full transition-colors ${
                isLight ? "group-hover:bg-slate-100" : "group-hover:bg-slate-800"
              }`}
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
              ) : (
                <Copy
                  className={`w-3.5 h-3.5 ${
                    isLight
                      ? "text-slate-400 group-hover:text-slate-700"
                      : "text-slate-500 group-hover:text-slate-300"
                  }`}
                  aria-hidden="true"
                />
              )}
            </span>
          </button>
        </motion.div>

        {/* 4. Single Unified Smooth Metrics Strip (Replaces 4 separate rectangles) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className={`surface-card rounded-3xl max-w-4xl mx-auto mb-9 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 sm:divide-x ${
            isLight ? "divide-slate-200/80" : "divide-white/[0.06]"
          }`}
        >
          {keyMetrics.map((item) => (
            <div
              key={item.label}
              className="p-5 sm:p-6 text-center flex flex-col items-center justify-center"
            >
              <div
                className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight whitespace-nowrap mb-1 ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {item.value}
              </div>
              <div
                className={`text-xs sm:text-sm font-semibold ${
                  isLight ? "text-slate-800" : "text-slate-200"
                }`}
              >
                {item.label}
              </div>
              <div
                className={`text-[11px] mt-1 leading-relaxed ${
                  isLight ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 5. Clean Minimal Pill Social Links (Replaces 3 separate square boxes) */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
        >
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2.5 px-4 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-all ${
              isLight
                ? "bg-white/90 border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                : "surface-card text-slate-300 hover:text-white hover:border-white/20"
            }`}
            aria-label="Visit GitHub profile"
          >
            <Github className="w-4 h-4 text-emerald-500" aria-hidden="true" />
            <span>GitHub</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-mono font-semibold ${
                isLight ? "bg-slate-100 text-slate-800" : "bg-white/10 text-white"
              }`}
            >
              {displayRepos} Repos
            </span>
            <ArrowUpRight
              className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>

          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-all ${
              isLight
                ? "bg-white/90 border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                : "surface-card text-slate-300 hover:text-white hover:border-white/20"
            }`}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="w-4 h-4 text-emerald-500" aria-hidden="true" />
            <span>LinkedIn</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-all ${
              isLight
                ? "bg-white/90 border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                : "surface-card text-slate-300 hover:text-white hover:border-white/20"
            }`}
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" aria-hidden="true" />
            <span>WhatsApp</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
