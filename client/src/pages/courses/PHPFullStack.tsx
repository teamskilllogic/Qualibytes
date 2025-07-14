import React from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PHPFullStack = () => {
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
              12-Week PHP Full Stack Course
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
          {/* About the Course */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
            <p className="text-foreground text-xl text-center mt-8 mb-12">
              This PHP Full Stack Development course equips you with the skills
              to build dynamic and responsive web applications. You'll master
              both front-end and back-end development using technologies like
              HTML, CSS, JavaScript, PHP, MySQL, and modern frameworks such as
              Laravel.
            </p>
          </section>

          {/* Weekly Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Week 1: HTML & CSS Basics",
                points: ["HTML5 structure", "CSS styling", "Forms and layout"],
              },
              {
                title: "Week 2: JavaScript Essentials",
                points: [
                  "Variables, loops",
                  "DOM manipulation",
                  "Event handling",
                ],
              },
              {
                title: "Week 3: Advanced JavaScript & jQuery",
                points: [
                  "Functions & arrays",
                  "jQuery basics",
                  "AJAX requests",
                ],
              },
              {
                title: "Week 4: PHP Basics",
                points: [
                  "Syntax, variables",
                  "Conditional statements",
                  "Loops",
                ],
              },
              {
                title: "Week 5: PHP Functions & Forms",
                points: ["GET & POST", "Form validation", "Sessions & cookies"],
              },
              {
                title: "Week 6: Working with MySQL",
                points: [
                  "Database design",
                  "CRUD operations",
                  "MySQL with PHP",
                ],
              },
              {
                title: "Week 7: Authentication System",
                points: [
                  "User login & registration",
                  "Password hashing",
                  "Session management",
                ],
              },
              {
                title: "Week 8: Laravel Framework Basics",
                points: ["Routing", "Blade templates", "MVC architecture"],
              },
              {
                title: "Week 9: Laravel CRUD & Forms",
                points: ["Laravel controllers", "Form handling", "Validation"],
              },
              {
                title: "Week 10: REST API with Laravel",
                points: ["API routes", "Postman testing", "API security"],
              },
              {
                title: "Week 11: Project Work",
                points: ["E-commerce or Blog app", "Admin panel & user roles"],
              },
              {
                title: "Week 12: Job Preparation",
                points: [
                  "Interview questions",
                  "Resume building",
                  "GitHub deployment",
                ],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground transition-all duration-300 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
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

export default PHPFullStack;
