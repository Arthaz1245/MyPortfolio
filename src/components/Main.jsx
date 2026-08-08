import { TypeAnimation } from "react-type-animation";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import codePicture from "../assets/codepicture.jpg";
const Main = () => {
  return (
    <div id="main">
      <img
        src={codePicture}
        className="w-full h-screen object-cover object-left -scale-x-100"
        alt="Code editor open on a laptop screen"
        aria-hidden="true"
      />
      <div className="w-full h-screen  absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full  w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 hover:text-cyan-800">
            I am Sergio Mendoza
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={[
                "Full Stack Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Software Engineer",
                2000,
                "Tech savy",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/sergiomendoza-softwareengineer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sergio Mendoza on LinkedIn"
            >
              <AiFillLinkedin size={20} className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/Arthaz1245"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sergio Mendoza on GitHub"
            >
              <AiFillGithub size={20} className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/sergiomendozap3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sergio Mendoza on Twitter"
            >
              <AiFillTwitterCircle size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
