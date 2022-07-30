import React from 'react';
import {Button,Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function LogIn() {
    return (
        <Form>
            <Form.Group className=" mb-3 form-item">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <i className="fa-solid fa-envelope"></i>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-item">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" required />
                <i className="fa-solid fa-key"></i>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign In
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Button>
            <div className='form-link'>
                <NavLink to='/user-register'>
                    Create Account  
                    <i className="fa-solid fa-pencil"></i>  
                </NavLink>
                <NavLink to='/forgot-password'>
                    Forgot Password 
                    <i className="fa-solid fa-lock"></i> 
                </NavLink>
            </div>
        </Form>
    );
}