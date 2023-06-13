import React from "react";

const ProjectItem = ({ title, img, Link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#12b3dffd]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-[#0a25d3] tracking-wider text-center">
          {title}
        </h3>
        <a href={Link}>
          <p className="text-center p-3 rounded-ld bg-white text-[#1717dfd5] font-bold cursor-pointer text-lg">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
