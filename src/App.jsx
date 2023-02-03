import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
import './components/Navbar/App.css'
import ReactDOM from 'react-dom'
// import logo from './assets/logo.jpg'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Navbar/Login.jsx'
import Home from './components/Navbar/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
        <div>
        <Navbar className='NavBar-Pos' /> 
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}



export default App

