import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Car.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Car = ({ car }) => {
    const { name, picture, price } = car;
    return (
        <div className='car border border-1 rounded-2'>
            <img className='rounded-2' src={picture} alt="" />
            <div className='car-info'>
                <h3 className='fs-4 fw-bold'>{name}</h3>
                <h5 className='fs-5'>Price: {price} Millions</h5>
            </div>
            <button className='w-100 border-0 btn-text bg-success d-flex justify-content-center align-items-center'>
                <p className='text-white fs-6 fw-bold mb-0 me-2'>Add To Cart</p>
                <FontAwesomeIcon className='text-white' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;