import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./hooks/use-theme";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import FormModal from "@/components/FormModal";

function Router({ onRequestCall }: { onRequestCall: () => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home onRequestCall={onRequestCall} />} />
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
