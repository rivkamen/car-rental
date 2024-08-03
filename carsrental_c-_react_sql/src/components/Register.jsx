import React, { useState, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { addLandlord } from "../axios/landlordAxios";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';

const Register=(props)=> {
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const [visibleName, setVisibleName] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visiblePasswordA, setVisiblePasswordA] = useState(false);
    const [visiblePhone, setVisiblePhone] = useState(false);
    const [visibleEmail, setVisibleEmail] = useState(false);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    var isEqual = false;

    const wantToSave = async () => 
    {
        console.log("email",value4.charAt(value4.indexOf("@")))
        console.log("email1",value4.charAt(value4.indexOf("@")+1))
        var flag = true
        if (value1 === '') {
            setVisibleName(true)
            flag = false
        }
        else {
            setVisibleName(false)
        }
        if (value2 === '') {
            setVisiblePassword(true)
            flag = false
        }
        else {
            setVisiblePassword(false)
        }
        if (value6 === '') {
            setVisiblePasswordA(true)
            flag = false
        }
        else {
            setVisiblePasswordA(false)
        }
        if (value3 === '') {
            setVisiblePhone(true)
            flag = false
        }
        else {
            setVisiblePhone(false)
        }
        if (value4 === ''||value4.indexOf("@")!==value4.lastIndexOf("@")||value4.indexOf("@")===0||value4.charAt(value4.indexOf("@")+1)==='.'||value4.indexOf("@")>value4.lastIndexOf(".")) {
              debugger
            setVisibleEmail(true)
            flag = false
        }
        else {
            setVisibleEmail(false)
        }
        if (flag) {
            setIsLoading(true)
            await addLandlord({ 'Password': value2, 'Name': value1, 'Phone': value3.split("-")[0] + value3.split("-")[1], 'Email': value4, 'Address': value5 }, setIsLoading)
                .then((e) => {
                    debugger
                    if (e.status != 200) {
                        props.setDetailError("Data Problem, please try again")
                    }
                    else {
                        props.setDetailSuccess("you added successfully:)")
                    }
                    setIsLoading(false)
                    props.setVisible(false)
                })
        }
    }

    const footerContent = (
        <div>
            <Button label="Cencel" severity="danger" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Save" severity="success" icon="pi pi-check" onClick={() => wantToSave()} className="p-button-text" autoFocus />
        </div>
    );

    const checkIfS = (e, id) => {
        if (id === 'passwordAgain')
            setValue6(e);
        else
            setValue2(e);
        if (value2 !== e) {
            document.getElementById('passwordAgain').style.borderColor = "red"
            isEqual = false;
        }
        else {
            document.getElementById('passwordAgain').style.borderColor = "#D4D9DE";
            isEqual = true;
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Button style={{ backgroundColor: "var(--orange-500)", borderColor: "var(--surface-400)", boxShadow: "var(--surface-600)" }} label="SignUp" icon="pi pi-user-plus" onClick={() => setVisible(true)} />
            <Dialog header="Register" visible={visible} onHide={() => setVisible(false)}
                style={{ width: '30vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} footer={footerContent}>

                {isLoading ? <ProgressSpinner style={{ position: "center" }} /> :
                    <p className="m-0">
                        <br></br>
                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                <InputText id="username" value={value1} onChange={(e) => setValue1(e.target.value)} />
                                <label htmlFor="username">*Username</label>
                            </FloatLabel>
                        </div>

                        {visibleName ? <small className="card flex justify-content-center" id="username-help" style={{ color: "red" }} >
                            Name is required.
                        </small> : <></>}
                        <br />
                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                <InputText type="password" id="password" value={value2} onChange={(e) => checkIfS(e.target.value, e.target.id)} />
                                <label htmlFor="password">*Password</label>
                            </FloatLabel>
                        </div>

                        {visiblePassword ? <small className="card flex justify-content-center" id="password-help" style={{ color: "red" }} >
                            Passwors is required.
                        </small> : <></>}
                        <br></br>

                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                <InputText type="password" className="no-copy-paste" id="passwordAgain" value={value6} onPaste={handleChange} onChange={(e) => checkIfS(e.target.value, e.target.id)} />
                                <label htmlFor="password">*Password Again</label>
                            </FloatLabel>
                        </div>

                        {visiblePasswordA ? <small className="card flex justify-content-center" id="username-help" style={{ color: "red" }} >
                            Password again is required.
                        </small> : <></>}
                        <br></br>
                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                {/* <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} /> */}
                                <InputMask mask="999-9999999" id="phone" value={value3} onChange={(e) => setValue3(e.target.value)} />
                                <label htmlFor="username">*Phone</label>
                            </FloatLabel>
                        </div>
                        {visiblePhone ? <small className="card flex justify-content-center" id="phone-help" style={{ color: "red" }} >
                            Phone is required.
                        </small> : <></>}
                        <br></br>
                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                <InputText id="email" value={value4} onChange={(e) => setValue4(e.target.value)} />
                                <label htmlFor="username">Email</label>
                            </FloatLabel>
                        </div>
                        {visibleEmail ? <small className="card flex justify-content-center" id="Email-help" style={{ color: "red" }} >
                            Email is invalid.
                        </small> : <></>}
                        <br></br>
                        <div className="card flex justify-content-center">
                            <FloatLabel>
                                <InputText id="address" value={value5} onChange={(e) => setValue5(e.target.value)} />
                                <label htmlFor="username">Address</label>
                            </FloatLabel>
                        </div>
                    </p>}
            </Dialog>
        </div>
    )
}
export default Register
