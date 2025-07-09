import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Dummy data for degree programs
const degreePrograms = [
  {
    name: "BBA",
    icon: "🎓",
    description: "Bachelor of Business Administration – Build a strong foundation in business management and leadership.",
  },
  {
    name: "MBA",
    icon: "💼",
    description: "Master of Business Administration – Advance your career with strategic and analytical skills.",
  },
  {
    name: "B.Tech",
    icon: "🛠️",
    description: "Bachelor of Technology – Gain hands-on experience in engineering and technology.",
  },
  {
    name: "M.Tech",
    icon: "🔬",
    description: "Master of Technology – Specialize in advanced engineering fields and research.",
  },
  {
    name: "MCA",
    icon: "💻",
    description: "Master of Computer Applications – Become an expert in software development and IT.",
  },
];

const benefits = [
  {
    icon: "⏰",
    title: "Flexible Schedule",
    description: "Learn at your own pace, anytime and anywhere."
  },
  {
    icon: "🏅",
    title: "Accredited Programs",
    description: "Earn a degree from recognized and accredited institutions."
  },
  {
    icon: "📚",
    title: "Industry-Ready Curriculum",
    description: "Courses designed with input from industry experts."
  },
  {
    icon: "🌐",
    title: "Global Networking",
    description: "Connect with peers and professionals worldwide."
  },
];

const steps = [
  {
    icon: "📝",
    title: "Apply Online",
    description: "Fill out a simple online application form."
  },
  {
    icon: "📄",
    title: "Submit Documents",
    description: "Upload your academic and personal documents securely."
  },
  {
    icon: "💬",
    title: "Get Guidance",
    description: "Speak with our academic advisors for personalized support."
  },
  {
    icon: "🎉",
    title: "Start Learning",
    description: "Begin your degree journey with flexible online classes."
  },
];

export default function OnlineDegreePrograms() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100">
      <Navigation onRequestCall={() => {}} />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-black dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-white tracking-tight">Earn Your Degree Online</h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8">Flexible, accredited, and industry-ready programs designed for your success. Study from anywhere and advance your career with our online degrees.</p>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle banner effect */}
          <svg className="w-full h-full opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Degree Programs Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Our Online Degree Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {degreePrograms.map((program) => (
            <div key={program.name} className="bg-white/90 dark:bg-gray-900/80 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 border border-gray-200 dark:border-gray-800">
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{program.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{program.description}</p>
              <button className="mt-auto px-6 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold transition-colors duration-200 hover:bg-gray-700 hover:dark:bg-gray-200">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-200 via-gray-100 to-white dark:from-gray-950 dark:via-gray-900 dark:to-black">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Why Choose Our Online Degrees?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-white/90 dark:bg-gray-900/80 rounded-lg shadow transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 border border-gray-200 dark:border-gray-800">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">{benefit.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center text-center p-6 bg-white/90 dark:bg-gray-900/80 rounded-lg shadow transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 border border-gray-200 dark:border-gray-800">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">Step {idx + 1}: {step.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-black dark:via-gray-900 dark:to-gray-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white dark:text-white">Ready to Take the Next Step?</h2>
        <p className="text-lg text-gray-200 dark:text-gray-300 mb-8">Apply now or request more information to start your online degree journey.</p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <input type="text" placeholder="Your Name" className="flex-1 px-4 py-3 rounded-lg bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-300 transition" />
          <input type="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded-lg bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:focus:ring-gray-300 transition" />
          <button type="submit" className="px-8 py-3 rounded-lg bg-white text-gray-900 font-semibold border-2 border-gray-900 dark:bg-gray-900 dark:text-white dark:border-white transition-colors duration-200 hover:bg-gray-200 hover:dark:bg-gray-800">Apply Now</button>
        </form>
      </section>
      <Footer />
    </div>
  );
} 