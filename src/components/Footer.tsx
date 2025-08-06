import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUp,
  Heart,
  Code,
  Globe,
} from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/works" },
    { name: "Our Team", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "E-commerce", href: "/services" },
    { name: "Digital Marketing", href: "/services" },
    { name: "Consulting", href: "/services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "https://github.com/saminul-amin", label: "GitHub" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "Dhaka, Bangladesh",
    },
    {
      icon: Phone,
      text: "+880 1326 874 247",
    },
    {
      icon: Mail,
      text: "hello@codencybd.com",
    },
    {
      icon: Globe,
      text: "www.codencybd.web.app",
    },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-base">
                      &lt;/&gt;
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                      codency
                      <span className="text-white">BD</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  Transforming ideas into digital reality. We craft innovative
                  web solutions, mobile applications, and digital experiences
                  that drive business growth.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-slate-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    >
                      <social.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white relative">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-slate-300 hover:text-blue-400 transition-all duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white relative">
                  Our Services
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.href}
                        className="text-slate-300 hover:text-blue-400 transition-all duration-200 flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-200"></span>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white relative">
                  Get in Touch
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 group"
                    >
                      <info.icon className="h-5 w-5 text-blue-400 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-slate-300 hover:text-white transition-colors duration-200">
                        {info.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Newsletter Signup */}
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Stay Updated
                  </h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-r-lg transition-all duration-200 hover:shadow-lg">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-slate-400">
                  <span>
                    &copy; {new Date().getFullYear()} CodencyBD. All rights
                    reserved.
                  </span>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <Link
                    to="/privacy"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="/cookies"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Cookie Policy
                  </Link>
                </div>

                <div className="flex items-center space-x-2 text-slate-400">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                  <span>in Bangladesh</span>
                  <Code className="h-4 w-4 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        </button>
      )}
    </>
  );
};

export default Footer;
