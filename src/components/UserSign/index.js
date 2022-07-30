import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/index'
import './style.css';


export default function index() {
    return (
        <div className='user-sign'>
            <div className='caption'>
                <h2>LOG IN</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>SIGN IN</Link>
            </div>
            <div className='container'>
                <LogIn/>
            </div>
        </div>
    )
}
