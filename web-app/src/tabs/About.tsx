import { Badge } from "@/components/ui/base-badge";
import { Github, Linkedin, Scroll, Mail } from "lucide-react";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";

export default function About() {
  const handleOpenPdf = () => {
    window.open("Ethan_Stein_Resume.pdf", "_blank");
  };

  return (
    <div className="py-2">
      <p>
        <TextShimmer className="inline" duration={1.2}>
          Welcome to my personal portfolio!
        </TextShimmer>{" "}
        I'm Ethan Stein, a Software Engineer and recent Computer Science graduate from the University of Central
        Florida. Feel free to browse around and see some of my projects and industry experience!
        <br />
        <br />
        <TextShimmer duration={1.2} className="pl-1 inline">
          I'm currently looking for Software Engineering roles
        </TextShimmer>
        . If you have any questions or would like to connect, feel free to{" "}
        <a href="mailto:ethanmstn33@gmail.com" className="!text-foreground">
          email me <Mail className="inline mb-[3px]" size={16} />
        </a>
        .
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/ethans333">
          <Badge variant="secondary" appearance="light">
            <Github /> Github
          </Badge>
        </a>
        <a href="https://www.linkedin.com/in/ethan-stein-231527256/">
          <Badge variant="secondary" appearance="light">
            <Linkedin /> LinkedIn
          </Badge>
        </a>
        <a className="cursor-pointer" onClick={handleOpenPdf}>
          <Badge variant="secondary" appearance="light">
            <Scroll /> Résumé
          </Badge>
        </a>
      </div>
    </div>
  );
}
