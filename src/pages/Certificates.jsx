import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import typescriptPdf from "@/assets/files/certificates_pdf/TypeScript.pdf";
import awsEcsPdf from "@/assets/files/certificates_pdf/aws_ecs.pdf";
import javascriptPdf from "@/assets/files/certificates_pdf/javascript.pdf";
import dockerPdf from "@/assets/files/certificates_pdf/docker_fundamentals.pdf";
import pythonPdf from "@/assets/files/certificates_pdf/python.pdf";
import cybersecurityPdf from "@/assets/files/certificates_pdf/cybersecurity_virtual_program.pdf";

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
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
