import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { CompanyLogo } from "@/lib/types";

const companiesRow1: CompanyLogo[] = [
  { name: "Infosys", logoUrl: "https://i.postimg.cc/90t1Fhmc/infosys.png" },
  { name: "Wipro", logoUrl: "https://i.postimg.cc/sg1PbShj/wipro.png" },
  { name: "HCL", logoUrl: "https://i.postimg.cc/Pf4mxKbf/hcl.png" },
  { name: "Tech Mahindra", logoUrl: "https://i.postimg.cc/qvCh8GK3/Chat-GPT-Image-Jun-12-2025-01-19-45-AM.png" },
  { name: "LTI", logoUrl: "https://i.postimg.cc/NGSQ1vkd/lti.png" },
  { name: "Capgemini", logoUrl: "https://i.postimg.cc/fb8NyGbj/Chat-GPT-Image-Jun-12-2025-01-27-14-AM.png" },
];

const companiesRow2: CompanyLogo[] = [
  { name: "Mindtree", logoUrl: "https://i.postimg.cc/NGk1rkXM/mindtree.png" },
  { name: "Cognizant", logoUrl: "https://i.postimg.cc/90g0Y0Vx/cognizant.png" },
  { name: "Zoho", logoUrl: "https://i.postimg.cc/DzhvsLLv/zoho.png" },
  { name: "Freshworks", logoUrl: "https://i.postimg.cc/hP7c5p04/freshworks.png" },
  { name: "Flipkart", logoUrl: "https://i.postimg.cc/qBNNpcGS/flipkart.png" },
  { name: "TCS", logoUrl: "https://i.postimg.cc/3w0b6w8y/tcs.png"},
];

function useMarqueeDuplication(logos: CompanyLogo[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dupCount, setDupCount] = useState(2);
  const [duration, setDuration] = useState(40); // default duration in seconds

  useEffect(() => {
    function updateDuplication() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      // Create a temp row to measure one set
      const temp = document.createElement("div");
      temp.style.display = "flex";
      temp.style.visibility = "hidden";
      temp.style.position = "absolute";
      temp.style.pointerEvents = "none";
      temp.style.gap = "24px";
      logos.forEach((logo) => {
        const img = document.createElement("img");
        img.src = logo.logoUrl;
        img.style.height = "96px";
        img.style.width = "auto";
        img.style.margin = "0 12px";
        temp.appendChild(img);
      });
      document.body.appendChild(temp);
      const setWidth = temp.offsetWidth;
      document.body.removeChild(temp);
      // Calculate how many sets are needed to overflow the container
      const needed = setWidth > 0 ? Math.ceil((containerWidth * 2) / setWidth) : 2;
      setDupCount(Math.max(2, needed));

      // Calculate animation duration so speed is consistent
      // Desired speed: e.g., 100px/sec (adjust as needed)
      const SPEED = 100; // px/sec
      const totalWidth = setWidth * Math.max(2, needed);
      const newDuration = totalWidth / SPEED;
      setDuration(newDuration);
    }
    updateDuplication();
    window.addEventListener("resize", updateDuplication);
    return () => window.removeEventListener("resize", updateDuplication);
  }, [logos]);
  return { containerRef, dupCount, duration };
}

export default function CompanyLogos() {
  const { containerRef: marquee1Ref, dupCount: dup1, duration: duration1 } = useMarqueeDuplication(companiesRow1);
  const { containerRef: marquee2Ref, dupCount: dup2, duration: duration2 } = useMarqueeDuplication(companiesRow2);

  return (
    <section className="py-16 bg-gray-100 dark:bg-black text-black dark:text-white overflow-hidden relative">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Our Alumni Work At
      </h2>
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-100 dark:from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-100 dark:from-black to-transparent z-10" />

      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div
          ref={marquee1Ref}
          className="marquee-track animate-marquee flex items-center gap-x-6"
          style={{
            // Set CSS variable for animation duration
            ['--marquee-duration' as any]: `${duration1}s`,
          }}
        >
          {Array.from({ length: dup1 }).flatMap((_, d) =>
            companiesRow1.map((c, i) => (
              <div
                key={`row1-${d}-${i}`}
                className="flex items-center justify-center min-w-[100px]"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={c.logoUrl}
                  alt={c.name}
                  className={`h-32 w-auto object-contain transition drop-shadow-lg hover:scale-105 ${c.name === 'Mindtree' ? 'brightness-0 dark:brightness-200' : ['LTI', 'Capgemini'].includes(c.name) ? 'filter invert dark:invert-0' : ''}`}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap mt-8">
        <div
          ref={marquee2Ref}
          className="marquee-track animate-marquee-reverse flex items-center gap-x-6"
          style={{
            ['--marquee-duration' as any]: `${duration2}s`,
          }}
        >
          {Array.from({ length: dup2 }).flatMap((_, d) =>
            companiesRow2.map((c, i) => (
              <div
                key={`row2-${d}-${i}`}
                className="flex items-center justify-center min-w-[100px]"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={c.logoUrl}
                  alt={c.name}
                  className={`h-32 w-auto object-contain transition drop-shadow-lg hover:scale-105 ${c.name === 'Mindtree' ? 'brightness-0 dark:brightness-200' : ['LTI', 'Capgemini'].includes(c.name) ? 'filter invert dark:invert-0' : ''}`}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
