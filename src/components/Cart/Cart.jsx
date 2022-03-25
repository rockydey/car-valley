import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ vehicle }) => {
    const { name, picture } = vehicle;
    return (
        <div className='cart d-flex justify-content-between align-items-center mx-3'>
            <img className='rounded-pill' src={picture} alt="" />
            <h4 className='fs-5 my-3'>{name}</h4>
            <FontAwesomeIcon className='trash' icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;