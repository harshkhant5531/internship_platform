import { TrendingUp, Users, Building, GraduationCap, Award, Clock, Target, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Students Registered",
      description: "Active learners seeking internships",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      number: "1,200+",
      label: "Industry Partners",
      description: "Companies offering opportunities",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: GraduationCap,
      number: "500+",
      label: "Colleges Connected",
      description: "Educational institutions onboarded",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      number: "25,000+",
      label: "Successful Placements",
      description: "Completed internships with certificates",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Satisfaction Rate",
      description: "Students recommend our platform",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Clock,
      number: "48hrs",
      label: "Average Response Time",
      description: "Quick application processing",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Target,
      number: "89%",
      label: "Skill Match Accuracy",
      description: "AI-powered precision matching",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Platform Rating",
      description: "Highly rated by all stakeholders",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full mb-4">
            <span className="text-sm font-medium text-success">Impact & Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transforming Lives Through <span className="text-gradient">Data-Driven Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform has already made a significant impact in bridging the gap between 
            academic learning and industry requirements across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`elegant-card p-6 text-center group hover:shadow-glow transition-all duration-300 delay-${index * 50} animate-fade-in-up`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
              
              {/* Progress Bar */}
              <div className="mt-4 w-full h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full animate-pulse`}
                  style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join the Innovation Movement
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of the educational revolution that's reshaping how students, 
              colleges, and industries collaborate for a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient-primary px-8 py-4 rounded-xl text-white font-semibold hover:shadow-glow transition-all">
                Start Your Journey
              </button>
              <button className="border-2 border-primary/30 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;