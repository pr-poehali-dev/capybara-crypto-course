import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIModel {
  id: string;
  name: string;
  description: string;
  color: string;
  personality: string;
}

const aiModels: AIModel[] = [
  {
    id: "capyton",
    name: "CapyTON",
    description: "Базовый помощник для изучения TON",
    color: "bg-blue-500",
    personality: "Дружелюбный и терпеливый, объясняет простыми словами",
  },
  {
    id: "capyton-pro",
    name: "CapyTON Pro",
    description: "Продвинутый анализ и советы по TON",
    color: "bg-purple-500",
    personality: "Экспертный уровень, детальные объяснения",
  },
  {
    id: "capyton-max",
    name: "CapyTON Max",
    description: "Максимальные возможности для разработки",
    color: "bg-orange-500",
    personality: "Технический гуру, помогает с кодом и архитектурой",
  },
  {
    id: "capyton-max-pro",
    name: "CapyTON Max Pro",
    description: "Элитный уровень для профессионалов",
    color: "bg-gradient-to-r from-purple-600 to-pink-600",
    personality: "Стратегический консультант высшего уровня",
  },
];

const CapyTONChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Привет! Я CapyTON, твой помощник в изучении TON блокчейна! 🦫 Выбери модель ИИ и задавай вопросы!",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selectedModel, setSelectedModel] = useState("capyton");
  const [isTyping, setIsTyping] = useState(false);

  const currentModel =
    aiModels.find((model) => model.id === selectedModel) || aiModels[0];

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Симуляция ответа ИИ
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue, selectedModel),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (question: string, modelId: string): string => {
    const responses = {
      capyton: `Отличный вопрос! 🦫 Как базовый CapyTON, объясню просто: ${question.toLowerCase().includes("ton") ? "TON - это быстрый и масштабируемый блокчейн" : "Давай разберем это пошагово"}. Нужны подробности?`,
      "capyton-pro": `Как CapyTON Pro, дам экспертный анализ: ${question.toLowerCase().includes("разработка") ? "Разработка на TON включает работу с FunC, Fift и TL-B схемами" : "Это требует глубокого понимания архитектуры"}. Хочешь техническую документацию?`,
      "capyton-max": `CapyTON Max здесь! 🚀 Техническое решение: ${question.toLowerCase().includes("код") ? "Вот пример кода смарт-контракта" : "Рассмотрим архитектурный паттерн"}. Готов показать implementation?`,
      "capyton-max-pro": `CapyTON Max Pro на связи! 💎 Стратегический подход: ${question.toLowerCase().includes("бизнес") ? "Анализируем market fit и tokenomics" : "Планируем enterprise-решение"}. Обсудим roadmap?`,
    };

    return responses[modelId as keyof typeof responses] || responses.capyton;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🦫</span>
            CapyTON AI Assistant
          </CardTitle>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {aiModels.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${model.color}`}
                    ></div>
                    <span>{model.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className={`w-2 h-2 rounded-full ${currentModel.color}`}></div>
          <span>{currentModel.description}</span>
          <Badge variant="secondary" className="text-xs">
            {currentModel.personality}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "ai" && (
                  <div
                    className={`w-8 h-8 rounded-full ${currentModel.color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    🦫
                  </div>
                )}

                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString("ru-RU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                    <Icon name="User" size={16} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div
                  className={`w-8 h-8 rounded-full ${currentModel.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  🦫
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Спроси ${currentModel.name}...`}
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Icon name="Send" size={16} />
          </Button>
        </div>

        <div className="text-xs text-center text-muted-foreground">
          💡 Попробуйте разные модели ИИ для получения различных стилей ответов
        </div>
      </CardContent>
    </Card>
  );
};

export default CapyTONChat;
