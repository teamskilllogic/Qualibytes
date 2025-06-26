import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
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
                <div className="relative group">
                  <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium flex items-center">
                    PROGRAMS <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                  MASTERCLASS
                </a>
                <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                  ALUMNI
                </a>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium flex items-center">
                    RESOURCES <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-primary">
              LOGIN
            </Button>
            <Button className="bg-primary text-white hover:bg-blue-700">
              APPLY NOW
            </Button>
            <Button className="bg-accent text-black hover:bg-amber-600">
              Request a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-gray-700 hover:text-primary text-lg font-medium">
                    PROGRAMS
                  </a>
                  <a href="#" className="text-gray-700 hover:text-primary text-lg font-medium">
                    MASTERCLASS
                  </a>
                  <a href="#" className="text-gray-700 hover:text-primary text-lg font-medium">
                    ALUMNI
                  </a>
                  <a href="#" className="text-gray-700 hover:text-primary text-lg font-medium">
                    RESOURCES
                  </a>
                  <div className="border-t pt-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      LOGIN
                    </Button>
                    <Button className="w-full bg-primary text-white">
                      APPLY NOW
                    </Button>
                    <Button className="w-full bg-accent text-black">
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
