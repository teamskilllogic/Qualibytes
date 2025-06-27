import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface EnhancedFormProps {
  isPopup?: boolean;
  onClose?: () => void;
}

export default function EnhancedForm({
  isPopup = false,
  onClose,
}: EnhancedFormProps) {
  const [formData, setFormData] = useState({
    experience: "",
    topicOfInterest: "",
    name: "",
    phone: "",
    email: "",
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
      setFormData({
        experience: "",
        topicOfInterest: "",
        name: "",
        phone: "",
        email: "",
      });
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
    if (
      !formData.experience ||
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    submitLead.mutate(formData);
  };

  const cardClass = isPopup
    ? "w-full max-w-md shadow-2xl rounded-2xl bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-200 dark:border-gray-800"
    : "shadow-2xl rounded-2xl bg-white text-black dark:bg-gray-900 dark:text-white";

  return (
    <Card className={cardClass}>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">
          Book a Live Webinar, For Free!
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Topic of Interest */}
          <div className="space-y-2">
            <Label>Your Topic of Interest*</Label>
            <Select
              value={formData.topicOfInterest}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, topicOfInterest: value }))
              }
            >
              <SelectTrigger className="w-full h-12 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700 rounded-lg">
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-development">
                  Software Development
                </SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="machine-learning">
                  Machine Learning & AI
                </SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-development">
                  Mobile Development
                </SelectItem>
                <SelectItem value="devops">DevOps & Cloud</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Topic Choices */}
          <div className="space-y-2">
            <Label>Select topic of interest</Label>
            <Select
              value={formData.experience}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, experience: value }))
              }
            >
              <SelectTrigger className="w-full h-12 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700 rounded-lg">
                <SelectValue placeholder="Select your options/choices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Name */}
          <Input
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="h-12 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg"
            required
          />

          {/* Email */}
          <Input
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="h-12 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg"
            required
          />

          {/* Phone */}
          <div className="flex space-x-2">
            <div className="w-20">
              <Select defaultValue="+91">
                <SelectTrigger className="h-12 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              type="tel"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="flex-1 h-12 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg"
              required
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
            disabled={submitLead.isPending}
          >
            {submitLead.isPending ? "BOOKING..." : "BOOK FREE LIVE CLASS"}
          </Button>

          {/* Info */}
          <div className="flex items-center justify-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-2 rounded text-sm">
            👥 Limited Seats Left
          </div>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            By creating an account I have read and agree to{" "}
            <a href="#" className="text-blue-500 underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
