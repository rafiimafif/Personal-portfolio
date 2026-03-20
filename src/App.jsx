import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Rafii Afif - DevOps Engineer | Cloud & Automation Expert",
    description:
      "Rafii Afif — DevOps Engineer specializing in Cloud Infrastructure, Jenkins, Docker, Linux and AWS. Based in Bandung, Indonesia.",
  },
  "/about": {
    title: "About - Rafii Afif | DevOps Engineer",
    description:
      "Learn about Rafii Afif — B.Sc. Informatics Engineering graduate, DevOps Engineer with 4+ years of IT experience. Based in Bandung, Indonesia.",
  },
  "/projects": {
    title: "Projects - Rafii Afif | DevOps Engineer Portfolio",
    description:
      "Explore infrastructure and automation projects built by Rafii Afif using Docker, Kubernetes, AWS, and CI/CD pipelines.",
  },
  "/skills": {
    title: "Skills - Rafii Afif | React, Node.js, Cloud Infrastructure",
    description:
      "Technical skills of Rafii Afif — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Rafii Afif | DevOps Engineer",
    description:
      "Professional experience of Rafii Afif including 4+ years of experience in DevOps and Cloud Infrastructure.",
  },
  "/education": {
    title: "Education - Rafii Afif | B.Tech Computer Science",
    description:
      "Educational background of Rafii Afif — B.Sc. in Informatics Engineering with 3.41 GPA.",
  },
  "/certificates": {
    title: "Certificates - Rafii Afif | Developer Certifications",
    description:
      "Professional certifications and achievements of Rafii Afif in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Rafii Afif | Hire a DevOps Engineer",
    description:
      "Get in touch with Rafii Afif for freelance projects, job opportunities or collaborations. Based in Bandung, Indonesia.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Rafii Afif - DevOps Engineer",
      description:
        "Portfolio of Rafii Afif — DevOps Engineer specializing in Cloud Infrastructure and modern web technologies.",
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
        `https://personal-portfolio-six-wine-46.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://personal-portfolio-six-wine-46.vercel.app${location.pathname}`,
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
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
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
