import { TechStackType } from "@shared/types";
import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";
import StackIcon from "@frontend/components/StackIcon";

// Define your tech stacks data statically.
// Make sure each object includes all required fields of TechStackType.
const techStacksData: TechStackType[] = [
  {
    _id: "1",
    ariaLabel: "React",
    href: "https://reactjs.org/",
    src: "/images/react.svg", // adjust path as needed
    alt: "React logo",
  },
  {
    _id: "2",
    ariaLabel: "TypeScript",
    href: "https://www.typescriptlang.org/",
    src: "/images/typescript.svg",
    alt: "TypeScript logo",
  },
  {
    _id: "3",
    ariaLabel: "Node.js",
    href: "https://nodejs.org/",
    src: "/images/nodejs.svg",
    alt: "Node.js logo",
  },
  // Add more tech stack items here...
];

// Function to sort and render the tech stack icons
const renderTechStacks = (techstacks: TechStackType[]) => {
  if (techstacks && techstacks.length > 0) {
    // Sort alphabetically by ariaLabel (case-insensitive)
    const sortedTechStacks = techstacks.sort((a, b) =>
      a.ariaLabel.toLowerCase() < b.ariaLabel.toLowerCase() ? -1 :
      a.ariaLabel.toLowerCase() > b.ariaLabel.toLowerCase() ? 1 : 0
    );

    return sortedTechStacks.map((techstack: TechStackType) => (
      <StackIcon
        key={techstack._id}
        ariaLabel={techstack.ariaLabel}
        href={techstack.href}
        src={techstack.src}
        alt={techstack.alt}
      />
    ));
  } else {
    return null;
  }
};

export default function TechStackSection() {
  // Use the static data instead of fetching from an API
  const techstacks = techStacksData;

  return (
    <Section id="techstack">
      <Heading
        name="tech stacks"
        desc="All of my current technology stack that I really enjoy using. Looking forward to learn more."
      />
      <div className="stacks inline-grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7">
        {renderTechStacks(techstacks)}
      </div>
    </Section>
  );
}
