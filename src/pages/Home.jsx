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
    <div className="min-h-[calc(100vh-4rem)] pt-24 sm:pt-28 md:pt-32 pb-16 px-4 flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
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
              title="Active & Ready for collaboration"
            />
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border text-xs sm:text-sm font-medium tracking-wide shadow-sm flex-wrap justify-center ${
              isLight
                ? "bg-white border-slate-300 text-slate-800"
                : "bg-slate-900/90 border-slate-800 text-slate-200"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span>DevSecOps Engineer &middot; AXA Insurance Indonesia</span>
            <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">&bull;</span>
            <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider ${
              isLight ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-emerald-950/60 text-emerald-400 border border-emerald-800/60"
            }`}>
              Freelance Software Engineer
            </span>
          </div>
        </motion.div>

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

        <motion.h2
          className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 tracking-tight max-w-3xl leading-snug mx-auto ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          DevSecOps Engineer &amp; Freelance Software Engineer building zero-trust release pipelines, enterprise automation, and custom web systems
        </motion.h2>

        <motion.p
          className={`text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-2 ${
            isLight ? "text-slate-600" : "text-slate-400"
          }`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          DevSecOps Engineer at AXA Insurance Indonesia with 5+ years of enterprise experience in SSDLC governance and CI/CD security. Also delivering freelance full-stack systems, custom ERP/CRM architectures, and automated cloud sync pipelines for clients.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-5 sm:gap-6 mb-10"
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
              to="/about"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800"
              }`}
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
            <Link
              to="/projects"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center gap-2 border ${
                isLight
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800"
              }`}
            >
              <Boxes className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              View Projects
            </Link>
          </div>

          <button
            onClick={handleEmailClick}
            className={`group relative flex items-center gap-2 py-2.5 px-4 min-h-[44px] rounded-lg transition-colors cursor-copy sm:cursor-pointer border ${
              isLight
                ? "bg-white border-slate-300 text-slate-800 hover:border-slate-400 shadow-sm"
                : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700"
            }`}
            aria-label={`Copy email address ${email}`}
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

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10"
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

        <motion.div
          className="grid grid-cols-3 justify-items-center gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group w-full p-3 min-h-[44px] rounded-lg border transition-colors ${
              isLight
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
            }`}
            aria-label="Visit GitHub profile"
          >
            <Github className={`w-5 h-5 mb-1.5 transition-colors ${
              isLight ? "text-slate-700 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"
            }`} aria-hidden="true" />
            <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>
              {displayRepos}
            </span>
            <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              GitHub Repos
            </span>
          </a>

          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group w-full p-3 min-h-[44px] rounded-lg border transition-colors ${
              isLight
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
            }`}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className={`w-5 h-5 mb-1.5 transition-colors ${
              isLight ? "text-slate-700 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"
            }`} aria-hidden="true" />
            <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>Connect</span>
            <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              LinkedIn
            </span>
          </a>

          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group w-full p-3 min-h-[44px] rounded-lg border transition-colors ${
              isLight
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
            }`}
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className={`w-5 h-5 mb-1.5 transition-colors ${
              isLight ? "text-slate-700 group-hover:text-slate-900" : "text-slate-400 group-hover:text-white"
            }`} aria-hidden="true" />
            <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>Direct</span>
            <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
