import './App.css'
import { About, Blog, Contact, Experience, Footer, Hero, Project, Research } from './pages'

function App() {

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-black">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Research />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
