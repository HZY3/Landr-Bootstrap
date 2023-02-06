import React from 'react'
import "./Home.css"
import "./Login.css"
import "./LoginSelector.css"
import LandInspector from "./LandInspector/LandInspector.jsx" 
import { Link, Routes, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function LoginSelector () {
  return (
    <>
    <div className='Login-Selector' >
      <a className='Contract-Owner-Btn-Outer No-Underline'>
        <Link to="/UserLogin" className='Contract-Owner-Btn-Inner No-Underline'>User</Link>
      </a>

      <a className='Contract-Owner-Btn-Outer No-Underline'>
        <Link to="/LandInspector" className='Contract-Owner-Btn-Inner No-Underline'>Land Inspector</Link>
      </a>

      {/* <a className='Contract-Owner-Btn-Outer' >
        <Link to="/LandInspector" className='Contract-Owner-Btn-Inner No-Underline'>Contract Owner</Link>
      </a> */}
      
      <Dropdown className="FullBtn" as={ButtonGroup} >
        <Button  variant="success" className='Contract-Owner-Btn-Outer font-change'>Contract Owner</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
    </>
  )
}
