import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./hooks/use-theme";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import OnlineDegreePrograms from "@/pages/online-degree-programs";
import Programs from "@/pages/programs";
import FormModal from "@/components/FormModal";
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

function Router({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home onRequestCall={onRequestCall} />} />
      <Route path="/online-degree-programs" component={OnlineDegreePrograms} />
      <Route path="/programs" component={Programs} />
      <Route path="/courses/DevOps" component={DevOps} />
      <Route path="/courses/AIML" component={AIML} />
      <Route path="/courses/ManualTesting" component={ManualTesting} />
      <Route path="/courses/AutomationTesting" component={AutomationTesting} />
      <Route path="/courses/JavaFullStack" component={JavaFullStack} />
      <Route path="/courses/PHPFullStack" component={PHPFullStack} />
      <Route path="/courses/Frontend" component={Frontend} />
      <Route path="/courses/Backend" component={Backend} />
      <Route path="/courses/MERN" component={MERN} />
      <Route path="/courses/BusinessAnalyst" component={BusinessAnalyst} />
      <Route path="/courses/MedicalBilling" component={MedicalBilling} />
      <Route path="/courses/USIT" component={USIT} />
      <Route path="/courses/USHealthcare" component={USHealthcare} />
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
          <FormModal open={showForm} onOpenChange={setShowForm} />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
