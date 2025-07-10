import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./hooks/use-theme";
import About from "./pages/about";
import Contact from "./pages/contact";
// import Courses from "./pages/courses";
// import DegreePrograms from "./pages/degree-programs";
import Programs from "./pages/programs";
import DevOps from "@/pages/courses/DevOps";
import AIML from "@/pages/courses/AIML";
import ManualTesting from "@/pages/courses/ManualTesting";
import AutomationTesting from "@/pages/courses/AutomationTesting";
import JavaFullStack from "@/pages/courses/JavaFullStack";
import PHPFullStack from "@/pages/courses/PHPFullStack";
import Frontend from "@/pages/courses/Frontend";
import Backend from "@/pages/courses/Backend";
import MERN from "@/pages/courses/MERN";
import BusinessAnalyst from "@/pages/courses/BusinessAnalyst";
import MedicalBilling from "@/pages/courses/MedicalBilling";
import USIT from "@/pages/courses/USIT";
import USHealthcare from "@/pages/courses/USHealthcare";


import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import FormModal from "@/components/FormModal";

function Router({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home onRequestCall={onRequestCall} />} />
      <Route path="/about" component={() => <About />} />
      <Route path="/contact" component={() => <Contact />} />
      <Route path="/programs" component={() => <Programs />} />
      <Route path="/courses/DevOps" component={() => <DevOps />} />
      <Route path="/courses/AIML" component={() => <AIML />} />
      <Route path="/courses/manual-testing" component={() => <ManualTesting />} />
      <Route path="/courses/automation-testing" component={() => <AutomationTesting />} />
      <Route path="/courses/java-fullstack" component={() => <JavaFullStack />} />
      <Route path="/courses/php-fullstack" component={() => <PHPFullStack />} />
      <Route path="/courses/frontend" component={() => <Frontend />} />
      <Route path="/courses/backend" component={() => <Backend />} />
      <Route path="/courses/MERN" component={() => <MERN />} />
      <Route path="/courses/business-analyst" component={() => <BusinessAnalyst />} />
      <Route path="/courses/medical-billing" component={() => <MedicalBilling />} />
      <Route path="/courses/usit" component={() => <USIT />} /> 
      <Route path="/courses/us-healthcare" component={() => <USHealthcare />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);

  // Show popup form on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000); // 1-second delay for smoother experience
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router onRequestCall={() => setShowForm(true)} />
          {/* <FormModal open={showForm} onOpenChange={setShowForm} /> */}
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
