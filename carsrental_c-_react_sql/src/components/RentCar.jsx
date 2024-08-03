

import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';
import {addRenting, getAllRentings} from '../axios/rentingAxios'
import { useLocation, useNavigate } from 'react-router-dom';
import {getAllModels} from '../axios/modelAxios'
import swal from 'sweetalert';
const RentCard = () => {
   
const location = useLocation();
  const { state } = location;
  const car = state ? state.carr : null;

 const [rent,setRent]=useState()
 const [rents,setRents]=useState()

    const [selectedColor, setSelectedColor] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null); 
       const [adding,setAdding]=useState(0)
       const [model,setModel]=useState()
       const [mode,setMode]=useState()

    const [price,setPrice]=useState(car.price)
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    const navigate = useNavigate();

    const categories = [
        { name: 'כסא תינוק', key: 'A' },
        { name: 'קוסטר', key: 'M' },
        { name: 'נהג', key: 'P' },
        { name: 'waze', key: 'R' },
        { name: 'כיסוי נזקים', key: 'l' }
    ];
    const [selectedCategories, setSelectedCategories] = useState({});


const onCategoryChange = (e) => {
    const key = e.value.key;
    const isChecked = e.checked;
    const categoryPriceChange = isChecked ? 500 : -500;

    if (isChecked) {
        setSelectedCategories({ ...selectedCategories, [key]: true });
        setPrice(prevPrice => prevPrice + categoryPriceChange); // Update price using previous state
    } else {
        const updatedCategories = { ...selectedCategories };
        delete updatedCategories[key];
        setSelectedCategories(updatedCategories);
        setPrice(prevPrice => prevPrice + categoryPriceChange); // Update price using previous state
    }
};



