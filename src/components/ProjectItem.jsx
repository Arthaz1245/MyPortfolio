import PropTypes from "prop-types";

const ProjectItem = ({ title, img, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#12b3dffd]">
      <img
        src={img}
        alt={title}
        className="rounded-xl md:group-hover:opacity-10"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center p-4 rounded-xl bg-white/70 md:bg-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
        <h3 className="text-2xl font-bold text-[#0a25d3] tracking-wider text-center">
          {title}
        </h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-center p-3 rounded-lg bg-white text-[#1717dfd5] font-bold cursor-pointer text-lg">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectItem;
