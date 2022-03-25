import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='fs-1 fw-bold mb-2 text-center'>Welcome To <span className='text-success'>CarDehko</span></h1>
            <p className='fs-5 fw-bold mb-5 text-center'>Presenting Premium and Wonderful Cars</p>
        </div>
    );
};

export default Header;