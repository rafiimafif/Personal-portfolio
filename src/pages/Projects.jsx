import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";
import project6 from "@/assets/projects_img/project-6.png";

const projects = [
  {
    title: "ASP.NET Core MVC Web Application with CI/CD",
    description:
      "A comprehensive DevOps infrastructure showcase transforming a .NET application using multi-stage Docker builds, Terraform for AWS, and GitHub Actions CI/CD with SonarCloud & Trivy.",
    image: project6,
    github: "https://github.com/rafiimafif/aspnet-core-mvc",
    tags: [".NET Core", "Docker", "Nginx", "GitHub Actions", "GHCR", "SonarCloud", "Trivy", "Terraform"],
  },
  {
    title: "Android CI/CD Pipeline",
    description:
      "A zero-cost automated CI/CD pipeline for Android apps using GitHub Actions, SonarCloud, and Firebase App Distribution.",
    image: project5,
    github: "https://github.com/rafiimafif/cicd-pipeline-android-apps-with-github-actions",
    tags: ["Android", "CI/CD", "GitHub Actions", "Firebase", "SonarCloud", "Automation"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
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
