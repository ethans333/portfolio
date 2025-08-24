import { Badge } from "@/components/ui/badge";
import Badges from "@/components/ui/badges";
import { useState } from "react";
import { Tilt } from "@/components/motion-primitives/tilt";

class ProjectData {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  skills: string[];

  constructor(name: string, description: string, imageUrl: string, link: string, skills: string[]) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.link = link;
    this.skills = skills;
  }
}

const projects: ProjectData[] = [
  new ProjectData(
    "APC Simulator",
    "A custom-built APC simulation project designed to strengthen my expertise in Unreal Engine. Through its development, I worked extensively with Unreal C++, Blueprints, and multiplayer replication, gaining hands-on experience with both gameplay programming and networked systems.",
    "apc.png",
    "https://github.com/ethans333/APC_Project",
    ["C++", "Unreal Engine"]
  ),
  new ProjectData(
    "Army Reserve Mercury",
    "Army Reserve Mercury is a content management system utilized by the U.S. Army Reserves. I had further developed this project; adding new features with a team of 3 others. While in development hundreds of soldiers used the platform.",
    "resmer.webp",
    "https://apps.apple.com/us/app/army-reserve-mercury/id1619569471",
    ["React", "Javascript", "PostGres", "SQL", "AWS"]
  ),
  new ProjectData(
    "X Finder Job Finder",
    "A job search platform that allows users to search for jobs using a variety of filters. This was created to learn more about the full stack development process involving technologies like kubernetes and terraform.",
    "xfinder.png",
    "https://github.com/ethans333/xfinder-job-search",
    [
      "TypeScript",
      "PostgreSQL",
      "EKS",
      "ECR",
      "Terraform",
      "Docker",
      "Kubernetes",
      "NGINX",
      "AWS",
      "React",
      "Github Actions",
      "CI/CD Pipelines",
      "Tailwind CSS",
      "Flask",
    ]
  ),
  new ProjectData(
    "Pokemon Full Stack App",
    "Pokemon App is a project I created to learn more about the full stack software development process using devops technologies like Docker containers, CI/CD pipelines and EC2 Instances.",
    "pokemon-app.png",
    "https://github.com/ethans333/pokemon-express",
    ["TypeScript", "NodeJS", "PostgreSQL", "EC2", "AWS", "React", "Express", "Github Actions", "CI/CD Pipelines"]
  ),
  new ProjectData(
    "OpenGL 3D Renderer",
    "In order to learn more about C++ and the graphics pipeline I sought out how to build a custom renderer from scratch using Open GL. Obj files can be imported and displayed in a 3D world with custom lighting.",
    "openglrenderer.png",
    "https://github.com/ethans333/learning",
    ["C++", "OpenGL"]
  ),
  new ProjectData(
    "Random Dungeon Generator",
    "Random Dungeon Generator was a project written in C++. This project was created to learn more about the Unreal Engine development process.",
    "Dungeon1.png",
    "https://github.com/ethans333/UnrealEngineRandomDungeonGenerator",
    ["Unreal Engine", "C++"]
  ),
];

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
    <div className="space-y-10 md:w-[90vw] max-w-[1400px]">
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
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-64 rounded object-cover border shadow-lg"
          />
          <div className="px-5 pt-5.5 pb-5">
            <h2 className="pt-1 opacity-90">{project.name}</h2>
            <p className="pt-3 pb-3 opacity-70">{project.description}</p>
            <div className="w-[80vw] md:w-full">
              <Badges badges={project.skills} />
            </div>
          </div>
        </div>
      </a>
    </Tilt>
  );
}

function SkillFilter({ skills, onUpdate }: { skills: string[]; onUpdate: (skills: string[]) => void }) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillClick = (skill: string) => {
    const newSelected = [...selectedSkills];

    if (newSelected.includes(skill)) {
      newSelected.splice(newSelected.indexOf(skill), 1);
    } else {
      newSelected.push(skill);
    }

    setSelectedSkills(newSelected);
    onUpdate(newSelected);
  };

  const clearFilters = () => {
    setSelectedSkills([]);
    onUpdate([]);
  };

  return (
    <div className="space-y-2 mt-2">
      <div className="w-full flex justify-between text-sm">
        <p className="italic opacity-50">Filter Projects by Skill:</p>
        <p
          className={`cursor-pointer text-blue-600 hover:underline ${selectedSkills.length === 0 ? "hidden" : ""}`}
          onClick={clearFilters}
        >
          Clear Filters
        </p>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant={"secondary"}
            className={`cursor-pointer ${selectedSkills.includes(skill) && "bg-blue-600 text-white"}`}
            onClick={() => handleSkillClick(skill)}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