useEffect(() => {
    const fetchDataModel = async () => {
        try {
            const data = await getAllModels();
            if (Array.isArray(data)) {
                setModel(data);
            } else {
                console.error('Data fetched is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    fetchDataModel();
}, []);
useEffect(() => {
    const fetchDataRent = async () => {
        try {
            const datar = await getAllRentings();
            if (Array.isArray(datar)) {
                setRents(datar);
            } else {
                console.error('Data fetched is not an array:', datar);
            }
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    };

    fetchDataRent();
}, []);
useEffect(() => {
    console.log("Selected Categories:", selectedCategories);
    console.log("Adding:", adding);
}, [selectedCategories, adding]);

useEffect(() => {
    if (car) {
        console.log("yehi");
        console.log(car);
    }
}, [car]);

// useEffect(() => {
//     if (model) {
//         const mod = model.find(m => m.modelId === car.modelId);
//         setMode(mod)
//     }
// }, [model, car]);
// useEffect(() => {
//     console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");

//     if (rents) {
//         const ren = rents.find(r => r.carId === car.carId).then(c=>({s:c.startDate,e:c.returnDate}));
//         console.log("rennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//         console.log(ren);
//         setRent(ren)
//     }
// }, [rents, car]);
// useEffect(() => {
//     console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");

//     if (rents) {
//         const ren = rents.map(r => r.carId === car.carId);
//         console.log("rennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//         console.log(ren);
//         if (ren) {
//             setRent({ startDate: ren.startDate, returnDate: ren.returnDate });
//             console.log(rent);
//         }

//     }
// }, [rents, car]);
useEffect(() => {
    console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");

    if (rents) {
        const filteredRents = rents.filter(r => r.carId === car.carId);
        console.log("rennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        console.log(filteredRents);
        
        if (filteredRents.length > 0) {
            const ren = filteredRents.map(fr=>({ startDate: fr.rentingDate, returnDate: fr.returnDate })) // Assuming you only want the first matching rent
            setRent(ren);
            console.log(rent);
        }
    }
}, [rents, car]);




const addrenting = async () => {
    const selectedCategoriesKeys = Object.keys(selectedCategories);
    const babySeat = selectedCategoriesKeys.includes('A');
    const koster = selectedCategoriesKeys.includes('M');
    const addDriver = selectedCategoriesKeys.includes('P');
    const damages = selectedCategoriesKeys.includes('l');
    const wase = selectedCategoriesKeys.includes('R');
    console.log("logggggggggg");
    console.log(localStorage.getItem("userId"));
console.log(startDate.getFullYear());
console.log(returnDate);
console.log(babySeat);
console.log(car.carId);
const year = startDate.getFullYear();
const month = (startDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it is zero-based
const day = startDate.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
const yearr = returnDate.getFullYear();
const monthr = (returnDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it is zero-based
const dayr = returnDate.getDate().toString().padStart(2, '0');
const formattedDater = `${yearr}-${monthr}-${dayr}`;
    await addRenting({
        LandlordId: sessionStorage.getItem("userId"),
        RentingDate: formattedDate,
        ReturnDate: formattedDater,
        CarId: car.carId,
        BabySeat: babySeat,
        Koster: koster,
        AddDriver: addDriver,
        Damages: damages,
        Wase: wase
    });
};

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);
var ifRent=undefined;
    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    const handleDialogHide = () => {

        navigate('/catalog')
        // setVisible(false);
    };
    const handleOK = async() => {
        const s= new Date(startDate)
        const e= new Date(returnDate)
if(rent){
        const r=await rent.map(r=> ({s:new Date(r.startDate),
         e:new Date(r.returnDate)}))
         ifRent = r.find(r =>
            (r.s < s && r.e > s) || 
            (r.s < e && r.e > e)
        )}
        
        // const ifRent=await rent.find(r=>r.startDate<startDate && r.returnDate>startDate || r.startDate<returnDate && r.returnDate>returnDate)
        console.log("ifRent");
        console.log(ifRent);
        if(returnDate-startDate>-1 && ifRent==undefined){
            try{ await addrenting()
                 alert("הזמנה בוצעה בהצלחה!")
            navigate('/end')
        }
       
        catch(ex){
            swal("אירעה שגיאה", "נסה שנית", "error");    }
         
     
        } 
           
        else{
            if(returnDate-startDate<-1)
            swal("!תאריך החזרה לפני תאריך השכרה", "אנא הזן תאריכים תקינים", "error");
        else{
            swal("תפוס","בחר רכב אחר", "error");

        }
             
        }
    
       
        // setVisible(false);
    };
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
/*const originalDate = new Date("Wed Aug 21 2024 00:00:00 GMT+0300 (שעון ישראל (קיץ))");
const year = originalDate.getFullYear();
const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it is zero-based
const day = originalDate.getDate().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate); // Output: "2024-08-21"
 */
    return (
        <div dir='rtl' style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card title={car.name} style={{ width: '60vh' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flex: '1', marginRight: '1rem' }}>
                    <p>דגם: {mode ? mode.modelName : ""}</p>                       

                        <div className="flex flex-column gap-3">
                            <p>תוספות:</p>
                            {categories.map((category) => (
                                <div key={category.key} className="flex align-items-center">
                                    &nbsp; &nbsp; &nbsp;
                                    <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories[category.key]} />
                                    <label htmlFor={category.key} className="ml-2">
                                        {category.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <br/><br/><br/>

                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: '1rem' }}>
                                <p>תאריך קבלה:</p>
                                <Calendar dateFormat="dd/mm/yy" value={startDate} onChange={(e) => setStartDate(e.value)} minDate={today} maxDate={maxDate} readOnlyInput style={{ width: '200px' }} />
                            </div>&nbsp;&nbsp;
                            <div>
                                <p>תאריך החזרה:</p>
                                <Calendar dateFormat="dd/mm/yy" value={returnDate} onChange={(e) => setReturnDate(e.value)} minDate={today} maxDate={maxDate} readOnlyInput style={{ width: '200px' }} />
                            </div>
                        </div>
                        <p>מחיר: {price} ₪</p>
                    </div>
                    <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`http://localhost:3000/images/${car.imageUrl}`} alt={car.name} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button label="בצע" icon="pi pi-check" style={{ width: "150px" }} onClick={handleOK} />&nbsp;&nbsp;
                    <Button label="לקטלוג" severity="secondary" icon="pi pi-times" style={{ width: "150px" }} onClick={handleDialogHide} />
                </div>
            </Card>
        </div>
    );
};
export default RentCard;
// import React, { useState, useEffect } from 'react';
// import { getAllCars } from '../axios/carAxios';
// import { getModelById } from '../axios/modelAxios';
// import Car from './Car';
// import './Catalog.css';
// import { getAllRentings } from '../axios/rentingAxios';
 
// const Catalog = () => {
//     const [cars, setCars] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredCars, setFilteredCars] = useState([]);
//     const[filteredCarDates,setFilteredCarDates]=useState([])
//     const [d,setD]=useState()
// const [rent,setRent]=useState()
// // const filterDates = async (cars, d) => {
// //     let filteredDates = [];
// //     // for (const car of cars) {
// //     //     const modelName = await getModelName(car.modelId);
// //     //     if (modelName.toLowerCase().includes(searchTerm.toLowerCase())) {
// //     //         filteredCars.push(car);
// //     //     }
// //     // }
// //     filteredDates=rent.map(r=>{if(d>=r.rentingDate&&d<=r.returnDate){return r.carId}} )
// //     return filteredDates;
// // };
// // const filterDates = async (cars, d) => {
// //     let filteredDates = rent.filter(r => d >= r.rentingDate && d <= r.returnDate);
// //     return filteredDates.map(r => r.carId);
// // };
// const filterDates = async (cars, d) => {
//     if (!rent) {
//         return []; // Return an empty array if rent is undefined
//     }

//     let filteredDates = rent.filter(r => d >= r.rentingDate && d <= r.returnDate);
//     return filteredDates.map(r => r.carId);
// };

//     const filterCars = async (cars, searchTerm) => {
//         const filteredCars = [];
//         for (const car of cars) {
//             const modelName = await getModelName(car.modelId);
//             if (modelName.toLowerCase().includes(searchTerm.toLowerCase())) {
//                 filteredCars.push(car);
//             }
//         }
//         return filteredCars;
//     };
 
//     const getModelName = async (modelId) => {
//         const res = await getModelById(modelId);
//         return res.modelName;
//     };
 
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getAllCars();
//                 if (Array.isArray(data)) {
//                     setCars(data);
//                 } else {
//                     console.error('Data fetched is not an array:', data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching car data:', error);
//             }
//         };
 
//         fetchData();
//     }, []);
//     useEffect(() => {
//         const fetchDataRent = async () => {
//             try {
//                 const dataRent = await getAllRentings();
//                 if (Array.isArray(dataRent)) {
//                     setRent(dataRent);
//                 } else {
//                     console.error('Data fetched is not an array:', dataRent);
//                 }
//             } catch (error) {
//                 console.error('Error fetching car data:', error);
//             }
//         };
 
//         fetchDataRent();
//     }, []);
 
//     useEffect(() => {
//         const updateFilteredCars = async () => {
//             const filtered = await filterCars(cars, searchTerm);
//             setFilteredCars(filtered);
//         };
 
//         updateFilteredCars();
//     }, [searchTerm, cars]);
 
//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };
//     useEffect(() => {
//         // const updateFilteredDates = async () => {
//         //     const filteredRent = await filterDates(cars, d);
//         //     const goodCars=cars.map(c=>{if(c.carId.includes(filteredRent)){console.log("no")}else{c}})
//         //     setFilteredCarDates(goodCars);
//         // };
//         // const updateFilteredDates = async () => {
//         //     const filteredRent = await filterDates(cars, d); // Assuming filterDates is a correct function
//         //     const goodCars = cars.filter(c => !filteredRent.includes(c.carId)); // Filtering out cars based on filteredRent
//         //     setFilteredCarDates(goodCars);
//         // };
//         const updateFilteredDates = async () => {
//             const filteredRent = await filterDates(cars, d); // Assuming filterDates is a correct function
//             const goodCars = cars.filter(c => !filteredRent.includes(c.carId)); // Filtering out cars based on filteredRent
//             setFilteredCarDates(goodCars);
//         };
        
        
       
//         updateFilteredDates();
//     }, [searchTerm, rent]);
//     return (
//         <> <input
//                 type="text"
//                 placeholder="Search cars..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//             /><br/>
//         <div className="catalog">
           
//             {filteredCars.length === 0 ? (
//                 <p>No cars found.</p>
//             ) : (
//                 filteredCars.map((car) => <Car car={car} key={car.carId} />)
//             )}
//         </div></>
//     );
// };
 
// export default Catalog;