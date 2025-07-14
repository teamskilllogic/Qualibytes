import EnhancedForm from "./enhanced-form";
import type { StatisticItem } from "@/lib/types";

const statistics: StatisticItem[] = [
  { value: "1400+", label: "Hiring Partners" },
  { value: "12K+", label: "Careers Transformed" },
  { value: "200+", label: "Major Projects" }
];

export default function HeroSection() {
  return (
    <section
      className="py-20 transition-all duration-300 
        bg-[#fdf6ee] text-black 
        dark:bg-gradient-to-br dark:from-gray-900 dark:to-black dark:text-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* 🟡 Left: Image + Stats */}
          <div className="w-full lg:w-3/5 flex flex-col justify-between">
            
            {/* 🖼️ Image */}
            <div className="flex-1">
              <img
                src="https://i.postimg.cc/28z0TGsG/Chat-GPT-Image-Jun-26-2025-07-35-01-PM.png"
                alt="Webinar Promo"
                className="rounded-xl w-full h-full object-cover border border-black/10 dark:border-white/20"
              />
            </div>

            {/* 📊 Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-4 mt-6">
              {statistics.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base opacity-80 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔵 Right: Form with Equal Height */}
          <div className="w-full lg:w-[550px] xl:w-[600px] flex flex-col">
            <div className="flex-1 flex items-stretch">
              <div className="w-full bg-background dark:bg-background shadow-2xl rounded-2xl p-6 lg:p-8 flex flex-col justify-center">
                <EnhancedForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
