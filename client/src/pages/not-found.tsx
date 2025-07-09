import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-black">
      <Navigation onRequestCall={() => {}} />
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 Page Not Found</h1>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
