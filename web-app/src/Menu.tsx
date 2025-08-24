import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./tabs/About";
import Projects from "./tabs/Projects";
import History from "./tabs/History";

export default function Menu() {
  return (
    <Tabs defaultValue="about" className="w-[85vw] lg:w-1/3 2xl:w-1/5 items-center mt-8">
      <TabsList>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent className="pt-2" value="about">
        <About />
      </TabsContent>
      <TabsContent className="pt-2" value="projects">
        <Projects />
      </TabsContent>
      <TabsContent className="pt-2" value="history">
        <History />
      </TabsContent>
    </Tabs>
  );
}
