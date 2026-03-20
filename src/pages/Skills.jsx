import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Brain,
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
  VSCodeLogo,
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

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
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
  );
};

export default Skills;
