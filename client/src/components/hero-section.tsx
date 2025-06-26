import EnhancedForm from "./enhanced-form";
import type { StatisticItem } from "@/lib/types";

const statistics: StatisticItem[] = [
  { value: "1200+", label: "Placement Partners" },
  { value: "15K+", label: "Careers Transformed" },
  { value: "100+", label: "Capstone Projects" }
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black dark:bg-gradient-to-br dark:from-gray-900 dark:to-black light:bg-gradient-to-br light:from-orange-50 light:to-orange-100 text-white dark:text-white light:text-gray-900 py-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become the Top 1% in Tech
            </h1>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Video Placeholder */}
            <div className="bg-black/20 rounded-xl aspect-video mb-8 flex items-center justify-center border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm opacity-80">Watch Success Stories</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Registration Form */}
          <div className="flex justify-center">
            <EnhancedForm />
          </div>
        </div>
      </div>
    </section>
  );
}