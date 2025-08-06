import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Rocket,
} from "lucide-react";
import { Link, useNavigate } from "react-router";

const CTASection = () => {
  const [inView, setInView] = useState(false);
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Start a Conversation",
      description: "Let's discuss your project ideas",
      action: "Chat Now",
      gradient: "from-blue-500 to-blue-600",
      buttonAction: () => window.open("https://wa.me/8801858381111", "_blank"),
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Book a free consultation call",
      action: "Book Call",
      gradient: "from-purple-500 to-purple-600",
      buttonAction: () => window.open("https://wa.me/8801858381111", "_blank"),
    },
    {
      icon: Mail,
      title: "Send Us an Email",
      description: "Detailed project requirements",
      action: "Email Us",
      gradient: "from-emerald-500 to-emerald-600",
      buttonAction: () => navigate("/contact"),
    },
  ];

  const benefits = [
    "Free initial consultation",
    "Transparent pricing",
    "Quick response time",
    "Modern solutions",
    "Ongoing support",
    "Client-focused approach",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            <span>Get Started</span>
          </div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
              Ready to Build Your
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Digital Success?
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Join us on an exciting journey as we transform your ideas into
            powerful digital solutions. Let's create something amazing together!
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/contact">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 cursor-pointer">
                <span>Start Your Project Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link to="/services">
              <button className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 cursor-pointer">
                <span>Explore Our Services</span>
                <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300"></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Contact Methods */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-200 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transform hover:scale-105 text-center`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <method.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {method.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {method.description}
              </p>

              <button
                onClick={method.buttonAction}
                className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 cursor-pointer"
              >
                {method.action}
              </button>

              {/* Decorative Elements */}
              <div
                className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <div
                className={`absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Benefits & Info */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Benefits */}
          <div
            className={`transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                Why Choose CodencyBD?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-700/30">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Email Us
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      info@codencybd.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Call Us
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      +880 1326 874 247
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Location
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Response Time
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Let's Build Something Great Together! 🚀
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              As a fresh team, we're excited to take on new challenges and grow
              alongside our clients. Your project could be the next success
              story in our portfolio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
