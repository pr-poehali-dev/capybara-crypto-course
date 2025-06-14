import CapybaraCourseHero from "@/components/CapybaraCourseHero";
import CourseModules from "@/components/CourseModules";
import TONStats from "@/components/TONStats";
import CapybaraProgress from "@/components/CapybaraProgress";
import CapyTONChat from "@/components/CapyTONChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CapybaraCourseHero />
      <TONStats />
      <CourseModules />
      <CapybaraProgress />
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">💬 Чат с CapyTON AI</h2>
            <p className="text-muted-foreground">
              Задавайте вопросы о TON блокчейне нашему ИИ-помощнику
            </p>
          </div>
          <CapyTONChat />
        </div>
      </div>
    </div>
  );
};

export default Index;
