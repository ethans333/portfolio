import { ThemeProvider } from "@/components/theme-provider";
import Menu from "./Menu";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center pt-16">
        <ModeToggle />
        <img src="ethan.jpeg" className="h-32 w-32 rounded-full" alt="Ethan Stein Picture" />
        <h1 className="mt-4">Ethan Stein</h1>
        <h4>Software Engineer</h4>
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
