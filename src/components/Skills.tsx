import { useLang } from "@/i18n/LanguageContext";
import { expertise, skills } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

export default function Skills() {
  const { t } = useLang();
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 section-padding overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-500" />
            <span className="text-accent-400 font-mono text-sm font-medium tracking-wider uppercase">
              {t.skills.label}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-16 text-balance">
            {t.skills.headingPre}{" "}
            <span className="gradient-text">{t.skills.headingHighlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {t.skills.expertise.map((item, i) => (
              <div
                key={i}
                className={`group glass-card p-6 hover:bg-ink-800/40 transition-all duration-500 hover:-translate-y-1 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                  {(() => {
                    const Icon = expertise[i].icon;
                    return <Icon className="w-6 h-6 text-accent-400" />;
                  })()}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {skills.map((category, ci) => (
              <div key={ci} className="glass-card p-6 lg:p-8">
                <h3 className="font-display font-semibold text-lg text-white mb-6">
                  {t.skills.categories[ci]}
                </h3>
                <div className="space-y-5">
                  {category.items.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-ink-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-ink-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-ink-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-brand-400 transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            transitionDelay: `${0.3 + ci * 0.2 + si * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
