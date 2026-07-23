import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Rafii Afif - DevSecOps Engineer | Security, OpenShift & CI/CD",
    description:
      "Rafii Afif — DevSecOps Engineer at AXA Insurance Indonesia specializing in secure CI/CD pipelines, Snyk, Trivy, SonarQube, Jenkins shared libraries, and OpenShift/Kubernetes infrastructure.",
  },
  "/about": {
    title: "About - Rafii Afif | AXA DevSecOps Engineer",
    description:
      "Learn about Rafii Afif — DevSecOps Engineer at AXA Insurance Indonesia with 4+ years of experience across DevOps, DevSecOps, platform engineering, and enterprise IT operations.",
  },
  "/projects": {
    title: "Projects - Rafii Afif | DevSecOps & Platform Highlights",
    description:
      "Explore personal projects and AXA DevSecOps platform highlights including vulnerability scanning, CycloneDX SBOM generation, and OpenShift deployment automation.",
  },
  "/certificates": {
    title: "Certificates - Rafii Afif | Certifications & Courses",
    description:
      "Professional certifications and achievements of Rafii Afif in DevOps, networking, ITSM (ITIL v4), and Agile project management.",
  },
  "/contact": {
    title: "Contact - Rafii Afif | DevSecOps Engineer",
    description:
      "Get in touch with Rafii Afif for DevSecOps, CI/CD security automation, OpenShift/Kubernetes delivery, or collaboration opportunities.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Rafii Afif - DevSecOps Engineer",
      description:
        "Portfolio of Rafii Afif — DevSecOps Engineer specializing in Jenkins, OpenShift, Kubernetes, security scanning, and CI/CD automation.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://rafii-afif.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://rafii-afif.vercel.app${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
