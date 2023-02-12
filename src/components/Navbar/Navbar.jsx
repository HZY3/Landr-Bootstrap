import React from 'react'
import './App.css'
import logo from './assets/logo.jpg'
import { Link } from 'react-router-dom'
import "./Home.css"

function Navbar() {
    return (
        <nav>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="./App.css" />

            </head>
            <ul className="Nav-Menu font-change">
                <img src= { logo } />
                <div className='Nav-MiddleMenu'>
                    <li id='Nav-Home'>
                        <Link to='/' className='No-Underline'>Home</Link>
                    </li>

                    <Link to='/LandRegistration' className='Nav-MiddleMenu No-Underline'>
                        <li id='Nav-Why'>
                            <button className='Nav-MiddleMenu'>WHY BLOCKCHAIN</button>
                        </li>
                    </Link>

                    <li id='Nav-About'>
                        <a href= "" className='No-Underline'>About</a>
                    </li>
                </div>

                    <li id='Nav-LogIn'>
                    <Link to='/loginselector' className='No-Underline'>
                    <button className='Main-Login-Btn-Outer'>Log-In / Sign-Up
                        {/* <Link to='/login' className='Main-Login-Btn-Inner '>Login / Signup</Link> */}
                    </button>
                    </Link>
                    {/* <Link to='/login' className='No-Underline'>Login / Signup</Link> */}
                    </li>
            </ul>
        </nav>
    )
}


export default Navbar

