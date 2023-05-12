import React from "react";
import Technology from "./Technology.jsx";
import JavascriptImg from "../assets/technologies/javascript.png";
import TypescriptImg from "../assets/technologies/typescript.png";
import HtmlImg from "../assets/technologies/html5.png";
import CSSImg from "../assets/technologies/css3.png";
import NextJsImg from "../assets/technologies/nextjs.png";
import PostgreSqlImg from "../assets/technologies/postgressql.png";
import ReactImg from "../assets/technologies/react.png";
import ReduxImg from "../assets/technologies/redux.png";
import TailwindImg from "../assets/technologies/tailwind.png";
import MongoDbImg from "../assets/technologies/mongodb.png";
import NodejsImg from "../assets/technologies/nodejs.png";
const Technologies = () => {
  const technologiesArray = [
    { name: "JavaScript", image: JavascriptImg },
    { name: "TypeScript", image: TypescriptImg },
    { name: "HTML5", image: HtmlImg },
    { name: "CSS3", image: CSSImg },
    { name: "NextJs", image: NextJsImg },
    { name: "PostgreSQL", image: PostgreSqlImg },
    { name: "React", image: ReactImg },
    { name: "Redux", image: ReduxImg },
    { name: "Tailwind", image: TailwindImg },
    { name: "MongoDB", image: MongoDbImg },
    { name: "NodeJs", image: NodejsImg },
  ];
  return (
    <div id="technologies" className="w-full p-4">
      <div>
        <h1 className="text-4xl font-bold text-center text-[#13138297]">
          Skills
        </h1>
      </div>
      <div className="flex flex-wrap p-5 pl-9 md:flex-row md:items-center justify-center">
        {technologiesArray.map((t, k) => (
          <div
            key={k}
            className="border border-sky-100  rounded-full flex flex-wrap flex-row m-5 w-24 h-24 md:items-center md:justify-center"
          >
            <Technology img={t.image} title={t.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
