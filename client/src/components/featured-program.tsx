import { Button } from "@/components/ui/button";
import { Users, Brain, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    text: "Expert Instructors from IIT Roorkee & Qualibytes"
  },
  {
    icon: Brain,
    text: "Master LLMs and retrieval systems through hands-on AI development"
  },
  {
    icon: Award,
    text: "Get a certificate from CEC, IIT Roorkee and gain in-demand job market skills"
  }
];

export default function FeaturedProgram() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
            EXCLUSIVE FOR QUALIBYTES LEARNERS
          </div>
          <h2 className="text-3xl font-bold mb-2">Campus IMMERSION at IIT Roorkee</h2>
          <h3 className="text-xl mb-6">NEW SPECIALIZATION PROGRAM</h3>
          <h4 className="text-2xl font-semibold mb-8">Advanced AI Engineering Program In association with CEC, IIT Roorkee</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="mx-auto text-3xl mb-2 h-8 w-8" />
                  <p>{feature.text}</p>
                </div>
              );
            })}
          </div>
          
          <Button className="bg-white text-primary px-8 py-3 font-semibold hover:bg-gray-100">
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </div>
    </section>
  );
}
