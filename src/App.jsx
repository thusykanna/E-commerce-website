import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Collections' element={<Collections/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Product/:ProductId' element={<Product/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/Orders' element={<Orders/>} />
        <Route path='/Navbar' element={<Navbar/>} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App