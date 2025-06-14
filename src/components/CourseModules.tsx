import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const CourseModules = () => {
  const modules = [
    {
      id: 1,
      title: "Основы TON",
      description:
        "Что такое TON blockchain, история создания, ключевые особенности",
      capybara: "🦫",
      difficulty: "Новичок",
      lessons: 5,
      duration: "2 часа",
      progress: 0,
      locked: false,
    },
    {
      id: 2,
      title: "Кошельки и безопасность",
      description:
        "Создание кошелька, приватные ключи, безопасное хранение криптовалют",
      capybara: "🦫🔐",
      difficulty: "Новичок",
      lessons: 6,
      duration: "2.5 часа",
      progress: 0,
      locked: true,
    },
    {
      id: 3,
      title: "DeFi на TON",
      description: "Децентрализованные финансы, DEX, фарминг, стейкинг",
      capybara: "🦫💰",
      difficulty: "Средний",
      lessons: 8,
      duration: "3 часа",
      progress: 0,
      locked: true,
    },
    {
      id: 4,
      title: "NFT и токены",
      description: "Создание и торговля NFT, стандарты токенов на TON",
      capybara: "🦫🎨",
      difficulty: "Средний",
      lessons: 7,
      duration: "2.5 часа",
      progress: 0,
      locked: true,
    },
    {
      id: 5,
      title: "Разработка на TON",
      description: "Смарт-контракты, FunC, развертывание приложений",
      capybara: "🦫💻",
      difficulty: "Продвинутый",
      lessons: 10,
      duration: "4 часа",
      progress: 0,
      locked: true,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Новичок":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Продвинутый":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Модули курса <span className="text-3xl">🦫</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучайте TON step-by-step вместе с капибарами. Каждый модуль — это
            новые знания и навыки!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                module.locked
                  ? "border-gray-200 opacity-75"
                  : "border-blue-200 hover:border-blue-300"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{module.capybara}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {module.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}
                    >
                      {module.difficulty}
                    </span>
                  </div>
                </div>
                {module.locked && (
                  <Icon name="Lock" className="text-gray-400" size={20} />
                )}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {module.description}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Icon name="BookOpen" size={16} />
                  <span>{module.lessons} уроков</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>{module.duration}</span>
                </div>
              </div>

              {!module.locked && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Прогресс</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              )}

              <Button
                className={`w-full ${
                  module.locked
                    ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed text-gray-500"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                disabled={module.locked}
              >
                {module.locked ? (
                  <>
                    <Icon name="Lock" className="mr-2" size={16} />
                    Заблокировано
                  </>
                ) : (
                  <>
                    <Icon name="Play" className="mr-2" size={16} />
                    Начать модуль
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
