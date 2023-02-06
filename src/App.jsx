import React from 'react'
import './components/Navbar/App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Navbar/Login.jsx'
import Home from './components/Navbar/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginSelector  from './components/Navbar/LoginSelector.jsx'
import LandInspector from './components/Navbar/LandInspector/LandInspector.jsx'

function App() {
    return (
        <div>
        <Navbar className='NavBar-Pos' /> 
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginselector' element={<LoginSelector />} />
                <Route path='/LandInspector' element= { <LandInspector /> } />
            </Routes>
        </div>
    )
}



export default App

