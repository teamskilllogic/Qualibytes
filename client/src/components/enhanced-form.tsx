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
import PhoneVerification from "@/components/PhoneVerification";

interface EnhancedFormProps {
  isPopup?: boolean;
  onClose?: () => void;
  onlyPhone?: boolean;
}

export default function EnhancedForm({
  isPopup = false,
  onClose,
  onlyPhone = false,
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
    ? "w-full max-w-md shadow-2xl rounded-2xl text-black dark:text-white border border-gray-200 dark:border-gray-800"
    : "shadow-2xl rounded-2xl text-black dark:text-white";

  return (
    <Card className={cardClass}>
      <CardContent className="px-6 py-12 min-h-[440px] flex flex-col justify-center h-full">
        <h3 className="text-xl font-bold">Book a Live Webinar, For Free!</h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {onlyPhone ? (
            <>
              {/* Phone Only */}
              <PhoneVerification
                onVerificationComplete={(phone) =>
                  setFormData((prev) => ({ ...prev, phone }))
                }
              />
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                disabled={submitLead.isPending}
              >
                {submitLead.isPending ? "BOOKING..." : "BOOK FREE LIVE CLASS"}
              </Button>
            </>
          ) : (
            <>
              {/* Topic of Interest */}
              <div className="space-y-2">
                <Label className="block text-left">
                  Your Topic of Interest*
                </Label>
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
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="aiml">AI/ML</SelectItem>
                    <SelectItem value="manual-testing">
                      Manual Testing
                    </SelectItem>
                    <SelectItem value="automation-testing">
                      Automation Testing
                    </SelectItem>
                    <SelectItem value="java-full-stack">
                      Java Full Stack
                    </SelectItem>
                    <SelectItem value="php-full-stack">
                      PHP Full Stack
                    </SelectItem>
                    <SelectItem value="frontend-development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="backend-development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="mern-stack">MERN Stack</SelectItem>
                    <SelectItem value="business-analyst">
                      Business Analyst
                    </SelectItem>
                    <SelectItem value="medical-billing">
                      Medical Billing
                    </SelectItem>
                    <SelectItem value="us-it-staffing">
                      US IT Staffing
                    </SelectItem>
                    <SelectItem value="us-healthcare">US Healthcare</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="block text-left">
                  Name*
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-12 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="block text-left">
                  Email*
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="h-12 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg"
                  required
                />
              </div>

              {/* Phone */}
              <PhoneVerification
                onVerificationComplete={(phone) =>
                  setFormData((prev) => ({ ...prev, phone }))
                }
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                disabled={submitLead.isPending}
              >
                {submitLead.isPending ? "BOOKING..." : "BOOK FREE LIVE CLASS"}
              </Button>
            </>
          )}

          {/* Info and Terms (show only if not onlyPhone) */}
          {!onlyPhone && (
            <>
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
            </>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
