import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, Sparkles, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { socials } from "@/data/portfolio";

export default function Hero() {
  const { t, lang } = useLang();
  const roles = t.hero.roles;
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const tiltCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 16}deg) rotateY(${(x - 0.5) * 16}deg)`;
  };
  const handleDownloadCV = () => {
    setIsDownloading(true);

    const cvFiles = {
      es: "CV-MINWOO-ES.pdf",
      en: "CV-MINWOO-EN.pdf",
      fr: "CV-MINWOO-FR.pdf",
      kr: "CV-MINWOO-KR.pdf",
    };

    const fileName = cvFiles[lang as keyof typeof cvFiles] ?? cvFiles.en;
    const pdfGeneral = "MinWooCV.pdf";
    const link = document.createElement("a");
    link.href = `/cv/${pdfGeneral}`;
    link.download = pdfGeneral;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 800);
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (el)
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" /> */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              {t.hero.availability}
            </div>

            <div
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
                {t.hero.greeting} <span className="gradient-text">MinWoo </span>
              </h1>
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-display font-semibold text-ink-200 h-9">
                <span className="text-ink-400">&gt;</span>
                <span className="text-accent-400 font-mono">{text}</span>
                <span className="inline-block w-0.5 h-7 bg-accent-400 animate-pulse ml-0.5" />
              </div>
            </div>

            <p
              className="text-lg text-ink-300 max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.hero.bio}
            </p>

            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30"
              >
                {t.hero.viewWork}
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              {/* <button
                type="button"
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ink-700 hover:border-accent-500/50 text-ink-100 font-semibold transition-all duration-300 hover:bg-ink-900/60 disabled:cursor-wait"
              >
                {isDownloading ? (
                  <>
                    <Download className="w-4 h-4 animate-bounce" />
                    Downloading...
                  </>
                ) : isDownloaded ? (
                  <>
                    <span className="text-accent-400">✓</span>
                    CV Downloaded
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                    {t.hero.downloadCV}
                  </>
                )}
              </button> */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownloadCV();
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ink-700 hover:border-accent-500/50 text-ink-100 font-semibold transition-all duration-300 hover:bg-ink-900/60"
              >
                {isDownloading ? (
                  <>
                    <Download className="w-4 h-4 animate-bounce" />
                    Downloading...
                  </>
                ) : isDownloaded ? (
                  <>
                    <span className="text-accent-400">✓</span>
                    CV Downloaded
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                    {t.hero.downloadCV}
                  </>
                )}
              </a>
            </div>

            <div
              className="flex items-center gap-5 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-ink-400 hover:text-accent-400 hover:bg-ink-800/60 border border-ink-800/60 hover:border-accent-500/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <div className="h-8 w-px bg-ink-800" />
              <div className="flex items-center gap-1.5 text-sm text-ink-400">
                <MapPin className="w-4 h-4" />
                {t.hero.location}
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative w-full min-w-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="relative mx-auto w-full max-w-sm min-w-0 [transform-style:preserve-3d]"
              onMouseMove={tiltCard}
              onMouseLeave={resetTilt}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/20 via-brand-500/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow" />
              <div
                ref={cardRef}
                className="relative glass-card p-6 gradient-border transition-transform duration-200 ease-out will-change-transform"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-ink-500">
                    profile.tsx
                  </span>
                </div>
                <pre className="max-w-full overflow-x-auto whitespace-pre-wrap break-words text-xs sm:text-sm font-mono leading-relaxed text-ink-300">
                  {" "}
                  <span className="text-ink-500">{t.hero.codeComment}</span>
                  {"\n"}
                  <span className="text-brand-400">const</span>{" "}
                  <span className="text-accent-400">developer</span>{" "}
                  <span className="text-ink-400">= {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-brand-300">name</span>
                  <span className="text-ink-400">:</span>{" "}
                  <span className="text-amber-300">'MinWoo '</span>
                  <span className="text-ink-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-brand-300">stack</span>
                  <span className="text-ink-400">:</span>{" "}
                  <span className="text-ink-200">[</span>
                  <span className="text-amber-300">'React'</span>
                  <span className="text-ink-400">,</span>{" "}
                  <span className="text-amber-300">'TS'</span>
                  <span className="text-ink-400">,</span>{" "}
                  <span className="text-amber-300">'Next'</span>
                  <span className="text-ink-400">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">'TanStack'</span>
                  <span className="text-ink-400">,</span>{" "}
                  <span className="text-amber-300">'.NET'</span>
                  <span className="text-ink-400">,</span>{" "}
                  <span className="text-amber-300">'Azure'</span>
                  <span className="text-ink-400">,</span>{" "}
                  <span className="text-amber-300">'SQL'</span>
                  <span className="text-ink-200">]</span>
                  <span className="text-ink-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-brand-300">focus</span>
                  <span className="text-ink-400">:</span>{" "}
                  <span className="text-amber-300">'{t.hero.codeFocus}'</span>
                  <span className="text-ink-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-brand-300">remote</span>
                  <span className="text-ink-400">:</span>{" "}
                  <span className="text-rose-400">true</span>
                  <span className="text-ink-400">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-brand-300">available</span>
                  <span className="text-ink-400">:</span>{" "}
                  <span className="text-rose-400">true</span>
                  <span className="text-ink-400">,</span>
                  {"\n"}
                  <span className="text-ink-400">{"};"}</span>
                </pre>
                <div className="mt-5 pt-5 border-t border-ink-800 grid grid-cols-2 gap-3">
                  {t.hero.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-display font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center animate-float">
                <Sparkles className="w-4 h-4 text-ink-950" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 hover:text-accent-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
