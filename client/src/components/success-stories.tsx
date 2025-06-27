import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { SuccessStory } from "@shared/schema";

export default function SuccessStories() {
  const { data: stories, isLoading } = useQuery<SuccessStory[]>({
    queryKey: ["/api/success-stories"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-muted dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">SHAPING SUCCESS STORIES SINCE 2019</h2>
            <h3 className="text-xl text-muted-foreground">Your Journey, Our Mission</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Skeleton className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const displayedStories = stories?.slice(0, 6) || [];

  return (
    <section className="py-16 bg-muted dark:bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">SHAPING SUCCESS STORIES SINCE 2019</h2>
          <h3 className="text-xl text-muted-foreground">Your Journey, Our Mission</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStories.map((story) => (
            <Card key={story.id} className="bg-black dark:bg-black light:bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.imageUrl || "https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"} 
                    alt={`${story.name}, successful tech professional`}
                    className="w-16 h-16 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <h4 className="font-semibold text-white dark:text-white light:text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">{story.currentPosition} @ {story.currentCompany}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 mb-1">Pre Qualibytes</p>
                    <p className="font-medium text-white dark:text-white light:text-gray-900">{story.previousCompany}</p>
                  </div>
                  
                  <div className="text-center">
                    <Badge className="bg-success text-white px-3 py-1 text-sm font-semibold inline-flex items-center">
                      Salary Hike {story.salaryHike}% <ArrowRight className="ml-2 h-4 w-4" />
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 mb-1">Post Qualibytes</p>
                    <p className="font-medium text-white dark:text-white light:text-gray-900">{story.currentCompany}</p>
                  </div>
                  
                  {story.profileUrl && (
                    <a 
                      href={story.profileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center"
                    >
                      VIEW PROFILE <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700">
            VIEW MORE SUCCESS STORIES
          </Button>
        </div>
      </div>
    </section>
  );
}
