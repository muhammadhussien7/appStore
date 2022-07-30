import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function index() {
    return (
        <div className='page-not-found'>
            <container>
                <div className='page-content'>
                    <h2>4<i className="fa-solid fa-circle-radiation"></i>4</h2>
                    <h2>That Page Can’t be found!</h2>
                    <p>It looks like nothing was found at this location.</p>
                    <NavLink to='/'>Go To Home</NavLink>
                </div>
            </container>
        </div>
    )
}
