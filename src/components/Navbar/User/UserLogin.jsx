import React from 'react'
import './UserLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'


export default function UserLogin () {
  return (
    <div className='LandSelector'>
      <div className="mb-2">
        <h1>User Registration</h1>
        <br />
        <Form.Control className='UserLogin-Details-Input' size="lg" type="text" placeholder="Name" />
        <br />
        <Form.Control size="lg" type="text" placeholder="Wallet Private Address" />
        <br />        
        <Form.Control size="lg" type="text" placeholder="Age" />
        <br />  
        <Form.Control size="lg" type="text" placeholder="Aadhar Card No." />
        <br />  
        <Form.Control size="lg" type="text" placeholder="Email Address" />
        <br />  
        <br /> 
        <Link to="/LoginSelector" className='No-Underline'>
          <Button className='UserLogin' variant="primary" size="lg">Back</Button>
        </Link>

        <Button className='UserLogin' variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </div>
  )
}
