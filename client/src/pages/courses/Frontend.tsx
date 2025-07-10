import React from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FrontendDevelopment = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navigation onRequestCall={() => {}} />
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* Banner */}
        <div
          className="w-full h-[325px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1900x325")',
          }}
        >
          <div className="h-full w-full flex items-center justify-center bg-black/50">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              8-Week Frontend Development Course
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
          {/* About the Course */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
            <p className="text-gray-800 dark:text-gray-300">
              This 8-week Frontend Development course provides the essential
              skills needed to design and develop responsive, interactive user
              interfaces. Learn HTML, CSS, JavaScript, and React to become
              job-ready for frontend roles.
            </p>
          </section>

          {/* Weekly Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Week 1: HTML & CSS Fundamentals",
                points: [
                  "HTML5 semantic structure",
                  "CSS styling techniques",
                  "Box model & Flexbox",
                ],
              },
              {
                title: "Week 2: Advanced CSS & Responsive Design",
                points: ["Media queries", "Grid layout", "CSS animations"],
              },
              {
                title: "Week 3: JavaScript Basics",
                points: [
                  "Variables, functions, loops",
                  "DOM manipulation",
                  "Event handling",
                ],
              },
              {
                title: "Week 4: JavaScript Advanced",
                points: ["ES6 features", "APIs and Fetch", "Form validation"],
              },
              {
                title: "Week 5: React Introduction",
                points: ["JSX, components", "Props and state", "React hooks"],
              },
              {
                title: "Week 6: React Router & Forms",
                points: [
                  "Routing with React Router",
                  "Handling forms",
                  "Controlled components",
                ],
              },
              {
                title: "Week 7: Project Work",
                points: [
                  "Build a responsive web app",
                  "Use public APIs",
                  "Deploy on GitHub Pages",
                ],
              },
              {
                title: "Week 8: Interview Prep & Portfolio",
                points: [
                  "Mock interviews",
                  "GitHub project showcase",
                  "Resume support",
                ],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm space-y-1">
                  {week.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 pt-10">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => setShowForm(true)}
            >
              Apply now
            </Button>
            <Button
              variant="default"
              className="bg-primary text-white hover:bg-primary/90"
              asChild
            >
              <a href="#">Broucher</a>
            </Button>
          </div>
          <FormModal open={showForm} onOpenChange={setShowForm} />
        </div>
      </div>
    </>
  );
};

export default FrontendDevelopment;
