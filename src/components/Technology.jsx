import React from "react";

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

export default Technology;
