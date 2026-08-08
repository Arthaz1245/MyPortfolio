import JavascriptImg from "../assets/technologies/javascript.png";
import TypescriptImg from "../assets/technologies/typescript.png";
import HtmlImg from "../assets/technologies/html5.png";
import CSSImg from "../assets/technologies/css3.png";
import NextJsImg from "../assets/technologies/nextjs.png";
import PostgreSqlImg from "../assets/technologies/postgressql.png";
import ReactImg from "../assets/technologies/react.png";
import ReduxImg from "../assets/technologies/redux.png";
import TailwindImg from "../assets/technologies/tailwind.png";
import MongoDbImg from "../assets/technologies/mongodb.png";
import NodejsImg from "../assets/technologies/nodejs.png";
import PythonImg from "../assets/technologies/python.png";
import DjangoImg from "../assets/technologies/django.png";
import SectionTitle from "./SectionTitle";

const technologiesArray = [
  { name: "JavaScript", image: JavascriptImg },
  { name: "TypeScript", image: TypescriptImg },
  { name: "HTML5", image: HtmlImg },
  { name: "CSS3", image: CSSImg },
  { name: "NextJs", image: NextJsImg },
  { name: "PostgreSQL", image: PostgreSqlImg },
  { name: "React", image: ReactImg },
  { name: "Redux", image: ReduxImg },
  { name: "Tailwind", image: TailwindImg },
  { name: "MongoDB", image: MongoDbImg },
  { name: "NodeJs", image: NodejsImg },
  { name: "Python", image: PythonImg },
  { name: "Django", image: DjangoImg },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24">
      <div className="container-section">
        <SectionTitle
          overline="Skills"
          title="My tech stack"
          subtitle="The tools and technologies I use to design, build, and ship products."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologiesArray.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-200 hover:border-accent-cyan/50 hover:shadow-glow"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
