// // import React, { useState } from "react";
// // import { Button } from 'primereact/button';
// // import { Dialog } from 'primereact/dialog';
// // import { Divider } from 'primereact/divider';
// // import { InputText } from 'primereact/inputtext';
// // import { Password } from 'primereact/password';
// // import Register from './Register';
// // import axios from 'axios';
// // import { Login } from "../axios/landlordAxios";
// // import { jwtDecode } from 'jwt-decode' // import dependency
// // import { useNavigate } from 'react-router-dom';
 
 
// // const Login2=(props)=> {
// //     const [visible, setVisible] = useState(false);
// //     const navigate = useNavigate()
 
// //     var name = "", password = ""
 
// //     const login = async () => {
// //         try {
// //             debugger
// //             const response = await Login(name, password)
// //             console.log("responseH", response);
// //             if (response.status === 200) {
// //                 let token = response.data
// //                 if (token) {
// //                     props.setDetailSuccess("you connection successfully")
// //                     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// //                      const decodedToken = jwtDecode(token);
// //                      console.log("decodedToken", decodedToken);
// //                     localStorage.setItem("token",token)
// //                     props.setUser(decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"])
// //                     props.setRole(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"])
// //                     setVisible(false)
// //                     navigate('/')
// //                 }
// //             }
// //             else {
// //                 props.setDetailError("Data problem, please try again")
// //                 setVisible(false)
// //             }
// //         }
// //         catch {
// //             props.setDetailError("Data problem, please try again")
// //             setVisible(false)
// //         }
// //     }
 
// //     return (
// //         <div className="card flex justify-content-center">
           
// //             <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} style={{ backgroundColor: "gray", borderColor: "var(--surface-400)", boxShadow: "var(--surface-100)" }} />
// //             <Dialog header=""
// //                 style={{ width: '60%', textAlign: "center" }}
// //                 visible={visible}
// //                 onHide={() => setVisible(false)}
// //             >
 
// //                 <div className="card" style={{ backgroundColor: "var(--surface-300)" }}>
// //                     <div className="flex flex-column md:flex-row">
// //                         <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
// //                             <div className="card flex justify-content-center">
// //                                 <span className="p-float-label">
// //                                     <InputText id="username" style={{ width: "100%", boxShadow: "var(--surface-400)", borderColor: "var(--surface-400)" }} onBlur={(e) => name = e.target.value} />
// //                                     <label htmlFor="username">Username</label>
// //                                 </span>
// //                             </div>
// //                             <br />
// //                             <div className="card flex justify-content-center">
// //                                 <span className="p-float-label">
// //                                     <Password id="password" feedback={false} style={{ boxShadow: "var(--surface-400)", borderColor: "var(--surface-400)" }} toggleMask onBlur={(e) => password = e.target.value} />
// //                                     <label htmlFor="password">Password</label>
// //                                 </span>
// //                             </div>
// //                             <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto" style={{ backgroundColor: "var(--orange-500)", borderColor: "var(--surface-400)", boxShadow: "var(--surface-400)" }} onClick={() => login()}></Button>
// //                         </div>
// //                         <div className="w-full md:w-2">
// //                             <Divider layout="vertical" className="hidden md:flex" >
// //                                 <b  >OR</b>
// //                             </Divider>
// //                         </div>
// //                         <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
// //                             <Register
// //                                setDetailError={props.setDetailError}
// //                                setDetailSuccess={props.setDetailSuccess}
// //                                 setVisible={setVisible}
// //                             ></Register>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </Dialog>
// //         </div>
// //     )
// // }
// // export default Login2
// import React, { useRef, useState } from "react";
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { Divider } from 'primereact/divider';
// import { InputText } from 'primereact/inputtext';
// import { Password } from 'primereact/password';
// import Register from './Register';
// import axios from 'axios';
// import { Login } from "../axios/landlordAxios";
// import {jwtDecode} from 'jwt-decode'; // corrected import statement
// import { useNavigate } from 'react-router-dom';
// import Regist from "./Regist";
 
 
// const Login2 = (props) => {
//     const [visible, setVisible] = useState(false);
//     const navigate = useNavigate();
// const username=useRef("");
// const email=useRef("");
// const[register,setRegister]=useState(false)
 
