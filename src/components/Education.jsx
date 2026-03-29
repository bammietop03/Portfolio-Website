import React from "react";
import setting from "../assets/svg/setting.svg";

const Education = () => {
  const educationData = [
    {
      period: "2023 - 2024",
      degree: "SOFTWARE ENGINEER",
      institution: "ALX Africa",
    },
    {
      period: "2015 - 2019",
      degree: "B.sc BIOCHEMISTRY",
      institution: "University of Ilorin, Nigeria",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">EDUCATION</h2>
            <p className="text-gray-400 text-lg">
              My academic background and professional training
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 flex-1 max-w-md"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <img
                      src={setting}
                      alt="Education icon"
                      className="rounded-full border-2 border-teal-400 p-3 bg-teal-500 h-16 w-16 relative z-10 group-hover:rotate-180 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs py-1.5 px-4 rounded-full bg-gray-700 group-hover:bg-teal-500/20 inline-block mb-4 font-semibold text-gray-300 transition-colors duration-300">
                      {edu.period}
                    </h5>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-base">{edu.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
