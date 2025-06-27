// components/FormModal.tsx
import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import EnhancedForm from "./enhanced-form";

export default function FormModal({ open, onOpenChange }: { open: boolean; onOpenChange: (state: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 flex flex-col md:flex-row overflow-hidden">
        {/* Image Placeholder */}
        <div className="hidden md:block w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/your-image.jpg')" }} />

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 bg-white dark:bg-gray-900">
          <EnhancedForm isPopup />
        </div>
      </DialogContent>
    </Dialog>
  );
}
