import { Suspense } from "react";
import StackIcon from "@frontend/components/StackIcon";
import LandingSkeleton from "@frontend/layouts/skeletons/LandingSkeleton";
import { FaBuilding, FaBookOpen } from "react-icons/fa"; // Icons for DTE and Research

const AboutSection = async () => {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <div className="container relative max-w-7xl mx-auto px-8">
        
        {/* 🔹 About Me Section */}
        <section id="about" className="w-full py-16">
        <h1 className="text-black dark:text-white text-5xl font-extrabold mb-6 text-center mt-20">
          About Me
        </h1>

          <div className="max-w-3xl mx-auto text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            <p>
              I believe in using technology to solve real-world problems and create impactful solutions. 
              As a software engineering student, I focus on building applications that balance 
              performance, usability, and innovation.
            </p>
            <p className="mt-4">
              Through my coursework in Web Technology, Software Architecture & Design, 
              and Database Management Systems, I've honed my skills in designing and implementing strong systems. 
              Each project I have worked on has deepened my understanding of system architecture, clean coding practices, and developing efficient and maintainable software. Outside of development, I really enjoy learning about networking and cybersecurity, as well as machine learning and its real-world applications.
            </p>
            <p className="mt-4">
              Below is a breakdown of the technologies I enjoy using, looking forward to learning more!
            </p>
          </div>
        </section>


{/* 🔹 Skills Section */}
<section id="skills" className="w-full min-h-screen py-16">
<h2 className="text-black dark:text-white mb-5 text-center font-bold text-5xl">
  Tech Stack
</h2>

  <div className="max-w-7xl mx-auto flex flex-col space-y-7">
    
    {/* 🔹 Languages */}
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-100 mb-4 text-left">
        Languages
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
        {[
          { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
          { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
        ].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <StackIcon ariaLabel={tech.name} src={tech.src} alt={tech.name} />
            <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* 🔹 Web Technologies */}
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-100 mb-4 text-left">
        Web Technologies
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
        {[
          { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
        ].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <StackIcon ariaLabel={tech.name} src={tech.src} alt={tech.name} />
            <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* 🔹 Databases */}
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-100 mb-4 text-left">
        Databases
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
        {[
          { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
        ].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <StackIcon ariaLabel={tech.name} src={tech.src} alt={tech.name} />
            <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* 🔹 Cloud & DevOps */}
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-100 mb-4 text-left">
        Cloud & DevOps
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
        {[
          { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
          { name: "Azure DevOps", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
          { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
        ].map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <StackIcon ariaLabel={tech.name} src={tech.src} alt={tech.name} />
            <span className="text-sm text-gray-700 dark:text-gray-300 mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>




{/* 🔹 My Journey Section */}
<section id="journey" className="w-full py-16">
  <h2 className="text-black dark:text-white text-5xl font-bold mb-8 text-center">
    My Journey
  </h2>

  <div className="flex flex-col md:flex-row md:space-x-12 items-start max-w-7xl mx-auto">
    
{/* 🔹 Left: Journey Description */}
<div className="md:w-1/2 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
  <p className="text-gray-800 dark:text-gray-300">
    I started my journey initially majoring in{" "}
      Electrical Engineering, working with circuit simulations and embedded systems. However, during my{" "}
    <span className="text-blue-600 dark:text-rose-500 font-semibold">
      internship at DTE
    </span>
    , I worked on
      software simulations
    and discovered how much I enjoyed problem-solving through code. What began
    as working on power grid simulations turned into an interest in how software
    could create meaningful solutions. That experience led me to {" "}
    <span className="text-blue-600 dark:text-rose-500 font-semibold">
      transition into Software Engineering
    </span>
    , focusing on
      full-stack development
    and AI applications. There's something satisfying about building systems that analyze
    data and deliver practical results. The blend of my electrical background
    with software development gives me a perspective I wouldn’t trade, where
    understanding both hardware and software creates a deeper level of understanding.
  </p>
  <p className="mt-4 text-gray-800 dark:text-gray-300">
    As I advanced in my degree, I wanted to go beyond what was taught in class
    and dive deeper into{" "}
    <span className="text-blue-600 dark:text-rose-500 font-semibold">
      research
    </span>
    . I was especially interested in{" "}
      machine learning, a subject introduced but not explored in depth in coursework. This
    curiosity led me to pursue{" "}
      undergraduate research, where I developed a  {" "}

    <span className="text-blue-600 dark:text-rose-500 font-semibold">
     new machine learning model. {" "}
    </span>

    Research gave me the
    freedom to build something truly new. Unlike structured coursework, I had to
    figure out solutions from scratch, from designing a data pipeline to refining
    hyperparameters for better predictions.{" "}
    <span className="text-blue-600 dark:text-rose-500 font-semibold">
      Being lead author
    </span>
    , I learned how to defend my work, every assumption had to be backed with
    data, every claim had to be justified.
  </p>
</div>


    {/* 🔹 Right: Timeline */}
    <div className="md:w-1/2 flex flex-col relative">
      
      {/* Timeline Vertical Line */}
      <div className="absolute left-5 top-1 h-full w-[4px] bg-gray-400 dark:bg-gray-600 transform -translate-x-1/2"></div>

      {/* 📌 DTE Energy Internship */}
      <div className="flex items-start space-x-4 mb-10 relative">
        {/* Timeline Node */}
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
          <FaBuilding className="text-gray-800 dark:text-gray-200 text-lg" />
        </div>
        {/* Timeline Card */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">DTE Energy Internship (2022-2023)</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
          Worked alongside electrical engineers conducting outage and power quality investigations across Southeast Michigan, using simulation software to analyze circuits and develop solutions for reliable energy delivery.    </p>
        </div>
      </div>

    {/* 📌 Undergraduate Research */}
    <div className="flex items-start space-x-4 relative">
      {/* Timeline Node */}
      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
        <FaBookOpen className="text-gray-800 dark:text-gray-200 text-lg" />
      </div>
      {/* Timeline Card */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow w-full">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Undergraduate Research (2024-Present)</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
        I developed a machine learning-based bird prediction model, aiming to improve ecological forecasting accuracy. My second research paper, part of my capstone project, focused on Robin, a bird identification app designed for accessibility and education. This experience reinforced how AI can bridge the gap between technology and real-world impact.
        </p>
        {/* Research Papers */}
        <div className="mt-2 space-y-1">
          <a 
            href="/_IJCNN_25__Robin.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-rose-500 hover:underline block text-sm"
          >
            <strong>Lead Author:</strong> A Spatiotemporal Machine Learning Framework for
            Ecologically-informed Bird Sighting Prediction  
            <span className="text-gray-600 dark:text-gray-400 text-xs"> (Submitted to SMC, status: waiting)</span>
          </a>
          <a 
            href="/_EIT_25__Robin.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-rose-500 hover:underline block text-sm"
          >
            <strong>Co-Author:</strong> Robin: An Intelligent Bird Observation Application
            for the Visually Impaired and K-12 Education
            <span className="text-gray-600 dark:text-gray-400 text-xs">
              (Submitted to EIT, status: <span className="text-green-600 dark:text-green-400 font-semibold">accepted</span>)
            </span>
          </a>
        </div>
      </div>
    </div>


    </div>
  </div>
</section>

      </div>
    </Suspense>
  );
};

export default AboutSection;
