import BadgesMarquee from "@/components/ui/badges-marquee";
import { useState } from "react";
import { Tilt } from "@/components/motion-primitives/tilt";
import project_data from "./projects.yaml";
import SkillFilter from "./SkillFilter";

interface ProjectData {
  name: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

const projects: ProjectData[] = project_data as ProjectData[];
const skills: string[] = [];

projects.forEach((project) => {
  project.skills.forEach((skill) => {
    if (!skills.includes(skill)) {
      skills.push(skill);
    }
  });
});

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const onSkillFilterUpdate = (selectedSkills: string[]) => {
    if (selectedSkills.length === 0) {
      setVisibleProjects(projects);
      return;
    }

    setVisibleProjects(
      projects.filter((project) => {
        for (const skill of selectedSkills) {
          if (project.skills.includes(skill)) {
            return true;
          }
        }
        return false;
      })
    );
  };

  return (
    <div className="space-y-10 md:w-[90vw] max-w-[1400px] pb-10 lg:pb-32">
      <div className="mx-auto md:w-3/4 xl:w-1/2">
        <SkillFilter skills={skills} onUpdate={onSkillFilterUpdate} />
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
        {visibleProjects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }: { project: ProjectData }) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline text-inherit"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div
          style={{
            borderRadius: "12px",
          }}
          className="flex flex-col mb-6 overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
        >
          <img src={project.image} alt={project.name} className="w-full h-64 rounded object-cover border shadow-lg" />
          <div className="px-5.5 pt-5.5">
            <h2 className="pt-1 opacity-90">{project.name}</h2>
            <p className="pt-3 pb-2 opacity-70">{project.description}</p>
          </div>
          <div className="w-[85vw] md:w-full pb-4">
            <BadgesMarquee badges={project.skills} />
          </div>
        </div>
      </a>
    </Tilt>
  );
}
