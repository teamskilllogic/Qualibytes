import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { TeamMember } from "@shared/schema";

export default function LeadershipTeam() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team/type/leadership"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-black dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              OUR TEAM
            </h2>
            <h3 className="text-xl text-muted-foreground">
              The Leaders Behind Qualibytes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="text-center bg-black dark:bg-black rounded-xl p-6"
              >
                <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-40 mx-auto mb-1" />
                <Skeleton className="h-4 w-32 mx-auto mb-3" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">OUR TEAM</h2>
          <h3 className="text-xl text-muted-foreground">
            The Leaders Behind Qualibytes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div
              key={member.id}
              className="text-center bg-black dark:bg-black rounded-xl p-6"
            >
              <img
                src={
                  member.imageUrl ||
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                }
                alt={`${member.name}, corporate leadership professional`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h4>
              <p className="text-primary font-medium mb-3">{member.position}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
