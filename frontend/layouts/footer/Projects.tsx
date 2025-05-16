// Projects.tsx
import { ProjectType } from "@shared/types";
import Anchor from "./Anchor";

// You can also import this from a separate file if you'd rather keep things clean
const projectsData: ProjectType[] = [
  {
    _id: "1",
    title: "Robin",
    github: "https://github.com/mh4rs/Robin-Song",
    href: "#",
    ariaLabel: "Robin",
    src: "",
    desc: "",
    website: "",
    slug: "robin"
  },
  {
    _id: "2",
    title: "CarbonWise",
    github: "https://github.com/mh4rs/CarbonWise",
    href: "#",
    ariaLabel: "CarbonWise",
    src: "",
    desc: "",
    website: "",
    slug: "carbonwise"
  },
  {
    _id: "3",
    title: "DriveShare",
    github: "https://github.com/mh4rs/DriveShare",
    href: "#",
    ariaLabel: "DriveShare",
    src: "",
    desc: "",
    website: "",
    slug: "driveshare"
  },
  {
    _id: "4",
    title: "NutriScan",
    github: "https://github.com/mh4rs/NutriScan",
    href: "#",
    ariaLabel: "NutriScan",
    src: "",
    desc: "",
    website: "",
    slug: "nutriscan"
  },
  {
    _id: "5",
    title: "MaximMobile",
    github: "https://github.com/mh4rs/MobileAccessibility",
    href: "#",
    ariaLabel: "MaximMobile",
    src: "",
    desc: "",
    website: "",
    slug: "maximmobile"
  },
  {
    _id: "6",
    title: "YouTube Clone",
    github: "https://github.com/mh4rs/Youtube-Clone",
    href: "#",
    ariaLabel: "YouTube Clone",
    src: "",
    desc: "",
    website: "",
    slug: "youtube-copycat"
  },
  {
    _id: "7",
    title: "Test Your Memory",
    github: "https://github.com/mh4rs/memory-game",
    href: "#",
    ariaLabel: "JavaScript Memory Game",
    src: "",
    desc: "",
    website: "",
    slug: "js-memory-game"
  },
  {
    _id: "8",
    title: "Rock Paper Scissors",
    github: "https://github.com/mh4rs/Nostalgia",
    href: "#",
    ariaLabel: "Rock Paper Scissors",
    src: "",
    desc: "",
    website: "",
    slug: "rock-paper-scissors"
  }
];


type ProjectsProps = {
  customStyles?: string;
};

export default function Projects({ customStyles }: ProjectsProps) {
  const renderProjects = () => {
    if (!projectsData || projectsData.length === 0) {
      return <p>No projects found.</p>;
    }

    return projectsData.map((project: ProjectType, i: number) => (
      <Anchor
        key={i}
        href={project.github}
        target="_blank"
        text={project.title}
      />
      

    ));
  };

  return (
    <div className={`flex flex-col gap-1 ${customStyles}`}>
      <h2 className="font-semibold text-lg capitalize">projects</h2>
      {renderProjects()}
    </div>
  );
}
