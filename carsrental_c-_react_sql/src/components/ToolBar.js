import Login from './Login';
import { Toolbar } from 'primereact/toolbar';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import logo from "./ourLogo.png";
import logo2 from "./ourLogo2.png";
import { Toast } from 'primereact/toast';
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NewDonation from './NewDonation';

export default function ToolBar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState(null);
    const [detailError, setDetailError] = useState(null);
    const [detailSuccess, setDetailSuccess] = useState(null);
    const [role, setRole] = useState("");
    const toast = useRef(null);

    useEffect(() => {
        if(localStorage.getItem("token")){
            localStorage.removeItem("token")
        }
    }, []);



    const startContent = (
        <React.Fragment>
            <img src={logo} alt="react logo" style={{ marginLeft: "11px" }} />
            <img src={logo2} alt="react logo" style={{ marginLeft: "11px" }} />
        </React.Fragment>
    );

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: `${detailSuccess}`, life: 3000 });
        setDetailSuccess(null)
    }

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${detailError}`, life: 3000 });
        setDetailError(null)
    }

    const toDonation = () => {
        setVisible(user != null)
        if (user == null)
            setDetailError("please login")
    }

    const zzzzzz=()=>{
        debugger
        navigate('/TableAllGifts')
    }

    const shoppingCart=()=>{
        if(user!=null)
            navigate('/ShoppingCart')
        else
            setDetailError("please login")
    }

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            <button  onClick={() => navigate('/', { state: { user: user } })} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-home text-2xl" ></i>
            </button>
            {<button onClick={() => shoppingCart()} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-shopping-cart text-2xl"></i>
            </button>}
            {role == "Manager" && <button onClick={() => navigate('/ShowUpdateDonors')} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-heart text-2xl"></i>
            </button>}
            {role == "Manager" && <button onClick={() => zzzzzz()} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-file-check text-2xl"></i>
            </button>}
            <button onClick={() => toDonation()} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-wallet text-2xl"></i>
            </button>
            {role == "Manager" && <button onClick={() => navigate('/Report')} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-book text-2xl"></i>
            </button>}
              {role == "Manager" && <button onClick={() => navigate('/Lottery')} className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-crown text-2xl"></i>
            </button>}
        </div>
    );

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
        
    }

    const endContent = (
        <React.Fragment>
            <label style={{ color: 'white' }}>HELLO {user != null ? user : "GUEST"}😊</label>
            {!user ? (
                <div className="flex align-items-center gap-2">
                    <Login
                        setDetailError={setDetailError}
                        setDetailSuccess={setDetailSuccess}
                        setUser={setUser}
                        setRole={setRole}
                    ></Login>
                </div>
            ) : (
                <Button label="Sign out" icon="pi pi-sign-out" onClick={() => logOut()} style={{ backgroundColor: "gray", borderColor: "var(--surface-400)", boxShadow: "var(--surface-100)" }} />

            )}
            {console.log("userbjbhb", user)}
        </React.Fragment>
    );

    return (
        <>
            <Toast ref={toast} />
            {detailSuccess ? showSuccess() : <></>}
            {detailError ? showError() : <></>}
            <Toolbar start={startContent} center={centerContent} end={endContent} className="orange-600 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--orange-600), var(--orange-400))' }} />
            {<NewDonation 
            visible={visible} 
            setVisible={setVisible}
            setDetailError={setDetailError}
            setDetailSuccess={setDetailSuccess}
            ></NewDonation>}
        </>
    );
}

