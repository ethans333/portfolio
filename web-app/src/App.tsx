import { ThemeProvider } from "@/components/theme-provider";
import Menu from "./Menu";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center pt-16">
        <ModeToggle />
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQH06JKumbng0w/profile-displayphoto-shrink_400_400/B56ZPDDtUnHIAg-/0/1734144350819?e=1753920000&v=beta&t=xDe1LT5iwQZ-c6gVttLm5uXrZhkNfme-uxhFGA9JNWI"
          className="h-32 w-32 rounded-full"
          alt="Ethan Stein Picture"
        />
        <h1 className="mt-4">Ethan Stein</h1>
        <h4>Software Engineer</h4>
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
