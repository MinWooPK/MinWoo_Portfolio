import { Code2, ArrowUp } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { profile, socials } from "@/data/portfolio";

export default function Footer() {
  const { t } = useLang();
  const navLinkKeys = [
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ] as const;
  const navLinks = navLinkKeys.map((key) => ({
    label: t.nav[key],
    href: `#${key}`,
  }));

  return (
    <footer className="relative border-t border-ink-800/60 section-padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-400 to-brand-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg text-white">
                MinWoo<span className="text-accent-400">.</span>
              </span>
            </a>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              {t.hero.bio.slice(0, 120)}...
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t.footer.connect}
            </h4>
            <div className="flex items-center gap-3 mb-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-ink-400 hover:text-accent-400 bg-ink-900/60 border border-ink-800/60 hover:border-accent-500/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-ink-500">{profile.email}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} {profile.name}. {t.footer.crafted}
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-accent-400 transition-colors"
          >
            {t.footer.backToTop}
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
