
// import React, { useState, useEffect } from 'react';
// import { Dialog } from 'primereact/dialog';
// import RentCard from '../RentCar';
// import { getAllCars } from '../../axios/carAxios';
// import Car from '../Car';
// import CarManager from './CarManager2';
// import {  addCar} from '../../axios/carAxios';
// import { Button } from 'primereact/button';
// import AddCard from './AddCard';


// const CatalogManager = () => {
//     const [openPage, setOpenPage] = useState(false);
//     const [cars, setCars] = useState([]); // Initialize cars state as an empty array
// const [visible,setVisible]=useState(false)
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getAllCars(); // Fetch car data from the API
//                 if (Array.isArray(data)) {
//                     setCars(data); // Update the cars state with the fetched data if it is an array
//                 } else {
//                     console.error('Data fetched is not an array:', data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching car data:', error);
//             }
//         };

//         fetchData();
//     }, []);

 

//     return (
//         <>
// <Button label="הוספת מוצר" className="p-button-rounded p-button-info" onClick={() => setVisible(true)} />

// {visible &&<AddCard />}
//         <div className="catalog">
           
//                 {cars.length === 0 ? (
//                     <p>Loading...</p>
//                 ) : (
//                     cars.map((car) => (
//                         <CarManager car={car}/>
//                     ))
//                 )}
          
//         </div>
//         </>
//     );
// }



// export default CatalogManager;
//  // <div className="catalog">
//         //     <Dialog style={{ minWidth: '50vw', maxWidth: '70vw', height: '90%', textAlign: 'center' }} onHide={() => setVisible(false)} visible={visible}>
//         //         {cars.length === 0 ? (
//         //             <p>Loading...</p>
//         //         ) : (
//         //             cars.map((car) => (
//         //                 <Car key={car.id} car={car} setVisible={setVisible} />
//         //             ))
//         //         )}
//         //     </Dialog>
//         // </div>


import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { getAllCars } from '../../axios/carAxios';
import CarManager from './CarManager2';
import { Button } from 'primereact/button';
import AddCard from './AddCard';

const CatalogManager = () => {
    const [cars, setCars] = useState([]);
    const [visible, setVisible] = useState(false);

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

    return (
        <>
            <Button label="הוספת מוצר" className="p-button-rounded p-button-info" onClick={() => setVisible(true)} />

            {/* <Dialog header="Add Car" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <AddCard />
            </Dialog> */}
<Dialog header="Add Car" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
    <AddCard handleCloseDialog={() => setVisible(false)} />
</Dialog>

            <div className="catalog">
                {cars.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    cars.map((car) => (
                        <CarManager car={car} key={car.id} />
                    ))
                )}
            </div>
        </>
    );
}

export default CatalogManager;
