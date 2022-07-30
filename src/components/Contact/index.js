import React from 'react';
import { Link } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import './style.css';

function Contact() {
    return (
        <div className='contact'>
            <div className='caption'>
                <h2>CONTACT</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Contact</Link>
            </div>
            <iframe 
                src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title='location' width={"100%"} 
                height={"500px"}>
            </iframe>
            <div className='container'>
                <div className='contact-content row'>
                    <div className='contact-form col-12 col-md'>
                        <h2>SEND US A MESSAGE</h2>
                        <form>
                            <div className='row'>
                                <div className='form-item col col-md-12 col-lg'>
                                    <label>Name</label>
                                    <input type='text' placeholder='Enter Your Name' required/>
                                </div>
                                <div className='col col-md-12 col-lg'>
                                    <label>Mail</label>
                                    <input type='email' placeholder='Enter Your Mail' required/>
                                </div>
                            </div>
                            <textarea placeholder="Write your message here..." required></textarea>
                            <button>Send Your Message</button>
                        </form>
                    </div>
                    <div className='contact-info col-12 col-md'>
                        <h2>GET OFFICE INFO.</h2>
                        <p>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accum
                        </p>
                        <div className='contact-address'>
                            <div className='address'>
                                <i className="fa-solid fa-location-dot fa-lg"></i>
                                <h5>OUR ADDRESS</h5>
                                <p>1234 Heaven Stress, Beverly Hill.</p>
                            </div>
                            <div className='number'>
                                <i className="fa-solid fa-phone fa-lg"></i>
                                <h5>PHONE NUMBER</h5>
                                <p>1234 Heaven Stress, Beverly Hill.</p>
                            </div>
                            <div className='email'>
                                <i className="fa-solid fa-envelope fa-lg"></i>
                                <h5>EMAIL ADDRESS</h5>
                                <p>Email: Erentheme@gmail.com</p>
                                <p>Email: Erentheme@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;