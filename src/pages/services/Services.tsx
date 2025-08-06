import { useState, useEffect } from "react";
import {
  User,
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const Services = () => {
  const [, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: <User className="w-8 h-8" />,
      title: "Portfolio Development",
      subtitle: "Professional Online Identity",
      description:
        "We help professionals establish a strong online identity through personalized portfolio websites. Perfect for architects, civil engineers, doctors, artists, and freelancers.",
      features: [
        "Highlight personal achievements and projects",
        "Downloadable resume or profile document",
        "Easy contact options with social media integration",
        "Optional blog posts and testimonials",
        "Simple content management for non-technical users",
      ],
      idealFor: [
        "Architects",
        "Civil Engineers",
        "Doctors",
        "Artists",
        "Freelancers",
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      darkBgGradient: "from-blue-900/20 to-blue-800/20",
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Applications",
      subtitle: "Tailored Digital Solutions",
      description:
        "Tailored web solutions for small businesses, local service providers, and educational or healthcare institutions to manage operations efficiently.",
      features: [
        "Student records and attendance management",
        "Patient registration and appointment systems",
        "Inventory management and digital billing",
        "Internal management tools for organizations",
        "Online result publishing and notice systems",
      ],
      idealFor: [
        "Coaching Centers",
        "Local Clinics",
        "Shops & Stores",
        "NGOs",
        "Educational Institutions",
      ],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      darkBgGradient: "from-purple-900/20 to-purple-800/20",
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Ready-to-Launch Tools",
      subtitle: "Fast & Affordable Solutions",
      description:
        "Pre-designed, reusable web solutions tailored for common local needs. Quick to deploy with custom branding and content.",
      features: [
        "Pharmacy and shop management systems",
        "Student result and coaching CRM tools",
        "Mini e-commerce sites for local sellers",
        "Quick customization with your branding",
        "Cost-effective digital presence",
      ],
      idealFor: [
        "Pharmacies",
        "Boutiques",
        "Local Sellers",
        "Small Businesses",
        "Service Providers",
      ],
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      darkBgGradient: "from-emerald-900/20 to-emerald-800/20",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Technology",
      description:
        "We use cutting-edge technologies to build fast, secure, and scalable solutions",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description:
        "Every solution we create is fully responsive and mobile-optimized",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused Approach",
      description:
        "Your success is our priority. We work closely with you throughout the process",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or functionality",
    },
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:2rem_2rem] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
              Empowering small businesses and professionals with digital
              solutions that drive growth and efficiency
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgGradient} dark:${service.darkBgGradient} p-8 h-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col`}
              >
                {/* Icon and Title */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
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

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Content - Fixed at bottom */}
                <div className="mt-auto">
                  {/* Ideal For */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Ideal for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} text-white shadow-sm`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <button
                    className={`group/btn inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div
                  className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                CodencyBD
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Fresh perspectives and modern solutions for your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-white dark:bg-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white rounded-2xl mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Simple, transparent, and results-driven approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Planning",
              description:
                "We understand your business needs and create a detailed roadmap for your digital solution.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              step: "02",
              title: "Design & Development",
              description:
                "Our team crafts your solution with attention to detail, ensuring functionality and aesthetics.",
              icon: <Code className="w-6 h-6" />,
            },
            {
              step: "03",
              title: "Launch & Support",
              description:
                "We deploy your solution and provide ongoing support to ensure smooth operations.",
              icon: <Zap className="w-6 h-6" />,
            },
          ].map((process, index) => (
            <div
              key={index}
              className={`relative text-center transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 6) * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white rounded-2xl shadow-lg mb-4">
                  {process.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {process.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {process.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you establish a strong digital
            presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
              Get Started Today
            </button>
            <Link to="/works">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
