import React from "react";

const BusinessAnalyst = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">10-Week Business Analyst Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This Business Analyst course is ideal for beginners aiming to enter the BA field with 5–7 hours/week of study.
            Learn the fundamentals of business analysis, requirement gathering, documentation, tools like JIRA, SQL,
            and real-world case studies.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Week 1: Introduction to Business Analysis", points: ["What is Business Analysis", "BA roles and skills"] },
            { title: "Week 2: SDLC & Agile Methodologies", points: ["Waterfall vs Agile", "Scrum basics", "BA in Agile"] },
            { title: "Week 3: Requirement Elicitation", points: ["Interviews, workshops", "Observation techniques"] },
            { title: "Week 4: Requirement Documentation", points: ["BRD, FRD, SRS", "Use cases, user stories"] },
            { title: "Week 5: Process Modeling & Diagrams", points: ["Flowcharts", "UML, BPMN basics"] },
            { title: "Week 6: Tools - JIRA, Confluence", points: ["User story creation", "Sprint management"] },
            { title: "Week 7: Data Analysis & SQL", points: ["Basic queries", "Joins, filtering", "BA with data"] },
            { title: "Week 8: Stakeholder Management", points: ["Stakeholder matrix", "Communication plan"] },
            { title: "Week 9: Project Case Study", points: ["Requirement lifecycle", "Live documentation walkthrough"] },
            { title: "Week 10: Resume & Interview Preparation", points: ["Mock interviews", "BA interview questions", "Portfolio setup"] },
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

export default BusinessAnalyst;
