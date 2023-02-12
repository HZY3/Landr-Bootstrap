import React from 'react'
import './LandInspector.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'


export default function LandInspector () {
  return (
    <div className='LandSelector'>
      <div className="mb-2">
        <h1>Add Land Inspector</h1>
        <br />
        <Form.Control className='LandInspector-Details-Input' size="lg" type="text" placeholder="Address" />
        <br />
        <Form.Control size="lg" type="text" placeholder="Name" />
        <br />        
        <Form.Control size="lg" type="text" placeholder="Age" />
        <br />  
        <Form.Control size="lg" type="text" placeholder="Wallet Address" />
        <br />  
        <Form.Control size="lg" type="text" placeholder="City" />
        <br />  
        <br /> 
        <Link to="/LoginSelector" className='No-Underline'>
          <Button className='LandInspector' variant="primary" size="lg">Back</Button>
        </Link>

        <Button className='LandInspector' variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </div>
  )
}
