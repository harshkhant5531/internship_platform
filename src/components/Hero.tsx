import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium">NEP 2020 Compliant Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smart <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Internship</span><br />
                Management Platform
              </h1>
              
              <p className="text-xl text-blue-100 max-w-lg">
                Revolutionizing the internship ecosystem by seamlessly connecting students, 
                colleges, and industry partners under NEP guidelines.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-sm text-blue-200">Students Connected</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-200">Industry Partners</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-blue-200">Colleges Enrolled</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold group">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students, faculty, and industry professionals collaborating on internship programs"
                className="w-full rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-card animate-pulse-glow">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Live Tracking</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-card animate-pulse-glow delay-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;