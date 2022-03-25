import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cars.css';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    return (
        <div className='cars'>
            <div className="cars-container mb-5">
                {
                    cars.map(car => <Car key={car.id} car={car}></Car>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart Container</h1>
            </div>
        </div>
    );
};

export default Cars;