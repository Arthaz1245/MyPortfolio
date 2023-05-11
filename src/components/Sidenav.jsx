import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
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
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <CgProfile size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#technologies"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
            style={{ fontWeight: 800 }}
          >
            <SiReactquery size={20} />
            <span className="pl-4">Technologies</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
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
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-300"
          >
            <CgProfile size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-300"
          >
            {" "}
            <GrProjects size={20} />
          </a>
          <a
            href="#technologies"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-300"
          >
            <SiReactquery size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-300"
          >
            <MdContactMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
