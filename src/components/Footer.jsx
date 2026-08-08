import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-section flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Sergio Mendoza. Built with React &
          Tailwind.
        </p>
        <a
          href="#main"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow"
        >
          <AiOutlineArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
