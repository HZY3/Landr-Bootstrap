import React from 'react'
import "./Home.css"
import "./Login.css"
import "./LoginSelector.css"
import LandInspector from "./LandInspector/LandInspector.jsx" 
import { Link, Routes, Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { CDropdown, CButton, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react';
import DropdownButton from 'react-bootstrap/DropdownButton';


export function LandSelector2() {
  return (
    <Link to="/LandInspector" className='No-Underline'>Land Inspector</Link>
  )
  }

export default function LoginSelector () {
  return (
    <>
    <div className='Login-Selector' >

      <DropdownButton id="dropdown-basic-button" title="User ">
      <Link to="/UserLogin" className='No-Underline'>
        <Dropdown.Item href="#/action-1">New User</Dropdown.Item>
        </Link>
        <Dropdown.Item href="#/action-2">Existing User</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3"></Dropdown.Item> */}
      </DropdownButton>

      {/* LandInspector Button  */}
      <DropdownButton id="dropdown-basic-button" title="Land Inspector">
      <Link to="/LandInspector" className='No-Underline'>
        <Dropdown.Item href="#/action-1">Land Inspector Apply</Dropdown.Item>
        </Link>
        <Dropdown.Item href="#/action-2">Log-In</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </DropdownButton>
 
      <DropdownButton id="dropdown-basic-button" title="Contract Owner">
      <Link to="/LandInspector" className='No-Underline'>
        <Dropdown.Item href="#/action-1">Log-In</Dropdown.Item>
        </Link>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </DropdownButton>
    </div>
    </>
  )
}
