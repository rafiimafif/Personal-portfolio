import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  Eye,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "@/data/projects";
import { useTheme } from "../context/ThemeContext";

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
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-28 sm:pt-32 md:pt-36 pb-16 px-4 flex flex-col justify-center items-center">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md mb-6 shadow-sm ${
            isLight
              ? "bg-slate-100/90 border-slate-200 text-slate-700 font-medium"
              : "bg-white/5 border-white/10 text-gray-300"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          DevSecOps Engineer at AXA Insurance Indonesia
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 ${
            isLight ? "text-slate-900" : "gradient-text"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Rafii Muhammad Afif
        </motion.h1>

        {/* Hero Tagline */}
        <motion.h2
          className={`text-xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight max-w-3xl leading-snug mx-auto ${
            isLight ? "text-slate-800" : "text-white"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Automating release pipelines, embedding DevSecOps &amp; building secure cloud infrastructure
        </motion.h2>

        {/* Summary Description */}
        <motion.p
          className={`text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-2 ${
            isLight ? "text-slate-600" : "text-gray-400"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          DevSecOps Engineer with 4+ years of experience specializing in enterprise SSDLC framework implementation, Jenkins Shared Library modernization, and multi-stack CI/CD automation. Skilled in SonarQube, Snyk, Trivy, Gitleaks, Checkov, Cosign, OWASP ZAP, CycloneDX, Playwright E2E, OpenShift, and Artifactory.
        </motion.p>

        {/* Action Buttons & Terminal Email */}
        <motion.div
          className="flex flex-col items-center gap-5 sm:gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="/DevSecOps_RafiiMuhammadAfif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 backdrop-blur-md flex items-center gap-2 border ${
                isLight
                  ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                  : "bg-white/10 border-white/10 text-white hover:bg-white/20"
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
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg ${
                isLight
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download CV
            </a>
            <Link
              to="/about"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 backdrop-blur-md flex items-center gap-2 border ${
                isLight
                  ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                  : "bg-white/10 border-white/10 text-white hover:bg-white/20"
              }`}
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>

          {/* Vercel Terminal Style Email Button */}
          <button
            onClick={handleEmailClick}
            className={`group relative flex items-center gap-2 py-2 px-5 rounded-full transition-all cursor-copy sm:cursor-pointer backdrop-blur-md border ${
              isLight
                ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            aria-label={`Email: ${email}`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-3.5 ${isLight ? "text-slate-600 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"}`}>
                <VercelLogo />
              </div>
              <span className={`text-sm font-mono ${isLight ? "text-slate-700 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"}`}>
                ~ {email}
              </span>
            </div>
            <div className="ml-2">
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              ) : (
                <Copy
                  className={`w-4 h-4 ${isLight ? "text-slate-500 group-hover:text-slate-900" : "text-gray-500 group-hover:text-white"}`}
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </motion.div>

        {/* Quick Social Cards */}
        <motion.div
          className="grid grid-cols-3 justify-items-center gap-4 sm:gap-6 max-w-xs sm:max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/rafiimafif"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group w-full p-3 rounded-xl border transition-all ${
              isLight
                ? "bg-white/90 border-slate-200 shadow-sm hover:bg-slate-100"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
            whileHover={{ y: -2 }}
            aria-label="Visit GitHub profile"
          >
            <Github className={`w-5 h-5 sm:w-6 sm:h-6 mb-1.5 transition-colors ${
              isLight ? "text-slate-700 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"
            }`} />
            <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>
              {displayRepos}
            </span>
            <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              GitHub Repos
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rafii-muhammad-afif/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group w-full p-3 rounded-xl border transition-all ${
              isLight
                ? "bg-white/90 border-slate-200 shadow-sm hover:bg-slate-100"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
            whileHover={{ y: -2 }}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className={`w-5 h-5 sm:w-6 sm:h-6 mb-1.5 transition-colors ${
              isLight ? "text-slate-700 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"
            }`} />
            <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>Connect</span>
            <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              LinkedIn
            </span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group w-full p-3 rounded-xl border transition-all ${
              isLight
                ? "bg-white/90 border-slate-200 shadow-sm hover:bg-slate-100"
                : "bg-white/5 border-white/5 hover:bg-white/10"
            }`}
            whileHover={{ y: -2 }}
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className={`w-5 h-5 sm:w-6 sm:h-6 mb-1.5 transition-colors ${
              isLight ? "text-slate-700 group-hover:text-slate-900" : "text-gray-400 group-hover:text-white"
            }`} />
            <span className={`text-sm sm:text-base font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>Direct</span>
            <span className={`text-[11px] sm:text-xs ${isLight ? "text-slate-500" : "text-gray-400"}`}>
              WhatsApp
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
