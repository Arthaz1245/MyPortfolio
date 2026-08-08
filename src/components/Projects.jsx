import DogApiImg1 from "../assets/DogApiImg1.png";
import NoveltyBooksImg1 from "../assets/NoveltyBooksImg1.png";
import PortfolioApi1 from "../assets/pictureprojectportfolio.jpg";
import Chatsapp from "../assets/Chatsapp.png";
import WindbnbImg from "../assets/airbnbapi.png";
import WeatherApi from "../assets/WeatherApi.png";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Doggies",
    img: DogApiImg1,
    link: "https://front-pidogs.vercel.app/",
    description: "Browse dog breeds with a rich catalog and filters built on a public API.",
  },
  {
    title: "Novelty Books",
    img: NoveltyBooksImg1,
    link: "https://novelty-books.vercel.app/login",
    description: "A full book store with user accounts, catalog, and cart flows.",
  },
  {
    title: "My Portfolio",
    img: PortfolioApi1,
    link: "https://poetic-sunshine-1aca3a.netlify.app",
    description: "This site — a dark, responsive showcase built with React and Tailwind.",
  },
  {
    title: "Windbnb",
    img: WindbnbImg,
    link: "https://airbnb-react-ivory.vercel.app",
    description: "An Airbnb-style stays browser with search and filter controls.",
  },
  {
    title: "Chatsapp",
    img: Chatsapp,
    link: "https://chat-socket-io-front-tau.vercel.app",
    description: "A real-time chat application powered by Socket.IO.",
  },
  {
    title: "WeatherApi",
    img: WeatherApi,
    link: "https://sage-ganache-e8f271.netlify.app",
    description: "Live weather forecasts pulled from a public weather API.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container-section">
        <SectionTitle
          overline="Projects"
          title="Things I&apos;ve built"
          subtitle="A selection of apps I designed and developed — hover a card to preview, click to open the live demo."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
