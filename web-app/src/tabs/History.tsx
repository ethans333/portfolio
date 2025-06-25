import Badges from "@/components/ui/badges";

export default function History() {
  return (
    <div className="space-y-10 pb-10">
      <WorkHistory
        companyName="MAK Technologies"
        description="Contributed to a government-contracted real-time simulation project focused on enhancing user interaction with dynamic digital environments. Utilized Python and RabbitMQ to implement communication features between systems. Worked within a four-person Agile team, using Git and Jira to manage development workflows."
        startDate="June 2024"
        endDate="June 2025"
        link="https://mak.com"
        skills={[
          "Python",
          "Dart",
          "RabbitMQ",
          "Unreal Engine",
          "Flutter",
          "Hugging Face",
          "OpenCV",
          "Docker",
          "Podman",
        ]}
      />
      <WorkHistory
        companyName="Tech Think Tank"
        description="Designed and developed Celly Auto SMS, a full-stack platform built with AWS, Python, and React. Created a dynamic workflow builder UI for automated messaging and integrated Amazon Lex for AI-driven chat functionality. Managed the entire project lifecycle independently, from planning through deployment."
        startDate="February 2023"
        endDate="June 2024"
        link="https://techthinktank.com/"
        skills={[
          "Python",
          "React",
          "JavaScript",
          "Tailwind CSS",
          "TypeScript",
          "AWS",
        ]}
      />
    </div>
  );
}

function WorkHistory({
  companyName,
  description,
  startDate,
  endDate,
  link,
  skills,
}: {
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  skills: string[];
}) {
  return (
    <div>
      <div className="lg:flex justify-between items-center">
        <h2 className="mt-5 mb-1">
          <a href={link}>{companyName}</a>
        </h2>
        <p className="opacity-50 mt-auto pb-1 italic">
          {startDate} - {endDate}
        </p>
      </div>
      <p>{description}</p>
      <div className="mt-2 w-4/5">
        <Badges badges={skills} />
      </div>
    </div>
  );
}
