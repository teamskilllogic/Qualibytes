import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Qualibytes</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium flex items-center">
                      PROGRAMS <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Software Development</DropdownMenuItem>
                    <DropdownMenuItem>Data Science</DropdownMenuItem>
                    <DropdownMenuItem>AI & Machine Learning</DropdownMenuItem>
                    <DropdownMenuItem>DevOps & Cloud</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a href="#" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                  MASTERCLASS
                </a>
                <a href="#" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
                  ALUMNI
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium flex items-center">
                      RESOURCES <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Blog</DropdownMenuItem>
                    <DropdownMenuItem>Career Guide</DropdownMenuItem>
                    <DropdownMenuItem>Industry Reports</DropdownMenuItem>
                    <DropdownMenuItem>Help Center</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              LOGIN
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              APPLY NOW
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Request a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-foreground hover:text-primary text-lg font-medium">
                    PROGRAMS
                  </a>
                  <a href="#" className="text-foreground hover:text-primary text-lg font-medium">
                    MASTERCLASS
                  </a>
                  <a href="#" className="text-foreground hover:text-primary text-lg font-medium">
                    ALUMNI
                  </a>
                  <a href="#" className="text-foreground hover:text-primary text-lg font-medium">
                    RESOURCES
                  </a>
                  <div className="border-t pt-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      LOGIN
                    </Button>
                    <Button className="w-full bg-primary text-primary-foreground">
                      APPLY NOW
                    </Button>
                    <Button className="w-full bg-accent text-accent-foreground">
                      Request a Call
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
