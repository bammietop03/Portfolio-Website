import React from 'react'
import setting from '../assets/svg/setting.svg'

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900">
      <div className="pb-20 pt-14">
        <div className="flex flex-col gap-16 md:gap-0 justify-center  mx-auto max-w-7xl md:flex-row">
          {/* left item */}
          <div className="text-white w-full md:w-1/2">
            <h2 className="text-xl font-bold text-white ml-20 pb-10">
              EXPERIENCE
            </h2>
            {/* one */}
            <div className="flex px-10 md:px-20">
              <img
                src={setting}
                alt="description"
                className=" rounded-full mx-auto border border-teal-200 border-spacing-4 p-2 bg-teal-500 mb-4 h-10 w-auto mr-5"
              />
              <div className="flex flex-col justify-start">
                <h5 className="text-xs py-1 pl-3.5 rounded-full bg-gray-700 w-44 mb-5 font-semibold">
                  June 2023 - July 2024
                </h5>
                <div className="flex text-base mb-2">
                  <strong>SOFTWARE ENGINEER</strong>
                  <h3 className="text-gray-400 text-sm pl-2 pt-0.5">
                    -- ALX Africa Ventures
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Collaborated with cross-functional teams to implement
                  responsive, cross-browser solutions while contributing to both
                  front-end and back-end development, and gaining expertise in
                  Bash scripting, HTML5, CSS, JavaScript, and Python
                </p>
              </div>
            </div>
            {/* two */}
            <div className="flex px-10 md:px-20 pt-14">
              <img
                src={setting}
                alt="description"
                className=" rounded-full mx-auto border border-teal-200 border-spacing-4 p-2 bg-teal-500 mb-4 h-10 w-auto mr-5"
              />
              <div className="flex flex-col justify-start">
                <h5 className="text-xs py-1 pl-3.5 rounded-full bg-gray-700 w-48 mb-5 font-semibold">
                  June 2024 - August 2024
                </h5>
                <div className="flex text-base mb-2">
                  <strong>BACKEND DEVELOPER</strong>{" "}
                  <h2 className="text-gray-400 text-sm pl-2 pt-0.5">
                    -- HNG Internship
                  </h2>
                </div>
                <p className="text-gray-400 text-sm">
                  Designed and developed scalable backend systems using Django,
                  PostgreSQL, and Node.js, implemented RESTful APIs, optimized
                  databases, collaborated on frontend integration, deployed
                  Dockerized applications on AWS EC2, and ensured security and
                  performance through testing and maintenance.
                </p>
              </div>
            </div>
          </div>
          {/* right item */}
          <div className="text-white w-full md:w-1/2">
            <h2 className="text-xl font-bold text-white ml-20 pb-10">
              EDUCATION
            </h2>
            {/* One */}
            <div className="flex px-10 md:px-20">
              <img
                src={setting}
                alt="description"
                className=" rounded-full border border-teal-200 border-spacing-4 p-2 bg-teal-500 mb-4 h-10 w-auto mr-5"
              />
              <div className="flex flex-col justify-start">
                <h5 className="text-xs py-1 pl-3.5 rounded-full bg-gray-700 w-28 mb-5 font-semibold">
                  2023 - 2024
                </h5>
                <div className="flex text-base mb-2">
                  <strong>SOFTWARE ENGINEER</strong>{" "}
                  <h2 className="text-gray-400 text-sm pl-2 pt-0.5">
                    -- ALX Africa
                  </h2>
                </div>
              </div>
            </div>
            {/* Two */}
            <div className="flex px-10 md:px-20 pt-14">
              <img
                src={setting}
                alt="description"
                className=" rounded-full border border-teal-200 border-spacing-4 p-2 bg-teal-500 mb-4 h-10 w-auto mr-5"
              />
              <div className="flex flex-col justify-start">
                <h5 className="text-xs py-1 pl-3.5 rounded-full bg-gray-700 w-28 mb-5 font-semibold">
                  2015 - 2019
                </h5>
                <div className="flex text-base mb-2">
                  <strong>B.sc BIOCHEMISTRY</strong>{" "}
                  <h2 className="text-gray-400 text-sm pl-2 pt-0.5">
                    -- Universty of Ilorin, Nigeria
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience