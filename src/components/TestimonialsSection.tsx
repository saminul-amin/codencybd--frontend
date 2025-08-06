import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  User,
  Building,
  Award,
  Heart,
} from "lucide-react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const [inView, setInView] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Architect",
      company: "SA Design Studio",
      content:
        "As a fresh agency, CodencyBD showed incredible attention to detail in creating my portfolio website. Their modern approach and understanding of what professionals need made the process smooth and the result outstanding.",
      rating: 5,
      project: "Professional Portfolio",
      gradient: "from-blue-500 to-blue-600",
      icon: "user",
    },
    {
      id: 2,
      name: "Dr. Karim Rahman",
      role: "Medical Professional",
      company: "Rahman Clinic",
      content:
        "Working with CodencyBD was a great decision. They built a patient management system that perfectly fits our clinic's needs. Despite being a new team, their dedication and technical skills are impressive.",
      rating: 5,
      project: "Clinic Management System",
      gradient: "from-purple-500 to-purple-600",
      icon: "heart",
    },
    {
      id: 3,
      name: "Fatema Khatun",
      role: "Business Owner",
      company: "FK Boutique",
      content:
        "CodencyBD helped us establish our online presence with a beautiful website that showcases our products perfectly. Their fresh perspective and enthusiasm for the project was evident throughout the process.",
      rating: 5,
      project: "Business Website",
      gradient: "from-emerald-500 to-emerald-600",
      icon: "building",
    },
    {
      id: 4,
      name: "Mahmud Hassan",
      role: "Coaching Center Director",
      company: "Excellence Academy",
      content:
        "The student management system they developed for us has streamlined our operations significantly. CodencyBD's team understood our educational needs and delivered exactly what we wanted.",
      rating: 5,
      project: "Student Management Portal",
      gradient: "from-orange-500 to-orange-600",
      icon: "award",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleTransition = (newIndex: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentTestimonial(newIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    handleTransition(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    handleTransition(newIndex);
  };

  const handleDotClick = (index: number) => {
    if (index !== currentTestimonial) {
      handleTransition(index);
    }
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "heart":
        return <Heart className="w-6 h-6" />;
      case "building":
        return <Building className="w-6 h-6" />;
      case "award":
        return <Award className="w-6 h-6" />;
      default:
        return <User className="w-6 h-6" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
              What Our
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Early feedback from our clients shows the impact of our fresh
            approach to digital solutions.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className={`mb-16 transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-8 lg:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-xl overflow-hidden">
              {/* Animated testimonial content */}
              <div
                key={currentTestimonial}
                className={`testimonial-enter ${
                  isTransitioning
                    ? "testimonial-transition opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                {/* Quote Icon */}
                <div
                  className={`testimonial-quote-enter inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-2xl text-white mb-8 shadow-lg transform transition-all duration-300 hover:scale-110 floating-icon`}
                >
                  <Quote className="w-8 h-8" />
                </div>

                {/* Testimonial Content */}
                <div className="text-center">
                  <div className={`testimonial-content-enter`}>
                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-8">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={`${currentTestimonial}-star-${i}`}
                            className="w-7 h-7 text-yellow-400 fill-current star-animation transform transition-all duration-300 hover:scale-125"
                            style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                          />
                        )
                      )}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-xl lg:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed mb-10 font-medium italic max-w-4xl mx-auto">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>

                    {/* Client Info Section */}
                    <div className="space-y-6">
                      {/* Client Avatar with Icon */}
                      <div className="flex justify-center">
                        <div
                          className={`relative w-20 h-20 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center text-white shadow-xl transform transition-all duration-300 hover:scale-110 floating-icon`}
                          style={{ animationDelay: "1s" }}
                        >
                          {getIcon(testimonials[currentTestimonial].icon)}
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Client Details */}
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>

                      {/* Project Tag */}
                      <div className="flex justify-center">
                        <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-full text-sm border border-slate-200/50 dark:border-slate-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                          <Building className="w-4 h-4" />
                          <span>
                            Project: {testimonials[currentTestimonial].project}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
                <button
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      disabled={isTransitioning}
                      className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer disabled:cursor-not-allowed ${
                        index === currentTestimonial
                          ? "bg-blue-600 dark:bg-blue-400 scale-125 shadow-lg"
                          : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
