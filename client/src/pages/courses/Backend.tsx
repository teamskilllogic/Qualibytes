import React from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BackendDevelopment = () => {
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
              8-Week Backend Development Course
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
          {/* About the Course */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
            <p className="text-foreground text-xl text-center mt-8 mb-12">
              This 8-week Backend Development course equips you with the skills
              to build scalable server-side applications. You'll learn Node.js,
              Express.js, RESTful APIs, authentication, and database integration
              using MongoDB and MySQL.
            </p>
          </section>

          {/* Weekly Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Week 1: Node.js Basics",
                points: [
                  "Intro to Node.js",
                  "NPM modules",
                  "File system & events",
                ],
              },
              {
                title: "Week 2: Express.js & Routing",
                points: [
                  "Creating Express server",
                  "RESTful routes",
                  "Middleware usage",
                ],
              },
              {
                title: "Week 3: MongoDB Integration",
                points: ["CRUD with MongoDB", "Mongoose ODM", "Schema design"],
              },
              {
                title: "Week 4: MySQL & Sequelize",
                points: [
                  "Database setup",
                  "ORM with Sequelize",
                  "Joins and associations",
                ],
              },
              {
                title: "Week 5: Authentication & Security",
                points: [
                  "JWT token auth",
                  "Password hashing",
                  "CORS and security headers",
                ],
              },
              {
                title: "Week 6: API Testing & Validation",
                points: ["Postman usage", "Joi validation", "Error handling"],
              },
              {
                title: "Week 7: Deployment & CI/CD",
                points: [
                  "Environment variables",
                  "Deploy with Render/Heroku",
                  "Intro to CI/CD",
                ],
              },
              {
                title: "Week 8: Final Project & Interview Prep",
                points: [
                  "Build & deploy backend app",
                  "Mock interviews",
                  "Resume building",
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

export default BackendDevelopment;
