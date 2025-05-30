export default function History() {
  return (
    <div className="space-y-18 pb-18">
      <Project
        projectName="Random Dungeon Generator"
        description="Random Dungeon Generator was a project written in C#. How it works is simple: rooms are generated with a random size while clustered together, they are then pushed apart from each other and then connected via hallways. I created it with the intrigue of learning more about Unity and C#. The algorithm used is roughly based off of this algorithm."
        imageUrl="https://github.com/ethans333/dungeonGenerator/raw/main/Capture1.JPG"
        link="https://github.com/ethans333/dungeonGenerator"
      />
      <Project
        projectName="Random Dungeon Generator"
        description="Random Dungeon Generator was a project written in C#. How it works is simple: rooms are generated with a random size while clustered together, they are then pushed apart from each other and then connected via hallways. I created it with the intrigue of learning more about Unity and C#. The algorithm used is roughly based off of this algorithm."
        imageUrl="https://github.com/ethans333/dungeonGenerator/raw/main/Capture1.JPG"
        link="https://github.com/ethans333/dungeonGenerator"
      />
      <Project
        projectName="Random Dungeon Generator"
        description="Random Dungeon Generator was a project written in C#. How it works is simple: rooms are generated with a random size while clustered together, they are then pushed apart from each other and then connected via hallways. I created it with the intrigue of learning more about Unity and C#. The algorithm used is roughly based off of this algorithm."
        imageUrl="https://github.com/ethans333/dungeonGenerator/raw/main/Capture1.JPG"
        link="https://github.com/ethans333/dungeonGenerator"
      />
    </div>
  );
}

function Project({
  imageUrl,
  projectName,
  description,
  link,
}: {
  imageUrl: string;
  projectName: string;
  description: string;
  link: string;
}) {
  return (
    <div>
      <img src={imageUrl} alt={projectName} className="w-full h-64 rounded" />
      <h2 className="mt-5 mb-1">
        <a href={link}>{projectName}</a>
      </h2>
      <p>{description}</p>
    </div>
  );
}
