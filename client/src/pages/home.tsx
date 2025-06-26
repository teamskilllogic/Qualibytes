import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CareerOutcomes from "@/components/career-outcomes";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navigation />
      <HeroSection />
      <CareerOutcomes />
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
      <PopupForm />
    </div>
  );
}
