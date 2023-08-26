
import React from 'react'
import './App.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </Router>
}

export default App