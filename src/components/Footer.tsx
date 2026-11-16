import { Github, Linkedin, Mail } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../data/socials';
import { personalInfo, navigationLinks } from '../data/portfolio';

function Footer() {
  const goTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: GITHUB_URL },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: LINKEDIN_URL },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: `mailto:${personalInfo.email}` },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="text-xl font-semibold">{personalInfo.name}</p>
            <p className="mt-3 max-w-xs text-sm text-blue-100/80 leading-relaxed">
              Frontend developer and UI designer based in Ile-Ife, Nigeria.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2.5 rounded-lg text-blue-100/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => goTo(link.href)} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li><a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors break-all">{personalInfo.email}</a></li>
              <li><a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">{personalInfo.phone}</a></li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/15 text-sm text-blue-100/70">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;