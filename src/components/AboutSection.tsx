import { useState, useEffect, useRef } from "react";
import {
  Target,
  Heart,
  Lightbulb,
  Rocket,
  Users,
  Code,
  Globe,
} from "lucide-react";

const AboutSection = () => {
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

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every solution we build serves a real business need and drives meaningful results.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Client-First",
      description:
        "We prioritize your success and build lasting relationships through exceptional service.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace modern technologies and creative approaches to solve complex challenges.",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const team = [
    {
      name: "Development Team",
      role: "3 Passionate Developers",
      description: "Fresh perspectives with modern tech expertise",
      icon: Code,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "Client Relations",
      role: "Dedicated Support",
      description: "Ensuring smooth communication and satisfaction",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Digital Strategy",
      role: "Growth Focused",
      description: "Building solutions that scale with your business",
      icon: Globe,
      gradient: "from-emerald-500 to-blue-500",
    },
  ];

  return (
    <section
      id="about-section"
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
            <span>About CodencyBD</span>
          </div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
              Building the Future of
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Digital Bangladesh
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We're a team of three passionate developers dedicated to empowering
            small businesses and professionals with modern digital solutions
            that drive real growth and success.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  To bridge the digital gap for small businesses and
                  professionals in Bangladesh by providing accessible, modern,
                  and effective web solutions that help them thrive in today's
                  digital economy.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      Digital Transformation
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      One business at a time
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-700/30">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Why We Started
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  We noticed that while Bangladesh's digital landscape is
                  rapidly evolving, many small businesses and professionals are
                  being left behind. Our goal is to be their trusted first step
                  into the digital world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div
            className={`transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center lg:text-left">
              Our Core Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 bg-gradient-to-br ${value.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Meet Our Team
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Three friends with a shared vision of empowering businesses
              through technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transform hover:scale-105`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <member.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <div
                  className={`absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
