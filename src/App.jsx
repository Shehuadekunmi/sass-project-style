
import React from 'react'
import './App.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Head from './pages/category-headphone/Head'
import Speaker from './pages/speaker/Speaker'
import Earphone from './pages/Earphones/Earphone'
import Headdetails from './pages/headdetails/Headdetails'
import Headdetails2 from './pages/headdetails2/Headdetails2'
import Headdetails3 from './pages/headdetails3/Headdetails3'
import Speakerdetails from './pages/speakerdetails/Speakerdetails'
import Speakerdetails2 from './pages/speakerdetails2/Speakerdetails2'
import Earphonesdetails from './pages/earphonedetails/Earphonesdetails'

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/head' element={<Head/>}/>
      <Route path='/speaker' element={<Speaker/>}/>
      <Route path='/earphone' element={<Earphone/>}/>
      <Route path='/headdetails' element={<Headdetails/>}/>
      <Route path='/headdetails2' element={<Headdetails2/>}/>
      <Route path='/headdetails3' element={<Headdetails3/>}/>
      <Route path='/speakerdetails' element={<Speakerdetails/>}/>
      <Route path='/speakerdetails2' element={<Speakerdetails2/>}/>
      <Route path='/eardetails' element={<Earphonesdetails/>}/>
    </Routes>
  </Router>
}

export default App