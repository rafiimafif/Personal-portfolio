import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Globe,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
  Calendar,
  BookOpen,
  FileText,
  Award,
  Server,
  Layout,
  Database,
  MessageSquare,
  Cloud,
  Terminal,
  Wrench,
  Users,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";
import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/Rafii Muhammad Afif - DevOps Engineer - CV.pdf";
import collegeImg from "@/assets/education/college_img.jpg";
import bTechPdf from "@/assets/files/education_pdf/Transkrip Nilai.pdf";
import virtualboxLogo from "@/assets/profile/Virtualbox_logo.png";
import kaliLogo from "@/assets/profile/kali_logo.png";

const About = () => {
  const achievements = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "4+ Years",
      description: "DevOps, DevSecOps & IT Experience",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "6 Positions",
      description: "Across Support, Operations, DevOps & DevSecOps",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "3.41 GPA",
      description: "Informatics Engineering",
    },
  ];

  const experiences = [
    {
      title: "DevSecOps Engineer",
      company: "AXA Insurance Indonesia",
      location: "Bandung, West Java",
      period: "05/2026 - Present",
      type: "Full-time",
      description: [
        "Integrated SAST, SCA, DAST, and container security into CI/CD pipelines, enabling early detection of vulnerabilities and shifting security left in the development lifecycle.",
        "Implemented security gates in Jenkins pipelines to prevent insecure code and unauthorized vulnerabilities from reaching production.",
        "Standardized SBOM generation using CycloneDX, providing complete visibility into third-party dependencies and protecting against supply chain vulnerabilities.",
        "Automated vulnerability scanning using Trivy, Snyk, Checkmarx, and OWASP ZAP.",
        "Implemented secret detection using Gitleaks, proactively protecting sensitive company credentials and preventing data exposure in public/private repositories.",
        "Collaborated closely with development teams to remediate security findings, fostering a security-first culture and streamlining the path to secure releases.",
        "Integrated SonarQube Quality Gates to enforce code quality and security standards.",
        "Standardized security scanning across multiple applications to improve DevSecOps maturity.",
        "Supported secure release processes by embedding automated security controls into the CI/CD lifecycle."
      ],
    },
    {
      title: "DevOps Engineer",
      company: "AXA Insurance Indonesia",
      location: "Bandung, West Java",
      period: "05/2025 - 05/2026",
      type: "Full-time",
      description: [
        "Designed and automated Jenkins CI/CD pipelines, eliminating manual deployment bottlenecks and accelerating the software delivery lifecycle.",
        "Integrated Jenkins with OpenShift to streamline continuous integration and application deployment.",
        "Created reusable Jenkins Shared Libraries, standardizing CI/CD across multiple teams and significantly reducing pipeline setup time for new projects.",
        "Managed Kubernetes resources, including Deployments, Services, ConfigMaps, Secrets, Ingress, and Routes in OpenShift.",
        "Configured rolling updates and Pod Disruption Budgets (PDBs) in OpenShift, ensuring continuous application availability and zero user disruption during releases.",
        "Optimized cluster resource utilization through Kubernetes CronJobs and scheduled workloads.",
        "Configured and managed JFrog Artifactory for centralized artifact storage, versioning, and dependency management.",
        "Developed comprehensive Grafana dashboards, enabling real-time monitoring and proactive resolution of system anomalies before they impacted end users.",
        "Automated build validation, smoke testing, and deployment processes to improve release reliability.",
        "Collaborated with development teams to troubleshoot build failures, deployment issues, and runtime incidents.",
        "Standardized CI/CD workflows across multiple projects to improve release consistency and developer productivity.",
        "Managed application configuration across environments using Kubernetes ConfigMaps and Secrets.",
        "Supported Git-based development workflows, including pull request validation and automated pipeline execution.",
        "Replaced manual, error-prone deployment processes with automated pipelines, greatly increasing release reliability and reducing operational overhead.",
        "Participated in troubleshooting production issues and performing root cause analysis to improve platform stability."
      ],
    },
    {
      title: "IT Operations",
      company: "Great Eastern General Insurance",
      location: "Bandung, West Java",
      period: "12/2024 - 05/2025",
      type: "Full-time",
      description: [
        "Maintain and troubleshoot: Manage laptops, desktops, printers, peripherals, and software.",
        "Application support: Manage and support email (Outlook), Teams, Office applications, and backup policies.",
        "Security and user management: Implement data security protocols, manage user access permissions, and handle user accounts in Active Directory.",
        "Ticketing and remote support: Create, monitor, and resolve ServiceNow tickets and provide remote support using LANDesk.",
        "Asset management and monitoring: Track and maintain IT asset inventory, generate status reports, and perform regular security scans."
      ],
    },
    {
      title: "IT Support Engineer II",
      company: "Accelbyte",
      location: "Bandung, West Java",
      period: "01/2023 - 11/2024",
      type: "Full-time",
      description: [
        "Troubleshoot and Support: Address hardware, software, and network issues, escalate when needed, and assist users with technical problems using tools like Jira and NinjaRMM.",
        "Setup and Maintenance: Install and configure systems, applications, and hardware, manage user accounts and permissions, and ensure system security.",
        "IT Projects: Implement system upgrades and migrations, track progress in Jira, and document workflows in Confluence.",
        "Automation and Monitoring: Develop automation scripts, monitor system performance, and report issues using NinjaRMM.",
        "Asset and Vendor Management: Maintain IT asset inventory using Excel, track changes, and collaborate with vendors for support and procurement.",
        "Performance and Security: Monitor system performance, ensure security through updates and protocols, and maintain records, user guides, and reports."
      ],
    },
    {
      title: "Business Operations Associate",
      company: "Hubster Indonesia",
      location: "Bandung, West Java",
      period: "04/2021 - 12/2022",
      type: "Full-time",
      description: [
        "Respond quickly to perform troubleshooting or other technical assistance required by customers.",
        "Analyze new ways to solve problems faster and more efficiently.",
        "Provide professional technical solutions that are responsive to customer's needs.",
        "Provide online or offline technical training and presentations.",
        "Make reports/tickets if there are bugs to the product team."
      ],
    },
    {
      title: "Full Stack Developer",
      company: "PT. Cemara Agung Mandiri",
      location: "Bandung, West Java",
      period: "01/2020 - 06/2020",
      type: "Full-time",
      description: [
        "Responsible for working on both front-end and back-end development processes.",
        "Created design, developed, and maintained fully-fledged and functioning platforms with databases using supply chain management method and PHP programming language with CodeIgniter Framework."
      ],
    },
  ];

  const skills = [
    {
      category: "DevSecOps & Security",
      icon: <Wrench className="w-6 h-6" />,
      items: [
        { name: "Snyk", icon: <Wrench className="w-4 h-4" /> },
        { name: "Trivy", icon: <Wrench className="w-4 h-4" /> },
        { name: "SonarQube", icon: <Wrench className="w-4 h-4" /> },
        { name: "Gitleaks", icon: <Wrench className="w-4 h-4" /> },
        { name: "OWASP ZAP", icon: <Wrench className="w-4 h-4" /> },
        { name: "Checkmarx", icon: <Wrench className="w-4 h-4" /> },
        { name: "CycloneDX (SBOM)", icon: <Wrench className="w-4 h-4" /> },
      ],
    },
    {
      category: "CI/CD & Orchestration",
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: "Jenkins", icon: <Wrench className="w-4 h-4" /> },
        { name: "Jenkins Shared Library", icon: <Code2 className="w-4 h-4" /> },
        { name: "GitHub", icon: <GitLogo /> },
        { name: "GitOps", icon: <GitLogo /> },
      ],
    },
    {
      category: "Containerization & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: "Docker", icon: <Server className="w-4 h-4" /> },
        { name: "OpenShift", icon: <Cloud className="w-4 h-4" /> },
        { name: "Kubernetes", icon: <Server className="w-4 h-4" /> },
        { name: "AWS", icon: <AWSLogo /> },
      ],
    },
    {
      category: "Scripting & Automation",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: "Bash", icon: <BashLogo /> },
        { name: "Node.js", icon: <NodeLogo /> },
        { name: "Shell Scripting", icon: <Terminal className="w-4 h-4" /> },
        { name: "PHP", icon: <Code2 className="w-4 h-4" /> },
      ],
    },
    {
      category: "Observability & Registry",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "Grafana", icon: <Database className="w-4 h-4" /> },
        { name: "JFrog Artifactory", icon: <Server className="w-4 h-4" /> },
      ],
    },
    {
      category: "IT Support & Collaboration",
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: "Linux", icon: <LinuxLogo className="w-4 h-4" /> },
        { name: "Windows", icon: <WindowsLogo className="w-4 h-4" /> },
        { name: "Active Directory", icon: <Users className="w-4 h-4" /> },
        { name: "ServiceNow", icon: <Wrench className="w-4 h-4" /> },
        { name: "Jira", icon: <Layout className="w-4 h-4" /> },
        { name: "Confluence", icon: <Layout className="w-4 h-4" /> },
      ],
    },
  ];

  const educationData = [
    {
      school: 'Universitas Jenderal Achmad Yani',
      location: 'Bandung, West Java',
      duration: 'Sept 2016 - Oct 2020',
      degree: 'Bachelor of Informatics Engineering',
      grade: 'GPA: 3.41 / 4.00',
      image: collegeImg,
      resultUrl: bTechPdf,
      coursework: ["Data Software Engineering", 'Computer Science', 'Information Technology', 'Data Analysis'],
      description:
        'Informatics Engineering specializing in Data Software Engineering is a dynamic and rapidly evolving field combining computer science, information technology, and data analysis.',
    },
  ];

  const interests = [
    "DevSecOps & Shift-Left Security",
    "CI/CD Pipelines & Shared Libraries",
    "Containerization & Kubernetes",
    "Cloud Architecture (AWS & OpenShift)",
    "Infrastructure as Code & Automation",
    "Observability & Monitoring (Grafana)",
  ];

  const axaHighlights = [
    {
      title: "DevSecOps Security Controls",
      icon: <Wrench className="w-6 h-6" />,
      description:
        "Integrated SAST, SCA, DAST, secret scanning (Gitleaks), container security, and CycloneDX SBOM generation into CI/CD pipelines with automated security gates.",
    },
    {
      title: "Reusable Jenkins Shared Library",
      icon: <Server className="w-6 h-6" />,
      description:
        "Centralized pipeline logic in a shared library so application teams can reuse standardized build, test, security scanning, and deployment steps without rebuilding Jenkinsfiles.",
    },
    {
      title: "OpenShift & Kubernetes Management",
      icon: <Cloud className="w-6 h-6" />,
      description:
        "Automated deployment of Deployments, Services, ConfigMaps, Secrets, Ingress, and Routes on OpenShift with rolling updates, Pod Disruption Budgets, and CronJobs.",
    },
    {
      title: "SonarQube & Grafana Observability",
      icon: <Layout className="w-6 h-6" />,
      description:
        "Enforced Quality Gates with SonarQube and built real-time Grafana dashboards for proactive incident management and system anomaly tracking.",
    },
  ];

  const axaAppExamples = [
    "surrounding-system-api-gateway",
    "surrounding-system-web-app",
    "auth-gateway",
    "factory-line-webapp",
    "care-ftp",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20 overflow-x-hidden">
      {/* Profile Section */}
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={profileImg}
              alt="Rafii Muhammad Afif"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Rafii Muhammad Afif, a DevSecOps Engineer at AXA Insurance Indonesia with 4+ years of hands-on experience across DevOps, platform engineering, DevSecOps, and enterprise IT operations. Passionate about automating software delivery while embedding security, reliability, and developer productivity into every stage of the lifecycle.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a solid foundation spanning full-stack development, IT operations, and cloud infrastructure, I bridge the gap between development, security, and operations. My work focuses on building secure CI/CD pipelines, standardizing release automation, and implementing shift-left security practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in tools like Jenkins, OpenShift, Kubernetes, Docker, SonarQube, Snyk, Trivy, Gitleaks, Checkmarx, OWASP ZAP, CycloneDX, and JFrog Artifactory to construct resilient, enterprise-grade delivery pipelines.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {[
                "DevSecOps Engineer at AXA Insurance Indonesia",
                "Based in Bandung, West Java",
                "B.Sc. in Informatics Engineering (GPA: 3.41)",
                "4+ Years IT & Cloud Experience",
              ].map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Download CV
            </a>
          </div>
        </ScrollAnimation>
      </div>

      {/* AXA Platform Highlights */}
      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text flex items-center gap-3">
            <Server className="w-7 h-7 sm:w-8 sm:h-8" />
            AXA DevOps Platform Highlights
          </h3>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            A closer look at the delivery platform work I help maintain at AXA Insurance Indonesia. The focus is on reusable automation, consistent release controls, and a smoother path from commit to OpenShift.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {axaHighlights.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5 h-full hover:bg-gray-800/70 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4">
              Example applications
            </p>
            <div className="flex flex-wrap gap-3">
              {axaAppExamples.map((app) => (
                <span key={app} className="px-3 py-2 bg-white/5 rounded-full text-xs sm:text-sm text-gray-300 border border-white/5">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Experience Section */}
      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
            <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
            Professional Experience
          </h3>
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp) => (
              <ScrollAnimation key={exp.title}>
                <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                        <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold mb-1">
                          {exp.title}
                        </h4>
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Skills Section */}
      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text flex items-center gap-3">
            <Code2 className="w-7 h-7 sm:w-8 sm:h-8" />
            Technical Skills
          </h3>
          <p className="text-gray-400 mb-12 max-w-2xl">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <ScrollAnimation key={skillGroup.category}>
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {skillGroup.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                      >
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          {skill.icon}
                        </div>
                        <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Education Section */}
      <ScrollAnimation>
        <div className="mt-16 mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text flex items-center gap-3">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
            Education
          </h3>
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <ScrollAnimation key={edu.school}>
                <div className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
                  <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2 z-10">
                    <Calendar className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300">{edu.duration}</span>
                  </div>

                  <div className="grid md:grid-cols-[300px,1fr]">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={edu.image}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-2">{edu.school}</h4>
                          <div className="flex items-center gap-2 text-gray-300 mb-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Award className="w-4 h-4" />
                            <span className="text-sm">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-5 h-5 text-gray-400" />
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      </div>

                      <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {(edu.coursework || edu.subjects).map((item) => (
                          <span key={item} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>

                      {edu.resultUrl && (
                        <motion.a
                          href={edu.resultUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                        >
                          View Result
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Achievements Grid (Keep from original About) */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm h-full flex flex-col items-center text-center">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Interests (Keep from original About) */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300 text-sm">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
