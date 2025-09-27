import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building, 
  GraduationCap, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Award
} from "lucide-react";

const StakeholderCards = () => {
  const stakeholders = [
    {
      id: "students",
      title: "For Students",
      subtitle: "Discover Your Perfect Internship",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      features: [
        { icon: BookOpen, text: "Browse 10,000+ verified internships" },
        { icon: Target, text: "AI-powered skill matching" },
        { icon: Clock, text: "Real-time application tracking" },
        { icon: Award, text: "Digital certificates & reports" },
      ],
      cta: "Find Internships",
      description: "Access NEP-compliant internships with integrated skill development and seamless progress tracking."
    },
    {
      id: "colleges",
      title: "For Colleges",
      subtitle: "Streamline Academic Excellence",
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-600",
      features: [
        { icon: Users, text: "Centralized student management" },
        { icon: TrendingUp, text: "Performance analytics dashboard" },
        { icon: Shield, text: "NEP 2020 compliance tracking" },
        { icon: Building, text: "Industry partnership tools" },
      ],
      cta: "Manage Programs",
      description: "Comprehensive platform for faculty supervision, credit integration, and partnership management."
    },
    {
      id: "industry",
      title: "For Industry",
      subtitle: "Connect with Future Talent",
      icon: Building,
      gradient: "from-orange-500 to-red-600",
      features: [
        { icon: Users, text: "Access to skilled students" },
        { icon: Target, text: "Targeted recruitment tools" },
        { icon: Clock, text: "Streamlined intern management" },
        { icon: TrendingUp, text: "Performance tracking system" },
      ],
      cta: "Post Opportunities",
      description: "Efficient platform to recruit interns, manage programs, and build lasting academic partnerships."
    }
  ];

  return (
    <section id="stakeholders" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Three-Way Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Every <span className="text-gradient">Stakeholder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform serves students, colleges, and industry partners 
            with tailored solutions for seamless internship management.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <Card 
              key={stakeholder.id}
              className={`elegant-card group hover:shadow-glow transition-all duration-300 delay-${index * 100} animate-fade-in-up border-0`}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stakeholder.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stakeholder.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {stakeholder.title}
                </CardTitle>
                <p className="text-lg text-primary font-semibold">
                  {stakeholder.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {stakeholder.description}
                </p>
                
                <div className="space-y-3">
                  {stakeholder.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full btn-gradient-primary group" size="lg">
                  {stakeholder.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderCards;