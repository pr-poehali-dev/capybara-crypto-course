import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CapybaraProgress = () => {
  const currentProgress = 15; // 15% completed
  const currentLevel = 1;
  const nextLevel = 2;

  const achievements = [
    {
      id: 1,
      title: "Первые шаги",
      description: "Начал изучение TON",
      emoji: "🦫",
      unlocked: true,
    },
    {
      id: 2,
      title: "Кошелек создан",
      description: "Настроил первый кошелек",
      emoji: "🦫💰",
      unlocked: false,
    },
    {
      id: 3,
      title: "DeFi исследователь",
      description: "Изучил DeFi протоколы",
      emoji: "🦫🏊",
      unlocked: false,
    },
    {
      id: 4,
      title: "NFT коллекционер",
      description: "Разбирается в NFT",
      emoji: "🦫🎨",
      unlocked: false,
    },
    {
      id: 5,
      title: "Разработчик",
      description: "Создал смарт-контракт",
      emoji: "🦫💻",
      unlocked: false,
    },
  ];

  const getCapybaraStage = (progress: number) => {
    if (progress < 20)
      return {
        emoji: "🦫",
        title: "Капибара-новичок",
        description: "Только начинаю изучать TON!",
      };
    if (progress < 40)
      return {
        emoji: "🦫💰",
        title: "Капибара-трейдер",
        description: "Разбираюсь в кошельках!",
      };
    if (progress < 60)
      return {
        emoji: "🦫🏊",
        title: "Капибара-пловец",
        description: "Плаваю в DeFi как рыба!",
      };
    if (progress < 80)
      return {
        emoji: "🦫🎨",
        title: "Капибара-художник",
        description: "Создаю крутые NFT!",
      };
    return {
      emoji: "🦫💻",
      title: "Капибара-разработчик",
      description: "Мастер смарт-контрактов!",
    };
  };

  const capybaraStage = getCapybaraStage(currentProgress);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ваш прогресс <span className="text-3xl">🦫</span>
          </h2>
          <p className="text-xl text-gray-600">
            Смотрите, как растет ваша капибара по мере изучения TON!
          </p>
        </div>

        {/* Capybara Evolution */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 text-center">
          <div className="text-8xl mb-4 animate-bounce">
            {capybaraStage.emoji}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {capybaraStage.title}
          </h3>
          <p className="text-gray-600 mb-6">{capybaraStage.description}</p>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Уровень {currentLevel}</span>
            <span>
              {currentProgress}% до уровня {nextLevel}
            </span>
          </div>
          <Progress value={currentProgress} className="h-3 mb-4" />

          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Icon name="BookOpen" size={16} />
              <span>3 из 20 уроков</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              <span>1.5 часа изучено</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
            Достижения 🏆
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  achievement.unlocked
                    ? "bg-yellow-50 border-yellow-200 shadow-md"
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`text-3xl mb-2 ${achievement.unlocked ? "animate-pulse" : "grayscale"}`}
                  >
                    {achievement.emoji}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {achievement.description}
                  </p>
                  {achievement.unlocked && (
                    <div className="mt-2">
                      <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Получено! 🎉
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🦫💪</div>
          <h3 className="text-xl font-semibold mb-2">
            Продолжайте в том же духе!
          </h3>
          <p className="mb-4 text-blue-100">
            Ваша капибара гордится вашими успехами. Еще немного усилий и вы
            станете настоящим TON-экспертом!
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <Icon name="Play" className="mr-2" size={18} />
            Продолжить обучение
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CapybaraProgress;
