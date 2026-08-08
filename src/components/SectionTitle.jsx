import PropTypes from "prop-types";

const SectionTitle = ({ overline, title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">
        {overline}
      </p>
      <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  overline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionTitle;
