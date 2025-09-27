import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building, 
  GraduationCap, 
  TrendingUp,
  FileText,
  Calendar,
  Award,
  Bell,
  Settings,
  LogOut,
  Plus,
  Eye,
  Download,
  CheckCircle,
  AlertCircle,
  Clock,
  BarChart3
} from "lucide-react";

const CollegeDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const studentsData = [
    {
      id: 1,
      name: "Rahul Kumar",
      rollNumber: "CS2021001",
      branch: "Computer Science",
      semester: 5,
      internshipStatus: "Active",
      company: "TechCorp Solutions",
      mentor: "Dr. Priya Sharma",
      progress: 75,
      startDate: "2024-07-15",
      endDate: "2024-10-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      rollNumber: "CS2021002", 
      branch: "Computer Science",
      semester: 5,
      internshipStatus: "Completed",
      company: "DataInsights Ltd",
      mentor: "Dr. Amit Singh",
      progress: 100,
      startDate: "2024-06-01",
      endDate: "2024-09-01"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      rollNumber: "ME2021001",
      branch: "Mechanical Engineering", 
      semester: 5,
      internshipStatus: "Seeking",
      company: "Not Assigned",
      mentor: "Dr. Rajesh Kumar",
      progress: 0,
      startDate: null,
      endDate: null
    }
  ];

  const industryPartners = [
    {
      id: 1,
      name: "TechCorp Solutions",
      type: "Software Company",
      activeInterns: 15,
      totalSlots: 20,
      rating: 4.8,
      location: "Bangalore"
    },
    {
      id: 2,
      name: "DataInsights Ltd", 
      type: "Analytics Firm",
      activeInterns: 8,
      totalSlots: 12,
      rating: 4.6,
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Manufacturing Plus",
      type: "Manufacturing",
      activeInterns: 12,
      totalSlots: 15,
      rating: 4.5,
      location: "Chennai"
    }
  ];

  const reportsSummary = [
    {
      title: "Monthly Progress Report",
      students: 45,
      dueDate: "2024-10-30",
      status: "Pending",
      completionRate: "78%"
    },
    {
      title: "Semester Evaluation",
      students: 52,
      dueDate: "2024-11-15", 
      status: "In Progress",
      completionRate: "34%"
    },
    {
      title: "Industry Feedback Report",
      students: 38,
      dueDate: "2024-10-25",
      status: "Completed",
      completionRate: "100%"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-success/10 text-success';
      case 'Completed': return 'bg-primary/10 text-primary';
      case 'Seeking': return 'bg-warning/10 text-warning';
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
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">NEP InternConnect</h1>
                  <p className="text-xs text-muted-foreground">Faculty Portal</p>
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
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl">Dr. Priya Sharma</CardTitle>
                <CardDescription>Faculty Coordinator</CardDescription>
                <Badge className="mx-auto bg-success/10 text-success">Active Supervisor</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">52</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">8</div>
                    <div className="text-xs text-muted-foreground">Partners</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">NEP Compliance</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full" style={{ width: '92%' }}></div>
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
                  Add New Partnership
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Evaluations
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Award className="w-4 h-4 mr-2" />
                  Manage Certificates
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <Tabs defaultValue="students" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="students">Student Management</TabsTrigger>
                <TabsTrigger value="partners">Industry Partners</TabsTrigger>
                <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
                <TabsTrigger value="compliance">NEP Compliance</TabsTrigger>
              </TabsList>

              {/* Student Management */}
              <TabsContent value="students" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Student Internship Tracking</h3>
                  <Button className="btn-gradient-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Student
                  </Button>
                </div>

                <div className="grid gap-6">
                  {studentsData.map((student) => (
                    <Card key={student.id} className="elegant-card border-0 hover:shadow-glow transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-lg font-semibold">{student.name}</h4>
                              <p className="text-muted-foreground">{student.rollNumber} • {student.branch}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Company:</span>
                                <p className="font-medium">{student.company}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Mentor:</span>
                                <p className="font-medium">{student.mentor}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Duration:</span>
                                <p className="font-medium">{student.startDate ? `${student.startDate} - ${student.endDate}` : 'Not Started'}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Progress:</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full"
                                      style={{ width: `${student.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="font-medium text-xs">{student.progress}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Badge className={getStatusColor(student.internshipStatus)}>
                              {student.internshipStatus}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Industry Partners */}
              <TabsContent value="partners" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Industry Partnerships</h3>
                  <Button className="btn-gradient-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Partner
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {industryPartners.map((partner) => (
                    <Card key={partner.id} className="elegant-card border-0 hover:shadow-glow transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{partner.name}</CardTitle>
                            <CardDescription>{partner.type} • {partner.location}</CardDescription>
                          </div>
                          <Badge className="bg-primary/10 text-primary">
                            ★ {partner.rating}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Intern Capacity</span>
                            <span className="font-medium">{partner.activeInterns}/{partner.totalSlots}</span>
                          </div>
                          
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-primary rounded-full"
                              style={{ width: `${(partner.activeInterns / partner.totalSlots) * 100}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              View Details
                            </Button>
                            <Button size="sm" className="btn-gradient-primary flex-1">
                              Manage
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Reports & Analytics */}
              <TabsContent value="reports" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Reports & Analytics</h3>
                  <Button className="btn-gradient-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Export All
                  </Button>
                </div>

                <div className="grid gap-6">
                  {reportsSummary.map((report, index) => (
                    <Card key={index} className="elegant-card border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold">{report.title}</h4>
                            <p className="text-muted-foreground">{report.students} students • Due: {report.dueDate}</p>
                            <div className="flex items-center gap-2">
                              {report.status === 'Completed' ? (
                                <CheckCircle className="w-4 h-4 text-success" />
                              ) : report.status === 'Pending' ? (
                                <AlertCircle className="w-4 h-4 text-warning" />
                              ) : (
                                <Clock className="w-4 h-4 text-primary" />
                              )}
                              <span className="text-sm font-medium">{report.status}</span>
                            </div>
                          </div>
                          
                          <div className="text-right space-y-2">
                            <div className="text-2xl font-bold text-primary">{report.completionRate}</div>
                            <div className="text-xs text-muted-foreground">Completion</div>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* NEP Compliance */}
              <TabsContent value="compliance" className="space-y-6">
                <h3 className="text-2xl font-bold">NEP 2020 Compliance Dashboard</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="elegant-card border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" />
                        Compliance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Credit Integration</span>
                          <Badge className="bg-success/10 text-success">100%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Industry Engagement</span>
                          <Badge className="bg-success/10 text-success">95%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Skill Development</span>
                          <Badge className="bg-warning/10 text-warning">87%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Report Generation</span>
                          <Badge className="bg-success/10 text-success">92%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="elegant-card border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Recent Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <div>
                          <p className="font-medium text-sm">Full NEP Documentation</p>
                          <p className="text-xs text-muted-foreground">All reports generated successfully</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <Award className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Industry Integration Award</p>
                          <p className="text-xs text-muted-foreground">Excellence in partnerships</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDashboard;