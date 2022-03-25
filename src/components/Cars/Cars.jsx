import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cars.css';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const handleAddToCart = car => {
        if (vehicles.length < 5) {
            let newVehicle = [];
            const exits = vehicles.find(vehicle => vehicle.id === car.id);
            if (!exits) {
                newVehicle = [...vehicles, car]
            } else {
                alert(exits.name + " already exits.");
                const rest = vehicles.filter(vehicle => vehicle.id !== car.id);
                newVehicle = [car, ...rest];
            }
            setVehicles(newVehicle);
        }
        else {
            alert("Maximum Five Cars");
        }
    }
    const pickOne = () => {
        const picker = Math.floor(Math.random() * 5);
        let pickValue = [];
        pickValue.push(vehicles[picker]);
        setVehicles(pickValue);
    };
    const chooseAgain = () => {
        let empty = [];
        setVehicles(empty);
    };
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);
    return (
        <div className='cars'>
            <div className="cars-container mb-5">
                {
                    cars.map(car => <Car handleAddToCart={handleAddToCart} key={car.id} car={car}></Car>)
                }
            </div>
            <div className="cart-container rounded-3">
                <h3 className='text-center my-3 fs-2 fw-bold'>Selected Cars</h3>
                {
                    vehicles.map(vehicle => <Cart key={vehicle.id} vehicle={vehicle}></Cart>)
                }
                <button onClick={() => pickOne()} className='d-block px-4 py-2 border-0 rounded-3 mx-3 bg-success text-white fw-bold my-3'>Pick One</button>
                <button onClick={() => chooseAgain()} className='d-block px-4 py-2 border-0 rounded-3 mx-3 bg-success text-white fw-bold'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cars;