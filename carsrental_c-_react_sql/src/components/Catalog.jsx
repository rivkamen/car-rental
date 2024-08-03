
import React, { useState, useEffect } from 'react';
import { getAllCars } from '../axios/carAxios';
import { getModelById } from '../axios/modelAxios';
import Car from './Car';
import './Catalog.css';

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);

    const filterCars = async (cars, searchTerm) => {
        const filteredCars = [];
        for (const car of cars) {
            const modelName = await getModelName(car.modelId);
            if (modelName.toLowerCase().includes(searchTerm.toLowerCase())) {
                filteredCars.push(car);
            }
        }
        return filteredCars;
    };

    const getModelName = async (modelId) => {
        const res = await getModelById(modelId);
        return res.modelName;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCars();
                if (Array.isArray(data)) {
                    setCars(data);
                } else {
                    console.error('Data fetched is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        };

        fetchData();
    }, []);
    

    useEffect(() => {
        const updateFilteredCars = async () => {
            const filtered = await filterCars(cars, searchTerm);
            setFilteredCars(filtered);
        };

        updateFilteredCars();
    }, [searchTerm, cars]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <> <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={handleSearch}
            /><br/>
        <div className="catalog">
           
            {filteredCars.length === 0 ? (
                <p>No cars found.</p>
            ) : (
                filteredCars.map((car) => <Car car={car} key={car.carId} />)
            )}
        </div></>
    );
};

export default Catalog;
