import { Badge } from "@/components/ui/badge";

export default function Badges({ badges }: { badges: string[] }) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {...badges.map((badge) => (
        <Badge key={badge} variant={"secondary"}>
          {badge}
        </Badge>
      ))}
    </div>
  );
}
