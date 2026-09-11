import { useEffect, useState } from "react";
import { Menu, X, Code2, Globe, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { langNames, langFlags, type Lang } from "@/translation";
import { useActiveSection, useScrollProgress } from "@/hooks/useInView";

const navLinkKeys = [
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection([...navLinkKeys]);
  const progress = useScrollProgress();

  const navLinks = navLinkKeys.map((key) => ({
    label: t.nav[key],
    href: `#${key}`,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = () => setLangOpen(false);
    if (langOpen) {
      window.addEventListener("click", onClick);
      return () => window.removeEventListener("click", onClick);
    }
  }, [langOpen]);

  const langs: Lang[] = ["en", "es", "fr"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-ink-800/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-padding max-w-7xl mx-auto flex items-center justify-between h-16 md:h-18">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-400 to-brand-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg text-white hidden sm:block">
            MinWoo <span className="text-accent-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  active === link.href.slice(1)
                    ? "text-accent-400"
                    : "text-ink-300 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-accent-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg text-ink-300 hover:text-white hover:bg-ink-800/60 border border-ink-800/60 transition-all duration-300"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-mono text-xs">{langFlags[lang]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-ink-900/95 backdrop-blur-xl border border-ink-800/80 shadow-xl overflow-hidden animate-fade-in">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                      lang === l
                        ? "text-accent-400 bg-accent-500/10"
                        : "text-ink-300 hover:text-white hover:bg-ink-800/60"
                    }`}
                  >
                    <span>{langNames[l]}</span>
                    {lang === l && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-accent-500 hover:bg-accent-400 text-ink-950 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2.5 py-2 text-sm rounded-lg text-ink-300 hover:text-white border border-ink-800/60"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-mono text-xs">{langFlags[lang]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-ink-900/95 backdrop-blur-xl border border-ink-800/80 shadow-xl overflow-hidden animate-fade-in">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                      lang === l
                        ? "text-accent-400 bg-accent-500/10"
                        : "text-ink-300 hover:text-white hover:bg-ink-800/60"
                    }`}
                  >
                    <span>{langNames[l]}</span>
                    {lang === l && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-ink-200 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="section-padding py-4 space-y-1 bg-ink-950/95 backdrop-blur-xl border-b border-ink-800/60">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-ink-200 hover:text-accent-400 hover:bg-ink-900/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 mt-2 text-sm font-semibold text-center rounded-lg bg-accent-500 text-ink-950"
            >
              {t.nav.letsTalk}
            </a>
          </li>
        </ul>
      </div>

      <div className="h-px bg-ink-800/60 relative">
        <div
          className="h-full bg-gradient-to-r from-accent-400 to-brand-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
