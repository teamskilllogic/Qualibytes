import React from "react";

const AutomationTesting = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">12-Week Automation Testing Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This course provides a comprehensive understanding of Automation Testing, focusing on Selenium,
            Java, TestNG, frameworks, API testing, and CI/CD integration with tools like Maven, Jenkins, and Git.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Week 1: Java Fundamentals", points: ["OOP concepts", "Java syntax & IDE setup"] },
            { title: "Week 2: Java Collections & File Handling", points: ["List, Map, Set usage", "File I/O basics"] },
            { title: "Week 3: Selenium Basics", points: ["Selenium WebDriver intro", "Browser commands & locators"] },
            { title: "Week 4: WebElement Handling", points: ["Checkbox, Dropdown, Alert handling", "XPath & CSS"] },
            { title: "Week 5: TestNG Framework", points: ["Annotations, assertions", "Test suites & parallel tests"] },
            { title: "Week 6: Data-Driven Testing", points: ["Excel integration", "Parameterization"] },
            { title: "Week 7: Page Object Model (POM)", points: ["Reusable components", "POM design pattern"] },
            { title: "Week 8: Framework Development", points: ["Creating modular frameworks", "Logging & reporting"] },
            { title: "Week 9: Maven, Jenkins, Git", points: ["CI setup with Jenkins", "Version control with Git"] },
            { title: "Week 10: API Testing with Postman", points: ["GET/POST methods", "Auth & environment setup"] },
            { title: "Week 11: Real-Time Project", points: ["End-to-end test scenario", "Bug tracking & reporting"] },
            { title: "Week 12: Interview Prep & Resume", points: ["Mock interviews", "Resume & GitHub setup"] },
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

export default AutomationTesting;