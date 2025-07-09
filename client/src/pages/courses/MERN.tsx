import React from "react";

const BackendMERN = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">10-Week MERN Backend Development Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This backend-focused MERN stack course takes you from JavaScript fundamentals to building
            scalable REST APIs with Node.js, Express, and MongoDB. Ideal for learners dedicating 5–7 hours/week.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Week 1: JavaScript Refresher", points: ["Functions, scopes, ES6", "Async/await, promises"] },
            { title: "Week 2: Node.js Fundamentals", points: ["Core modules", "npm & scripts", "File system"] },
            { title: "Week 3: Express.js Basics", points: ["Routing", "Middleware", "Request/response cycle"] },
            { title: "Week 4: MongoDB & Mongoose", points: ["CRUD operations", "Schema & models", "Database design"] },
            { title: "Week 5: Authentication & JWT", points: ["User login/register", "JWT generation & middleware"] },
            { title: "Week 6: REST APIs & Postman", points: ["RESTful principles", "Testing with Postman", "Error handling"] },
            { title: "Week 7: Advanced CRUD & Validation", points: ["Populate, relations", "Validation & sanitization"] },
            { title: "Week 8: File Uploads & Image Handling", points: ["Multer setup", "Cloudinary integration"] },
            { title: "Week 9: Role-Based Access & Deployment", points: ["Admin/user roles", "Deploy with Render/Heroku"] },
            { title: "Week 10: Capstone Project & Interview Prep", points: ["Build & present a RESTful app", "Mock interview + GitHub setup"] },
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

export default BackendMERN;