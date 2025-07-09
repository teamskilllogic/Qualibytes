import React from "react";

const USHealthcareStaffing = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">7-Day U.S. Healthcare Staffing Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This 7-day crash course prepares individuals for a career in U.S. healthcare recruitment and staffing.
            Learn sourcing techniques, healthcare job roles, recruitment lifecycle, and key compliance requirements
            used in staffing hospitals, clinics, and remote healthcare teams in the U.S.
          </p>
        </section>

        {/* Daily Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Day 1: U.S. Healthcare Staffing Overview", points: ["Healthcare job roles: RN, CNA, LPN", "Staffing agency roles"] },
            { title: "Day 2: Recruitment Lifecycle", points: ["Job intake, sourcing to onboarding", "Screening techniques"] },
            { title: "Day 3: Sourcing & Job Portals", points: ["Boolean search", "Using portals like Dice, Monster"] },
            { title: "Day 4: Communication Skills", points: ["Cold calling & email format", "Interview scheduling"] },
            { title: "Day 5: Documentation & ATS", points: ["Intro to ATS", "Tracking candidates"] },
            { title: "Day 6: Compliance Essentials", points: ["HIPAA basics", "Credentialing & background checks"] },
            { title: "Day 7: Mock Calls & Interview Prep", points: ["Live mock scenarios", "FAQs and resume tips"] },
          ].map((day, index) => (
            <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{day.title}</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {day.points.map((pt, i) => (
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

export default USHealthcareStaffing;