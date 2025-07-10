import React from "react";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MedicalBilling = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {/* Banner */}
      <div
        className="w-full h-[325px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1900x325")',
        }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            4-Week Medical Billing Course
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-300">
            This 4-week Medical Billing course introduces students to U.S.
            healthcare billing processes, including CPT & ICD-10 coding,
            insurance claims handling, revenue cycle management, and key tools
            used in the industry.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Week 1: Healthcare Billing Basics",
              points: [
                "Introduction to U.S. Healthcare",
                "Medical billing workflow",
                "HIPAA compliance",
              ],
            },
            {
              title: "Week 2: Coding Systems",
              points: [
                "CPT, ICD-10, HCPCS overview",
                "Diagnosis & procedure coding",
                "Code sets and modifiers",
              ],
            },
            {
              title: "Week 3: Claims Process & Insurance",
              points: [
                "Patient eligibility & benefits",
                "Claim lifecycle",
                "Denials and re-submission",
              ],
            },
            {
              title: "Week 4: Tools, RCM & Interview Prep",
              points: [
                "EHR & billing software",
                "Revenue Cycle Management",
                "Mock calls & resume guidance",
              ],
            },
          ].map((week, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{week.title}</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
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
            <a href="#">View Program</a>
          </Button>
        </div>
        <FormModal open={showForm} onOpenChange={setShowForm} />
      </div>
    </>
  );
};

export default MedicalBilling;
