import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { SiReactquery } from "react-icons/si";

const navItems = [
  { name: "Home", href: "#main", icon: <AiOutlineHome size={20} /> },
  { name: "About", href: "#about", icon: <CgProfile size={20} /> },
  { name: "Projects", href: "#projects", icon: <GrProjects size={20} /> },
  {
    name: "Technologies",
    href: "#technologies",
    icon: <SiReactquery size={20} />,
  },
  { name: "Contact", href: "#contact", icon: <MdContactMail size={20} /> },
];

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
        aria-label="Open navigation menu"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          {navItems.map((item) => (
            <a
              key={item.name}
              onClick={handleNav}
              href={item.href}
              aria-label={item.name}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-200"
              style={{ fontWeight: 800 }}
            >
              {item.icon}
              <span className="pl-4">{item.name}</span>
            </a>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              title={item.name}
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-cyan-200 hover:scale-110 hover:text-white ease-in duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
