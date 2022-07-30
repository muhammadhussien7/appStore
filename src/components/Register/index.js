import React from 'react';
import { Button , Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../UserSign/style.css';



export default function Register() {
    return (
        <div className='user-register'>
            <div className='caption'>
                <h2>CREATE ACCOUNT</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>SIGN UP</Link>
            </div>
            <div className='container'>
                <Form>
                    <div className="mb-3 form-user">
                        <Form.Group className='form-item'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name"/>
                            <i className="fa-solid fa-circle-user"></i>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='form-item'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name"/>
                            <i className="fa-solid fa-circle-user"></i>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                    </div>
                    <div className="mb-3">
                        <Form.Group className='form-item'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                            <i className="fa-solid fa-envelope"></i>
                        </Form.Group>
                        <Form.Group className='form-item'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone" required/>
                            <i className="fa-solid fa-mobile-screen-button"></i>
                        </Form.Group>
                    </div>
                    <div className="mb-3 form-user">
                        <Form.Group className='form-item'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required/>
                            <i className="fa-solid fa-key"></i>
                        </Form.Group>
                        <Form.Group className='form-item'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required/>
                            <i className="fa-solid fa-key"></i>
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Sgin Up</Button>
                </Form>
            </div>
        </div>
    )
}
