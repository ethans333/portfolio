import { Badge } from "@/components/ui/badge";
import Badges from "@/components/ui/badges";
import { useState } from "react";

class ProjectData {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  skills: string[];

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    link: string,
    skills: string[]
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.link = link;
    this.skills = skills;
  }
}

const projects: ProjectData[] = [
  new ProjectData(
    "Army Reserve Mercury",
    "Army Reserve Mercury is a content management system utilized by the U.S. Amry Reserves. I had further developed this project; adding new features with a team of 3 others. While in development hundereds of soliders used the platform.",
    "resmer.webp",
    "https://apps.apple.com/us/app/army-reserve-mercury/id1619569471",
    ["React", "Javascript", "PostGres", "SQL", "AWS"]
  ),
  new ProjectData(
    "Pokemon Full Stack App",
    "Pokemon App is a project I created to learn more about the full stack software development process using devops technologies like Docker containers, CI/CD pipelines and EC2 Instances.",
    "pokemon-app.png",
    "https://github.com/ethans333/pokemon-express",
    [
      "TypeScript",
      "NodeJS",
      "PostgreSQL",
      "EC2",
      "AWS",
      "React",
      "Express",
      "Github Actions",
      "CI/CD Pipelines",
    ]
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
    "Random Dungeon Generator was a project written in C#. How it works is simple: rooms are generated with a random size while clustered together, they are then pushed apart from each other and then connected via hallways. I created it with the intrigue of learning more about Unity and C#. The algorithm used is roughly based off of this algorithm.",
    "randdungeon.jpeg",
    "https://github.com/ethans333/dungeonGenerator",
    ["Unity", "C#"]
  ),
  new ProjectData(
    "2-3-4 Tree",
    "The Two Four Tree project was a class written in Java implementing a Two Four Tree data structure. The project was a school assignment assigned for my Computer Science 2 class. The difficult of implementing this data structure rested in the sheer amount of boolean conditions needed for implementing all of its functionalities.",
    "tree.png",
    "https://github.com/ethans333/Two-Three-Four-Tree",
    ["Java"]
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

export default function History() {
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const onSkillFilterUpdate = (selectedSkills: string[]) => {
    console.log(selectedSkills);

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
    <div className="space-y-10">
      <SkillFilter skills={skills} onUpdate={onSkillFilterUpdate} />
      <div className="space-y-18 pb-18">
        {visibleProjects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }: { project: ProjectData }) {
  return (
    <div>
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-64 rounded object-cover border shadow-lg"
      />
      <h2 className="mt-5 mb-1">
        <a href={project.link}>{project.name}</a>
      </h2>
      <p>{project.description}</p>
      <div className="mt-2 w-4/5">
        <Badges badges={project.skills} />
      </div>
    </div>
  );
}

function SkillFilter({
  skills,
  onUpdate,
}: {
  skills: string[];
  onUpdate: (skills: string[]) => void;
}) {
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
          className={`cursor-pointer text-blue-600 hover:underline ${
            selectedSkills.length === 0 ? "hidden" : ""
          }`}
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
            className={`cursor-pointer ${
              selectedSkills.includes(skill) &&
              "bg-blue-600 text-accent-foreground"
            }`}
            onClick={() => handleSkillClick(skill)}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
