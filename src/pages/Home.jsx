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
  Terminal,
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
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border text-xs sm:text-sm font-medium tracking-wide mb-6 ${
            isLight
              ? "bg-white border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-900/90 border-slate-800 text-slate-200"
          }`}
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span>DevSecOps Engineer &middot; AXA Insurance Indonesia</span>
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

        {/* Quick Metrics & Links */}
        <motion.div
          className="grid grid-cols-3 justify-items-center gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/rafiimafif"
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
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
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
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
