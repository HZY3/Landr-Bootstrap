import React from 'react'
import './Home.css'
import './Login.css'


function Home() {
    return (
        <div className='Navbar-HomeContent'>
            <h2 className='no-margin-sticky Top-Main-title'>Welcome to Landr</h2>
            <h1 className='no-margin-sticky Main-title'>Next Gen Solution For Land Registration Using Blockchain</h1>
            <h3 className='no-margin-sticky Home-Intro'>   
                Land Registration and Trading  have never been so easy and secure.<br/>
                We believe that blockchain technology in conjunction with Aadhar card 
                would be an excellent tool for increasing transparency in government 
                functions, eliminating fraud and corruption, and enhancing socio economic advantages. 
            </h3>
            <button className='Get-Started-Btn Login-Btn'>Get Started -></button>
        </div>
    )
}



export default Home

