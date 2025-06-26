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
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">
          Let's find the right course for you
        </h3>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Experience Level */}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-gray-700">Experience</Label>
            <RadioGroup 
              value={formData.experience} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="working-technical" id="working-technical" />
                <Label htmlFor="working-technical" className="text-sm text-gray-700 font-normal">
                  Working Professional - Technical Roles
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="working-non-technical" id="working-non-technical" />
                <Label htmlFor="working-non-technical" className="text-sm text-gray-700 font-normal">
                  Working Professional - Non Technical
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="college-final" id="college-final" />
                <Label htmlFor="college-final" className="text-sm text-gray-700 font-normal">
                  College Student - Final Year
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="college-pre-final" id="college-pre-final" />
                <Label htmlFor="college-pre-final" className="text-sm text-gray-700 font-normal">
                  College Student - 1st to Pre-final Year
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="others" id="others" />
                <Label htmlFor="others" className="text-sm text-gray-700 font-normal">
                  Others
                </Label>
              </div>
            </RadioGroup>
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
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="h-12 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="h-12 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="h-12 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            disabled={submitLead.isPending}
          >
            {submitLead.isPending ? "Finding your course..." : "Find your course"}
          </Button>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            I authorize Coding Ninjas to contact me with course updates & offers via 
            Email/SMS/WhatsApp/Call. I have read and agree to 
            <span className="text-blue-600 underline cursor-pointer"> Privacy Policy</span> & 
            <span className="text-blue-600 underline cursor-pointer"> Terms of use</span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}