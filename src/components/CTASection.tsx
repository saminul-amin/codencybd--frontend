import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router";

const CTASection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Book a free consultation call",
      action: "Book Call",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Mail,
      title: "Send Us an Email",
      description: "Detailed project requirements",
      action: "Email Us",
      gradient: "from-emerald-500 to-emerald-600",
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
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-500 dark:via-blue-600 dark:to-purple-600 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Build Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Digital Success?
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Join us on an exciting journey as we transform your ideas into
            powerful digital solutions. Let's create something amazing together!
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/contact">
              <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden">
                <span className="relative z-10">Start Your Project Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>

            <Link to="/services">
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm">
                <span>Explore Our Services</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:bg-blue-600 transition-colors duration-300"></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Contact Methods */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 transform hover:scale-105 text-center`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <method.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {method.title}
              </h3>

              <p className="text-blue-100 mb-6">{method.description}</p>

              <button className="w-full bg-white/20 hover:bg-white hover:text-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits & Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div
            className={`transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose CodencyBD?
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Get in Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email Us</div>
                    <div className="text-sm">info@codencybd.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call Us</div>
                    <div className="text-sm">+880 1XXX-XXXXXX</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-sm">Sylhet, Bangladesh</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Response Time
                    </div>
                    <div className="text-sm">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Great Together! 🚀
            </h3>
            <p className="text-blue-100 text-lg">
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
