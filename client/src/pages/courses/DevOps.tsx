import React from "react";

const DevOps = () => {
  return (
    <div className="min-h-screen bg-qualibytes-background text-white">
      {/* Banner */}
      <div className="w-full h-[325px] bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1900x325")' }}>
        <div className="h-full w-full flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">12-Week DevOps Course</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* About the Course */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
          <p className="text-gray-800 dark:text-gray-300">
            This course provides a comprehensive introduction to DevOps, covering essential
            tools and practices such as Linux, Git, Docker, CI/CD, Terraform, Kubernetes, and
            monitoring.
          </p>
        </section>

        {/* Weekly Modules */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Week 1: Introduction & Linux Fundamentals", points: ["OS basics: Kernel, Shell, CLI vs GUI", "Linux File System, Permissions, Users", "Command-line tools and scripting", "Shell scripting: variables, loops, conditions"] },
            { title: "Week 2: Git & Version Control", points: ["Git basics: init, clone, add, commit", "Branching, merging, conflict resolution", "Working with GitHub, GitLab", "Advanced Git: stash, rebase, cherry-pick"] },
            { title: "Week 3: Shell Scripting & Networking", points: ["Shell scripting projects", "Automating tasks with cron", "Networking: IP, DNS, SSH, firewalls"] },
            { title: "Week 4: Docker & Containerization", points: ["Docker architecture and setup", "Building Docker images", "Multi-stage builds & Docker Compose"] },
            { title: "Week 5: Advanced Docker & CI/CD Basics", points: ["Docker networking, volumes, registries", "Private Docker Registry", "CI/CD overview and Jenkins setup"] },
            { title: "Week 6: Jenkins Pipelines & Integration", points: ["Jenkinsfile syntax", "Dockerized CI/CD pipeline", "Jenkins integration with Git and Kubernetes"] },
            { title: "Week 7: Terraform & Infrastructure as Code", points: ["Terraform basics: providers, resources", "Write, plan, apply workflow", "Terraform on AWS"] },
            { title: "Week 8: Ansible for Configuration Management", points: ["Ansible basics: playbooks, inventory", "Roles, variables, and Jinja2", "Ansible for provisioning"] },
            { title: "Week 9: Kubernetes Fundamentals", points: ["K8s core concepts: pods, deployments", "YAML and declarative management", "Namespaces, Secrets, ConfigMaps"] },
            { title: "Week 10: Advanced Kubernetes & Project Deployment", points: ["Ingress, TLS, DNS", "StatefulSets, PVCs", "RBAC, real-world deployment on EKS"] },
            { title: "Week 11: Monitoring & Observability", points: ["Prometheus setup and exporters", "Grafana dashboards", "Monitoring Kubernetes, scaling, logging"] },
            { title: "Week 12: Final Projects & Job Preparation", points: ["CI/CD with Jenkins, Docker, K8s", "Terraform + Ansible deployment", "Monitoring stack + Resume + Mock Interviews"] },
          ].map((week, index) => (
            <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">{week.title}</h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 text-sm space-y-1">
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

export default DevOps;