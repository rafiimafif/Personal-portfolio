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
    title: "Rafii Afif - DevOps Engineer | Cloud & Automation Expert",
    description:
      "Rafii Afif — DevOps Engineer specializing in Cloud Infrastructure, Jenkins, Docker, Linux and AWS. Based in Jakarta, Indonesia.",
  },
  "/about": {
    title: "About - Rafii Afif | DevOps Engineer",
    description:
      "Learn about Rafii Afif — B.Sc. Informatics Engineering graduate, DevOps Engineer with 4+ years of IT experience. Based in Jakarta, Indonesia.",
  },
  "/projects": {
    title: "Projects - Rafii Afif | DevOps Engineer Portfolio",
    description:
      "Explore infrastructure and automation projects built by Rafii Afif using Docker, Kubernetes, AWS, and CI/CD pipelines.",
  },
  "/certificates": {
    title: "Certificates - Rafii Afif | Developer Certifications",
    description:
      "Professional certifications and achievements of Rafii Afif in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Rafii Afif | Hire a DevOps Engineer",
    description:
      "Get in touch with Rafii Afif for freelance projects, job opportunities or collaborations. Based in Jakarta, Indonesia.",
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
