import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Card from './components/Card'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/:user' element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
