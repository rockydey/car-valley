import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ vehicle, handleTrash }) => {
    const { name, picture } = vehicle;
    return (
        <div className='cart d-flex justify-content-between align-items-center mx-lg-3 mx-1'>
            <img className='rounded-pill' src={picture} alt="" />
            <h4 className='fs-5 my-lg-3 my-2'>{name}</h4>
            <FontAwesomeIcon className='trash' onClick={() => handleTrash(vehicle)} icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;