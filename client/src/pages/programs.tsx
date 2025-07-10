import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import {
  BrainCog,
  Code,
  Network,
  FlaskConical,
  ActivitySquare,
  Stethoscope,
  BarChart4,
} from "lucide-react";
import EnhancedForm from "@/components/enhanced-form";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const programs = [
  {
    name: "DevOps",
    path: "devops",
    icon: <Network className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/t42X4yHD/Devops.png",
    description:
      "Master CI/CD, Docker, Kubernetes, AWS, and automation in this hands-on DevOps training program.",
    tags: ["Self-paced", "Real Projects", "Lifetime Access"],
  },
  {
    name: "AI/ML",
    path: "aiml",
    icon: <BrainCog className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/KvGwvTvS/AIML.png",
    description:
      "Build Machine Learning models and deploy AI systems using Python, TensorFlow, and PyTorch.",
    tags: ["Python", "TensorFlow", "Project Based"],
  },
  {
    name: "Manual Testing",
    path: "manual-testing",
    icon: <FlaskConical className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/t4j3HK3B/Manual-Testing.png",
    description:
      "Understand software testing fundamentals, techniques, test cases, and bug reporting tools.",
    tags: ["Bug Reports", "Test Cases", "Foundational"],
  },
  {
    name: "Automation Testing",
    path: "automation-testing",
    icon: <FlaskConical className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/Jh7jsjdJ/Automation-Testing.png",
    description:
      "Automate web and API tests using Selenium, TestNG, Maven, and real-world projects.",
    tags: ["Selenium", "API Testing", "Tools"],
  },
  {
    name: "Java Full Stack",
    path: "java-fullstack",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/Y9ZFDZ2f/Java-Full-Stack.png",
    description:
      "Learn Java, Spring Boot, REST APIs, and React to build scalable web applications.",
    tags: ["Java", "Spring Boot", "Full Stack"],
  },
  {
    name: "PHP Full Stack",
    path: "php-fullstack",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/xTrHKw49/PHP-Full-Stack.png",
    description:
      "Master PHP, Laravel, MySQL, and frontend skills to build full stack web solutions.",
    tags: ["PHP", "Laravel", "MySQL"],
  },
  {
    name: "Frontend Development",
    path: "frontend",
    icon: <ActivitySquare className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/NjDHv5f0/Frontend-Development.png",
    description:
      "HTML, CSS, JS, React and design systems to build beautiful UIs and SPAs.",
    tags: ["React", "CSS", "UI Design"],
  },
  {
    name: "Backend Development",
    path: "backend",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/9fNwzK95/Backend-Development.png",
    description:
      "Learn Node.js, Express, MongoDB, API development, and backend best practices.",
    tags: ["Node.js", "MongoDB", "APIs"],
  },
  {
    name: "MERN Stack",
    path: "mern",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/fy7b7rVb/MERN-Stack.png",
    description:
      "Full MERN training (MongoDB, Express, React, Node) with hands-on projects.",
    tags: ["MERN", "MongoDB", "React"],
  },
  {
    name: "Business Analyst",
    path: "business-analyst",
    icon: <BarChart4 className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/Mp2DpMSb/Business-Analyst.png",
    description:
      "Master requirement gathering, user stories, BRDs, tools like Jira and client handling.",
    tags: ["Jira", "BRD", "Stakeholder Mgmt"],
  },
  
];

const Programs = () => {
  const [showForm, setShowForm] = useState(false);
  const pairs = [];
  for (let i = 0; i < programs.length; i += 2) {
    pairs.push(programs.slice(i, i + 2));
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white w-full">
      <Navigation onRequestCall={() => {}} />
      {/* Hero Section */}
      <section className="w-full pt-36 pb-12 px-6 text-center relative overflow-hidden mb-12">
        <div className="w-full  sm:px-6 ">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center">
            {/* Left: Heading and Subheading */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center items-center text-center bg-black dark:bg-gray-900 min-h-[320px] rounded-2xl"></div>
            {/* Right: Form */}
            <div className="w-full lg:w-[550px] xl:w-[600px] flex flex-col">
              <div className="flex-1 flex items-stretch">
                <div className="w-full shadow-2xl rounded-2xl p-6 lg:p-8 flex flex-col justify-center bg-white dark:bg-gray-900">
                  {/* Import and use EnhancedForm */}
                  <EnhancedForm onlyPhone={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <div id="programs" className="py-20">
        <div className="flex flex-col gap-20 px-4 lg:px-12">
          {pairs.map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className="flex flex-col lg:flex-row gap-10 w-full"
            >
              {pair.map((program, indexInPair) => {
                const isEven = (pairIndex * 2 + indexInPair) % 2 === 0;
                return (
                  <div
                    key={program.name}
                    className={`flex flex-col lg:flex-row ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    } bg-white/5 backdrop-blur-md border border-white/10 rounded-xl w-full p-6 items-center gap-6`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="max-w-[300px] w-full object-contain rounded-xl shadow-lg"
                      />
                    </div>

                    {/* Description */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-3 mb-3">
                        {program.icon}
                        <h2 className="text-2xl font-semibold">
                          {program.name}
                        </h2>
                      </div>
                      <p className="text-black dark:text-gray-300 mb-4">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-[#e5e7eb] dark:bg-[#1e2228] text-sm px-3 py-1 rounded-full text-black dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition mr-1 mb-2"
                        onClick={() => setShowForm(true)}
                      >
                        Apply Now
                      </Button>
                      <Link
                        to={`/courses/${program.path}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition"
                      >
                        View Program
                      </Link>
                    </div>
                  </div>
                );
              })}
              {pair.length === 1 && <div className="hidden lg:block w-full" />}
            </div>
          ))}
        </div>
      </div>
      <FormModal open={showForm} onOpenChange={setShowForm} />
      <Footer />
    </div>
  );
};

export default Programs;
