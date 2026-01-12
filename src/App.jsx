import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </>
  )
}

export default App