import { useState } from 'react'
import React from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import logo from './assets/logo.jpg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="./App.css" />

            </head>
        
            <ul className="Nav-Menu">
                <img src= { logo } />
                <div className='Nav-MiddleMenu'>
                    <li id='Nav-Home'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a href= "google.com">Why Blockchain?</a>
                    </li>
                    <li id='Nav-About'>
                        <a href= "google.com">About</a>
                    </li>
                </div>
                    <li id='Nav-LogIn'>
                    <>
                        <Link to='/login'>Login</Link>
                    </>
                    </li>
            </ul>

        </nav>
    )
}



export default Navbar

