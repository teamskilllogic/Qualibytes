"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "IT", value: 40, color: "#3B82F6" },
  { name: "Banking", value: 25, color: "#8B5CF6" },
  { name: "EdTech", value: 20, color: "#F59E0B" },
  { name: "E-Commerce", value: 15, color: "#10B981" }
];

export default function IndustriesPieSection() {
  return (
    <section className="py-20 w-full bg-background dark:bg-background text-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Industries That Trust Our Talent
          </h2>
          <p className="text-muted-foreground">
            Powered by real career transitions from our alumni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
          {/* 📊 Chart + Info */}
          <div className="flex flex-col justify-between bg-muted rounded-xl p-6 shadow-md h-full">
            {/* Chart */}
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="50%"
                    outerRadius="80%"
                    paddingAngle={2}
                    cornerRadius={6}
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Info below chart */}
            <div className="mt-6 text-sm text-muted-foreground text-center">
              <p className="mb-2">
                <strong>Insights:</strong> This data is derived from over 12,000 real career transitions by our alumni across various industries.
              </p>
              <p>
                Join our programs to explore job-ready skills and enter high-growth sectors like IT, Banking, and EdTech.
              </p>
            </div>
          </div>

          {/* 🖼️ Image */}
          <div className="w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=1000&q=80"
              alt="Industry insight"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
