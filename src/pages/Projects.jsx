import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projects } from "@/data/projects";
import { SSDLCFlowAnimation } from "@/components/SSDLCFlowAnimation";
import { useTheme } from "../context/ThemeContext";

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
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="min-h-screen pt-28 sm:pt-32 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
          Projects &amp; Experience
        </h2>
        <p className={`max-w-3xl text-base sm:text-lg leading-relaxed mb-12 ${isLight ? "text-slate-600" : "text-slate-400"}`}>
          The top section highlights AXA DevSecOps and Platform Engineering work, while the bottom section displays personal software projects.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div>
              <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${isLight ? "text-emerald-700" : "text-emerald-400"}`}>
                AXA Experience
              </p>
              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                DevSecOps &amp; Platform Engineering at AXA Insurance Indonesia
              </h3>
            </div>
            <span className={`px-3 py-1 text-xs uppercase tracking-wider font-mono rounded-md border font-medium ${
              isLight
                ? "border-slate-300 bg-slate-100 text-slate-700"
                : "border-slate-700 bg-slate-800/80 text-slate-300"
            }`}>
              Enterprise Work
            </span>
          </div>

          <div className="max-w-3xl mb-8">
            <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${isLight ? "text-slate-500" : "text-slate-500"}`}>
              Scope &amp; Governance
            </p>
            <p className={`leading-relaxed text-sm sm:text-base ${isLight ? "text-slate-600" : "text-slate-400"}`}>
              These are the platform, security, and automation outcomes delivered at AXA Insurance Indonesia. Source code remains proprietary; architecture flows and delivery pillars are detailed below.
            </p>
          </div>

          {/* Interactive Live SSDLC Pipeline Animation */}
          <SSDLCFlowAnimation />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {axaHighlights.map((item) => (
              <ScrollAnimation key={item.title}>
                <div className={`h-full flex flex-col rounded-xl border p-6 transition-colors ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                }`}>
                  <div className={`mb-3 inline-flex self-start rounded-md border px-2.5 py-1 text-xs font-mono font-medium uppercase tracking-wider ${
                    isLight
                      ? "border-slate-200 bg-slate-100 text-slate-700"
                      : "border-slate-700 bg-slate-800 text-slate-300"
                  }`}>
                    {item.label}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 flex-grow ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                          isLight
                            ? "bg-slate-50 text-slate-700 border-slate-200"
                            : "bg-slate-800/60 text-slate-300 border-slate-700"
                        }`}
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
            <p className={`text-xs uppercase tracking-widest font-mono font-medium mb-1 ${isLight ? "text-emerald-700" : "text-emerald-400"}`}>
              Engineering Labs
            </p>
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
              Personal Projects &amp; Systems
            </h3>
          </div>
          <span className={`px-3 py-1 text-xs uppercase tracking-wider font-mono rounded-md border font-medium ${
            isLight
              ? "border-slate-300 bg-slate-100 text-slate-700"
              : "border-slate-700 bg-slate-800/80 text-slate-300"
          }`}>
            Lab Work
          </span>
        </div>
      </ScrollAnimation>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className={`rounded-xl overflow-hidden border h-full flex flex-col md:flex-row transition-colors ${
              isLight
                ? "bg-white border-slate-200 shadow-sm hover:border-slate-300"
                : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
            }`}>
              <div className="w-full md:w-1/3 min-h-[220px] md:min-h-full flex-shrink-0 overflow-hidden bg-slate-950 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-95 transition-opacity"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                  {project.title}
                </h3>
                <p className={`mb-6 flex-grow text-sm md:text-base leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                        isLight
                          ? "bg-slate-50 text-slate-700 border-slate-200"
                          : "bg-slate-800/60 text-slate-300 border-slate-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex items-center space-x-4 pt-4 border-t ${isLight ? "border-slate-200" : "border-slate-800"}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`min-h-[44px] px-3.5 py-2 rounded-lg border flex items-center space-x-2 text-sm font-medium transition-colors ${
                      isLight
                        ? "border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100"
                        : "border-slate-700 bg-slate-800/60 text-slate-200 hover:bg-slate-800"
                    }`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>Source Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-h-[44px] px-3.5 py-2 rounded-lg border flex items-center space-x-2 text-sm font-medium transition-colors ${
                        isLight
                          ? "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
                          : "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-500"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
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
