"use client";

import { notFound, useRouter } from "next/navigation";
import { useEffect } from "react";

// Example data
const projectsData = [
  {
    slug: "robin",
    title: "Robin | Bird Song Identifier App",
    desc: "Robin is my senior capstone project and is available for download on the App Store and Google Play Store. Named after Michigan's state bird, the American Robin, this app uses real-time audio analysis with the BirdNET API to identify bird species even in noisy environments. Built with React Native, Robin offers a location-based forecasting system that suggests the best birdwatching spots based on your area, and an interactive AI chatbot that provides clear, K–12 friendly bird insights. Designed with accessibility in mind, the app includes voice commands and audio feedback so that visually impaired users can easily navigate and enjoy it.\n\nRobin has made tremendous impact both locally and nationally. It was awarded Best Project in the Computer and Information Science Department at UM-Dearborn, and went on to win first place for the Social Impact Award in the Ford College Network Test Track- a national competition where universities across the country showcase projects focused on social impact, mobility, and innovation. This recognition came with $20,000 in funding to scale Robin's reach and impact.\n\nWe are now collaborating with the Great Lakes Stewardship Initiative (GLSI), which partners with schools across Michigan to bring hands-on nature learning into the classroom. Together, we are working to build dedicated school spaces where students can engage with nature through sound, and are distributing bird feeder kits to deepen student connection with local environments. We're also collaborating with the College for Creative Studies to transform Robin into an interactive physical installation.\n\nRobin is more than an app, it's a free, accessible tool at the center of a growing initiative to promote equity, STEM learning, and environmental awareness in schools and communities.",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742476745/dnejkig1ztogkmiuj3rj.png",
    github: "https://github.com/mh4rs/Robin-Song",
    website: "https://janaamin.github.io/RobinSong.io/index.html"
  },
  
  {
    slug: "carbonwise",
    title: "CarbonWise | Carbon Footprint Manager",
    desc: "CarbonWise is a full-stack MERN application designed to help Dearborn residents actively reduce their carbon footprints through personalized recommendations. The app begins by asking users detailed questions about their daily routines, from commuting and grocery shopping habits to clothing purchases, to calculate a personalized carbon footprint score. Based on this score, CarbonWise then generates targeted suggestions in areas such as public transportation, park and biking trails, sustainable grocery stores, and eco-friendly clothing markets. For example, if your answers show you rarely shop secondhand, the app might recommend more clothing markets focused on sustainability; if you don’t frequent eco-friendly grocery stores, it will prioritize local options that emphasize organic and local sourcing. Our research, presented at UM-Dearborn’s Practice-Based Learning Conference, demonstrated that these tailored recommendations can lead to measurable reductions in carbon emissions. Overall, CarbonWise is an intuitive, user-friendly tool that empowers individuals to make informed, greener choices every day.",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742484988/a4waliofeq9yfp3c9g2s.png",
    github: "https://github.com/mh4rs/CarbonWise",
    website: "https://carbonwise-frontend.onrender.com/",
  },
  {
    slug: "driveshare",
    title: "DriveShare | Peer-to-Peer Car Rental",
    desc: "DriveShare is a peer-to-peer car rental platform that connects car owners with individuals looking for short-term rentals. Built as a full-stack web application, it features secure user registration with a built-in security question system for account recovery. Car owners can list their vehicles with details such as model, year, mileage, an availability calendar, pick-up location, and pricing, while the system prevents double bookings through a secure transaction flow. Renters can easily search for available cars based on location, reserve them for specific periods, and communicate directly with owners via an interactive messaging system that sends real-time notifications for booking requests and confirmations. Additionally, a simulated payment system is integrated to update balances and notify both parties.",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742496788/y3qy7tz9ii0pk7c2qwse.png",
    github: "https://github.com/mh4rs/DriveShare",
    website: "",
  },
  {
    slug: "nutriscan",
    title: "NutriScan | Nutritional Information App",
    desc: "NutriScan is a cross-platform React Native app that gives you fast access to detailed nutritional profiles of food products through barcode scanning or simple keyword searches. It retrieves nutritional data per 100g/ml, including saturated fats (less than 1.5g considered low and more than 5g high), total fats (3-20g), protein (5-20g), calories (50-200 KCals), sugars (5-200g), and sodium (0.1-0.6g), according to established nutritional guidelines. These values help NutriScan assess whether a product's nutritional content is within a healthy range. The app also flags potentially harmful additives like E102 (Tartrazine) and E129 (Allura Red AC), so that you know exactly what's in your food. NutriScan calculates a NutriScore based on National Health Service guidelines, making product comparisons simple. Whether you're just starting your health journey or already mindful of your nutrition, NutriScan’s user-friendly interface and quick data retrieval help you make informed food choices and build a personalized list of healthy favorites.",

    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742489458/plxrugbbiwx1izlw6qpm.png",
    github: "https://github.com/mh4rs/NutriScan",
    website: "",
  },


  {
    slug: "maximmobile",
    title: "MaximMobile",
    desc: "MaximMobile is a web-based accessibility calculator designed for mobile app developers. It features an interactive checklist aligned with ADA and WCAG guidelines, then calculates an overall accessibility score and generates improvement recommendations from OpenAI’s ChatGPT. This makes it easy for developers to identify gaps in mobile app accessibility and take practical steps toward more inclusive design.",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742498809/kcuztmmljwrkqzjkzry0.png",
    github: "https://github.com/mh4rs/MobileAccessibility",
    website: "",
  },


  {
    slug: "youtube-copycat",
    title: "YouTube Clone",
    desc: "I recreated YouTube’s interface using HTML and CSS, focusing on layout accuracy, responsiveness, and UI design. This project replicates the platform’s homepage, video thumbnails, and navigation elements. Check it out by clicking Visit Website!",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742508899/rvsy2xgtdxdakceyrf3v.png",
    github: "https://github.com/mh4rs/Youtube-Clone",
    website: "https://mh4rs.github.io/Youtube-Clone/",
  },




  {
    slug: "js-memory-game",
    title: "Test Your Memory",
    desc: "I built this JavaScript Memory Game as a fun side project in my free time. It’s an interactive game where you flip cards to find matching pairs. Give it a try by clicking Visit Website!",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742499940/mgav2oeg40bswahukaga.png",
    github: "https://github.com/example/realpop",
    website: "https://mh4rs.github.io/memory-game/",
  },


  {
    slug: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    desc: "This Rock Paper Scissors game is another fun side project I built just for practice and creativity. It’s a simple, interactive game where you play against the computer with clean visuals and instant results. Click Visit Website to give it a try!",
    image: "https://res.cloudinary.com/dkzdlamoe/image/upload/v1742508446/cgvmk8ppm2wanfm6f2un.png",
    github: "https://github.com/mh4rs/Nostalgia",
    website: "https://mh4rs.github.io/Nostalgia/",
  },





];

