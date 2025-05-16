 import { Suspense } from "react";
import { FiMail, FiGithub, FiFileText } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import LandingSkeleton from "@frontend/layouts/skeletons/LandingSkeleton";


const HomePage = async () => {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <div className="container relative max-w-7xl mx-auto px-8">
        {/* HERO / LANDING SECTION */}
        <section id="home" className="h-[89vh] pt-10">
          <div
            className="
              w-full h-full relative
              flex flex-col justify-center items-center
              xl:flex-row xl:justify-around 2xl:justify-evenly
              gap-y-12
              pt-4
            "
          >
            <div className="flex flex-col items-center xl:items-start gap-8">
              <div className="flex flex-col items-center xl:items-start gap-5">
                <h1
                  className="
                    text-center xl:text-left
                    font-black tracking-tight
                    leading-tight
                    px-1
                    max-w-[800px]
                  "
                >
                  <span
                    className="
                      block text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium
                    "
                  >
                    Hello! I&apos;m
                  </span>
                  <span
                    className="
                      block text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-primary dark:animate-rgb
                    "
                  >
                    Meriam Harissa
                  </span>
                </h1>
                <p
                  className="
                    text-center xl:text-left
                    text-xl md:text-2xl xl:text-3xl
                    px-2 max-w-[800px] tracking-wide
                  "
                >
                  Pursuing a career of being a{" "}
                  <strong className="text-primary capitalize dark:animate-rgb">
                    software engineer.
                  </strong>
                </p>
                <p
                  className="
                    text-center xl:text-left
                    text-xl md:text-xl xl:text-xl
                    px-2 max-w-[800px] tracking-wide
                  "
                >
                  Passionate about development, machine learning, and mobile app innovation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:mharissa@umich.edu"
                  className="
                    inline-flex items-center gap-2
                    bg-blue-600 dark:bg-rose-500
                    text-white px-6 py-3 rounded-md
                    text-lg font-semibold
                    hover:bg-blue-700 dark:hover:bg-rose-600
                    transition-colors duration-300
                  "
                >
                  <FiMail className="w-5 h-5 transition-colors duration-300" />
                  Email Me
                </a>
                <a
                  href="https://github.com/mh4rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    border border-blue-600 dark:border-rose-500
                    text-blue-600 dark:text-rose-500
                    px-6 py-3 rounded-md
                    text-lg font-semibold
                    hover:bg-blue-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white
                    transition-colors duration-300
                  "
                >
                  <FiGithub className="w-5 h-5 transition-colors duration-300" />
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    bg-blue-200 dark:bg-rose-200
                    text-black px-6 py-3 rounded-md
                    text-lg font-semibold
                    hover:bg-blue-300 dark:hover:bg-rose-300
                    transition-colors duration-300
                  "
                >
                  <FiFileText className="w-5 h-5 transition-colors duration-300" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="pt-10 pb-20 max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1: Robin */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-rose-400 mb-3">
                Robin - Bird Song Identifier
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base">
              Robin is an app that identifies birds in real-time and delivers local bird forecasts. Available on iOS and Google Play with 250+ users, it features an educational chatbot, interactive bird history, and accessibility features for visually impaired users, developed with the Environmental Interpretive Center at UM-Dearborn.
              </p>
              {/* Tech Stack for Robin */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm font-semibold">Tech Stack:</span>
                <div className="flex items-center gap-1">
                  <SiReact
                    className="w-5 h-5"
                    title="React Native/Expo"
                    style={{ color: "#61DAFB" }}
                  />
                  <span className="text-xs">React Native/Expo</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiTypescript
                    className="w-5 h-5"
                    title="TypeScript"
                    style={{ color: "#3178C6" }}
                  />
                  <span className="text-xs">TypeScript</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiPython
                    className="w-5 h-5"
                    title="Python"
                    style={{ color: "#3776AB" }}
                  />
                  <span className="text-xs">Python</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiFirebase
                    className="w-5 h-5"
                    title="Firebase"
                    style={{ color: "#FFCA28" }}
                  />
                  <span className="text-xs">Firebase</span>
                </div>
              </div>
              {/* Bottom Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/mh4rs/Robin-Song"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1
                    border border-blue-600 dark:border-rose-500
                    text-blue-600 dark:text-rose-500
                    px-3 py-1 rounded-md
                    text-sm font-semibold
                    hover:bg-blue-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white
                    transition-colors duration-300
                  "
                >
                  GitHub
                </a>
                <a
                  href="https://apps.apple.com/us/app/robin-bird-song-id/id6744431895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1
                    bg-blue-200 dark:bg-rose-200
                    text-black px-3 py-1 rounded-md
                    text-sm font-semibold
                    hover:bg-blue-300 dark:hover:bg-rose-300
                    transition-colors duration-300
                  "
                >
                  Live
                </a>


              </div>
            </div>

            {/* Project Card 2: CarbonWise */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-rose-400 mb-3">
                CarbonWise
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                CarbonWise is a website designed to help Dearborn residents track, visualize, and reduce their carbon footprints through personalized data insights and features an AI-powered recommendation system, using a fine-tuned ChatGPT-4o model to provide sustainability resources tailored to individual user habits.
              </p>
              {/* Tech Stack for CarbonWise */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm font-semibold">Tech Stack:</span>
                <div className="flex items-center gap-1">
                  <SiMongodb
                    className="w-5 h-5"
                    title="MongoDB"
                    style={{ color: "#47A248" }}
                  />
                  <span className="text-xs">MongoDB</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiExpress
                    className="w-5 h-5"
                    title="Express"
                    style={{ color: "#000000" }}
                  />
                  <span className="text-xs">Express</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiReact
                    className="w-5 h-5"
                    title="React"
                    style={{ color: "#61DAFB" }}
                  />
                  <span className="text-xs">React</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiNodedotjs
                    className="w-5 h-5"
                    title="Node.js"
                    style={{ color: "#3C873A" }}
                  />
                  <span className="text-xs">Node.js</span>
                </div>
              </div>
              {/* Bottom Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/mh4rs/CarbonWise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1
                    border border-blue-600 dark:border-rose-500
                    text-blue-600 dark:text-rose-500
                    px-3 py-1 rounded-md
                    text-sm font-semibold
                    hover:bg-blue-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white
                    transition-colors duration-300
                  "
                >
                  GitHub
                </a>
                <a
                  href="https://carbonwise-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1
                    bg-blue-200 dark:bg-rose-200
                    text-black px-3 py-1 rounded-md
                    text-sm font-semibold
                    hover:bg-blue-300 dark:hover:bg-rose-300
                    transition-colors duration-300
                  "
                >
                  Live
                </a>
              </div>
            </div>

            {/* Project Card 3: DriveShare */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-rose-400 mb-3">
                DriveShare
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                DriveShare is a peer-to-peer car rental website connecting vehicle owners with renters. Owners list their cars with custom pricing and availability, while renters search, book, and pay for vehicles that match their needs. The platform includes a messaging system to coordinate the entire rental process.
              </p>
              {/* Tech Stack for DriveShare */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm font-semibold">Tech Stack:</span>
                <div className="flex items-center gap-1">
                  <SiHtml5
                    className="w-5 h-5"
                    title="HTML5"
                    style={{ color: "#E34F26" }}
                  />
                  <span className="text-xs">HTML</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiCss3
                    className="w-5 h-5"
                    title="CSS3"
                    style={{ color: "#1572B6" }}
                  />
                  <span className="text-xs">CSS</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiJavascript
                    className="w-5 h-5"
                    title="JavaScript"
                    style={{ color: "#F7DF1E" }}
                  />
                  <span className="text-xs">JavaScript</span>
                </div>
                <div className="flex items-center gap-1">
                  <SiMysql
                    className="w-5 h-5"
                    title="SQL"
                    style={{ color: "#00758F" }}
                  />
                  <span className="text-xs">SQL</span>
                </div>
              </div>
              {/* Bottom Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/mh4rs/DriveShare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1
                    border border-blue-600 dark:border-rose-500
                    text-blue-600 dark:text-rose-500
                    px-3 py-1 rounded-md
                    text-sm font-semibold
                    hover:bg-blue-600 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white
                    transition-colors duration-300
                  "
                >
                  GitHub
                </a>
                <a
                  href="https://youtu.be/q8LCfJwEbCM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1
                    bg-blue-200 dark:bg-rose-200
                    text-black px-3 py-1 rounded-md
                    text-sm font-semibold
                    hover:bg-blue-300 dark:hover:bg-rose-300
                    transition-colors duration-300
                  "
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          {/* View All Projects Button */}
          <div className="text-center mt-10">
            <a
              href="/projects"
              className="
                inline-block
                bg-blue-600 dark:bg-rose-500
                text-white px-6 py-3
                rounded-md text-lg font-semibold
                hover:bg-blue-700 dark:hover:bg-rose-600
                transition-colors duration-300
              "
            >
              View All Projects
            </a>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default HomePage;
