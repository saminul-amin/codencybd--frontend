import { useState } from "react";
import { ExternalLink, Github, Eye, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Works = () => {
  const [, setHoveredProject] = useState<null | number>(null);

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "portfolio",
      description:
        "Clean and professional portfolio website showcasing projects, skills, and experience with modern design and responsive layout.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      client: "Personal Project",
      duration: "1 week",
      year: "2024",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Local Business Landing Page",
      category: "business",
      description:
        "Simple yet effective landing page for a local business with contact forms, service showcase, and modern design elements.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      client: "Local Business",
      duration: "3 days",
      year: "2024",
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Simple Task Management App",
      category: "webapp",
      description:
        "A basic task management application with add, edit, delete functionality and local storage for personal productivity.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "LocalStorage", "Material-UI"],
      client: "Learning Project",
      duration: "4 days",
      year: "2024",
      status: "Demo",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Restaurant Menu Display",
      category: "business",
      description:
        "Digital menu display for a local restaurant with categorized items, prices, and beautiful food imagery.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      tags: ["Next.js", "CSS Grid", "Responsive Design"],
      client: "Startup Restaurant",
      duration: "5 days",
      year: "2024",
      status: "In Progress",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="h-4 w-4" />
              <span>Our Portfolio</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
                Creative
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Welcome to our portfolio. We're a fresh team of passionate
              developers ready to bring your digital ideas to life with modern
              technologies and creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Works
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the projects we've been working on as we build
              our portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-2 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors">
                        <Eye className="h-4 w-4" />
                        <span>View Live</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-slate-800/90 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              What We're Building
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Every project is a learning experience as we grow our skills and
              expand our capabilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <Github className="h-5 w-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 text-xs px-2 py-1 rounded-full font-medium">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Client: {project.client}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help bring your digital vision to life
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer">
              Start a Project
            </button>
            <Link to="/services">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