//     // var name = "", password = "";
 
//     // const handleSubmit = async (e) => {
//     //     console.log(username.current.value);
//     //    // e.preventDefault();
//     //    await loginFunc({username:username.current.value,password:password.current.value})
       
//     //     console.log(data);
//     //     };
   
//     const login = async () => {
//         try {
//             const response = await Login(username, email);
//             console.log("responseH", response);
//             if (response.status === 200) {
//                 let token = response.data;
//                 if (token) {
//                     props.setDetailSuccess("Your connection was successful");
//                     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//                     const decodedToken = jwtDecode(token);
//                     console.log("decodedToken", decodedToken);
//                     localStorage.setItem("token", token);
//                     props.setUser(decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
//                     props.setRole(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
//                     setVisible(false);
//                     navigate('/');
//                 }
//             } else {
//                 props.setDetailError("Data problem, please try again");
//                 setVisible(false);
//             }
//         } catch {
//             props.setDetailError("Data problem, please try again");
//             setVisible(false);
//         }
//     };
 
//     return (
//         <>
//          <div>
//             {/* <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} style={{ backgroundColor: "gray", borderColor: "var(--surface-400)", boxShadow: "var(--surface-100)" }} />
//             <Dialog
//                 header=""
//                 style={{ width: '90%', height: '90%',textAlign: "center" }}
//                 visible={visible}
//                 onHide={() => setVisible(false)}
//             >
//                 <div className="card" style={{ backgroundColor: "var(--surface-300)" }}>
//                     <div className="flex flex-column md:flex-row">
//                         <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
//                             <div className="card flex justify-content-center">
//                                 <span className="p-float-label">
//                                     <InputText id="username" style={{ width: "100%", boxShadow: "var(--surface-400)", borderColor: "var(--surface-400)" }} onBlur={(e) => name = e.target.value} />
//                                     <label htmlFor="username">Username</label>
//                                 </span>
//                             </div>
//                             <br />
//                             <div className="card flex justify-content-center">
//                                 <span className="p-float-label">
//                                     <Password id="password" feedback={false} style={{ boxShadow: "var(--surface-400)", borderColor: "var(--surface-400)" }} toggleMask onBlur={(e) => password = e.target.value} />
//                                     <label htmlFor="password">Password</label>
//                                 </span>
//                             </div>
//                             <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto" style={{ backgroundColor: "var(--orange-500)", borderColor: "var(--surface-400)", boxShadow: "var(--surface-400)" }} onClick={() => login()}></Button>
//                         </div>
//                         <div className="w-full md:w-2">
//                             <Divider layout="vertical" className="hidden md:flex">
//                                 <b>OR</b>
//                             </Divider>
//                         </div>
//                         <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
//                             <Register
//                                 setDetailError={props.setDetailError}
//                                 setDetailSuccess={props.setDetailSuccess}
//                                 setVisible={setVisible}
//                             ></Register>
//                         </div>
//                     </div>
//                 </div>
//             </Dialog> */}
//             <br/> <br/> <br/> <br/> <br/>
//         {/* <div className="card" > */}
//             <div className="flex flex-column md:flex-row" style={{marginTop:'100px'}}>
//                 <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
//                     <div className="flex flex-wrap justify-content-center align-items-center gap-2">
//                         <label className="w-6rem">Username</label>
//                         <InputText ref={username} id="username" type="text" className="w-12rem" />
//                     </div>
//                     <div className="flex flex-wrap justify-content-center align-items-center gap-2">
//                         <label className="w-6rem">Password</label>
//                         <InputText ref={email} id="password" type="password" className="w-12rem" />
//                     </div>
//                     <Button label="כניסה" icon="pi pi-user" className="w-10rem mx-auto" onClick={()=>{/*sendeE();*/login()}}></Button>
                   
