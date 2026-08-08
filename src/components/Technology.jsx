import PropTypes from "prop-types";

const Technology = ({ img, title }) => {
  return (
    <div className="border-4 border-sky-500 w-24 h-24 p-2 rounded-full">
      <div className="flex justify-center items-center">
        <img src={img} alt={title} className="w-10 h-10" />
      </div>

      <h1 className="flex justify-center items-center">{title}</h1>
    </div>
  );
};

Technology.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Technology;
