import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CapybaraCourseHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🦫</div>
        <div className="absolute top-32 right-20 text-4xl">💎</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🪙</div>
        <div className="absolute bottom-10 right-10 text-6xl">🦫</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">🦫</span>
              <span className="text-sm font-medium">
                Криптошкола с капибарами
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Капибара <br />
              <span className="text-yellow-400">Криптошкола</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-100">
              Изучаем TON вместе! 🚀
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Самый дружелюбный курс по блокчейну TON. Наши капибары-проводники
              помогут освоить криптовалюты от азов до профи-уровня!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg"
              >
                <Icon name="BookOpen" className="mr-2" size={20} />
                Программа курса
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-blue-100">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={18} />
                <span className="text-sm">2,847 студентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={18} />
                <span className="text-sm">4.9 рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span className="text-sm">12 часов</span>
              </div>
            </div>
          </div>

          {/* Right Content - Capybara Hero */}
          <div className="text-center">
            <div className="relative">
              <div className="text-9xl animate-pulse">🦫</div>
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
                💫
              </div>
              <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse delay-75">
                🪙
              </div>
            </div>

            <div className="mt-8 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">
                Знакомьтесь — Капи!
              </h3>
              <p className="text-blue-100">
                Ваш персональный криpto-наставник. Вместе мы изучим все секреты
                TON blockchain!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapybaraCourseHero;
