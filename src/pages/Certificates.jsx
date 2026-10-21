import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useTheme } from "../context/ThemeContext";
import typescriptPdf from "@/assets/files/certificates_pdf/Learn Jira with real world Example.pdf";
import awsEcsPdf from "@/assets/files/certificates_pdf/Network Admin _ IT Support.pdf";
import cybersecurityPdf from "@/assets/files/certificates_pdf/Cisco CCNA Course.pdf";
import dockerPdf from "@/assets/files/certificates_pdf/ITIL V4 Foundation.pdf";

const certificates = [
  {
    title: "End to End DevOps Implementation",
    issuer: "Abhishek Veeramalla",
    date: "03/2025",
    link: awsEcsPdf,
    description:
      "Comprehensive guide to setting up, configuring, and managing projects using AWS and Docker. Covers infrastructure as code, containerization, and CI/CD.",
    skills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code"],
  },
  {
    title: "JIRA Software & Confluence Expertise",
    issuer: "Kosh Sarkar",
    date: "11/2024",
    link: typescriptPdf,
    description:
      "Learn to work on, manage & administer agile projects with this comprehensive course on JIRA Software & Confluence.",
    skills: ["Jira", "Confluence", "Agile Management", "Project Management"],
  },
  {
    title: "CCNA 200-301 Enterprise",
    issuer: "Nixtrain",
    date: "12/2022",
    link: cybersecurityPdf,
    description:
      "A certification exam offered by Cisco designed to validate the skills and knowledge of networking professionals in modern networking technologies.",
    skills: ["Networking", "Cisco", "Infrastructure", "Routing/Switching"],
  },
  {
    title: "ITIL® v4 Foundation",
    issuer: "AXELOS Global Best Practice",
    date: "12/2023",
    link: dockerPdf,
    description:
      "A set of best practices for IT service management (ITSM) that helps organizations align their IT services with the needs of the business.",
    skills: ["ITSM", "ITIL", "Service Management", "Best Practices"],
  },
];

const Certificates = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-12">
          <Award className={`w-8 h-8 ${isLight ? "text-slate-900" : "text-white"}`} aria-hidden="true" />
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Certificates
          </h2>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border transition-colors group h-full flex flex-col justify-between ${
                isLight
                  ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                  {cert.title}
                </h3>
                <div className={`space-y-2 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-base font-medium ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed pt-1 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-mono rounded border ${
                        isLight
                          ? "bg-slate-50 text-slate-700 border-slate-200"
                          : "bg-slate-800/60 text-slate-300 border-slate-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-lg border text-sm font-semibold transition-colors ${
                    isLight
                      ? "bg-slate-50 border-slate-300 text-emerald-700 hover:bg-slate-100"
                      : "bg-slate-800/70 border-slate-700 text-emerald-400 hover:bg-slate-800"
                  }`}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
