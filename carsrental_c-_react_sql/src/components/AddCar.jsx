// import React, { useEffect, useRef, useState } from 'react';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Checkbox } from 'primereact/checkbox';
// import { Calendar } from 'primereact/calendar';
// import {addCar} from '../axios/carAxios'
// import { ColorPicker } from 'primereact/colorpicker';
// import { InputNumber } from 'primereact/inputnumber';
// import { Toast } from 'primereact/toast';
// import { FileUpload } from 'primereact/fileupload';
// import { ProgressBar } from 'primereact/progressbar';
// import { Tooltip } from 'primereact/tooltip';
// import { Tag } from 'primereact/tag';
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from 'primereact/dropdown';
// import {getAllCompanys} from '../axios/companyAxios'
// const AddCard=()=>{
//     const [color, setColor] = useState('#40E0D0');
//     const [value1, setValue1] = useState(20);
//     const [value2, setValue2] = useState(10.50);
//     const [value3, setValue3] = useState(0);
//     const [selectedCity, setSelectedCity] = useState(null);
//     const cities = [
//         { name: 'New York', code: 'NY' },
//         { name: 'Rome', code: 'RM' },
//         { name: 'London', code: 'LDN' },
//         { name: 'Istanbul', code: 'IST' },
//         { name: 'Paris', code: 'PRS' }
//     ];

//     const numOfKilometraz=useRef()
//     const status=useRef()
//     const imageUrl=useRef()
//     const price=useRef()


//     const handleDialogHide = () => {
//         // 
//     }
//     const addCar = async(e) => {
//         await addCar({"ModelId":"","NumOfKilometraz":numOfKilometraz,"Status":true,"Color":color,"Price":price,"ImageUrl":imageUrl})
//         .then((e) => {
//             if (e.status != 200) {
//                 console.log("yes");
//             }
//             else {
//                 console.log("no");
//             }})

//     };
//     /********************************************************************************************************************************** */

//     const customBase64Uploader = async (event) => {
//         // convert file to base64 encoded
//         const file = event.files[0];
//         const reader = new FileReader();
//         let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

//         reader.readAsDataURL(blob);

//         reader.onloadend = function () {
//             const base64data = reader.result;
//         };
//     };

//     /*********************************************************************************************************************************** */
//         return(
//         <> 

// <div dir='rtl' style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'2%' }}>
//     <Card style={{ width: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//     <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>מספר רכב:</label>

//             <InputText keyfilter="int" style={{ width: '80%', marginBottom: '10px'}}/>
//             <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>בחר חברה:</label>

// <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
//     placeholder="בחר חברה" className="w-full md:w-14rem" style={{ width: '80%', marginBottom: '10px'}} />
//             <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>מודל:</label>

//             <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
//                 placeholder="בחר מודל רכב" className="w-full md:w-14rem" style={{ width: '80%', marginBottom: '10px'}} />
       
        
//         <label htmlFor="stacked-buttons" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>מחיר:</label>
//         <InputNumber inputId="stacked-buttons" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="ILS" style={{ width: '80%', marginBottom: '10px' }} />
        
//         <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>קמ"ש:</label>
//         <InputNumber inputId="integeronly" value={value3} onValueChange={(e) => setValue3(e.value)} style={{ width: '80%', marginBottom: '10px' }} />
//         <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>צבע:</label>
//         <ColorPicker value={color} onChange={(e) => setColor(e.value)} style={{ width: '80%', marginBottom: '10px'}} />
//         <br/> <br/>

//         <FileUpload style={{ width: '80%', marginBottom: '10px' }} mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        
//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', width: '100%' }}>
//             <Button label="בצע" icon="pi pi-check" style={{ width: "45%", marginRight: '5px' }} /> &nbsp;
//             <Button label="בטל" severity="secondary" icon="pi pi-times" style={{ width: "45%" }} onClick={handleDialogHide} />
//         </div>
//     </Card>
// </div>

        
//         </>
//     )
// }
// export default AddCard



// /*

//          */


import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { ColorPicker } from 'primereact/colorpicker';
import { FileUpload } from 'primereact/fileupload';
import { getAllCompanies } from '../axios/companyAxios'; // Import your axios function to fetch company data

const AddCard = () => {
    const [color, setColor] = useState('#40E0D0');
    const [value1, setValue1] = useState(20);
    const [value3, setValue3] = useState(0);
    const [selectedCity, setSelectedCity] = useState(null);
    const [companyOptions, setCompanyOptions] = useState([]); // State to hold company options
    const cities = [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ];
            const numOfKilometraz=useRef()
                const status=useRef()
                const imageUrl=useRef()
                const price=useRef()
            
            
                const handleDialogHide = () => {
                    // 
                }
                const addCar = async(e) => {
                    await addCar({"ModelId":"","NumOfKilometraz":numOfKilometraz,"Status":true,"Color":color,"Price":price,"ImageUrl":imageUrl})
                    .then((e) => {
                        if (e.status != 200) {
                            console.log("yes");
                        }
                        else {
                            console.log("no");
                        }})
            
                };
            const customBase64Uploader = async (event) => {
                        // convert file to base64 encoded
                        const file = event.files[0];
                        const reader = new FileReader();
                        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url
                
                        reader.readAsDataURL(blob);
                
                        reader.onloadend = function () {
                            const base64data = reader.result;
                        };
                    };
    useEffect(() => {
        // Fetch company data when component mounts
        getAllCompanies().then((response) => {
            // Extract company names from the response data
            const companies = response.data.map((company) => ({
                name: company.name,
                code: company.code
            }));
            // Update the companyOptions state with the fetched data
            setCompanyOptions(companies);
        }).catch((error) => {
            console.error('Error fetching company data:', error);
        });
    }, []);

    return (
        <>
            <div dir='rtl' style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                <Card style={{ width: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>מספר רכב:</label>
                    <InputText keyfilter="int" style={{ width: '80%', marginBottom: '10px' }} />

                    <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>בחר חברה:</label>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={companyOptions} optionLabel="name"
                        placeholder="בחר חברה" className="w-full md:w-14rem" style={{ width: '80%', marginBottom: '10px' }} />

                    {/* Other form fields */}
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="בחר חברה" className="w-full md:w-14rem" style={{ width: '80%', marginBottom: '10px'}} />
            <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>מודל:</label>

            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="בחר מודל רכב" className="w-full md:w-14rem" style={{ width: '80%', marginBottom: '10px'}} />
       
        
        <label htmlFor="stacked-buttons" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>מחיר:</label>
        <InputNumber inputId="stacked-buttons" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="ILS" style={{ width: '80%', marginBottom: '10px' }} />
        
        <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>קמ"ש:</label>
        <InputNumber inputId="integeronly" value={value3} onValueChange={(e) => setValue3(e.value)} style={{ width: '80%', marginBottom: '10px' }} />
        <label htmlFor="integeronly" className="font-bold block mb-2" style={{ width: '100%', textAlign: 'center' }}>צבע:</label>
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} style={{ width: '80%', marginBottom: '10px'}} />
        <br/> <br/>

        <FileUpload style={{ width: '80%', marginBottom: '10px' }} mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', width: '100%' }}>
            <Button label="בצע" icon="pi pi-check" style={{ width: "45%", marginRight: '5px' }} /> &nbsp;
            <Button label="בטל" severity="secondary" icon="pi pi-times" style={{ width: "45%" }} onClick={handleDialogHide} />
        </div>
                </Card>
            </div>
        </>
    );
};

export default AddCard;
