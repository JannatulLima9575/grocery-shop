import Banner from "../components/Banner";
import CTASection from "./components/CTASection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import UserRoles from "./components/UserRoles";
import Vision from "./components/Vision";


export default function page() {
  return (
    <div className="">
      <Banner />
      <ProblemSection />
      <SolutionSection />
      <UserRoles />
      <Vision />
      <CTASection />
    </div>
  );
}
