import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Listings from './pages/Listings'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import HomeValue from './pages/HomeValue'
import BuyersGuide from './pages/BuyersGuide'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home-value" element={<HomeValue />} />
          <Route path="/buyers-guide" element={<BuyersGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
