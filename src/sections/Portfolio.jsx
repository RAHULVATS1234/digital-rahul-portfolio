import portfolioImg from "../assets/images/portfolio.png";
import bnDiagnosticImg from "../assets/images/bndiagnostic.png";
import aiAssistantImg from "../assets/images/aiassistant.png";
import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Digital Rahul Portfolio",
      category: "React",
      description:
        "A modern personal portfolio website built with React, Tailwind CSS and Framer Motion showcasing my digital marketing services and projects.",
      image: portfolioImg,
      demo: "#",
      github: "#",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },

    {
      title: "BN Diagnostic Centre",
      category: "SEO",
      description:
        "A professional diagnostic centre website featuring health services, responsive design, SEO optimization and appointment information.",
      image: bnDiagnosticImg,
      demo: "#",
      github: "#",
      tech: [
        "WordPress",
        "SEO",
        "Elementor",
      ],
    },

    {
      title: "AI Personal Assistant",
      category: "AI",
      description:
        "An upcoming AI assistant project designed to automate daily tasks, improve productivity and provide intelligent assistance.",
      image: aiAssistantImg,
      demo: "#",
      github: "#",
      tech: [
        "Python",
        "AI",
        "Automation",
      ],
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="portfolio"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="My Portfolio"
          subtitle="Latest Projects"
        />

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {["All", "React", "SEO", "AI"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              demo={project.demo}
              github={project.github}
              tech={project.tech}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;