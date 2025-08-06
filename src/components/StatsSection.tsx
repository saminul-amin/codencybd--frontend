import { useState, useEffect, useRef } from "react";
import {
  Users,
  Award,
  Clock,
  Heart,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const StatsSection = ({}) => {
  const [inView, setInView] = useState(false);
  const [, setCountUp] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setTimeout(() => setCountUp(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "Every project built with attention to detail and modern standards",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success and satisfaction are our top priorities",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Modern Solutions",
      description:
        "Cutting-edge technologies and contemporary design approaches",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-500 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Our Journey</span>
          </div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
              Starting Strong
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Building Trust
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            As a new agency, we're excited to grow with our clients and build
            lasting relationships through exceptional work and dedicated
            service.
          </p>
        </div>

        {/* Achievements Section */}
        <div
          className={`transform transition-all duration-500 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              While we're a new agency, our commitment to quality and client
              satisfaction drives everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transform hover:scale-105 text-center ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${achievement.gradient} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <achievement.icon className="w-7 h-7" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {achievement.title}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-500 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to be Part of Our Growth Story?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join us on this exciting journey as we build amazing digital
              solutions together. Your project could be our next success story!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                  <span>Start Your Project</span>
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
