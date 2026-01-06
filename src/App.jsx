import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'

function App() {
  const movieNumber = 11;


  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/favorites' element={<Favorites/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App
