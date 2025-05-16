import Grid from "@frontend/components/common/Grid";
import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";
import ProjectCard from "@frontend/components/ProjectCard";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import { ProjectType } from "@shared/types";


// Hardcode your projects data here
const projectsData: ProjectType[] = [
  // ... Add as many projects as you like
];

const renderProjects = (projects: ProjectType[]) => {
  if (projects && projects.length > 0) {
    return projects.map((project: ProjectType) => (
      <ProjectCard
        key={project._id}
        href={`/projects/${project.slug}`}
        ariaLabel={project.title}
        src={project.src}
        alt={project.alt}
        title={project.title}
        desc={project.desc}
        website={project.website}
        github={project.github}
      />
    ));
  } else {
    return <LoadingSpinner size="100px" fontSize="64px" />;
  }
};

export default function ProjectSection() {
  // 2. Use local `projectsData` instead of fetching from an API
  const projects = projectsData;

  return (
    <Section id="project">
      <Heading
        name="projects"
        desc="These are the projects I made throughout my coding career. I'm happy to share them with you."
      />
      <Grid gridStyles="lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {renderProjects(projects)}
      </Grid>
    </Section>
  );
}
