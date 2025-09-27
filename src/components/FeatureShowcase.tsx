import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Database, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3,
  FileText,
  Bell,
  Users
} from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive platform accessible on all devices with offline capabilities for rural areas.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Smart algorithms match students with perfect internships based on skills and preferences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Centralized Database",
      description: "Unified system storing all internship data, progress reports, and academic records.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "NEP 2020 Compliance",
      description: "Built-in compliance with New Education Policy guidelines and credit integration.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Real-Time Tracking",
      description: "Live progress monitoring with instant updates and milestone notifications.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights for colleges to track student performance and industry trends.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Auto Report Generation",
      description: "Automated logbooks and formatted reports preventing fake certificates.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Intelligent alerts for deadlines, opportunities, and important updates.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Built-in communication between students, mentors, and industry supervisors.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-secondary">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need in <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of features addresses every challenge in the internship ecosystem 
            with cutting-edge technology and user-centric design.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`elegant-card group hover:shadow-glow transition-all duration-300 delay-${index * 50} animate-fade-in-up border-0 h-full`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground flex-1">
                  {feature.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse`}
                      style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Implementation Ready</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Internship Management?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of colleges and thousands of students already using our platform 
              to create meaningful internship experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;