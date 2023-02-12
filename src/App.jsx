import React from 'react'
import './components/Navbar/App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Navbar/Login.jsx'
import Home from './components/Navbar/Home.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginSelector  from './components/Navbar/LoginSelector.jsx'
import LandInspector from './components/Navbar/LandInspector/LandInspector.jsx'
import LandRegistration from './components/Navbar/LandRegistration'
import UserLogin from './components/Navbar/User/UserLogin'



function App() {
    return (
        <div>
        <Navbar className='NavBar-Pos' /> 

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginselector' element={<LoginSelector />} />
                <Route path='/loginselector' element={<LoginSelector />} />
                    <Route path='/LandInspector' element= { <LandInspector /> } />
                    <Route path='/UserLogin' element= { <UserLogin /> } />
                    {/* <Route path='/<MetaMaskAuth' element={<MetaMaskAuth /> }/> */}
                <Route path='/LandRegistration' element={<LandRegistration />} />
            </Routes>

        </div>
    )
}



export default App

