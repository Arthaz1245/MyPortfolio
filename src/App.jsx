import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
