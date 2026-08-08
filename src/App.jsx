import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Main />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
