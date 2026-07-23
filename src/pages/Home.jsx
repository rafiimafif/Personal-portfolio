import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "@/data/projects";
import cvPdf from "@/assets/files/cv_pdf/Rafii Muhammad Afif - DevOps Engineer - CV.pdf";

const Home = () => {
  const [copied, setCopied] = useState(false);
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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm tracking-wider uppercase text-gray-300 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          DevSecOps Engineer at AXA Insurance Indonesia
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight gradient-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Rafii Muhammad Afif
        </motion.h1>

        {/* Hero Tagline */}
        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight max-w-3xl leading-snug mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Automating release pipelines, embedding DevSecOps & building secure cloud infrastructure
        </motion.h2>

        {/* Summary Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          DevSecOps Engineer with 4+ years of experience across DevOps, platform engineering, and enterprise IT operations. Experienced in building secure CI/CD pipelines using Jenkins, OpenShift, Kubernetes, Docker, SonarQube, Snyk, Trivy, Gitleaks, and Artifactory.
        </motion.p>

        {/* Action Buttons & Terminal Email */}
        <motion.div
          className="flex flex-col items-center gap-5 sm:gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download CV
            </a>
            <Link
              to="/about"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 border border-white/10 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-md flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>

          {/* Vercel Terminal Style Email Button */}
          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 px-5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-copy sm:cursor-pointer backdrop-blur-md"
            aria-label={`Email: ${email}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3.5 text-gray-400 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>
              <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">
                ~ {email}
              </span>
            </div>
            <div className="ml-2">
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              ) : (
                <Copy
                  className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors"
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
            className="flex flex-col items-center group w-full p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all"
            whileHover={{ y: -2 }}
            aria-label="Visit GitHub profile"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mb-1.5" />
            <span className="text-sm sm:text-base font-semibold text-white">
              {displayRepos}
            </span>
            <span className="text-[11px] sm:text-xs text-gray-400">
              GitHub Repos
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/rafii-muhammad-afif/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all"
            whileHover={{ y: -2 }}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mb-1.5" />
            <span className="text-sm sm:text-base font-semibold text-white">Connect</span>
            <span className="text-[11px] sm:text-xs text-gray-400">
              LinkedIn
            </span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all"
            whileHover={{ y: -2 }}
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mb-1.5" />
            <span className="text-sm sm:text-base font-semibold text-white">Direct</span>
            <span className="text-[11px] sm:text-xs text-gray-400">
              WhatsApp
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

