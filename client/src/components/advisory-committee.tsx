import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { TeamMember } from "@shared/schema";

export default function AdvisoryCommittee() {
  const { data: advisors, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team/type/advisory"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-muted dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ADVISORY COMMITTEE
            </h2>
            <h3 className="text-xl text-muted-foreground">
              We're Guided by Top Leaders
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-1" />
                  <Skeleton className="h-4 w-24 mx-auto mb-3" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-8 w-16 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted dark:bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ADVISORY COMMITTEE
          </h2>
          <h3 className="text-xl text-muted-foreground">
            We're Guided by Top Leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisors?.map((advisor) => (
            <Card
              key={advisor.id}
              className="bg-white dark:bg-black shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={
                    advisor.imageUrl ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                  }
                  alt={`${advisor.name}, corporate advisory professional`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {advisor.name}
                </h4>
                <p className="text-primary font-medium mb-3">
                  {advisor.position}
                </p>
                <p className="text-sm text-gray-600 mb-4">{advisor.bio}</p>
                <div className="bg-gray-100 w-16 h-8 rounded mx-auto flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">
                    {advisor.position.split(" ").pop()?.toUpperCase()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
