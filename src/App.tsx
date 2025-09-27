import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import CollegeDashboard from "./pages/CollegeDashboard";
import IndustryDashboard from "./pages/IndustryDashboard";
import NotFound from "./pages/NotFound";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="fixed top-4 right-4 z-[100]">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-background border border-border shadow hover:bg-muted transition-colors"
          >
            {theme === "light" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          </button>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/college-dashboard" element={<CollegeDashboard />} />
            <Route path="/industry-dashboard" element={<IndustryDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
