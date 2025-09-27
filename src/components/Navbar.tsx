import { Button } from "@/components/ui/button";
import { Menu, X, Users, Building, GraduationCap, LogIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "For Students", href: "/student-dashboard", icon: Users },
    { name: "For Colleges", href: "/college-dashboard", icon: GraduationCap },
    { name: "For Industry", href: "/industry-dashboard", icon: Building },
    { name: "Features", href: "/#features" },
    { name: "About", href: "/#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NEP InternConnect</h1>
              <p className="text-xs text-muted-foreground">Smart Internship Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="btn-gradient-primary">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon && <item.icon className="w-5 h-5 text-primary" />}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-border">
              <Link to="/login">
                <Button variant="outline" size="sm" className="w-full">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/login">
                <Button size="sm" className="btn-gradient-primary w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;