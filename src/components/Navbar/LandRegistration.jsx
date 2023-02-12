import React from 'react'
import './LandRegistration.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'


export default function LandRegistration () {
  return (
    <>
    <div className='LandSelector'>
        <p className='TopInfo'>"Building a transparent and trustworthy land registry with blockchain"</p>
        <p className='TopInfo'> Blockchain started in 1991 as a way to store and secure digital data. Blockchain is an open ledger that several parties can access at once. One of its primary benefits is that the recorded information is hard to change without an agreement from all parties involved.
        <br/><br/> "(More information being added soon!!)"<br/> <br/>
        </p>
        <p className='TopInfoDemo'> Demo Land Registration Page Below</p>
      <div className="mb-2">
        <hr></hr>
        <h1>Register Your Land</h1>
        <br />
        <Form.Control className='LandRegistration-Details-Input' size="lg" type="text" placeholder="Owner Wallet Address" />
        <br />
        <Form.Control size="lg" type="text" placeholder="Area in Sqft" />
        <br />        
        <Form.Control size="lg" type="text" placeholder="PID" />
        <br />  
        <Form.Control size="lg" type="text" placeholder="Survey No." />
        <br />  
        <Form.Control size="lg" type="text" placeholder="Address of Property" />
        <br />  
        <Form.Control size="lg" type="text" placeholder="Price (that you wish to sell for)" />
        <br />  
        <br /> 
        <Link to="/LoginSelector" className='No-Underline'>
          <Button className='LandRegistration' variant="primary" size="lg">Back</Button>
        </Link>

        <Button className='LandRegistration' variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </div>
    </>
  )
}
