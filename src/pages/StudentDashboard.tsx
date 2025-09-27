import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  BookmarkPlus,
  Clock,
  MapPin,
  Building,
  GraduationCap,
  User,
  Bell,
  Settings,
  LogOut,
  TrendingUp,
  Award,
  FileText,
  Calendar,
  Target,
  Star
} from "lucide-react";

const StudentDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "Bangalore, Karnataka",
      duration: "3 months",
      stipend: "₹25,000/month",
      skills: ["React", "Node.js", "MongoDB"],
      type: "Remote",
      status: "Open",
      deadline: "2024-10-15",
      description: "Work on cutting-edge web applications using modern technologies."
    },
    {
      id: 2,
      title: "Data Analytics Intern",
      company: "DataInsights Ltd",
      location: "Mumbai, Maharashtra",
      duration: "4 months",
      stipend: "₹20,000/month",
      skills: ["Python", "SQL", "Tableau"],
      type: "Hybrid",
      status: "Open",
      deadline: "2024-10-20",
      description: "Analyze large datasets and create meaningful insights for business decisions."
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      company: "Brand Boost Agency",
      location: "Delhi, NCR",
      duration: "3 months",
      stipend: "₹18,000/month",
      skills: ["SEO", "Social Media", "Analytics"],
      type: "On-site",
      status: "Applied",
      deadline: "2024-10-10",
      description: "Create and execute digital marketing campaigns for various clients."
    }
  ];

  const myApplications = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Software Development Intern",
      appliedDate: "2024-09-15",
      status: "Under Review",
      statusColor: "bg-warning"
    },
    {
      id: 2,
      company: "DataInsights Ltd",
      position: "Data Analytics Intern",
      appliedDate: "2024-09-12",
      status: "Interview Scheduled",
      statusColor: "bg-primary"
    },
    {
      id: 3,
      company: "Brand Boost Agency", 
      position: "Digital Marketing Intern",
      appliedDate: "2024-09-10",
      status: "Rejected",
      statusColor: "bg-destructive"
    }
  ];

  const skillProgress = [
    { skill: "React Development", progress: 85, level: "Advanced" },
    { skill: "Data Analysis", progress: 70, level: "Intermediate" },
    { skill: "Digital Marketing", progress: 60, level: "Intermediate" },
    { skill: "Python Programming", progress: 75, level: "Advanced" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">NEP InternConnect</h1>
                  <p className="text-xs text-muted-foreground">Student Portal</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Card className="elegant-card border-0 mb-6">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">Rahul Kumar</CardTitle>
                <CardDescription>Computer Science Student</CardDescription>
                <Badge className="mx-auto bg-success/10 text-success">Active</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Profile Completion</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">Applied</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">3</div>
                    <div className="text-xs text-muted-foreground">Shortlisted</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="elegant-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Resume
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Target className="w-4 h-4 mr-2" />
                  Skill Assessment
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Interviews
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Award className="w-4 h-4 mr-2" />
                  View Certificates
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="browse" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="browse">Browse Internships</TabsTrigger>
                <TabsTrigger value="applications">My Applications</TabsTrigger>
                <TabsTrigger value="skills">Skills & Learning</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* Browse Internships */}
              <TabsContent value="browse" className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search internships by title, company, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>

                <div className="grid gap-6">
                  {internships.map((internship) => (
                    <Card key={internship.id} className="elegant-card border-0 hover:shadow-glow transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-xl">{internship.title}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {internship.company}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {internship.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {internship.duration}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={internship.status === 'Applied' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'}>
                              {internship.status}
                            </Badge>
                            <div className="text-lg font-bold text-foreground mt-1">{internship.stipend}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{internship.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {internship.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <BookmarkPlus className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="btn-gradient-primary">
                              {internship.status === 'Applied' ? 'View Application' : 'Apply Now'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* My Applications */}
              <TabsContent value="applications" className="space-y-6">
                <div className="grid gap-6">
                  {myApplications.map((application) => (
                    <Card key={application.id} className="elegant-card border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold">{application.position}</h3>
                            <p className="text-muted-foreground">{application.company}</p>
                            <p className="text-sm text-muted-foreground">Applied on {application.appliedDate}</p>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge className={`${application.statusColor}/10 text-${application.statusColor.replace('bg-', '')}`}>
                              {application.status}
                            </Badge>
                            <div>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Skills & Learning */}
              <TabsContent value="skills" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="elegant-card border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Skill Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skillProgress.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.skill}</span>
                            <Badge variant="outline" className="text-xs">{skill.level}</Badge>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                              style={{ width: `${skill.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground">{skill.progress}% Complete</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="elegant-card border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Recommended Courses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <h4 className="font-medium">Advanced React Patterns</h4>
                          <p className="text-sm text-muted-foreground">Master advanced React concepts</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-warning fill-warning" />
                              <span className="text-xs">4.8</span>
                            </div>
                            <Button size="sm" variant="outline">Enroll</Button>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <h4 className="font-medium">Data Science Fundamentals</h4>
                          <p className="text-sm text-muted-foreground">Learn Python for data analysis</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-warning fill-warning" />
                              <span className="text-xs">4.9</span>
                            </div>
                            <Button size="sm" variant="outline">Enroll</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Profile */}
              <TabsContent value="profile" className="space-y-6">
                <Card className="elegant-card border-0">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your profile details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <Input defaultValue="Rahul Kumar" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input defaultValue="rahul.kumar@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <Input defaultValue="+91 98765 43210" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">College</label>
                        <Input defaultValue="ABC Institute of Technology" />
                      </div>
                    </div>
                    <Button className="btn-gradient-primary">Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;