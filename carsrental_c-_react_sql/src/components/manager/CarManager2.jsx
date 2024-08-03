

// import React, { useState } from 'react';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import classNames from 'classnames';
// import RentCard from './RentCar';
// import { useNavigate } from 'react-router-dom';



// const Car = (props) => {
//     const { car } = props;
//     const [visible, setVisible] = useState(false);
//     const navigate = useNavigate();
//     const handleNavigate = () => {
//         navigate('/form', { state: { carr: car } });
//     };
//     return (
//         <div className="col-12" key={car.id}>
//             <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4')}>
//                 {/* <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={car.imageUrl} alt={car.name} /> */}
//                 <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
//                     <div className="flex flex-column align-items-center sm:align-items-start gap-3">
//                         <div className="text-2xl font-bold text-900">{car.name}</div>
//                     </div>
//                     <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
//                         <span className="text-2xl font-semibold">${car.price}</span>
//                         <Button label="להשכרה" className="p-button-rounded p-button-info" onClick={handleNavigate} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Car;
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import './Car.css';
import  { deleteCar} from '../../axios/carAxios';


const CarManager = (props) => {
    const { car } = props;
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/form', { state: { carr: car } });
    };
   
    const deleteCar1=async() =>{ 
         await deleteCar(car.carId);
         window.location.reload(true)}
    return (
        <>

        <Card className="p-mb-3" key={car.id} style={{ border: '1px solid #ccc', borderRadius: '5px', width: '300px' }}>
            <div className="p-grid p-align-center">
                <div className="p-col">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`http://localhost:3000/images/${car.imageUrl}`} alt={car.name} />
                </div>
                <div className="p-col">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{car.name}</div>
                        <div className="flex align-items-center gap-3">
                            {/* Add any additional elements here */}
                        </div>
                    </div>
                </div>
                <div className="p-col">
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold">₪{car.price}</span>
                        <Button label="מחיקת מוצר" className="p-button-rounded p-button-info" onClick={deleteCar1} />
                    </div>
                </div>
            </div>
        </Card></>
    );
};

export default CarManager;



