import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { programs } from "@/pages/programs";

interface NavigationProps {
  onRequestCall: () => void;
}

export default function Navigation({ onRequestCall }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50 w-full">
      <div className="w-full">
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Left: Logo */}
          <div className="flex items-center z-10">
            <a href="/">
              <img
                src="https://i.postimg.cc/WzLwj3gF/LOGO-PDF-page-0001-removebg-preview.png"
                alt="Qualibytes Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Center: Desktop Menu */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground hover:text-primary text-sm font-medium"
            >
              HOME
            </a>
            <div className="flex gap-0">
              <a
                href="/programs"
                className="text-white hover:bg-primary hover:text-primary-foreground text-sm font-medium rounded-l-full px-4 py-2 border border-border border-r-0 bg-black font-semibold focus:z-10 transition-all duration-200"
              >
                PROGRAMS
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-primary text-sm font-medium rounded-r-full px-3 py-2 border border-border border-l-0 bg-black font-semibold flex items-center gap-1 focus:z-10 transition-all duration-200">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {programs.map((program) => {
                    let courseFile = "";
                    switch (program.name) {
                      case "DevOps":
                        courseFile = "DevOps";
                        break;
                      case "AI/ML":
                        courseFile = "AIML";
                        break;
                      case "Manual Testing":
                        courseFile = "manual-testing";
                        break;
                      case "Automation Testing":
                        courseFile = "automation-testing";
                        break;
                      case "Java Full Stack":
                        courseFile = "java-fullstack";
                        break;
                      case "PHP Full Stack":
                        courseFile = "php-fullstack";
                        break;
                      case "Frontend Development":
                        courseFile = "frontend";
                        break;
                      case "Backend Development":
                        courseFile = "backend";
                        break;
                      case "MERN Stack":
                        courseFile = "MERN";
                        break;
                      case "Business Analyst":
                        courseFile = "business-analyst";
                        break;

                      default:
                        courseFile = program.path;
                        break;
                    }
                    return (
                      <DropdownMenuItem key={program.path} asChild>
                        <a
                          href={`/courses/${courseFile}`}
                          className="hover:bg-primary hover:text-primary-foreground"
                        >
                          {program.name}
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <a
              href="/about"
              className="text-foreground hover:text-primary text-sm font-medium"
            >
              ABOUT US
            </a>
            <a
              href="/contact"
              className="text-foreground hover:text-primary text-sm font-medium"
            >
              CONTACT
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-primary text-sm font-medium"
            >
              TESTIMONIALS
            </a>
            <a href="/online-degree-programs">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                ONLINE DEGREE
              </Button>
            </a>
          </div>

          {/* Right: Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4 ml-auto z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <a href="tel:+918377032324">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Talk to Us
              </Button>
            </a>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={onRequestCall}
            >
              Request a Call
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2 ml-auto z-10">
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
              <SheetContent side="left" className="w-[80%] max-w-sm">
                <div className="flex flex-col space-y-4 mt-8">
                  <a
                    href="/"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    HOME
                  </a>
                  <a
                    href="#about"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    ABOUT US
                  </a>
                  <a
                    href="#contact"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    CONTACT
                  </a>
                  <a
                    href="#testimonials"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    TESTIMONIALS
                  </a>
                  <div className="flex gap-0">
                    <a
                      href="/programs"
                      className="text-white hover:bg-primary hover:text-primary-foreground text-lg font-medium rounded-l-full px-4 py-2 border border-border border-r-0 bg-black font-semibold focus:z-10 transition-all duration-200"
                    >
                      PROGRAMS
                    </a>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-white hover:text-primary text-lg font-medium rounded-r-full px-3 py-2 border border-border border-l-0 bg-black font-semibold flex items-center gap-1 focus:z-10 transition-all duration-200">
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {programs.map((program) => {
                          let courseFile = "";
                          switch (program.name) {
                            case "DevOps":
                              courseFile = "DevOps";
                              break;
                            case "AI/ML":
                              courseFile = "AIML";
                              break;
                            case "Manual Testing":
                              courseFile = "manual-testing";
                              break;
                            case "Automation Testing":
                              courseFile = "automation-testing";
                              break;
                            case "Java Full Stack":
                              courseFile = "java-fullstack";
                              break;
                            case "PHP Full Stack":
                              courseFile = "php-fullstack";
                              break;
                            case "Frontend Development":
                              courseFile = "frontend";
                              break;
                            case "Backend Development":
                              courseFile = "backend";
                              break;
                            case "MERN Stack":
                              courseFile = "MERN";
                              break;
                            case "Business Analyst":
                              courseFile = "business-analyst";
                              break;
                           
                            default:
                              courseFile = program.path;
                              break;
                          }
                          return (
                            <DropdownMenuItem key={program.path} asChild>
                              <a
                                href={`/courses/${courseFile}`}
                                className="hover:bg-primary hover:text-primary-foreground"
                              >
                                {program.name}
                              </a>
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <a
                    href="/online-degree-programs"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    ONLINE DEGREE
                  </a>
                  <a
                    href="#"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    MASTERCLASS
                  </a>
                  <a
                    href="#"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    ALUMNI
                  </a>
                  <a
                    href="#"
                    className="text-foreground hover:text-primary text-lg font-medium"
                  >
                    RESOURCES
                  </a>

                  <div className="border-t pt-4 space-y-2">
                    <a href="tel:+918377032324">
                      <Button className="w-full bg-primary text-primary-foreground">
                        Talk to Us
                      </Button>
                    </a>
                    <Button
                      className="w-full bg-accent text-accent-foreground"
                      onClick={() => {
                        setIsOpen(false);
                        onRequestCall();
                      }}
                    >
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
