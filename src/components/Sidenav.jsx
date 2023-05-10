import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { SiReactquery } from "react-icons/si";
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <GrProjects size={20} />
            <span className="pl-4">Proyects</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <SiReactquery size={20} />
            <span className="pl-4">Technologies</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <MdContactMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidenav;
