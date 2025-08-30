import { Badge } from "@/components/ui/base-badge";
import { useState } from "react";
import { Filter, X } from "lucide-react";

export default function SkillFilter({ skills, onUpdate }: { skills: string[]; onUpdate: (skills: string[]) => void }) {
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

  const ClearFilterBadge = selectedSkills.length > 0 && (
    <Badge variant={"destructive"} appearance={"light"} className="cursor-pointer" onClick={clearFilters}>
      <X />
      Clear Filters
    </Badge>
  );

  return (
    <div className="space-y-2 mt-2">
      <div className="flex w-full flex-wrap gap-2">
        {[
          <Badge variant={"secondary"} appearance={"ghost"} className="px-1">
            <Filter />
            Filter By Skill
          </Badge>,
          ...skills.map((skill) => (
            <Badge
              key={skill}
              variant={selectedSkills.includes(skill) ? "primary" : "secondary"}
              className="cursor-pointer"
              appearance={"light"}
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </Badge>
          )),
          ClearFilterBadge,
        ]}
      </div>
    </div>
  );
}
