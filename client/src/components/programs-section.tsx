import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Network, BrainCog, FlaskConical, Code, ActivitySquare, BarChart4, Stethoscope } from "lucide-react";

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

export default function ProgramsSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 5 },
    drag: true,
    mode: "free-snap",
    breakpoints: {
      "(max-width: 900px)": {
        slides: { perView: 1.2, spacing: 12 },
      },
      "(max-width: 1200px)": {
        slides: { perView: 2, spacing: 16 },
      },
    },
    created(s) {
      setTimeout(() => {
        s.moveToIdx(4, true)
      }, 100)
    },
  })

  // Autoplay for keen-slider/react
  const timer = useRef<NodeJS.Timeout>()
  const mouseOver = useRef(false)
  useEffect(() => {
    function clearNextTimeout() {
      timer.current && clearTimeout(timer.current)
    }
    function nextTimeout() {
      clearNextTimeout()
      if (mouseOver.current) return
      timer.current = setTimeout(() => {
        instanceRef.current?.next()
      }, 1000)
    }
    if (instanceRef.current) {
      instanceRef.current.on("created", nextTimeout)
      instanceRef.current.on("dragStarted", clearNextTimeout)
      instanceRef.current.on("animationEnded", nextTimeout)
      instanceRef.current.on("updated", nextTimeout)
    }
    return clearNextTimeout
  }, [instanceRef])
  
  return (
    <section className="py-16 bg-background text-foreground w-full dark:bg-background dark:text-foreground">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Programs</h2>
          <h3 className="text-2xl font-light">Programs To Help You Upskill</h3>
        </div>
        <div className="relative overflow-x-auto scrollbar-hide">
          <div
            ref={sliderRef}
            className="keen-slider touch-action-pan-x"
            onMouseEnter={() => { mouseOver.current = true; timer.current && clearTimeout(timer.current) }}
            onMouseLeave={() => { mouseOver.current = false; timer.current && clearTimeout(timer.current); timer.current = setTimeout(() => { instanceRef.current?.next() }, 1000) }}
          >
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="keen-slider__slide flex flex-col min-w-[220px] max-w-xs bg-white dark:bg-[#191c24] border border-gray-200 dark:border-[#23272f] rounded-none overflow-hidden shadow-lg text-gray-900 dark:text-white"
              >
                <div className="bg-gray-100 dark:bg-[#23272f] flex items-center justify-center h-40">
                  <img src={program.image} alt={program.name} className="h-24 object-contain" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block bg-gray-200 dark:bg-gray-800 text-xs px-3 py-1 rounded-full mb-3 font-semibold tracking-wide text-gray-700 dark:text-white">
                    ONLINE PROGRAM
                  </span>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{program.name}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-sm">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.tags.map((tag, i) => (
                      <span key={i} className="border border-gray-300 dark:border-[#2d3748] bg-gray-100 dark:bg-[#23272f] text-xs px-3 py-1 rounded-full text-blue-700 dark:text-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Button className="w-full bg-blue-600 text-white font-semibold rounded-lg py-2 hover:bg-blue-700 mb-2 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">GO TO PROGRAM</Button>
                    <Button className="w-full bg-white text-blue-600 font-semibold rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-blue-50 border border-blue-600 dark:bg-[#23272f] dark:text-blue-300 dark:border-blue-300 dark:hover:bg-[#191c24]">
                      BROCHURE
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 13l-5 5m0 0l-5-5m5 5V6' /></svg>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Arrow buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black"
            onClick={() => instanceRef.current?.next()}
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
