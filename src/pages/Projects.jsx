import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projects } from "@/data/projects";

const axaHighlights = [
  {
    title: "Jenkins Shared Library",
    label: "Platform Engineering",
    description:
      "Built and maintained a reusable Groovy pipeline layer that standardizes checkout, NuGet restore, build, test, SonarQube analysis, quality gates, and OpenShift deployment for .NET applications.",
    tags: ["Jenkins", "Groovy", "OpenShift", "SonarQube", ".NET"],
  },
  {
    title: "Secure CI/CD Controls",
    label: "Delivery Governance",
    description:
      "Integrated secret scanning, dependency vulnerability checks, coverage reporting, image scanning, and OWASP ZAP steps so releases follow the same quality and security gates every time.",
    tags: ["Gitleaks", "SAST", "Coverage", "OWASP ZAP", "Security"],
  },
  {
    title: "Multi-App Release Support",
    label: "Operational Enablement",
    description:
      "Supported multiple AXA application streams, including surrounding-system services, gateways, and legacy VB.NET workloads, with branch-aware promotions and environment-specific configuration.",
    tags: ["OpenShift", "VB.NET", "Branch Rules", "Config", "Automation"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Projects & Experience
        </h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed mb-12">
          The top section highlights AXA DevOps work and the bottom section shows personal portfolio projects I built outside work.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
                AXA experience
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                DevOps platform work at AXA Insurance Indonesia
              </h3>
            </div>
            <span className="px-3 py-1 text-xs uppercase tracking-[0.25em] rounded-full border border-white/10 bg-white/5 text-gray-400">
              Professional work
            </span>
          </div>

          <div className="max-w-3xl mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              What this covers
            </p>
            <p className="text-gray-400 leading-relaxed">
              These are the platform and automation outcomes I help deliver at AXA Insurance Indonesia. I keep the code and configuration private here, so the section focuses on the systems and delivery patterns rather than internal source links.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {axaHighlights.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/8 via-gray-900/80 to-gray-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:-translate-y-1">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-400">
                    {item.label}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 mb-5">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-semibold bg-white/8 text-gray-300 rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
              Personal portfolio
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Projects I built outside AXA
            </h3>
          </div>
          <span className="px-3 py-1 text-xs uppercase tracking-[0.25em] rounded-full border border-white/10 bg-white/5 text-gray-400">
            Personal work
          </span>
        </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/40 rounded-lg overflow-hidden border border-gray-700 h-full flex flex-col transition-all duration-300 hover:border-gray-600">
              <div className="h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] tracking-wider uppercase font-semibold bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
