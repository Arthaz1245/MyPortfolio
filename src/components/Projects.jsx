import React from "react";
import DogApiImg1 from "../assets/DogApiImg1.png";
import NoveltyBooksImg1 from "../assets/NoveltyBooksImg1.png";
import ProjectItem from "./ProjectItem";
import PortfolioApi1 from "../assets/pictureprojectportfolio.jpg";
import Chatsapp from "../assets/Chatsapp.png";
import windbnb from "../assets/airbnbapi.png";
import WeatherApi from "../assets/WeatherApi.png";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#13138297]">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12 pt-14">
        <ProjectItem
          title="Doggies"
          img={DogApiImg1}
          Link="https://front-pidogs.vercel.app/"
        />
        <ProjectItem
          title="Novelty Books"
          img={NoveltyBooksImg1}
          Link="https://novelty-books.vercel.app/login"
        />
        <ProjectItem
          title="My Portfolio"
          img={PortfolioApi1}
          Link="https://poetic-sunshine-1aca3a.netlify.app"
        />
        <ProjectItem
          title="Windbnb"
          img={windbnb}
          Link="https://airbnb-react-ivory.vercel.app"
        />
        <ProjectItem
          title="Chatsapp"
          img={Chatsapp}
          Link="https://chat-socket-io-front-tau.vercel.app"
        />
        <ProjectItem
          title="WeatherApi"
          img={WeatherApi}
          Link="https://app.netlify.com/sites/sage-ganache-e8f271/overview"
        />
      </div>
    </div>
  );
};

export default Projects;
