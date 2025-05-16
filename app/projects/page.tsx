"use client";

import { useEffect } from "react";
// Adjust import paths as needed
import { ProjectType } from "@shared/types";
import ProjectCard from "@frontend/components/ProjectCard";

function BackToTop() {
  useEffect(() => {}, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6
        bg-blue-600 dark:bg-rose-500
        text-white p-3
        rounded-full shadow-lg
        hover:bg-blue-700 dark:hover:bg-rose-600
        transition-colors duration-300
        z-50
      "
    >
      ↑
    </button>
  );
}

/**
 * Example project data
 */
const projectsData: ProjectType[] = [
  {
    _id: "1",
    href: "/projects/robin",
    ariaLabel: "Robin",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742476745/dnejkig1ztogkmiuj3rj.png",
    alt: "Robin - Bird Song Identifier",
    title: "Robin",
    desc: "Robin: Bird Song Identifier App. A cross-platform mobile app for real-time bird species identification is my senior capstone project and will be available for download on the App Store and Google Play on April 1st, 2025. Named after Michigan’s state bird, the American Robin, this app uses real-time audio analysis with the BirdNET API to identify bird species even in noisy environments. Built with React Native, Robin offers a location-based forecasting system that suggests the best birdwatching spots based on your area, and an interactive AI chatbot that provides clear, K-12 friendly bird insights. Designed with accessibility in mind, the app includes voice commands and audio feedback so that visually impaired users can easily navigate and enjoy it. Our team was selected as one of only two UM-Dearborn teams for the Ford College Network Test Track, a national event aimed at creating impactful projects, which led to a collaboration with the College for Creative Studies to turn Robin into a physical installation. Overall, Robin is a practical and user-friendly tool that makes bird identification and forecasting accessible for everyone.",
    website: "https://apps.apple.com/us/app/robin-bird-song-id/id6744431895", 
    github: "https://github.com/mh4rs/Robin-Song",
    slug: "robin",
  },
  {
    _id: "2",
    href: "/projects/carbonwise",
    ariaLabel: "CarbonWise",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742475634/i7cvoqjyutdl0y764lkg.png",
    alt: "CarbonWise",
    title: "CarbonWise | Carbon Footprint Manager",
    desc: "CarbonWise is a full-stack MERN application designed to help Dearborn residents actively reduce their carbon footprints through personalized recommendations. The app begins by asking users detailed questions about their daily routines—from commuting and grocery shopping to clothing purchases—to calculate a personalized carbon footprint score. Based on that score, it generates targeted suggestions such as eco-friendly public transportation options, local park and biking trails, sustainable grocery stores, and tailored recommendations for eco-conscious clothing markets. Our research, presented at UM-Dearborn’s Practice-Based Learning Conference, showed that these personalized insights can lead to measurable carbon reductions. Overall, CarbonWise empowers users to make greener choices every day.",
    website: "https://carbonwise-frontend.onrender.com/",
    github: "https://github.com/mh4rs/CarbonWise",
    slug: "carbonwise",
  },
  {
    _id: "3",
    href: "/projects/driveshare",
    ariaLabel: "DriveShare",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742497403/yisattzfs1xlmy5noihw.png",
    alt: "DriveShare",
    title: "DriveShare | Peer-to-Peer Car Rental",
    desc: "A full-stack Peer-to-Peer Car Rental web application designed to connect car owner can rent oute authentication, real-time booking, and interactive messaging for car rentals.",
    website: "",
    github: "https://github.com/mh4rs/DriveShare",
    slug: "driveshare",
  },
  {
    _id: "4",
    href: "/projects/nutriscan",
    ariaLabel: "NutriScan",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742497240/imggkf8leujkmd4zhydm.png",
    alt: "NutriScan",
    title: "NutriScan | Nutritional Information App",
    desc: "Cross-platform app analyzing food products through barcode scanning and product searches, providing nutritional profiles and health ratings.",
    website: "",
    github: "https://github.com/mh4rs/NutriScan",
    slug: "nutriscan",
  },
   {
    _id: "5",
    href: "/projects/maximmobile",
    ariaLabel: "Maximmobile",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742498809/kcuztmmljwrkqzjkzry0.png",
    alt: "Maximmobile",
    title: "MaximMobile",
    desc: "MaximMobile is a web-based accessibility calculator designed for mobile app developers.",
    website: "",
    github: "https://github.com/mh4rs/MobileAccessibility",
    slug: "maximmobile",
  },
  {
    _id: "6",
    href: "/projects/youtube-copycat",
    ariaLabel: "YouTube Clone",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742508899/rvsy2xgtdxdakceyrf3v.png",
    alt: "YouTube Copycat",
    title: "YouTube Clone",
    desc: "Recreated YouTube’s interface using HTML and CSS, focusing on layout accuracy, responsiveness, and UI design. This project replicates the platform’s homepage, video thumbnails, and navigation elements. Check it out by clicking ‘Visit Website’!",
    website: "https://mh4rs.github.io/Youtube-Clone/",
    github: "https://github.com/mh4rs/Youtube-Clone",
    slug: "youtube-copycat",
  },
  {
    _id: "7",
    href: "/projects/js-memory-game",
    ariaLabel: "JavaScript Memory Game",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742500098/vwnim9dh9q2ojdrbkjgh.png",
    alt: "JavaScript Memory Game",
    title: "Test Your Memory",
    desc: "A fun and engaging memory game built with JavaScript. Test your memory with interactive cards, playful animations, and a challenge that gets progressively harder.",
    website: "https://mh4rs.github.io/memory-game/",
    github: "https://github.com/mh4rs/memory-game",
    slug: "js-memory-game",
  },
  {
    _id: "8",
    href: "/projects/rock-paper-scissors",
    ariaLabel: "Rock Paper Scissors",
    src: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742508298/llrvayffuiyixotnmsyt.png",
    alt: "Rock Paper Scissors",
    title: "Rock Paper Scissors",
    desc: "A classic Rock Paper Scissors game reimagined with JavaScript and animations. Enjoy a competitive twist on a timeless game.",
    website: "https://mh4rs.github.io/Nostalgia/",
    github: "https://github.com/mh4rs/Nostalgia",
    slug: "rock-paper-scissors",
  },
];

/**
 * Main ProjectsPage component.
 */
export default function ProjectsPage() {
  return (
    <div className="container relative max-w-7xl mx-auto px-8">
      <BackToTop />

      <section id="projects" className="w-full py-16">
        <h1 className="text-black dark:text-white text-5xl font-extrabold mb-6 text-center mt-20">
          Projects
        </h1>
        <p className="text-center text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
          These are the projects I have worked on throughout my coding career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-12 justify-items-center">
          {projectsData.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
