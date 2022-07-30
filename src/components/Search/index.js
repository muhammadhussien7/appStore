import React, { useState , Fragment} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import './style.css';

function OffCanvasExample({...props }) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <Link onClick={handleShow} to='#'> 
                <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <div>
                    <form className='search-form'>
                        <input type="search" placeholder="Enter Your Search Keyword..." required />
                        <button> <i className="fa-solid fa-magnifying-glass"></i> </button>
                    </form>
                </div>
            </Offcanvas>
        </Fragment>
    );
}

export default function Search() {
    return (
        <Fragment>
            {['top'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </Fragment>
    );
}
