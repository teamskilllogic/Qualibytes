import type { CompanyLogo } from "@/lib/types";

const companies: CompanyLogo[] = [
  { name: "Google", logoUrl: "" },
  { name: "Microsoft", logoUrl: "" },
  { name: "Amazon", logoUrl: "" },
  { name: "Netflix", logoUrl: "" },
  { name: "Uber", logoUrl: "" },
  { name: "PayPal", logoUrl: "" },
  { name: "Meta", logoUrl: "" },
  { name: "Apple", logoUrl: "" },
  { name: "Spotify", logoUrl: "" },
  { name: "Adobe", logoUrl: "" },
  { name: "Salesforce", logoUrl: "" },
  { name: "Tesla", logoUrl: "" }
];

export default function CompanyLogos() {
  const doubledCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Alumni Work At</h2>
        
        {/* Two rows of company logos moving in opposite directions */}
        <div className="space-y-8">
          {/* First row - moving right */}
          <div className="marquee">
            <div className="marquee-content flex items-center space-x-12">
              {companies.slice(0, 6).concat(companies.slice(0, 6)).map((company, index) => (
                <div key={index} className="bg-muted h-16 px-8 rounded flex items-center justify-center hover:bg-muted/80 transition-colors whitespace-nowrap flex-shrink-0">
                  <span className="text-muted-foreground font-semibold">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row - moving left */}
          <div className="marquee-reverse">
            <div className="marquee-content-reverse flex items-center space-x-12">
              {companies.slice(6).concat(companies.slice(6)).map((company, index) => (
                <div key={index} className="bg-muted h-16 px-8 rounded flex items-center justify-center hover:bg-muted/80 transition-colors whitespace-nowrap flex-shrink-0">
                  <span className="text-muted-foreground font-semibold">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
