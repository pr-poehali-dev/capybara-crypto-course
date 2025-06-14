import CapybaraCourseHero from "@/components/CapybaraCourseHero";
import CourseModules from "@/components/CourseModules";
import TONStats from "@/components/TONStats";
import CapybaraProgress from "@/components/CapybaraProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CapybaraCourseHero />
      <TONStats />
      <CourseModules />
      <CapybaraProgress />
    </div>
  );
};

export default Index;
