import CvSergioEn from "../assets/H.V.Sergio Mendoza.pdf";
import CvSergioEs from "../assets/CVSergioMendoza.pdf";
const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#13138297]">
        About Me
      </h1>
      <p className="text-center py-8 ">
        Hi, I'm Sergio. I've always been really interested in the web
        development. I've always wanted to develop my own website and be willing
        to learn more and more everyday. I want to share with you more about my
        profile.
      </p>
      <h1 className="text-4xl font-bold text-center text-[#13138297]">CV</h1>
      <div className=" flex flex-row justify-center">
        <div className="flex justify-center p-8">
          <a
            className="rounded-full flex justify-center items-center bg-slate-900 text-white  scale-110 p-5 m-50 hover:bg-red-800"
            href={CvSergioEs}
          >
            ES
          </a>
        </div>
        <div className="flex justify-center py-8">
          <a
            className="rounded-full flex justify-center items-center bg-slate-900 text-white  scale-110 p-5 m-50 hover:bg-red-800"
            href={CvSergioEn}
          >
            EN
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
