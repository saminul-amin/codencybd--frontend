import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [, setIsDark] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // Sync with theme changes from Navbar
  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const hasClass = document.documentElement.classList.contains("dark");
      setIsDark(hasClass);
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Create template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        subject: data.subject,
        message: data.message,
        to_name: "Codency BD Team",
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "codencybd@gmail.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+880 1858 381 111",
      subtitle: "Mon-Sun 9AM-9PM BST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Dhaka, Bangladesh",
      subtitle: "Available for meetings",
    },
    // {
    //   icon: Globe,
    //   title: "Follow Us",
    //   details: "Social Media",
    //   subtitle: "Stay connected with updates",
    // },
  ];

  const stats = [
    { icon: MessageSquare, number: "< 1hr", label: "Response Time" },
    { icon: Clock, number: "24/7", label: "Support Available" },
    { icon: CheckCircle, number: "100%", label: "Commitment" },
    { icon: Users, number: "Ready", label: "To Serve You" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                We're here to help bring your ideas to life. Whether you need
                web development, mobile apps, or digital solutions, our team is
                ready to collaborate with you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/80 dark:bg-slate-800/80 rounded-2xl hover:bg-white/90 dark:hover:bg-slate-700/90 transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50 group hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 font-medium">
                      {info.details}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-600/50 p-8 lg:p-10 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">
                Send us a Message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-600/50 rounded-xl flex items-center space-x-3 animate-bounce-in">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-600/50 rounded-xl flex items-center space-x-3">
                  <div className="h-5 w-5 text-red-600 dark:text-red-400">
                    ⚠
                  </div>
                  <span className="text-red-700 dark:text-red-300 font-medium">
                    {submitError}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-500 bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-500 bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-500 bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="+880 1700-000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-500 bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                      placeholder="Project inquiry, support, etc."
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-500 bg-white/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project, requirements, timeline, or any questions you have..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
