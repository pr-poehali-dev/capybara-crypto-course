import Icon from "@/components/ui/icon";

const TONStats = () => {
  const stats = [
    {
      label: "Цена TON",
      value: "$2.34",
      change: "+5.2%",
      changeType: "positive",
      icon: "TrendingUp",
      capybara: "🦫💎",
    },
    {
      label: "Рыночная капитализация",
      value: "$8.1B",
      change: "+3.1%",
      changeType: "positive",
      icon: "BarChart3",
      capybara: "🦫📊",
    },
    {
      label: "Объем торгов 24ч",
      value: "$420M",
      change: "-1.2%",
      changeType: "negative",
      icon: "Activity",
      capybara: "🦫💹",
    },
    {
      label: "Активных кошельков",
      value: "2.4M",
      change: "+12.5%",
      changeType: "positive",
      icon: "Wallet",
      capybara: "🦫👥",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            TON в реальном времени{" "}
            <span className="text-3xl animate-pulse">🦫</span>
          </h2>
          <p className="text-xl text-blue-100">
            Следите за актуальной статистикой TON blockchain вместе с
            капибарами!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon
                  name={stat.icon as any}
                  className="text-blue-300"
                  size={24}
                />
                <span className="text-2xl">{stat.capybara}</span>
              </div>

              <div className="mb-2">
                <h3 className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </h3>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
              </div>

              <div
                className={`flex items-center gap-1 text-sm ${
                  stat.changeType === "positive"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                <Icon
                  name={
                    stat.changeType === "positive"
                      ? "TrendingUp"
                      : "TrendingDown"
                  }
                  size={16}
                />
                <span>{stat.change}</span>
                <span className="text-blue-200 ml-1">за 24ч</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Данные обновляются каждые 30 секунд</span>
            <span className="text-lg">🦫</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TONStats;
