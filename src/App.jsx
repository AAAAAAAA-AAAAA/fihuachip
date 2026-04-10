import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Solutions from './components/Solutions'
import Stats from './components/Stats'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