//                 </div>
//                 <div className="w-full md:w-2">
//                     <Divider layout="vertical" className="hidden md:flex">
//                         <b>OR</b>
//                     </Divider>
//                     {/* <Divider layout="horizontal" className="flex md:hidden" align="center">
//                         <b>OR</b>
//                     </Divider> */}
//                 </div>
//                 <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
//                     <Button label="הרשמה" icon="pi pi-user-plus" severity="success" className="w-10rem" onClick={()=>{setRegister(true)}}></Button>
                   
//                     {register && <Regist/>}
                   
//                 </div>
//             </div>
//             {/* {loginSuccess && <UsersNavBar/>} */}
//         {/* </div> */}
//          </div>
//         </>
//     );
// };
 
// export default Login2;
 
// import React, { useEffect, useRef, useState } from 'react';
// import { Divider } from 'primereact/divider';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import Regist from '../app/features/auth/Regist';
// import {useLoginMutation} from '../app/features/auth/authApiSlice'
// import { setToken } from '../app/features/auth/authSlice';
// import { useDispatch } from 'react-redux';
// import { Navigate, useNavigate,NavLink } from 'react-router-dom';
// import UsersNavBar from './users/UsersNavBar';
// import { useGetUserQuery } from './users/usersApiSlice';
// import NavBar from './NavBar';
// import { useSendMailMutation } from './service/mailApiSlice';
// import DecodeToken from '../DecodeToken';
import React, { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import Register from './Register';
import axios from 'axios';
import { login } from "../axios/landlordAxios";
import {jwtDecode} from 'jwt-decode'; // corrected import statement
import { useNavigate } from 'react-router-dom';
import Regist from "./Regist";
import swal from "sweetalert";
 
 
//import { useNavigate } from 'react-router-dom';
//z6o1f2n5a8t8p2a5a5n3e1a7h
const Login2=()=>{
    const username=useRef('')
    const email=useRef('')
    const[register,setRegister]=useState(false)
    // const [loginFunc, {isError, error, isSuccess:loginSuccess,data}] = useLoginMutation();
    // const sendeE=async()=>{
 
 
    //     const dispatch = useDispatch()
    //     const navigate = useNavigate()
    //     let decodeToken;
    //     let users;
    //     const{
    //         data:myUser,
    //         isLoading:userIsLoading,
    //         isError:userIsError,
    //         error:userError,
    //         isSuccess:userIsSuccess,
    //         refetch:userRefetch
    //         } = useGetUserQuery({id:''})
    //     useEffect(()=>{
    //     if(loginSuccess){    
    //     dispatch(setToken(data))
    //     decodeToken =DecodeToken()
    //     console.log("lllllllllllllll");
    //     users=decodeToken?.roles;
    //     console.log(users);
    //     users==='admin'?navigate('/'):navigate('/user')
 
 
           
    // }
    // else{
 
    // }
    //     },[loginSuccess,userIsSuccess])
   
    const handleSubmit = async (e) => {
       // e.preventDefault();
    //    await loginFunc({username:username.current.value,password:password.current.value})
    try{
        await login(username.current.value,email.current.value);
     window.location.reload(true)
    }catch(ex){
        swal("אירעה שגיאה", "נסה שנית", "error");    }
     
 
        };
   
    return(
        <>
        <br/> <br/> <br/> <br/> <br/>
        <div>
            <div className="flex flex-column md:flex-row" style={{marginTop:'100px'}}>
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">שם משתמש</label>
                        <InputText ref={username} id="username" type="text" className="w-12rem" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">מייל</label>
                        <InputText ref={email} id="email" className="w-12rem" />
                    </div>
                    <Button label="כניסה" icon="pi pi-user" className="w-10rem mx-auto" onClick={()=>{/*sendeE();*/handleSubmit()}}></Button>
                   
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    {/* <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider> */}
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="הרשמה" icon="pi pi-user-plus" severity="success" className="w-10rem" onClick={()=>{setRegister(true)}}></Button>
                   
                    {register && <Regist/>}
                   
                </div>
            </div>
            {/* {loginSuccess && <UsersNavBar/>} */}
        </div>
        </>
    )
}
export default Login2
 
 
 
/**/