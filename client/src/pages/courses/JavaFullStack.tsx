import React from "react";

const JavaFullStack = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">12-Week Java Full Stack Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This Java Full Stack Development course equips you with the complete skill set to build dynamic web applications.
            Learn everything from front-end technologies to back-end development using Java, Spring Boot, REST APIs, and databases.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Week 1: HTML, CSS & Git", points: ["HTML5 structure", "CSS basics", "Git & GitHub intro"] },
            { title: "Week 2: JavaScript Essentials", points: ["DOM manipulation", "Functions, Arrays", "ES6 features"] },
            { title: "Week 3: React Basics", points: ["JSX, components", "Props and state", "React hooks"] },
            { title: "Week 4: Advanced React", points: ["Routing", "Forms & validation", "Context API"] },
            { title: "Week 5: Java Core", points: ["OOP in Java", "Exception handling", "Collections"] },
            { title: "Week 6: JDBC & MySQL", points: ["JDBC API", "CRUD with MySQL", "Database normalization"] },
            { title: "Week 7: Spring Boot Intro", points: ["Project setup", "REST API creation", "Annotations"] },
            { title: "Week 8: Spring Boot Deep Dive", points: ["Dependency injection", "Exception handling", "Validation"] },
            { title: "Week 9: Security & JWT", points: ["Spring Security", "JWT token implementation"] },
            { title: "Week 10: Full Stack Integration", points: ["React + Spring Boot integration", "Axios & CORS setup"] },
            { title: "Week 11: Capstone Project", points: ["Plan & build real-world app", "Frontend-backend communication"] },
            { title: "Week 12: Interview & Resume Prep", points: ["Mock interviews", "Resume building", "GitHub portfolio"] },
          ].map((week, index) => (
            <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{week.title}</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {week.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* CTA Button */}
        <div className="text-center pt-10">
          <a href="tel:+918377032324" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JavaFullStack;