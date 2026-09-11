import { useState } from "react";
import { ArrowUpRight, Star, TrendingUp } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { projects } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

export default function Projects() {
  const { t } = useLang();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filtered =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 section-padding overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent-500" />
                <span className="text-accent-400 font-mono text-sm font-medium tracking-wider uppercase">
                  {t.projects.label}
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-balance">
                {t.projects.headingPre}{" "}
                <span className="gradient-text">
                  {t.projects.headingHighlight}
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-ink-900/60 border border-ink-800/60 self-start">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  filter === "all"
                    ? "bg-accent-500 text-ink-950"
                    : "text-ink-300 hover:text-white"
                }`}
              >
                {t.projects.all}
              </button>
              <button
                onClick={() => setFilter("featured")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  filter === "featured"
                    ? "bg-accent-500 text-ink-950"
                    : "text-ink-300 hover:text-white"
                }`}
              >
                {t.projects.featured}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => {
              const item = t.projects.items[projects.indexOf(project)];
              return (
                <article
                  key={project.title}
                  className={`group relative glass-card overflow-hidden hover:border-ink-700 transition-all duration-500 hover:-translate-y-1 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                >
                  <div
                    className={`relative h-44 bg-gradient-to-br overflow-hidden`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ink-950/60 backdrop-blur-sm text-xs font-medium text-white">
                          <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
                          {t.projects.featured}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-ink-950/60 backdrop-blur-sm text-xs font-medium text-white">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ink-950/60 backdrop-blur-sm text-xs font-medium text-white">
                        <TrendingUp className="w-3 h-3" />
                        {item.metrics}
                      </span>
                    </div>
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div> */}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display font-semibold text-lg text-white group-hover:text-accent-400 transition-colors">
                        {item.title}
                      </h3>
                      {/* <ArrowUpRight className="w-5 h-5 text-ink-500 group-hover:text-accent-400 group-hover:rotate-0 transition-all duration-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" /> */}
                    </div>
                    <p className="text-sm text-ink-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-ink-800/60 border border-ink-700/60 text-xs font-mono text-ink-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* <div className="text-center mt-12">
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-ink-700 hover:border-accent-500/50 text-ink-200 hover:text-accent-400 font-medium transition-all duration-300 hover:bg-ink-900/60"
            >
              {t.projects.githubLink}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
