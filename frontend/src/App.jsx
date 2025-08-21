import React from 'react'
import './App.css';
import {Toaster} from 'react-hot-toast';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/success" element= {<Success/>}/>
        <Route path="*" element= {<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
