import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  Cloud,
  Terminal,
  Activity,
  ArrowRight,
  Sparkles,
  GitBranch,
  Box,
  Check
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const stages = [
  {
    id: 1,
    name: "01. SCM & Secrets",
    shortName: "SCM & Secrets",
    icon: <GitBranch className="w-5 h-5" />,
    badge: "SHIFT-LEFT",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
    glowColor: "rgba(6, 182, 212, 0.4)",
    tools: ["Source Control", "Gitleaks Secret Scan", "Checkov IaC Audit"],
    metrics: "0 Credentials Leaked • IaC Compliance 100%",
    description: "Repository check-in triggers automated commit history secret detection & Infrastructure-as-Code policy validation.",
    logs: [
      "git clone https://scm.internal/org/app-repository.git --branch main",
      "gitleaks detect --source=. --report-format=json --verbose",
      "[SUCCESS] Gitleaks: 0 plain-text credentials or private keys found.",
      "checkov -d . --framework terraform,kubernetes,dockerfile --skip-download",
      "[SUCCESS] Checkov IaC Audit: Passed (0 critical misconfigurations)."
    ]
  },
  {
    id: 2,
    name: "02. Build & SAST Gating",
    shortName: "Build & SAST",
    icon: <ShieldCheck className="w-5 h-5" />,
    badge: "QUALITY GATE",
    color: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/50",
    glowColor: "rgba(99, 102, 241, 0.4)",
    tools: ["SonarQube SAST", "Snyk Code", "Checkmarx", "verifyQualityGate"],
    metrics: "Coverage 85%+ • Quality Gate: PASSED",
    description: "Multi-stack compilation with automated SonarQube API Quality Gate verification & static code security analysis.",
    logs: [
      "mvn clean package -DskipTests=false (or dotnet build / npm run build)",
      "sonar-scanner -Dsonar.projectKey=service-app -Dsonar.sources=src",
      "curl -s https://sonarqube.internal/api/qualitygates/project_status",
      "[QUALITY GATE] Status: OK | Vulnerabilities: 0 | Bugs: 0 | Code Smells: 0",
      "snyk code test --severity-threshold=high",
      "[SUCCESS] Snyk Code SAST: 0 critical vulnerabilities detected."
    ]
  },
  {
    id: 3,
    name: "03. SCA & Supply Chain",
    shortName: "SCA & SBOM",
    icon: <Box className="w-5 h-5" />,
    badge: "ATTRIBUTION",
    color: "from-fuchsia-500 to-pink-500",
    borderColor: "border-fuchsia-500/50",
    glowColor: "rgba(217, 70, 239, 0.4)",
    tools: ["Snyk OpenSource", "Trivy FS", "CycloneDX SBOM", "Artifactory"],
    metrics: "SBOM: CycloneDX v1.5 • Repository Verified",
    description: "Dependency vulnerability scanning, automated CycloneDX SBOM inventory generation, and binary artifact publishing.",
    logs: [
      "snyk test --all-subprojects --json-file-output=snyk-report.json",
      "trivy fs --security-checks vuln,secret,config .",
      "cyclonedx-py --format json --output sbom.cdx.json",
      "[SBOM] Generated CycloneDX Software Bill of Materials manifest.",
      "jfrog rt upload release-v1.4.0.zip generic-release-local/service-app/",
      "[ARTIFACTORY] Published immutable binary package & Build Info."
    ]
  },
  {
    id: 4,
    name: "04. CD, Attestation & DAST",
    shortName: "CD & DAST",
    icon: <Cloud className="w-5 h-5" />,
    badge: "DEPLOYS & SIGNS",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/50",
    glowColor: "rgba(16, 185, 129, 0.4)",
    tools: ["Playwright E2E", "Container CD", "Sigstore Cosign v3", "OWASP ZAP DAST"],
    metrics: "Cosign Signed • Container SHA256 Pinned",
    description: "Playwright E2E regression, container build rollout, Sigstore Cosign v3 offline image signing, and OWASP ZAP DAST.",
    logs: [
      "npx playwright test --config=playwright.config.js (Artifact Mirror)",
      "oc start-build service-app --follow --commit=HEAD",
      "RESOLVED IMAGE SHA256: sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b9...",
      "cosign sign --key k8s://cluster-ingress/cosign-key --tlog-upload=false sha256:e3b0c...",
      "[COSIGN] Signed container digest. Generated local .sig bundle.",
      "kubectl port-forward svc/service-app 8080:80 & zap-baseline.py -t http://localhost:8080",
      "[SUCCESS] OWASP ZAP DAST Scan: Passed 0 High/Critical alerts.",
      "[RELEASE] Release v1.4.0 created successfully!"
    ]
  }
];

