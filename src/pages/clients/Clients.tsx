import {
  Star,
  Quote,
  ArrowRight,
  Users,
  Trophy,
  Globe,
  Briefcase,
} from "lucide-react";

const Clients = () => {
  const stats = [
    {
      icon: Users,
      label: "Focused Approach",
      value: "1-on-1",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Trophy,
      label: "Quality First",
      value: "100%",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Globe,
      label: "Local Expertise",
      value: "BD",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Briefcase,
      label: "Custom Solutions",
      value: "Tailored",
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "text-yellow-400 fill-current"
            : "text-slate-300 dark:text-slate-600"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-6">
              Let's Build Together
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
              We're a growing agency passionate about helping professionals and
              small businesses in Bangladesh create their digital presence. Your
              project could be our next success story.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Approach */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              As a developing agency, we bring fresh perspectives, dedicated
              attention, and competitive pricing to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Personal Attention
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Every client gets our full focus and direct communication with
                our team
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Quality Over Quantity
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We prioritize delivering exceptional work rather than rushing
                through projects
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Local Understanding
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Deep knowledge of Bangladesh market and business culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              What We Promise Our Clients
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              While we're building our portfolio, here's our commitment to every
              client we work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {renderStars(5)}
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                "We ensure every portfolio website perfectly reflects your
                professional identity with clean design, easy navigation, and
                mobile responsiveness."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                    Portfolio Development
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    For Professionals
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Architects, Engineers, Doctors
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {renderStars(5)}
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                "Custom web applications designed specifically for your business
                needs - from patient management to inventory systems, built with
                simplicity in mind."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                    Custom Applications
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Business Solutions
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Clinics, Shops, Coaching Centers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {renderStars(5)}
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                "Ready-to-launch solutions that can be quickly customized with
                your branding and content - perfect for businesses that need to
                go digital fast."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                    Ready-to-Launch Tools
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Quick Solutions
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    E-commerce, CRM, Management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-slate-800 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                💡 Your success story could be featured here soon!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Be Our First Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            As a growing agency, we're offering competitive rates and
            personalized attention. Let's build something amazing together and
            establish a long-term partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg cursor-pointer hover:shadow-xl group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all cursor-pointer duration-200">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
