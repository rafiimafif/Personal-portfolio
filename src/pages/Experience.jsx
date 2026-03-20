import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "AXA Insurance Indonesia",
    location: "Bandung, West Java",
    period: "05/2025 - Present",
    type: "Full-time",
    description: [
      "Reduced deployment time dramatically by introducing automated Jenkins–OpenShift pipeline, replacing manual steps with a streamlined CI/CD flow",
      "Accelerated developer onboarding by creating standardized Jenkinsfile templates",
      "Improved code quality and minimized regressions through SonarQube Quality Gates and automated coverage reporting",
      "Optimized cluster resource usage with a CronJob‑driven autoscaling strategy across OpenShift namespaces"
    ],
  },
  {
    title: "IT Operations",
    company: "Great Eastern General Insurance",
    location: "Bandung, West Java",
    period: "12/2024 - 05/2025",
    type: "Full-time",
    description: [
      "Managed laptops, desktops, printers, peripherals, and software, providing application support for Teams, Office, and Outlook",
      "Implemented data security protocols, managed user access permissions, and handled Active Directory accounts",
      "Created, monitored, and resolved ServiceNow tickets and provided remote support using LANDesk"
    ],
  },
  {
    title: "IT Support Engineer II",
    company: "Accelbyte",
    location: "Bandung, West Java",
    period: "01/2023 - 11/2024",
    type: "Full-time",
    description: [
      "Addressed hardware, software, and network issues, assisting users using tools like Jira and NinjaRMM",
      "Developed automation scripts, monitored system performance, and reported issues using NinjaRMM",
      "Implemented system upgrades and migrations, tracked progress in Jira, and documented workflows in Confluence"
    ],
  },
  {
    title: "Business Operations Associate",
    company: "Hubster Indonesia",
    location: "Bandung, West Java",
    period: "04/2021 - 12/2022",
    type: "Full-time",
    description: [
      "Responded quickly to perform troubleshooting and technical assistance required by customers",
      "Provided professional technical solutions responsive to customer needs",
      "Conducted online/offline technical training, presentations, and reported bugs to the product team"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PT. Cemara Agung Mandiri",
    location: "Bandung, West Java",
    period: "01/2020 - 06/2020",
    type: "Full-time",
    description: [
      "Developed and maintained functioning platforms with databases using PHP and CodeIgniter Framework",
      "Worked on both front-end and back-end development processes",
      "Implemented a supply chain management method within the application"
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
