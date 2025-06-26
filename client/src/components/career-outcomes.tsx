import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CareerTransition } from "@/lib/types";

const careerTransitions: CareerTransition[] = [
  { sector: "Technology Solutions", percentage: 14.1, color: "bg-blue-100 text-blue-800" },
  { sector: "Financial Technology", percentage: 13.9, color: "bg-purple-100 text-purple-800" },
  { sector: "E-com & Retail", percentage: 13.7, color: "bg-green-100 text-green-800" },
  { sector: "Consumer Technology", percentage: 8.2, color: "bg-amber-100 text-amber-800" }
];

export default function CareerOutcomes() {
  return (
    <section className="py-16 bg-muted dark:bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">LEARNER OUTCOMES</h2>
          <h3 className="text-xl text-muted-foreground">See How Far You Could Go</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-semibold mb-6">Qualibytes Historical Career Transition Report</h4>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {careerTransitions.map((transition, index) => (
                    <div key={index} className={`flex justify-between items-center p-3 rounded ${transition.color}`}>
                      <span>{transition.sector}</span>
                      <span className="font-semibold">{transition.percentage}%</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">B2K Analytics - Academy (2023-24)</p>
              </CardContent>
            </Card>
            <Button className="mt-4 bg-primary text-white hover:bg-blue-700">
              DOWNLOAD
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              Disclaimer: Past outcomes are not indicative of future placements for subsequent cohorts.
            </p>
          </div>
          
          {/* Tech education students studying together */}
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Tech education students collaborating in modern learning environment" 
              className="rounded-xl shadow-lg w-full object-cover h-96" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
