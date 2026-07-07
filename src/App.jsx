import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./index.css";

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  )
}

export default App