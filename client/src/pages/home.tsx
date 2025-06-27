import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

import FeaturedProgram from "@/components/featured-program";
import CompanyLogos from "@/components/company-logos";
import ProgramsSection from "@/components/programs-section";
import Testimonials from "@/components/testimonials";
import SuccessStories from "@/components/success-stories";
import GrowthFormula from "@/components/growth-formula";
import LeadershipTeam from "@/components/leadership-team";
import AdvisoryCommittee from "@/components/advisory-committee";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import PopupForm from "@/components/popup-form";
import IndustriesPieSection from "@/components/industries-pie-section"; // ✅ Fixed path & import

interface HomeProps {
  onRequestCall: () => void;
}

export default function Home({ onRequestCall }: HomeProps) {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navigation onRequestCall={onRequestCall} />
      <HeroSection />
      <IndustriesPieSection /> {/* ✅ Correctly used */}
      <FeaturedProgram />
      <CompanyLogos />
      <ProgramsSection />
      <Testimonials />
      <SuccessStories />
      <GrowthFormula />
      <LeadershipTeam />
      <AdvisoryCommittee />
      <Footer />
      <WhatsAppFloat />
      {/* If PopupForm is handled globally, don't include here */}
      {/* <PopupForm /> */}
    </div>
  );
}
