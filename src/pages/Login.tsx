import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  GraduationCap, 
  Building, 
  ArrowRight, 
  Mail, 
  Lock,
  Eye,
  EyeOff
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const userTypes = [
    {
      id: "student",
      title: "Student",
      subtitle: "Access internship opportunities",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      route: "/student-dashboard",
      description: "Find and apply for internships, track progress, and build your career."
    },
    {
      id: "college",
      title: "College/Faculty",
      subtitle: "Manage student programs",
      icon: GraduationCap,
      gradient: "from-green-500 to-teal-600",
      route: "/college-dashboard",
      description: "Supervise students, manage partnerships, and ensure NEP compliance."
    },
    {
      id: "industry",
      title: "Industry Partner",
      subtitle: "Connect with talent",
      icon: Building,
      gradient: "from-orange-500 to-red-600",
      route: "/industry-dashboard",
      description: "Post opportunities, manage interns, and build academic partnerships."
    }
  ];

  const handleLogin = async (userType: string) => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: `Welcome to your ${userType} dashboard.`,
      });
      
      // In a real app, you'd navigate programmatically based on auth state
      const selectedUserType = userTypes.find(type => type.id === userType);
      if (selectedUserType) {
        window.location.href = selectedUserType.route;
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6 text-white hover:text-white/80 transition-colors">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold">NEP InternConnect</h1>
              <p className="text-sm text-white/80">Smart Internship Platform</p>
            </div>
          </Link>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome Back
          </h2>
          <p className="text-xl text-white/80">
            Choose your role to access your personalized dashboard
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {userTypes.map((type) => (
            <Card key={type.id} className="elegant-card border-0 hover:shadow-glow transition-all group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${type.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{type.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {type.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm">
                  {type.description}
                </p>
                <Button 
                  className="w-full btn-gradient-primary group"
                  onClick={() => handleLogin(type.id)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Login as {type.title}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Login Form */}
        <Card className="max-w-md mx-auto elegant-card border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Sign In to Your Account</CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your.email@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link to="#" className="text-primary hover:text-primary/80">
                    Forgot password?
                  </Link>
                </div>
                
                <Button className="w-full btn-gradient-primary" size="lg">
                  Sign In with Email
                </Button>
              </TabsContent>
              
              <TabsContent value="phone" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel" 
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <Button className="w-full btn-gradient-primary" size="lg">
                  Send OTP
                </Button>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="#" className="text-primary hover:text-primary/80 font-medium">
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Demo Access */}
        <div className="text-center mt-8">
          <p className="text-white/80 text-sm mb-4">
            Want to explore first? Try our demo dashboards
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {userTypes.map((type) => (
              <Link
                key={`demo-${type.id}`}
                to={type.route}
                className="text-white/70 hover:text-white text-sm underline-offset-4 hover:underline"
              >
                {type.title} Demo
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;