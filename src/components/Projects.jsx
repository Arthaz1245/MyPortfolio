import DogApiImg1 from "../assets/DogApiImg1.png";
import NoveltyBooksImg1 from "../assets/NoveltyBooksImg1.png";
import ProjectItem from "./ProjectItem";
import PortfolioApi1 from "../assets/pictureprojectportfolio.jpg";
import Chatsapp from "../assets/Chatsapp.png";
import WindbnbImg from "../assets/airbnbapi.png";
import WeatherApi from "../assets/WeatherApi.png";

const projects = [
  {
    title: "Doggies",
    img: DogApiImg1,
    link: "https://front-pidogs.vercel.app/",
  },
  {
    title: "Novelty Books",
    img: NoveltyBooksImg1,
    link: "https://novelty-books.vercel.app/login",
  },
  {
    title: "My Portfolio",
    img: PortfolioApi1,
    link: "https://poetic-sunshine-1aca3a.netlify.app",
  },
  {
    title: "Windbnb",
    img: WindbnbImg,
    link: "https://airbnb-react-ivory.vercel.app",
  },
  {
    title: "Chatsapp",
    img: Chatsapp,
    link: "https://chat-socket-io-front-tau.vercel.app",
  },
  {
    title: "WeatherApi",
    img: WeatherApi,
    link: "https://sage-ganache-e8f271.netlify.app",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#13138297]">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12 pt-14">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
