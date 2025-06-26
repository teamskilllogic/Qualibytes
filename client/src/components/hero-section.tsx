import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { StatisticItem } from "@/lib/types";

const statistics: StatisticItem[] = [
  { value: "1200+", label: "Placement Partners" },
  { value: "15K+", label: "Careers Transformed" },
  { value: "100+", label: "Capstone Projects" }
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: ""
  });
  const { toast } = useToast();

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "We'll contact you soon with class details.",
      });
      setFormData({ name: "", email: "", phone: "", program: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
    },
    onError: () => {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.program) {
      toast({
        title: "Please select a program",
        description: "Choose your topic of interest to continue.",
        variant: "destructive",
      });
      return;
    }
    submitLead.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="gradient-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become the Top 1% in Tech
            </h1>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Registration Form */}
          <Card className="bg-white text-gray-900 shadow-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Book a Live Class, For Free!</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="program">Your Topic of Interest*</Label>
                  <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="devops">DevOps & Cloud</SelectItem>
                      <SelectItem value="business">Business Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-black py-3 font-semibold hover:bg-amber-600"
                  disabled={submitLead.isPending}
                >
                  {submitLead.isPending ? "Submitting..." : "BOOK FREE LIVE CLASS"}
                </Button>
                
                <p className="text-sm text-red-600 font-medium">Limited Seats Left</p>
                <p className="text-xs text-gray-600">
                  Already have an account? <a href="#" className="text-primary">Click here</a>
                </p>
                <p className="text-xs text-gray-500">
                  By creating an account I have read and agree to Terms and Privacy Policy
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
