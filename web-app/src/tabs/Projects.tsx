import Badges from "@/components/ui/badges";

export default function History() {
  return (
    <div className="space-y-18 pb-18">
      <Project
        projectName="Army Reserve Mercury"
        description="Amet dolor nulla ea proident labore irure aliquip sunt commodo non in. Ea ad est anim aliqua ex sint laborum et aliqua ea et ut veniam. Amet ex sunt eiusmod nostrud velit laboris nisi non."
        imageUrl="resmer.webp"
        link="https://apps.apple.com/us/app/army-reserve-mercury/id1619569471"
        skills={["React", "Javascript", "PostGres", "SQL", "AWS"]}
      />
      <Project
        projectName="OpenGL Renderer"
        description="In quis aliqua reprehenderit aliqua et dolor. Sunt eu ullamco id veniam aute sint pariatur nulla ad ea. Amet mollit ut cillum ipsum elit ut ullamco deserunt laborum commodo esse reprehenderit anim. Excepteur commodo ut laboris cillum ad."
        imageUrl="https://github.com/ethans333/dungeonGenerator/raw/main/Capture1.JPG"
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
      <img src={imageUrl} alt={projectName} className="w-full h-64 rounded" />
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
