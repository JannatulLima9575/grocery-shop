import Banner from "../components/Banner";
import CTASection from "./components/CTASection";
import Mission from "./components/Mission";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import UserRoles from "./components/UserRoles";



export default function page() {
  return (
    <div className="">
      <Banner />
      <ProblemSection />
      <SolutionSection />
      <UserRoles />
      <Mission />
      <CTASection />
    </div>
  );
}
