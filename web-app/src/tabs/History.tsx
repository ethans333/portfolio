import Badges from "@/components/ui/badges";

export default function History() {
  return (
    <div className="space-y-10 pb-10">
      <WorkHistory
        companyName="MAK Technologies"
        description="Ad ex aliqua pariatur consectetur consectetur pariatur eiusmod dolore et culpa ullamco aute officia. Culpa duis culpa ipsum proident ipsum aute nisi ullamco proident. Culpa qui eu et exercitation nostrud ex in ipsum aliquip officia do. Duis ipsum velit voluptate cupidatat do consectetur proident exercitation nulla."
        startDate="June 2024"
        endDate="June 2025"
        link="https://mak.com"
      />
      <WorkHistory
        companyName="Tech Think Tank"
        description="Ad ex aliqua pariatur consectetur consectetur pariatur eiusmod dolore et culpa ullamco aute officia. Culpa duis culpa ipsum proident ipsum aute nisi ullamco proident. Culpa qui eu et exercitation nostrud ex in ipsum aliquip officia do. Duis ipsum velit voluptate cupidatat do consectetur proident exercitation nulla."
        startDate="Febuary 2023"
        endDate="June 2024"
        link="https://mak.com"
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
}: {
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
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
      <div className="mt-2">
        <Badges badges={["Unity", "C#"]} />
      </div>
    </div>
  );
}
