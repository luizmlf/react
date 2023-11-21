import './App.css'
//1 - Config do react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <h1>React Router</h1>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
