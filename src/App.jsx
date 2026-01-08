import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Home from './Home'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'


function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("parkhi-cart");
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    localStorage.setItem("parkhi-cart", JSON.stringify(cart));
  }, [cart]);

  return(
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/about' element={<About />} />
          <Route path = '/product/:category' element={<Product cart={cart} setCart={setCart}  />} />
          <Route path= '/contact' element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
