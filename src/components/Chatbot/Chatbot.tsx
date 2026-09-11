import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const MAX_QUESTIONS = 4;
const ONE_HOUR = 60 * 60 * 1000;
const REQUEST_TIMEOUT = 15000;

const Chatbot = () => {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const [questionCount, setQuestionCount] = useState(() => {
    const savedCount = Number(
      localStorage.getItem("chatbot-question-count") || "0",
    );

    const savedTimestamp = Number(
      localStorage.getItem("chatbot-question-timestamp") || "0",
    );

    const now = Date.now();

    if (savedTimestamp && now - savedTimestamp >= ONE_HOUR) {
      localStorage.removeItem("chatbot-question-count");
      localStorage.removeItem("chatbot-question-timestamp");

      return 0;
    }

    return savedCount;
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t.chatbot.greeting,
    },
  ]);

  const limitReached = questionCount >= MAX_QUESTIONS;

  const handleSendMessage = async () => {
    if (!message.trim() || isThinking || limitReached) return;

    const userMessage = message.trim();

    setQuestionCount((prev) => {
      const newCount = prev + 1;

      localStorage.setItem("chatbot-question-count", String(newCount));

      if (prev === 0) {
        localStorage.setItem("chatbot-question-timestamp", String(Date.now()));
      }

      return newCount;
    });

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setIsThinking(true);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, REQUEST_TIMEOUT);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (error) {
      clearTimeout(timeout);

      if (error instanceof DOMException && error.name === "AbortError") {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: t.chatbot.timeout,
          },
        ]);
      } else {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: t.chatbot.error,
          },
        ]);
      }
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-24 right-6 z-50 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 px-4 py-3 text-white">...</div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto p-4">...</div>

        {/* Input */}
        <div className="border-t border-slate-200 p-3">...</div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? t.chatbot.close : t.chatbot.open}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-cyan-600"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default Chatbot;
