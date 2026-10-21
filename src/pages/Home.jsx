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
    index: "01",
    value: "5+ Years",
    label: "DevOps & DevSecOps",
    detail: "Enterprise IT & platform delivery",
  },
  {
    index: "02",
    value: "Production",
    label: "Freelance & Client Delivery",
    detail: "Full-stack ERP, CRM & cloud pipelines",
  },
  {
    index: "03",
    value: "100%",
    label: "Gate Compliance",
    detail: "Zero-trust SSDLC gating policy",
  },
  {
    index: "04",
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
        {/* 1. Centered Portrait & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-5 mb-7"
        >
          {/* Portrait Pedestal */}
          <div className="relative group">
            <div
              className={`p-1.5 rounded-[26px] border transition-transform duration-300 group-hover:scale-[1.02] ${
                isLight
                  ? "bg-white/90 border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)]"
                  : "bg-slate-900/80 border-slate-700/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_16px_40px_-10px_rgba(0,0,0,0.75)]"
              }`}
            >
              <img
                src={profileImg}
                alt="Rafii Afif"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-[20px] object-cover object-top"
              />
            </div>
            <span
              className={`absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ${
                isLight ? "ring-[#f8fafc]" : "ring-[#090d16]"
              }`}
              title="Active & Ready for collaboration"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            </span>
          </div>

          {/* Role Status Pill */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-medium tracking-wide flex-wrap justify-center ${
              isLight
                ? "bg-white/95 border-slate-200/90 text-slate-800 shadow-sm"
                : "bg-slate-900/85 border-slate-800/90 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>DevSecOps Engineer &middot; AXA Insurance Indonesia</span>
            <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">&bull;</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider ${
                isLight
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-emerald-950/70 text-emerald-400 border border-emerald-800/60"
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

        {/* 3. Centered CTA Buttons & Terminal Copy Bar */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-5 mb-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                  : "surface-card text-slate-100 hover:border-slate-600"
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
              className={`px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
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
              className={`px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                  : "surface-card text-slate-100 hover:border-slate-600"
              }`}
            >
              <User className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>About Me</span>
            </Link>

            <Link
              to="/projects"
              className={`px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                  : "surface-card text-slate-100 hover:border-slate-600"
              }`}
            >
              <Boxes className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              <span>View Projects</span>
            </Link>
          </div>

          {/* Copyable Terminal Email Pill */}
          <button
            type="button"
            onClick={handleEmailClick}
            className={`group relative flex items-center gap-2.5 py-2 px-4 min-h-[44px] rounded-full transition-all cursor-copy sm:cursor-pointer border ${
              isLight
                ? "bg-white/95 border-slate-200/90 text-slate-800 hover:border-slate-300 shadow-sm"
                : "bg-slate-900/85 border-slate-800/90 text-slate-300 hover:border-slate-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
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

        {/* 4. Centered 4-Card Key Metrics Grid (Properly proportioned so titles never wrap) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-10"
        >
          {keyMetrics.map((item) => (
            <div
              key={item.label}
              className="surface-card p-4 sm:p-5 rounded-2xl text-center flex flex-col items-center justify-between relative overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
                aria-hidden="true"
              />
              <span
                className={`text-[10px] font-mono tracking-widest uppercase mb-1.5 ${
                  isLight ? "text-emerald-700/80" : "text-emerald-400/80"
                }`}
              >
                /{item.index}
              </span>
              <div
                className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight whitespace-nowrap mb-1.5 ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {item.value}
              </div>
              <div>
                <div
                  className={`text-xs sm:text-sm font-semibold leading-snug ${
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
            </div>
          ))}
        </motion.div>

        {/* 5. Centered 3-Card Social Channels Row */}
        <motion.div
          className="grid grid-cols-3 justify-items-center gap-3 sm:gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
        >
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card flex flex-col items-center justify-center group w-full p-3.5 sm:p-4 min-h-[44px] rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Visit GitHub profile"
          >
            <div className="flex items-center gap-1 mb-1">
              <Github
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                  isLight
                    ? "text-slate-700 group-hover:text-emerald-700"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
                aria-hidden="true"
              />
              <ArrowUpRight
                className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-emerald-500"
                aria-hidden="true"
              />
            </div>
            <span
              className={`text-sm sm:text-base font-bold font-mono ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              {displayRepos}
            </span>
            <span
              className={`text-[11px] sm:text-xs ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
            >
              GitHub Repos
            </span>
          </a>

          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card flex flex-col items-center justify-center group w-full p-3.5 sm:p-4 min-h-[44px] rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Visit LinkedIn profile"
          >
            <div className="flex items-center gap-1 mb-1">
              <Linkedin
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                  isLight
                    ? "text-slate-700 group-hover:text-emerald-700"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
                aria-hidden="true"
              />
              <ArrowUpRight
                className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-emerald-500"
                aria-hidden="true"
              />
            </div>
            <span
              className={`text-sm sm:text-base font-bold ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              Connect
            </span>
            <span
              className={`text-[11px] sm:text-xs ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
            >
              LinkedIn
            </span>
          </a>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card flex flex-col items-center justify-center group w-full p-3.5 sm:p-4 min-h-[44px] rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Contact via WhatsApp"
          >
            <div className="flex items-center gap-1 mb-1">
              <MessageCircle
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                  isLight
                    ? "text-slate-700 group-hover:text-emerald-700"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
                aria-hidden="true"
              />
              <ArrowUpRight
                className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-emerald-500"
                aria-hidden="true"
              />
            </div>
            <span
              className={`text-sm sm:text-base font-bold ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              Direct
            </span>
            <span
              className={`text-[11px] sm:text-xs ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}
            >
              WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
