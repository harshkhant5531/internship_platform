import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Building,
  Users,
  Plus,
  Eye,
  Clock,
  MapPin,
  TrendingUp,
  Award,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter,
  Calendar,
  FileText,
  Star,
  CheckCircle,
  AlertCircle,
  GraduationCap
} from "lucide-react";

const IndustryDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const internshipPrograms = [
    {
      id: 1,
      title: "Software Development Intern",
      department: "Engineering",
      duration: "3 months",
      positions: 5,
      applicants: 24,
      selected: 3,
      status: "Active",
      skills: ["React", "Node.js", "MongoDB"],
      startDate: "2024-11-01",
      stipend: "₹25,000"
    },
    {
      id: 2,
      title: "Data Analytics Intern",
      department: "Analytics", 
      duration: "4 months",
      positions: 3,
      applicants: 18,
      selected: 2,
      status: "Recruiting",
      skills: ["Python", "SQL", "Tableau"],
      startDate: "2024-10-15",
      stipend: "₹20,000"
    },
    {
      id: 3,
      title: "Marketing Intern",
      department: "Marketing",
      duration: "3 months", 
      positions: 2,
      applicants: 32,
      selected: 2,
      status: "Completed",
      skills: ["SEO", "Social Media", "Analytics"],
      startDate: "2024-07-01",
      stipend: "₹18,000"
    }
  ];

  const currentInterns = [
    {
      id: 1,
      name: "Rahul Kumar",
      position: "Software Development Intern",
      college: "ABC Institute of Technology", 
      mentor: "John Smith",
      progress: 75,
      rating: 4.5,
      startDate: "2024-07-15",
      endDate: "2024-10-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Data Analytics Intern",
      college: "XYZ University",
      mentor: "Sarah Johnson", 
      progress: 60,
      rating: 4.8,
      startDate: "2024-08-01",
      endDate: "2024-11-01"
    },
    {
      id: 3,
      name: "Arjun Reddy", 
      position: "Marketing Intern",
      college: "PQR College",
      mentor: "Mike Wilson",
      progress: 90,
      rating: 4.6,
      startDate: "2024-07-01", 
      endDate: "2024-10-01"
    }
  ];

  const partnerColleges = [
    {
      id: 1,
      name: "ABC Institute of Technology",
      location: "Bangalore",
      students: 45,
      activeInterns: 12,
      programs: ["Computer Science", "IT", "Electronics"],
      rating: 4.7,
      partnership: "2022"
    },
    {
      id: 2,
      name: "XYZ University",
      location: "Mumbai", 
      students: 38,
      activeInterns: 8,
      programs: ["Data Science", "Analytics", "AI/ML"],
      rating: 4.5,
      partnership: "2023"
    },
    {
      id: 3,
      name: "PQR College",
      location: "Delhi",
      students: 29,
      activeInterns: 6,
      programs: ["Marketing", "Business", "Management"],
      rating: 4.3,
      partnership: "2023"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-success/10 text-success';
      case 'Recruiting': return 'bg-primary/10 text-primary';
      case 'Completed': return 'bg-muted/10 text-muted-foreground';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">NEP InternConnect</h1>
                  <p className="text-xs text-muted-foreground">Industry Portal</p>
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
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">TechCorp Solutions</CardTitle>
                <CardDescription>Industry Partner</CardDescription>
                <Badge className="mx-auto bg-success/10 text-success">Verified Partner</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">25</div>
                    <div className="text-xs text-muted-foreground">Active Interns</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">8</div>
                    <div className="text-xs text-muted-foreground">Programs</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Satisfaction Rate</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-warning fill-warning" />
                    ))}
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
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Opportunity
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Users className="w-4 h-4 mr-2" />
                  Review Applications
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Interviews
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="programs" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="programs">Internship Programs</TabsTrigger>
                <TabsTrigger value="interns">Current Interns</TabsTrigger>
                <TabsTrigger value="colleges">Partner Colleges</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Internship Programs */}
              <TabsContent value="programs" className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">Internship Programs</h3>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search programs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button className="btn-gradient-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      New Program
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6">
                  {internshipPrograms.map((program) => (
                    <Card key={program.id} className="elegant-card border-0 hover:shadow-glow transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-3 flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-lg font-semibold">{program.title}</h4>
                                <p className="text-muted-foreground">{program.department} • {program.duration}</p>
                              </div>
                              <Badge className={getStatusColor(program.status)}>
                                {program.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Positions:</span>
                                <p className="font-medium">{program.positions} available</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Applicants:</span>
                                <p className="font-medium">{program.applicants} total</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Selected:</span>
                                <p className="font-medium">{program.selected} interns</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Stipend:</span>
                                <p className="font-medium">{program.stipend}/month</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">Skills:</span>
                              <div className="flex flex-wrap gap-2">
                                {program.skills.map((skill) => (
                                  <Badge key={skill} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 ml-4">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" className="btn-gradient-primary">
                              Manage
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Current Interns */}
              <TabsContent value="interns" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Current Interns</h3>
                  <Button className="btn-gradient-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Review
                  </Button>
                </div>

                <div className="grid gap-6">
                  {currentInterns.map((intern) => (
                    <Card key={intern.id} className="elegant-card border-0 hover:shadow-glow transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-3 flex-1">
                            <div>
                              <h4 className="text-lg font-semibold">{intern.name}</h4>
                              <p className="text-muted-foreground">{intern.position} • {intern.college}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Mentor:</span>
                                <p className="font-medium">{intern.mentor}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Duration:</span>
                                <p className="font-medium">{intern.startDate} - {intern.endDate}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Rating:</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-warning fill-warning" />
                                  <span className="font-medium">{intern.rating}</span>
                                </div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Progress:</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                                      style={{ width: `${intern.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="font-medium text-xs">{intern.progress}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 ml-4">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Profile
                            </Button>
                            <Button size="sm" className="btn-gradient-primary">
                              Evaluate
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Partner Colleges */}
              <TabsContent value="colleges" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Partner Colleges</h3>
                  <Button className="btn-gradient-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Partnership
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {partnerColleges.map((college) => (
                    <Card key={college.id} className="elegant-card border-0 hover:shadow-glow transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{college.name}</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {college.location}
                            </CardDescription>
                          </div>
                          <Badge className="bg-primary/10 text-primary">
                            Since {college.partnership}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Students:</span>
                            <p className="font-medium">{college.students} total</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Active Interns:</span>
                            <p className="font-medium">{college.activeInterns} currently</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm text-muted-foreground">Programs:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {college.programs.map((program) => (
                              <Badge key={program} variant="outline" className="text-xs">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-warning fill-warning" />
                            <span className="font-medium">{college.rating}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Analytics */}
              <TabsContent value="analytics" className="space-y-6">
                <h3 className="text-2xl font-bold">Analytics & Reports</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="elegant-card border-0">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <div className="text-3xl font-bold text-foreground">92%</div>
                      <div className="text-sm text-muted-foreground">Intern Satisfaction</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="elegant-card border-0">
                    <CardContent className="p-6 text-center">
                      <Award className="w-12 h-12 mx-auto mb-4 text-success" />
                      <div className="text-3xl font-bold text-foreground">87%</div>
                      <div className="text-sm text-muted-foreground">Completion Rate</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="elegant-card border-0">
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 mx-auto mb-4 text-warning" />
                      <div className="text-3xl font-bold text-foreground">156</div>
                      <div className="text-sm text-muted-foreground">Total Interns</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="elegant-card border-0">
                    <CardContent className="p-6 text-center">
                      <GraduationCap className="w-12 h-12 mx-auto mb-4 text-secondary" />
                      <div className="text-3xl font-bold text-foreground">12</div>
                      <div className="text-sm text-muted-foreground">Partner Colleges</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="elegant-card border-0">
                  <CardHeader>
                    <CardTitle>Performance Insights</CardTitle>
                    <CardDescription>Key metrics and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <div>
                        <p className="font-medium text-sm">High Retention Rate</p>
                        <p className="text-xs text-muted-foreground">94% of interns complete their programs successfully</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-warning/5 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-warning" />
                      <div>
                        <p className="font-medium text-sm">Skill Gap Alert</p>
                        <p className="text-xs text-muted-foreground">Consider adding more advanced technical training modules</p>
                      </div>
                    </div>
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

export default IndustryDashboard;