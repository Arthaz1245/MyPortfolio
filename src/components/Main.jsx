import { TypeAnimation } from "react-type-animation";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineDown,
} from "react-icons/ai";
import codePicture from "../assets/codepicture.jpg";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sergiomendoza-softwareengineer/",
    icon: <AiFillLinkedin size={20} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Arthaz1245",
    icon: <AiFillGithub size={20} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/sergiomendozap3",
    icon: <AiFillTwitterCircle size={20} />,
  },
];

const Main = () => {
  return (
    <section
      id="main"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img
        src={codePicture}
        className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-left"
        alt="Code editor open on a laptop screen"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent-blue/20 blur-3xl" />

      <div className="container-section relative z-10 py-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-cyan">
          Hello, my name is
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Sergio Mendoza
          </span>
        </h1>
        <h2 className="mt-4 flex text-xl text-slate-300 sm:text-2xl md:text-3xl">
          I&apos;m a
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Software Engineer",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ paddingLeft: "8px" }}
          />
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
          I build modern web applications from front to back — clean interfaces,
          solid APIs, and reliable data. Always learning, always shipping.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a href="#about" className="btn-outline">
            More about me
          </a>
        </div>

        <div className="mt-10 flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-accent-cyan"
        aria-label="Scroll down to the about section"
      >
        <AiOutlineDown size={24} />
      </a>
    </section>
  );
};

export default Main;
