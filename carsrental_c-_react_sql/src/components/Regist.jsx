import React, { useEffect, useRef, useState } from 'react';
// import { useRegisterMutation } from './authApiSlice';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { password } from 'primereact/password';
import { RadioButton } from "primereact/radiobutton";
import { useFormik } from 'formik';
import { classNames } from 'primereact/utils';
import { AutoComplete } from 'primereact/autocomplete';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import { addLandlord } from "../axios/landlordAxios";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from 'primereact/inputnumber';

const Regist = (props) => {
    const [visible, setVisible] = useState(true)
    // const { setDetailSuccess = () => {} } = props;
    

    var email = useRef('')
    var username = useRef('')
    const iduser=useRef('')
    const address=useRef('')
    const phone = useRef(null);

    const handlePhoneRef = (input) => {
      phone.current = input;
      console.log(phone);
    };
    const register = async (e) => {
        try {
            // const a={ LandlordTz: iduser.current.value, LandlordName: username.current.value, Birthdate:null, LandlordPhone: phone.current, Address: address.current.value, Email: email.current.value }
            
                  


            const response = await addLandlord({ LandlordTz: iduser.current.value, LandlordName: username.current.value, Birthdate: null, LandlordPhone: phone.current, Address: address.current.value, Email: email.current.value });
            
            if (response.status < 200 || response.status >= 300) {
                alert("Data Problem, please try again");
                // props.setDetailError("Data Problem, please try again");

            } else {
                console.log("You added successfully :)");
                // props.setDetailSuccess("You added successfully :)");
                window.location.reload(true)
            }
        } catch (error) {
            console.error(error);
            console.log("An error occurred. Please try again.");

            // props.setDetailError("An error occurred. Please try again.");
        }
    };
    
    const [addresss, setAddresss] = useState('');

    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);
    const [ingredient, setIngredient] = useState('');
    var birthDate = useRef('')
    const [value3, setValue3] = useState();
    // const year = birthDate.getFullYear();
    // const month = (startDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it is zero-based
    // const day = startDate.getDate().toString().padStart(2, '0');
    // const formattedDate = `${year}-${month}-${day}`;
    addLocale('es', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });


    
    const [textn, setTextn] = useState('')
    const [textu, setTextu] = useState('')
    const [textp, setTextp] = useState('')

    /**//*/*//*/*////////////////// ////////////////////////////////////////////////////////////*/ */
    const formik = useFormik({
        initialValues: {
            iduser: "",
            email: ""

        },
        validate: (data) => {
            let errors = {};
            if (!data.iduser) {
                console.log("iduser");
                console.log(data);
                errors.iduser = 'שדה חובה';
                

            }
           
            if (!data.email) {
                console.log("email");
                errors.email = 'שדה חובה';
            }
            console.log(data);


            return errors;
        },
        onSubmit: async () => {
            console.log("יןןןןןןןןןןןןןןןןןןןןןן");

            await register();
            setVisible(false);
            console.log("formik");

        }
    });
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };
    /****************************************************************************************** */
    const footerContent = (
        <div>
            <Button label="בטל" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="כניסה" icon="pi pi-check" type='submit' onClick={formik.handleSubmit} autoFocus />
        </div>
    );

    return (
        <div className="newUser">


            <Dialog header="הרשמה" visible={visible} style={{ minWidth: '50vw', maxWidth: '70vw', textAlign: 'center' }} onHide={() => setVisible(false)} footer={footerContent}>
                <div>
                   
                    <div className="inline-flex flex-column gap-2">

                        <label htmlFor="username" className="font-semibold">
                            שם משתמש                       
                        </label>
                        <AutoComplete id="autoCompl2"style={{ width: '400px', height: '50px' }} label="Username" inputRef={username} /> 
                    </div><br />
                    <div className="inline-flex flex-column gap-2 p-fluid">
                        <label htmlFor="id" className="font-semibold">
                            מספר זהות
                        </label>
                    <InputText keyfilter="int" style={{ width: '400px', height: '50px' }} ref={iduser} /*value={value3}*/ onValueChange={(e) => setValue3(e.value)}
                    value={formik.values.iduser}
                            name='iduser'
                            className={classNames({ 'p-invalid': isFormFieldInvalid('iduser') })}
                            onChange={(e) => {
                                setTextu(e.value)
                                formik.setFieldValue('iduser', e.value);
                            }}
                            />
                        {getFormErrorMessage('iduser')}
                    </div>
                    <div className="inline-flex flex-column gap-2 p-fluid">
                        <label htmlFor="email" className="font-semibold">
                            מייל
                        </label>
                        <InputText id="email1" style={{ width: '400px', height: '50px' }} value={formik.values.email} label="email" toggleMask
                            promptLabel="Choose a email" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex email"
                            ref={email}
                            name="email"
                            className={classNames({ 'p-invalid': isFormFieldInvalid('email') })}
                            onChange={(e) => {
                                setValue(e.target.value)
                                setTextp(e.target.value)
                                formik.setFieldValue('email', e.target.value);
                            }}
                        />
                        {getFormErrorMessage('email')}

                        
                    </div><br />
                    <div className="inline-flex flex-column gap-2" >
                        <label htmlFor="phone" className="font-semibold">
                        טלפון
                        </label>
                        {/* <InputMask id="phone" inputRef={phone} style={{ width: '400px', height: '50px' }} mask="(999) 999-9999" ></InputMask> */}
                        <InputMask 
                            id="phone" 
                                inputRef={phone} 
                                 style={{ width: '400px', height: '50px' }} 
                                 mask="(999) 999-9999" 
/>
          
                   </div><br />
                   <div className="inline-flex flex-column gap-2" >
                        <label htmlFor="phone" className="font-semibold">
                        כתובת
                        </label>
                <InputText ref={address} value={addresss} onChange={(e) => setAddresss(e.target.value)} style={{ width: '400px', height: '50px' }}/>
                    </div>
                    <div className="inline-flex flex-column gap-2" >
                        <label htmlFor="birthDate" className="font-semibold">
                        תאריך לידה
                        </label>
                        <Calendar id='calendar1' style={{ width: '400px', height: '50px' }}   dateFormat="dd/mm/yy" 
 value={date} onChange={(e) => setDate(e.value)} locale="es" inputRef={birthDate} />
                    </div><br />
                    </div>
                    


                  
                
            </Dialog>
        </div>
    )
}
export default Regist
/*

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {

    return (
        
    )
}
        
         */

