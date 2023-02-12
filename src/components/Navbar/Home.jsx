import React, {useEffect, useState } from 'react'
import './Home.css'
import './Login.css'
import { Link } from 'react-router-dom'
// import MetaMaskAuth from '../MetaMaskLogin/auth.jsx'

async function connect(onConnected) {
    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    }
  
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  
    onConnected(accounts[0]);
  }
  
  async function checkIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
  
      if (accounts.length > 0) {
        const account = accounts[0];
        onConnected(account);
        return;
      }
  
    }
  }
  
  
  export  function MetaMaskAuth({ onAddressChanged }) {
    const [userAddress, setUserAddress] = useState("");
  
    useEffect(() => {
      checkIfWalletIsConnected(setUserAddress);
    }, []);
    
    // useEffect(() => {
    //   onAddressChanged(userAddress);
    // }, [userAddress]);
  
    return userAddress ? (
      <div  style={{margin: "1vh", width: '1000px'}}>
        Connected with <Address userAddress={userAddress} />
      </div>
    ) : (
       <Connect setUserAddress={setUserAddress}/>
    );
  }
  
  
  function Connect({ setUserAddress }) {
    return (
      <Link to="/loginselector">
        <button className='MetaMaskConnect' onClick={() => connect(setUserAddress)}>
          Connect to MetaMask
        </button>
      </Link>
    );
  }
  
  
  function Address({ userAddress }) {
    return (
      <span className=' address'>{userAddress.substring(0,64)}{userAddress.substring(userAddress.length - 0)}</span>
    );
  }




function Home() {
    return (
        <>
        <div className='Navbar-HomeContent'>
            <h2 className='no-margin-sticky Top-Main-title'>Welcome to Landr</h2>
            <h1 className='no-margin-sticky Main-title'>Next Gen Solution For Land Registration Using Blockchain</h1>
            <h3 className='no-margin-sticky Home-Intro'>   
                Land Registration and Trading  have never been so easy and secure.<br/>
                We believe that blockchain technology in conjunction with Aadhar card 
                would be an excellent tool for increasing transparency in government 
                functions, eliminating fraud and corruption, and enhancing socio economic advantages. 
            </h3>
            <Link to='/MetaMaskAuth' className='No-Underline'>
                <button className='Get-Started-Btn'>Get Started</button>
            </Link>
            <MetaMaskAuth />

            {/* <h2>Hoverable Dropdown</h2>
            <p>Move the mouse over the button to open the dropdown menu.</p>

            <ul className="dropdown">
                <li><a href="#">Dropdown</a>
                    <ul>
                        <li className="dropdown1"><a href="#">Menu - 1</a></li>
                        <li className="dropdown2"><a href="#">Menu - 2</a></li>
                        <li className="dropdown3"><a href="#">Menu - 3</a></li>
                        <li className="dropdown4"><a href="#">Menu - 4</a></li>
                    </ul>
                </li>
            </ul>
 */}

            </div>
                    </>
    )
}



export default Home




