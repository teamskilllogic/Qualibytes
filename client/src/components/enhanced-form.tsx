import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface EnhancedFormProps {
  isPopup?: boolean;
  onClose?: () => void;
}

export default function EnhancedForm({ isPopup = false, onClose }: EnhancedFormProps) {
  const [formData, setFormData] = useState({
    experience: "",
    topicOfInterest: "",
    name: "",
    phone: "",
    email: ""
  });
  const { toast } = useToast();

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "We'll contact you soon with course details.",
      });
      setFormData({ experience: "", topicOfInterest: "", name: "", phone: "", email: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      if (onClose) onClose();
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
    if (!formData.experience || !formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    submitLead.mutate(formData);
  };

  const cardClass = isPopup 
    ? "w-full max-w-md bg-white text-gray-900 shadow-2xl rounded-2xl border-2 border-gray-200" 
    : "bg-white text-gray-900 shadow-2xl rounded-2xl";

  return (
    <Card className={cardClass}>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          Book a Live Class, For Free!
        </h3>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Topic of Interest */}
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium text-gray-700">Your Topic of Interest*</Label>
            <Select value={formData.topicOfInterest} onValueChange={(value) => setFormData(prev => ({ ...prev, topicOfInterest: value }))}>
              <SelectTrigger className="w-full h-12 border-gray-300 rounded-lg bg-gray-800 text-white border-gray-600">
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-development">Software Development</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="machine-learning">Machine Learning & AI</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                <SelectItem value="devops">DevOps & Cloud</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Topic of Interest */}
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium text-gray-700">Select topic of interest</Label>
            <Select value={formData.topicOfInterest} onValueChange={(value) => setFormData(prev => ({ ...prev, topicOfInterest: value }))}>
              <SelectTrigger className="w-full h-12 border-gray-300 rounded-lg">
                <SelectValue placeholder="Select your options/choices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-development">Software Development</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="machine-learning">Machine Learning & AI</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                <SelectItem value="devops">DevOps & Cloud</SelectItem>
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
              className="h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-lg"
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
              className="h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-lg"
              required
            />
          </div>

          {/* Phone Number */}
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
              className="flex-1 h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 ml-2 rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            disabled={submitLead.isPending}
          >
            {submitLead.isPending ? "BOOKING..." : "BOOK FREE LIVE CLASS"}
          </Button>

          {/* Limited Seats Message */}
          <div className="flex items-center justify-center space-x-2 bg-yellow-600 text-white p-2 rounded">
            <span className="text-sm">👥 Limited Seats Left</span>
          </div>

          {/* Already have account */}
          <p className="text-sm text-gray-400 text-center">
            Already have an account? <span className="text-blue-400 underline cursor-pointer">Click here</span>
          </p>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By creating an account I have read and agree to 
            <span className="text-blue-400 underline cursor-pointer"> Terms</span> and 
            <span className="text-blue-400 underline cursor-pointer"> Privacy Policy</span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}