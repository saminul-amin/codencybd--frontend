import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const updateTheme = (dark: any) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    updateTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg dark:shadow-slate-900/30"
          : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-white font-bold text-sm lg:text-base">
                  &lt;/&gt;
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  codency
                  <span className="text-slate-800 dark:text-slate-100">BD</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative px-4 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-700/50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-3 rounded-lg text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-800/80 font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
