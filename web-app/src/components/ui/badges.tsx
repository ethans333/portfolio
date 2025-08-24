import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

export default function Badges({ badges }: { badges: string[] }) {
  return (
    <Marquee repeat={5}>
      {...badges.map((badge) => (
        <Badge key={badge} variant={"secondary"}>
          {badge}
        </Badge>
      ))}
    </Marquee>
  );
}