function getProjectBySlug(slug: string) {
  return projectsData.find((p) => p.slug === slug);
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const handleGoBack = () => {
    router.push("/projects");
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 py-20 pt-24 pb-8 min-h-screen text-gray-900 dark:text-white">
      {/* Full-width image at the top */}
      <div className="w-full mb-8 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-contain"
          style={{ maxHeight: "500px" }}
          onError={(e) => {
            console.error("Image failed to load");
            e.currentTarget.src = "/images/placeholder.png";
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left column: Title and description */}
        <div className="flex-1 pr-0 md:pr-6">
          <h1 className="text-5xl font-bold mb-6">
            {project.title.split("|")[0].trim()}
          </h1>
<div className="text-lg text-gray-900 dark:text-white mb-8 space-y-4">
  {project.desc.split("\n\n").map((para, idx) => (
    <p key={idx} className="text-justify">
      {para}
    </p>
  ))}
</div>


        </div>

        {/* Right column: Buttons */}
        <div className="w-full md:w-64 flex flex-col space-y-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center justify-center
              border border-gray-500
              text-gray-900 dark:text-white
              font-medium
              py-3 px-6
              rounded
              transition-colors duration-300
              hover:bg-blue-600 dark:hover:bg-rose-500
            "
                        >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}

          {project.slug === "robin" && (
            <a
              href="/_EIT_25__Robin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 dark:bg-rose-500 text-gray-900 dark:text-white font-medium py-3 px-4 rounded transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-rose-600"
            >
              Click here to read the research paper on Robin!
            </a>
          )}



          {project.slug === "carbonwise" && (
            <>
   
              <a
                href="/CarbonWise.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 dark:bg-rose-500 text-gray-900 dark:text-white font-medium py-3 px-4 rounded transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-rose-600"
              >
                Click here to view the poster on CarbonWise!
              </a>
            </>
          )}

{project.slug === "driveshare" && (
            <>
              <a
                href="https://www.youtube.com/watch?v=q8LCfJwEbCM&t=138s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 dark:bg-rose-500 text-gray-900 dark:text-white font-medium py-3 px-4 rounded transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-rose-600"
              >
                Click here for a demo!
              </a>
            </>
          )}


          {
            project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-blue-600 dark:border-rose-500 border-blue-600 dark:bg-transparent text-gray-900 dark:text-white font-medium py-3 px-6 rounded transition-colors duration-300 hover:bg-blue-600 dark:hover:bg-rose-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </a>
            )}

          <button
            onClick={handleGoBack}
            className="
            flex items-center justify-center
            border border-gray-500
            text-gray-900 dark:text-white
            font-medium
            py-3 px-6
            rounded
            transition-colors duration-300
            hover:bg-blue-600 dark:hover:bg-rose-500
          "
                    >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}