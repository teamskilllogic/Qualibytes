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
  {
    name: "Medical Billing",
    path: "medical-billing",
    icon: <Stethoscope className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/QMWK9SJF/Medical-Billing.png",
    description:
      "Train for US AR process, insurance follow-ups, denial handling and revenue cycle.",
    tags: ["AR", "US Insurance", "Denials"],
  },
  {
    name: "US IT Staffing",
    path: "us-it",
    icon: <Network className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/ydydcGg8/US-IT-Staffing.png",
    description:
      "Recruitment life cycle, ATS, sourcing, screening and coordination with clients/vendors.",
    tags: ["ATS", "Recruitment", "Sourcing"],
  },
  {
    name: "US Healthcare",
    path: "us-healthcare",
    icon: <Stethoscope className="h-10 w-10 text-blue-500" />,
    image: "https://i.postimg.cc/fW5yb6QH/US_Healthcare.png",
    description:
      "Learn HIPAA, US healthcare systems, EDI, insurance types, compliance and workflows.",
    tags: ["HIPAA", "EDI", "Compliance"],
  },
];

const Programs = () => {
  const pairs = [];
  for (let i = 0; i < programs.length; i += 2) {
    pairs.push(programs.slice(i, i + 2));
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white w-full">
      <Navigation onRequestCall={() => {}} />
      {/* Hero Section */}
      <section className="w-full bg-gray-100 dark:bg-gray-900 pt-36 pb-12 px-6 text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Master Skills That <span className="text-gradient">Matter</span>
          </h1>
          <p className="text-blue-400 text-lg">Explore Our Programs</p>
        </div>
        <div className="absolute top-[-100px] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[150px] rounded-full z-0" />
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
                      <Link
                        to={`/programs/${program.path}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition"
                      >
                        Learn More
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
      <Footer />
    </div>
  );
};

export default Programs; 