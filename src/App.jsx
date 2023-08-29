
import React from 'react'
import './App.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Head from './pages/category-headphone/Head'

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/head' element={<Head/>}/>
    </Routes>
  </Router>
}

export default App