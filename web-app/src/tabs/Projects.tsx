import Badges from "@/components/ui/badges";

export default function History() {
  return (
    <div className="space-y-18 pb-18">
      <Project
        projectName="Army Reserve Mercury"
        description="Army Reserve Mercury is a content management system utilized by the U.S. Amry Reserves. I had further developed this project; adding new features with a team of 3 others. While in development hundereds of soliders used the platform."
        imageUrl="resmer.webp"
        link="https://apps.apple.com/us/app/army-reserve-mercury/id1619569471"
        skills={["React", "Javascript", "PostGres", "SQL", "AWS"]}
      />
      <Project
        projectName="OpenGL 3D Renderer"
        description="In order to learn more about C++ and the graphics pipeline I sought out how to build a custom renderer from scratch using Open GL. Obj files can be imported and displayed in a 3D world with custom lighting."
        imageUrl="https://learnopengl.com/img/getting-started/opengl.jpg"
        link="https://github.com/ethans333/learning"
        skills={["C++", "OpenGL"]}
      />
      <Project
        projectName="Random Dungeon Generator"
        description="Random Dungeon Generator was a project written in C#. How it works is simple: rooms are generated with a random size while clustered together, they are then pushed apart from each other and then connected via hallways. I created it with the intrigue of learning more about Unity and C#. The algorithm used is roughly based off of this algorithm."
        imageUrl="randdungeon.jpeg"
        link="https://github.com/ethans333/dungeonGenerator"
        skills={["Unity", "C#"]}
      />
      <Project
        projectName="2-3-4 Tree"
        description="The Two Four Tree project was a class written in Java implementing a Two Four Tree data structure. The project was a school assignment assigned for my Computer Science 2 class. The difficult of implementing this data structure rested in the sheer amount of boolean conditions needed for implementing all of its functionalities."
        imageUrl="tree.png"
        link="https://github.com/ethans333/Two-Three-Four-Tree"
        skills={["Java"]}
      />
    </div>
  );
}

function Project({
  imageUrl,
  projectName,
  description,
  link,
  skills,
}: {
  imageUrl: string;
  projectName: string;
  description: string;
  link: string;
  skills: string[];
}) {
  return (
    <div>
      <img
        src={imageUrl}
        alt={projectName}
        className="w-full h-64 rounded object-cover"
      />
      <h2 className="mt-5 mb-1">
        <a href={link}>{projectName}</a>
      </h2>
      <p>{description}</p>
      <div className="mt-2 w-4/5">
        <Badges badges={skills} />
      </div>
    </div>
  );
}
