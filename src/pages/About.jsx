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
      description: "Professional IT & DevOps Experience",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "5+ Positions",
      description: "Across Support, Operations, and DevOps",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "3.41 GPA",
      description: "Informatics Engineering",
    },
  ];

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

  const skills = [
    {
      category: "CI/CD & Automation",
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: "Jenkins", icon: <Wrench className="w-4 h-4" /> },
        { name: "GitHub", icon: <GitLogo /> },
        { name: "Git", icon: <GitLogo /> },
      ],
    },
    {
      category: "Containerization",
      icon: <Layout className="w-6 h-6" />,
      items: [
        { name: "Docker", icon: <Server className="w-4 h-4" /> },
        { name: "OpenShift", icon: <Cloud className="w-4 h-4" /> },
      ],
    },
    {
      category: "Scripting & Languages",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: "Bash", icon: <BashLogo /> },
        { name: "Shell Scripting", icon: <Terminal className="w-4 h-4" /> },
        { name: "PHP", icon: <Code2 className="w-4 h-4" /> },
      ],
    },
    {
      category: "Cloud & Monitoring",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: "AWS", icon: <AWSLogo /> },
        { name: "Grafana", icon: <Database className="w-4 h-4" /> },
        { name: "SonarQube", icon: <Wrench className="w-4 h-4" /> },
      ],
    },
    {
      category: "IT Support & OS",
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { name: "Linux", icon: <LinuxLogo className="w-4 h-4" /> },
        { name: "Kali Linux", icon: <img src={kaliLogo} alt="Kali" className="w-4 h-4 object-contain brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100" /> },
        { name: "VirtualBox", icon: <img src={virtualboxLogo} alt="VirtualBox" className="w-4 h-4 object-contain brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:brightness-100" /> },
        { name: "Windows", icon: <WindowsLogo className="w-4 h-4" /> },
        { name: "Active Directory", icon: <Users className="w-4 h-4" /> },
        { name: "Troubleshooting", icon: <Wrench className="w-4 h-4" /> },
      ],
    },
    {
      category: "Collaboration Tools",
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: "Jira", icon: <Layout className="w-4 h-4" /> },
        { name: "Slack", icon: <MessageSquare className="w-4 h-4" /> },
        { name: "Teams", icon: <MessageSquare className="w-4 h-4" /> },
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
    {
      school: 'High School',
      location: 'Indonesia',
      duration: 'Prior to 2016',
      degree: 'High School Diploma',
      grade: '-',
      image: collegeImg,
      resultUrl: null,
      subjects: ['Science', 'Mathematics'],
      description:
        'Foundational education preparing for higher studies in Engineering and Technology.',
    },
  ];

  const interests = [
    "CI/CD Pipelines",
    "Containerization",
    "Cloud Architecture",
    "Infrastructure as Code",
    "IT Automation",
    "System Monitoring",
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
              Hi! I'm Rafii Muhammad Afif, a DevOps Engineer with a solid background in IT Support and over 4 years of hands-on experience keeping systems stable, users happy, and tech hiccups at bay. These days, I'm all-in on automation, CI/CD, and building smoother workflows.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Before diving into DevOps, I was the go-to person for hardware fixes, network setups, and troubleshooting practically anything that blinked or beeped. That foundation helps me understand both infrastructure and development needs, allowing me to bridge gaps between teams and keep deployments stress-free.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in tools like Jenkins, GitHub, Docker, SonarQube, and OpenShift. Whether it's scripting smarter builds or rolling out updates with zero downtime, I bring a practical mindset, solid communication skills, and a good dose of curiosity to every project.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {[
                "Based in Jakarta, West Java",
                "B.Sc. in Informatics Engineering",
                "GPA: 3.41",
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
