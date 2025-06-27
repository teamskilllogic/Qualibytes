import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Briefcase } from "lucide-react";

const growthFeatures = [
  {
    icon: TrendingUp,
    title: "Accelerated Learning",
    description: "Learn faster with our proven methodology"
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "Learn from working professionals"
  },
  {
    icon: Briefcase,
    title: "Job Guarantee",
    description: "100% placement assistance"
  }
];

export default function GrowthFormula() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">FORMULA FOR GROWTH</h2>
        <h3 className="text-xl mb-8">Why should you upskill now?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {growthFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        <Button className="bg-accent text-black px-8 py-3 font-semibold hover:bg-amber-600">
          BOOK A CLASS
        </Button>
      </div>
    </section>
  );
}
