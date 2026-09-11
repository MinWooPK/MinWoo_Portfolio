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
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-slate-900 px-4 py-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">MinWoo AI</h2>

                <p className="text-xs text-slate-400">
                  {limitReached
                    ? t.chatbot.limitReached
                    : `${MAX_QUESTIONS - questionCount} ${t.chatbot.questionsAvailable}`}
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label={t.chatbot.close}
              >
                <X size={20} />
              </button>
            </div>

            {/* Información del servicio */}
            {!limitReached && (
              <div className="mt-3 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2">
                <p className="text-[11px] leading-4 text-slate-300">
                  Las respuestas pueden tardar unos segundos.
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                  Servicio gratuito con recursos limitados.
                </p>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    item.role === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}

            {/* Thinking */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                  </div>

                  <span className="text-xs text-slate-500">
                    Preparando respuesta...
                  </span>
                </div>
              </div>
            )}

            {/* Limit message */}
            {limitReached && (
              <div className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50 p-4 text-center">
                <p className="mb-1 text-sm font-semibold text-slate-800">
                  {t.chatbot.limitReached}
                </p>

                <p className="mb-3 text-sm text-slate-600">
                  {t.chatbot.limitDescription}
                </p>

                <a
                  href="mailto:minwoowork91@gmail.com"
                  className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-600"
                >
                  {t.chatbot.contactEmail}
                </a>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 p-3">
            <div className="flex gap-2">
              <input
                value={message}
                disabled={isThinking || limitReached}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder={
                  limitReached
                    ? t.chatbot.inputLimit
                    : isThinking
                      ? t.chatbot.inputThinking
                      : t.chatbot.inputPlaceholder
                }
                className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 caret-cyan-500 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:bg-slate-100"
              />

              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isThinking || limitReached}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-slate-400">
              {questionCount}/{MAX_QUESTIONS} {t.chatbot.questionsUsed}
            </p>
          </div>
        </div>
      )}

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
