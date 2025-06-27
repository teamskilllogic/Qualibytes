import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  // Show popup after 3 seconds on first visit
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you soon with personalized guidance.",
      });
      setFormData({ program: "", name: "", email: "", phone: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      setIsOpen(false);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    submitLead.mutate(formData);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
        <div className="flex bg-black rounded-2xl overflow-hidden relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={handleClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Left Side - Image and Content */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-500 rounded-full transform translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Talk to our Advisor</h2>
              <div className="mb-6">
                <p className="text-sm opacity-90 mb-4">AND GET</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-lg">Personalized Career Roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-lg">Free Career Counselling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-lg">Free Access to Qualibytes Events</span>
                  </div>
                </div>
              </div>
              
              {/* Advisor Image Placeholder */}
              <div className="absolute bottom-0 right-8 w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👩‍💼</span>
                </div>
              </div>
            </div>
            
            {/* Qualibytes Logo */}
            <div className="absolute bottom-4 right-4 text-sm font-semibold bg-white/20 px-3 py-1 rounded">
              QUALIBYTES
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-96 bg-black p-8">
            <DialogTitle className="text-2xl font-bold text-white mb-6">
              Talk to our Advisor!
            </DialogTitle>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Program Selection */}
              <div className="space-y-2">
                <Label htmlFor="program" className="text-white text-sm">Your Topic of Interest*</Label>
                <Select value={formData.program} onValueChange={(value) => setFormData(prev => ({ ...prev, program: value }))}>
                  <SelectTrigger className="w-full h-12 bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select Program" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="software-development" className="text-white">Software Development</SelectItem>
                    <SelectItem value="data-science" className="text-white">Data Science</SelectItem>
                    <SelectItem value="machine-learning" className="text-white">Machine Learning & AI</SelectItem>
                    <SelectItem value="web-development" className="text-white">Web Development</SelectItem>
                    <SelectItem value="mobile-development" className="text-white">Mobile Development</SelectItem>
                    <SelectItem value="devops" className="text-white">DevOps & Cloud</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2 flex">
                <div className="w-20">
                  <Select defaultValue="+91">
                    <SelectTrigger className="h-12 bg-gray-800 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="+91" className="text-white">+91</SelectItem>
                      <SelectItem value="+1" className="text-white">+1</SelectItem>
                      <SelectItem value="+44" className="text-white">+44</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="flex-1 h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 ml-2"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 mt-6"
                disabled={submitLead.isPending}
              >
                {submitLead.isPending ? "CONNECTING..." : "CONTINUE"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}