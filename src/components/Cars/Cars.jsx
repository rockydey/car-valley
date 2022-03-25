import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    return (
        <div>
            <div className="cars-container">
                {
                    
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Cars;