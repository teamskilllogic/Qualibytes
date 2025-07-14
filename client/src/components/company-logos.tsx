import type { CompanyLogo } from "@/lib/types";

const companies: CompanyLogo[] = [
  { name: "Infosys", logoUrl: "https://i.postimg.cc/90t1Fhmc/infosys.png" },
  { name: "Wipro", logoUrl: "https://i.postimg.cc/sg1PbShj/wipro.png" },
  { name: "HCL", logoUrl: "https://i.postimg.cc/Pf4mxKbf/hcl.png" },
  { name: "Tech Mahindra", logoUrl: "https://i.postimg.cc/qvCh8GK3/Chat-GPT-Image-Jun-12-2025-01-19-45-AM.png" },
  { name: "LTI", logoUrl: "https://i.postimg.cc/NGSQ1vkd/lti.png" },
  { name: "Capgemini", logoUrl: "https://i.postimg.cc/fb8NyGbj/Chat-GPT-Image-Jun-12-2025-01-27-14-AM.png" },
  { name: "Mindtree", logoUrl: "https://i.postimg.cc/NGk1rkXM/mindtree.png" },
  { name: "Cognizant", logoUrl: "https://i.postimg.cc/90g0Y0Vx/cognizant.png" },
  { name: "Zoho", logoUrl: "https://i.postimg.cc/DzhvsLLv/zoho.png" },
  { name: "Freshworks", logoUrl: "https://i.postimg.cc/hP7c5p04/freshworks.png" },
  { name: "Flipkart", logoUrl: "https://i.postimg.cc/qBNNpcGS/flipkart.png" }
];

export default function CompanyLogos() {
  const repeated = [...companies, ...companies];

  return (
    <section className="py-16 bg-background dark:bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Alumni Work At</h2>

        {/* ✅ Top Row - LTR */}
        <div className="marquee overflow-hidden">
          <div className="marquee-content animate-marquee flex gap-16">
            {repeated.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-20 min-w-[160px]">
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Bottom Row - RTL */}
        <div className="marquee mt-8 overflow-hidden">
          <div className="marquee-content animate-marquee-reverse flex gap-16">
            {repeated.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-20 min-w-[160px]">
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
