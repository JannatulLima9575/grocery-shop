import AboutHero from "./components/AboutHero";
import CTASection from "./components/CTASection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TechStack from "./components/TechStack";
import UserRoles from "./components/UserRoles";
import Vision from "./components/Vision";


export default function page() {
  return (
    <div className="space-y-20 py-16">
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <UserRoles />
      <TechStack />
      <Vision />
      <CTASection />
    </div>
  );
}
