import { Quote, Sparkles, Layers } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { techStack, erpModules } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { t } = useLang();
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-500" />
            <span className="text-accent-400 font-mono text-sm font-medium tracking-wider uppercase">
              {t.about.label}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-balance">
                {t.about.headingPre}{" "}
                <span className="gradient-text">
                  {t.about.headingHighlight}
                </span>
              </h2>

              <div className="space-y-4 text-lg text-ink-300 leading-relaxed">
                {t.about.paragraphs.map((p, i) => (
                  <p key={i}>
                    {i === 1 ? (
                      <>
                        {p.split(": ")[0]}:{" "}
                        <span className="text-white font-medium">
                          {p.split(": ").slice(1).join(": ")}
                        </span>
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </div>

              <div className="glass-card p-6 lg:p-8 mt-8">
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="w-5 h-5 text-accent-400" />
                  <h3 className="font-display font-semibold text-lg text-white">
                    {t.about.erpModulesTitle}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {erpModules.map((mod, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl bg-ink-900/60 border border-ink-800/60 hover:border-accent-500/30 hover:bg-ink-800/40 transition-all duration-300 ${
                        inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
                    >
                      <mod.icon className="w-4 h-4 text-accent-400 shrink-0" />
                      <span className="text-sm font-medium text-ink-200">
                        {t.about.erpModules[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative glass-card p-6 lg:p-8 mt-8">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-ink-800" />
                <p className="text-lg text-ink-200 italic leading-relaxed pr-12">
                  {t.about.quote}
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-ink-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-brand-500 flex items-center justify-center text-ink-950 font-bold">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      MinWoo Park
                    </div>
                    <div className="text-xs text-ink-500">
                      {t.about.quoteRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-accent-400" />
                  <h3 className="font-display font-semibold text-lg text-white">
                    {t.about.techTitle}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, i) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl bg-ink-900/60 border border-ink-800/60 hover:border-accent-500/30 hover:bg-ink-800/40 transition-all duration-300 ${
                        inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
                    >
                      <tech.icon className="w-4 h-4 text-accent-400 shrink-0" />
                      <span className="text-sm font-medium text-ink-200">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 lg:p-8">
                <h3 className="font-display font-semibold text-lg text-white mb-4">
                  {t.about.quickFactsTitle}
                </h3>
                <ul className="space-y-3">
                  {t.about.facts.map((fact) => (
                    <li
                      key={fact.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-ink-500">{fact.label}</span>
                      <span className="text-ink-200 font-medium text-right">
                        {fact.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
