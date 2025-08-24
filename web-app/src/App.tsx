import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Menu from "./Menu";
import Header from "./components/ui/header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center pt-16">
        <ModeToggle />
        <Header />
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
