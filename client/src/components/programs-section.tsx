import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Program } from "@shared/schema";

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState<"online" | "on-campus">("online");

  const { data: programs, isLoading } = useQuery<Program[]>({
    queryKey: ["/api/programs"],
  });

  const filteredPrograms = programs?.filter(program => 
    activeTab === "online" ? program.type === "online" : program.type === "on-campus"
  ) || [];

  const displayedPrograms = filteredPrograms.slice(0, 6);

  if (isLoading) {
    return (
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR COURSES</h2>
            <h3 className="text-xl text-gray-600">Programs To Help You Upskill</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-32 mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex space-x-3">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR COURSES</h2>
          <h3 className="text-xl text-gray-600">Programs To Help You Upskill</h3>
        </div>
        
        {/* Program Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg shadow-sm">
            <Button
              variant={activeTab === "online" ? "default" : "ghost"}
              className={`px-6 py-2 font-medium ${
                activeTab === "online" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => setActiveTab("online")}
            >
              Online Programs
            </Button>
            <Button
              variant={activeTab === "on-campus" ? "default" : "ghost"}
              className={`px-6 py-2 font-medium ${
                activeTab === "on-campus" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => setActiveTab("on-campus")}
            >
              On-Campus Programs
            </Button>
          </div>
        </div>
        
        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPrograms.map((program) => (
            <Card key={program.id} className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={program.imageUrl || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"} 
                alt={`Students learning ${program.title}`}
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="bg-success text-white">
                    {program.certification}
                  </Badge>
                  {program.isNew && (
                    <Badge variant="secondary" className="bg-accent text-black ml-2">
                      NEW
                    </Badge>
                  )}
                </div>
                
                <h4 className="text-xl font-semibold mb-2">{program.title}</h4>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>Min. work exp: {program.minExperience}</p>
                  <p>Duration: {program.duration}</p>
                  {program.features && program.features.length > 0 && (
                    <p>{program.features[0]}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <Badge 
                    variant="outline" 
                    className={`text-xs px-2 py-1 ${
                      program.type === "online" 
                        ? "bg-blue-50 text-primary border-primary" 
                        : "bg-green-50 text-success border-success"
                    }`}
                  >
                    {program.type === "online" ? "ONLINE PROGRAM" : "ON-CAMPUS PROGRAM"}
                  </Badge>
                </div>
                
                <div className="flex space-x-3">
                  <Button className="bg-primary text-white flex-1 hover:bg-blue-700">
                    GO TO PROGRAM
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    BROCHURE
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="ghost" className="text-primary hover:text-blue-700 font-semibold">
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
