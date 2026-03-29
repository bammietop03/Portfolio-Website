import React from "react";
import setting from "../assets/svg/setting.svg";

const Experience = () => {
  const experiencesCol1 = [
    {
      period: "Sep 2025 - Present",
      role: "BACKEND ENGINEER",
      company: "Petrong Software Solutions",
      responsibilities: [
        "Designed and built scalable backend services using Node.js (Express/NestJS) and PostgreSQL",
        "Architected RESTful APIs supporting high-volume transactions and third-party integrations",
        "Implemented Redis caching and background job processing to improve performance and reduce latency",
        "Designed optimized database schemas ensuring performance, consistency, and scalability",
        "Deployed and managed applications using Docker and AWS, ensuring high availability",
      ],
    },
    {
      period: "Jan 2025 - Aug 2025",
      role: "FULL STACK ENGINEER",
      company: "LML Repair",
      responsibilities: [
        "Designed and built full stack applications, owning both backend architecture and frontend delivery using Next.js",
        "Designed and implemented PostgreSQL schemas to handle high-volume transactional and analytical data",
        "Developed and optimized RESTful APIs to support integrations with internal tools and third-party services",
        "Enhanced application security by implementing role-based authentication, input validation, and data encryption",
        "Improved application performance by optimizing database queries, caching, and code-splitting strategies",
        "Contributed to business growth by delivering a client-facing dashboard that reduced manual work by 40%",
      ],
    },
  ];

  const experiencesCol2 = [
    {
      period: "Sep 2024 - Dec 2024",
      role: "FREELANCE SOFTWARE ENGINEER",
      company: "Edulga",
      responsibilities: [
        "Used AWS Glue to generate nodes and edges from a dataset",
        "Built an Education Knowledge Graph with Neo4j",
        "Trained the Knowledge Graph for Node Classification and Link Prediction using PyTorch Geometric (PyG)",
      ],
    },
    {
      period: "June 2024 - Aug 2024",
      role: "BACKEND DEVELOPER",
      company: "HNG Internship",
      description:
        "Designed and developed scalable backend systems using Django, PostgreSQL, and Node.js, implemented RESTful APIs, optimized databases, collaborated on frontend integration, deployed Dockerized applications on AWS EC2, and ensured security and performance through testing and maintenance.",
    },
    {
      period: "June 2023 - July 2024",
      role: "SOFTWARE ENGINEER",
      company: "ALX Africa Ventures",
      description:
        "Collaborated with cross-functional teams to implement responsive, cross-browser solutions while contributing to both front-end and back-end development, and gaining expertise in Bash scripting, HTML5, CSS, JavaScript, and Python",
    },
  ];

  const ExperienceCard = ({ exp }) => (
    <div className="group flex gap-6 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30">
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        <img
          src={setting}
          alt="experience icon"
          className="rounded-full border-2 border-teal-400 p-2.5 bg-teal-500 h-12 w-12 relative z-10 group-hover:rotate-180 transition-transform duration-500"
        />
      </div>
      <div className="flex-1">
        <h5 className="text-xs py-1.5 px-4 rounded-full bg-gray-700 group-hover:bg-teal-500/20 inline-block mb-4 font-semibold text-gray-300 transition-colors duration-300">
          {exp.period}
        </h5>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
            {exp.role}
          </h3>
          <span className="text-gray-500">--</span>
          <span className="text-gray-400 text-base">{exp.company}</span>
        </div>
        {exp.responsibilities ? (
          <ul className="text-gray-400 text-sm list-disc ml-4 space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm leading-relaxed">
            {exp.description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">EXPERIENCE</h2>
            <p className="text-gray-400 text-lg">
              My professional journey and key contributions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-8">
              {experiencesCol1.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {experiencesCol2.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
