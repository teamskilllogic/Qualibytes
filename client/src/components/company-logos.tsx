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
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Alumni Work At</h2>
        
        {/* Technology companies logos showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="bg-gray-100 h-16 rounded flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="text-gray-500 font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
