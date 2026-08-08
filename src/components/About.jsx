import { FiDownload } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import CvSergioEn from "../assets/Resume-Sergio Mendoza.pdf";
import CvSergioEs from "../assets/cv_es.pdf";

const quickFacts = [
  { label: "Name", value: "Sergio Mendoza" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Languages", value: "English · Español" },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container-section">
        <SectionTitle
          overline="About Me"
          title="A little bit about who I am"
        />
        <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="leading-relaxed text-slate-400">
              Hi, I&apos;m Sergio. I&apos;ve always been really interested in web
              development — I&apos;ve always wanted to build my own projects and
              keep learning more every single day. This portfolio is my way of
              sharing that journey with you.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              I care about writing clean, maintainable code and creating
              experiences that feel fast and effortless. When I&apos;m not
              coding, I&apos;m exploring new tools, ideas, and technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={CvSergioEn} download className="btn-primary">
                <FiDownload /> Download CV (EN)
              </a>
              <a href={CvSergioEs} download className="btn-outline">
                <FiDownload /> Download CV (ES)
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-surface p-6 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-white">
              Quick info
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              {quickFacts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-slate-500">{fact.label}</span>
                  <span className="text-right text-slate-200">
                    {fact.value}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4">
                <span className="text-slate-500">Status</span>
                <span className="inline-flex items-center gap-2 text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Open to work
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