export const SSDLCFlowAnimation = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [selectedStage, setSelectedStage] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Auto pipeline stage loop
  useEffect(() => {
    if (!isPlaying) return;
    const intervalTime = 3800 / speedMultiplier;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => {
        const next = (prev + 1) % stages.length;
        setSelectedStage(next);
        return next;
      });
    }, intervalTime);
    return () => clearInterval(timer);
  }, [isPlaying, speedMultiplier]);

  const handleStageClick = (index) => {
    setActiveStageIndex(index);
    setSelectedStage(index);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setActiveStageIndex(0);
    setSelectedStage(0);
    setIsPlaying(true);
  };

  const currentStageObj = stages[selectedStage];

  return (
    <div
      className={`w-full border rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden relative my-8 transition-colors duration-300 ${
        isLight
          ? "bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200 text-slate-900 shadow-slate-200/50"
          : "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-slate-800 text-white"
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div
        className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b ${
          isLight ? "border-slate-200" : "border-slate-800"
        }`}
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-500 dark:text-emerald-400">
              Live Pipeline Orchestration
            </span>
          </div>
          <h3
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Enterprise SSDLC DevSecOps Flow
            <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
          </h3>
          <p
            className={`text-xs sm:text-sm mt-1 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Generic end-to-end zero-trust CI/CD pipeline reference architecture
          </p>
        </div>

        {/* Playback Controls */}
        <div
          className={`flex items-center gap-2.5 self-start lg:self-auto p-2 rounded-2xl border backdrop-blur-md ${
            isLight
              ? "bg-slate-100/90 border-slate-200"
              : "bg-slate-900/80 border-slate-800"
          }`}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" /> Resume
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              isLight
                ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
            title="Re-run pipeline from Stage 1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Run Pipeline
          </button>

          <button
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
              isLight
                ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                : "bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {speedMultiplier}x
          </button>
        </div>
      </div>

      {/* Pipeline Stage Track (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative mb-8">
        {stages.map((stage, idx) => {
          const isActive = activeStageIndex === idx;
          const isSelected = selectedStage === idx;
          const isPassed =
            activeStageIndex > idx || (activeStageIndex === 3 && idx === 3);

          return (
            <motion.div
              key={stage.id}
              onClick={() => handleStageClick(idx)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer relative rounded-2xl p-4 transition-all duration-300 border flex flex-col justify-between min-h-[180px] ${
                isSelected
                  ? isLight
                    ? `bg-white ${stage.borderColor} shadow-lg ring-2 ring-cyan-500/20`
                    : `bg-slate-900/90 ${stage.borderColor}`
                  : isLight
                  ? "bg-slate-100/90 border-slate-200 hover:border-slate-300"
                  : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
              }`}
              style={{
                boxShadow: isSelected ? `0 0 20px ${stage.glowColor}` : "none"
              }}
            >
              {/* Progress Connector Line (desktop) */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="relative flex items-center justify-center w-4">
                    <ArrowRight
                      className={`w-4 h-4 ${
                        isPassed
                          ? "text-emerald-500"
                          : isLight
                          ? "text-slate-300"
                          : "text-slate-700"
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Top Row: Icon & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${stage.color} text-white shadow-md`}
                >
                  {stage.icon}
                </div>

                <div className="flex items-center gap-1.5">
                  {isPassed ? (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                      isLight
                        ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                        : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    }`}>
                      <Check className="w-3 h-3" /> PASSED
                    </span>
                  ) : isActive ? (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border animate-pulse ${
                      isLight
                        ? "bg-cyan-100 text-cyan-700 border-cyan-300"
                        : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                    }`}>
                      <Activity className="w-3 h-3 animate-spin" /> RUNNING
                    </span>
                  ) : (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        isLight
                          ? "bg-slate-200 text-slate-600 border-slate-300"
                          : "bg-slate-800 text-slate-400 border-slate-700"
                      }`}
                    >
                      PENDING
                    </span>
                  )}
                </div>
              </div>

              {/* Stage Name & Tools */}
              <div>
                <h4
                  className={`text-sm font-bold mb-1 flex items-center gap-1.5 ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                >
                  {stage.shortName}
                </h4>
                <p
                  className={`text-[11px] leading-tight mb-3 ${
                    isLight ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {stage.tools.join(" • ")}
                </p>
              </div>

              {/* Bottom Active Progress Bar */}
              <div
                className={`w-full h-1.5 rounded-full overflow-hidden mt-2 ${
                  isLight ? "bg-slate-200" : "bg-slate-800"
                }`}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${stage.color}`}
                  initial={{ width: "0%" }}
                  animate={{
                    width: isPassed ? "100%" : isActive ? "65%" : "0%"
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`grid lg:grid-cols-12 gap-6 rounded-2xl p-5 border ${
            isLight
              ? "bg-white/90 border-slate-200 shadow-sm"
              : "bg-slate-950/80 border-slate-800"
          }`}
        >
          {/* Left: Stage Overview & Security Checks */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider border ${
                    isLight
                      ? "bg-slate-100 text-cyan-600 border-slate-200"
                      : "bg-slate-800 text-cyan-400 border-slate-700"
                  }`}
                >
                  STAGE {currentStageObj.id} OF 4
                </span>
                <span
                  className={`text-xs font-mono ${
                    isLight ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {currentStageObj.metrics}
                </span>
              </div>

              <h4
                className={`text-xl font-bold mb-2 flex items-center gap-2 ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {currentStageObj.name}
              </h4>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isLight ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {currentStageObj.description}
              </p>

              <div className="space-y-2">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    isLight ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Automated Security Controls Active:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentStageObj.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg border flex items-center gap-1.5 ${
                        isLight
                          ? "bg-slate-100 text-slate-800 border-slate-200"
                          : "bg-slate-900 text-slate-200 border-slate-800"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`pt-4 mt-4 border-t flex items-center justify-between text-xs ${
                isLight
                  ? "border-slate-200 text-slate-600"
                  : "border-slate-900 text-slate-400"
              }`}
            >
              <span>
                Status:{" "}
                <strong className="text-emerald-500 font-semibold">
                  100% SSDLC Compliant
                </strong>
              </span>
              <span>
                Target:{" "}
                <strong
                  className={isLight ? "text-slate-900" : "text-white"}
                >
                  Cloud Container Platform &amp; On-Prem
                </strong>
              </span>
            </div>
          </div>

          {/* Right: Live Groovy Terminal Log Ticker */}
          <div className="lg:col-span-7 bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs overflow-hidden flex flex-col shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Jenkins Pipeline Console Log</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                STREAMING
              </span>
            </div>

            <div className="space-y-1.5 overflow-y-auto max-h-48 scrollbar-thin text-slate-300 pr-1">
              {currentStageObj.logs.map((log, i) => (
                <div
                  key={i}
                  className={`leading-relaxed ${
                    log.includes("[SUCCESS]") ||
                    log.includes("[QUALITY GATE]") ||
                    log.includes("[SBOM]") ||
                    log.includes("[COSIGN]") ||
                    log.includes("[RELEASE]")
                      ? "text-emerald-400 font-semibold"
                      : log.includes("git") ||
                        log.includes("checkov") ||
                        log.includes("mvn") ||
                        log.includes("snyk") ||
                        log.includes("trivy") ||
                        log.includes("oc")
                      ? "text-cyan-300"
                      : "text-slate-400"
                  }`}
                >
                  <span className="text-slate-600 select-none mr-2">$</span>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SSDLCFlowAnimation;
