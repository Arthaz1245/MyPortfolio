import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, img, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/50 hover:shadow-glow"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/70 to-transparent p-5 md:justify-center md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
        <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
        <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue px-4 py-2 text-sm font-semibold text-slate-900">
          View project <FiExternalLink />
        </span>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
