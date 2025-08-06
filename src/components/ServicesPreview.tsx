import { useState, useEffect, useRef } from "react";
import {
  User,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Link, useNavigate } from "react-router";

const ServicesPreview = () => {
  const [inView, setInView] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: <User className="w-8 h-8" />,
      title: "Portfolio Development",
      subtitle: "Professional Online Identity",
      description:
        "Help professionals establish a strong online presence with personalized portfolio websites.",
      features: [
        "Personal achievement showcase",
        "Downloadable resume integration",
        "Social media connectivity",
      ],
      idealFor: ["Architects", "Engineers", "Doctors", "Artists"],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      darkBgGradient: "dark:from-blue-900/20 dark:to-blue-800/20",
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Applications",
      subtitle: "Tailored Digital Solutions",
      description:
        "Build custom web solutions for small businesses and educational institutions.",
      features: [
        "Student management systems",
        "Patient registration portals",
        "Inventory management tools",
      ],
      idealFor: ["Coaching Centers", "Clinics", "Shops", "NGOs"],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      darkBgGradient: "dark:from-purple-900/20 dark:to-purple-800/20",
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Ready-to-Launch Tools",
      subtitle: "Fast & Affordable Solutions",
      description:
        "Pre-designed solutions with quick customization for immediate deployment.",
      features: [
        "Pharmacy management systems",
        "E-commerce platforms",
        "Quick brand customization",
      ],
      idealFor: ["Pharmacies", "Boutiques", "Small Businesses"],
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      darkBgGradient: "dark:from-emerald-900/20 dark:to-emerald-800/20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:2rem_2rem] opacity-30"></div>
      <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="h-4 w-4" />
            <span>Our Services</span>
          </div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
              Digital Solutions
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              That Work
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            From professional portfolios to custom business applications, we
            create digital solutions that help you succeed in today's connected
            world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 cursor-pointer ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveService(index)}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgGradient} ${service.darkBgGradient} p-8 h-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm pb-16`}
              >
                {/* Floating icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p
                  className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {service.subtitle}
                </p>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features - Compact for preview */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ideal For - Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.idealFor.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/50`}
                      >
                        {item}
                      </span>
                    ))}
                    {service.idealFor.length > 3 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                        +{service.idealFor.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover reveal button */}
                <div className="absolute pointer-events-auto z-10 bottom-6 left-8 right-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => navigate("/services")}
                    className={`w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div
                  className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Active indicator */}
                {activeService === index && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/30 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 transition-all duration-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital solutions can help you achieve your
              goals and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span>View All Services</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <button className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
