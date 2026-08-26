import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projects } from "@/data/projects";
import { SSDLCFlowAnimation } from "@/components/SSDLCFlowAnimation";

const axaHighlights = [
  {
    title: "SSDLC Framework & Zero-Trust Governance",
    label: "Security Engineering",
    description:
      "Engineered an enterprise SSDLC framework embedding 100% security gate compliance, branch-based environment routing (master/release/* vs development), PR checks, and non-blocking warning handling.",
    tags: ["SSDLC", "Zero-Trust", "Shift-Left", "Security Gates", "Branch Policy"],
  },
  {
    title: "Jenkins Shared Library Modernization",
    label: "Platform Engineering",
    description:
      "Created zero-boilerplate Groovy shared library orchestrators (templatePipelineOnprem, pipelineTemplate, legacyDotnetPipeline) standardizing build, SAST, SCA, and deployment flows across Java, .NET, Node.js, and PHP.",
    tags: ["Jenkins", "Groovy", "Shared Library", "Multi-Stack", "Automation"],
  },
  {
    title: "Multi-Tool SAST, SCA, DAST & Secrets",
    label: "Vulnerability Auditing",
    description:
      "Orchestrated SAST (SonarQube, Snyk Code, Checkmarx), SCA (Snyk, Trivy FS, DepCheck), Gitleaks secret detection, Checkov IaC security, and OWASP ZAP DAST with K8s API port-forwarding.",
    tags: ["SonarQube", "Snyk", "Trivy", "Gitleaks", "Checkov", "OWASP ZAP"],
  },
  {
    title: "Supply Chain & Container Attestation",
    label: "Image Signing & SBOM",
    description:
      "Standardized CycloneDX Software Bill of Materials (SBOM) generation and Sigstore Cosign v3 offline container image signing using OpenShift SHA256 digests and local .sig bundles.",
    tags: ["CycloneDX", "SBOM", "Cosign", "Image Signing", "Supply Chain"],
  },
  {
    title: "Playwright E2E & Browser Mirroring",
    label: "Quality Assurance",
    description:
      "Automated Playwright E2E browser regression testing inside Jenkins CI, resolving air-gapped environment constraints by mirroring multi-part browser runtimes from JFrog Artifactory.",
    tags: ["Playwright", "E2E Testing", "Browser Mirroring", "Artifactory", "QA"],
  },
  {
    title: "OpenShift Cloud & Observability",
    label: "Cloud & Infrastructure",
    description:
      "Managed OpenShift BuildConfigs, zero-downtime rolling updates, Pod Disruption Budgets, and JFrog Artifactory package storage alongside real-time Grafana metrics dashboards.",
    tags: ["OpenShift", "Kubernetes", "JFrog Artifactory", "Grafana", "Rolling Deploy"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Projects & Experience
        </h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed mb-12">
          The top section highlights AXA DevSecOps & Platform Engineering work, while the bottom section displays personal software projects.
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
                DevSecOps & Platform Engineering work at AXA Insurance Indonesia
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
              These are the platform, security, and automation outcomes I help deliver at AXA Insurance Indonesia. I keep the private source repository secure, while presenting the live pipeline flow architecture and key delivery pillars below.
            </p>
          </div>

          {/* Interactive Live SSDLC Pipeline Animation */}
          <SSDLCFlowAnimation />

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

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/40 rounded-lg overflow-hidden border border-gray-700 h-full flex flex-col md:flex-row transition-all duration-300 hover:border-gray-600">
              <div className="w-full md:w-1/3 min-h-[200px] md:min-h-full flex-shrink-0 overflow-hidden bg-gray-900 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] md:text-xs tracking-wider uppercase font-semibold bg-gray-700/50 text-gray-300 rounded border border-gray-600"
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
