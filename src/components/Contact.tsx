import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { profile, socials } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mlekzevp", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 section-padding overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-500" />
            <span className="text-accent-400 font-mono text-sm font-medium tracking-wider uppercase">
              {t.contact.label}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 text-balance">
                {t.contact.headingPre}{" "}
                <span className="gradient-text">
                  {t.contact.headingHighlight}
                </span>
              </h2>
              <p className="text-lg text-ink-300 leading-relaxed mb-8">
                {t.contact.description}
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-ink-800/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-500 mb-0.5">
                      {t.contact.email}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-500 mb-0.5">
                      {t.contact.location}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {t.hero.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-500 mb-0.5">
                      {t.contact.responseTime}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {t.contact.responseValue}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-8">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-ink-400 hover:text-accent-400 bg-ink-900/60 border border-ink-800/60 hover:border-accent-500/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 lg:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink-200 mb-2"
                >
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-800/60 text-white placeholder-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  placeholder={t.contact.formNamePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink-200 mb-2"
                >
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-800/60 text-white placeholder-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  placeholder={t.contact.formEmailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ink-200 mb-2"
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-ink-950/60 border border-ink-800/60 text-white placeholder-ink-500 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all resize-none"
                  placeholder={t.contact.formMessagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-400 disabled:opacity-60 disabled:cursor-not-allowed text-ink-950 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    {t.contact.send}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5" />
                  {t.contact.success}
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  <AlertCircle className="w-5 h-5" />
                  {t.contact.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
