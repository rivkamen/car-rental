// import React from 'react';
// import { Menubar } from 'primereact/menubar';
// import 'primereact/resources/themes/saga-blue/theme.css';  // ניתן לשנות את ערכת הנושא לפי הצורך
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

// const Navbar = () => {
//     const items = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התחברות',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/login"; }
//         },
//         {
//             label: 'קטלוג',
//             icon: 'pi pi-fw pi-list',
//             command: () => { window.location.pathname = "/catalog"; }
//         },
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];

//     return (
//         <div>
//             <Menubar model={items} />
//         </div>
//     );
// }

// export default Navbar;
import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css';  // ניתן לשנות את ערכת הנושא לפי הצורך
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
 
const Navbar = () => {
    const items1 = [
        {
            label: 'דף הבית',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.pathname = "/"; }
        },
        {
            label: 'התחברות',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.pathname = "/login"; }
        },
        {
            label: 'קטלוג',
            icon: 'pi pi-fw pi-list',
            command: () => { window.location.pathname = "/catalog"; }
        },
        {
            label: 'צור קשר',
            icon: 'pi pi-fw pi-envelope',
            command: () => { window.location.pathname = "/contactForm"; }
        }
    ];
    const items2 = [
        {
            label: 'דף הבית',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.pathname = "/"; }
        },
        {
            label: 'התחברות',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.pathname = "/login"; }
        },
        {
            label: 'קטלוג',
            icon: 'pi pi-fw pi-list',
            command: () => { window.location.pathname = "/catalog"; }
        },
        {
            label: 'צור קשר',
            icon: 'pi pi-fw pi-envelope',
            command: () => { window.location.pathname = "/contactForm"; }
        },
        {
            label: 'ניהול רכבים',
            icon: 'pi pi-fw pi-crown',
            command: () => { window.location.pathname = "/CatalogManager"; }
        }
    ];
    const items3 = [
        {
            label: 'דף הבית',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.pathname = "/"; }
        },
        {
            label: 'התחברות',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.pathname = "/login"; }
        },
       
        {
            label: 'צור קשר',
            icon: 'pi pi-fw pi-envelope',
            command: () => { window.location.pathname = "/contactForm"; }
        }
    ];
    // const userName = sessionStorage.getItem('username');
    // const items4 = userName?items1:items3
    // const items = userName=='12345'?items2:items4
    const userName = sessionStorage.getItem('username');
    const items = userName === '12345' ? items2 : (userName ? items1 : items3)
    // 
    return (
        <div>
            <Menubar model={items} />
        </div>
    );
}


 
export default Navbar;
 

// import React from 'react';
// import { Menubar } from 'primereact/menubar';
// import 'primereact/resources/themes/saga-blue/theme.css';  // ניתן לשנות את ערכת הנושא לפי הצורך
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
// import { useDispatch } from 'react-redux';
 
// const Navbar = () => {
//     const dispatch = useDispatch();
//     const removeToken = ()=>{
//         sessionStorage.removeItem('userId')
//         sessionStorage.removeItem('username')
//         window.location.pathname = "/" 
//     }
//     const items1 = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התנתקות',
//             command: () => {
//                 dispatch(removeToken());
//                 window.location.pathname = "/"                    
//             }            
//         },
//         {
//             label: 'קטלוג',
//             icon: 'pi pi-fw pi-list',
//             command: () => { window.location.pathname = "/catalog"; }
//         },
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];
//     const items2 = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התנתקות',
//             command: () => {dispatch(removeToken()) }            
//         },
//         {
//             label: 'קטלוג',
//             icon: 'pi pi-fw pi-list',
//             command: () => { window.location.pathname = "/catalog"; }
//         },
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         },
//         {
//             label: 'ניהול רכבים',
//             icon: 'pi pi-fw pi-crown',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];
//     const items3 = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התחברות',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/login"; }
//         },
       
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];
//     const userName = localStorage.getItem('username');
   
//     const items4 = userName?items1:items3
//     const items = userName=='12345'?items2:items4
//     return (
//         <div>
//             <Menubar model={items} />
//         </div>
//     );
// }
 
// export default Navbar;
 



// // import React from 'react';
// // import { Menubar } from 'primereact/menubar';
// // import 'primereact/resources/themes/saga-blue/theme.css';
// // import 'primereact/resources/primereact.min.css';
// // import 'primeicons/primeicons.css';
// // import 'primeflex/primeflex.css';
// // import { useDispatch } from 'react-redux';

// // const Navbar = () => {
// //     const dispatch = useDispatch();

// //     const removeToken = () => {
// //         sessionStorage.removeItem('userId');
// //         sessionStorage.removeItem('username');
// //         window.location.pathname = "/";
// //     };

// //     const items1 = [
// //         {
// //             label: 'דף הבית',
// //             icon: 'pi pi-fw pi-home',
// //             command: () => { window.location.pathname = "/"; }
// //         },
// //         {
// //             label: 'התנתקות',
// //             command: () => {
// //                 dispatch(removeToken());
// //                 window.location.pathname = "/";
// //             }
// //         },
// //         {
// //             label: 'קטלוג',
// //             icon: 'pi pi-fw pi-list',
// //             command: () => { window.location.pathname = "/catalog"; }
// //         },
// //         {
// //             label: 'צור קשר',
// //             icon: 'pi pi-fw pi-envelope',
// //             command: () => { window.location.pathname = "/contactForm"; }
// //         }
// //     ];

// //     const items3 = [
// //         {
// //             label: 'דף הבית',
// //             icon: 'pi pi-fw pi-home',
// //             command: () => { window.location.pathname = "/"; }
// //         },
// //         {
// //             label: 'התחברות',
// //             icon: 'pi pi-fw pi-home',
// //             command: () => { window.location.pathname = "/login"; }
// //         },
// //         {
// //             label: 'צור קשר',
// //             icon: 'pi pi-fw pi-envelope',
// //             command: () => { window.location.pathname = "/contactForm"; }
// //         }
// //     ];

// //     const userName = localStorage.getItem('username');
// //     const items = userName ? items1 : items3;

// //     // Change the label based on the user's connection status
// //     if (navigator.onLine) {
// //         items[1].label = 'התנתקות'; // Change label to 'התנתקות' (Logout)
// //         items[1].command = () => {
// //             dispatch(removeToken());
// //             window.location.pathname = "/";
// //         };
// //     }

// //     return (
// //         <div>
// //             <Menubar model={items} />
// //         </div>
// //     );
// // }

// // export default Navbar;

// // import React from 'react';
// // import { Menubar } from 'primereact/menubar';
// // import 'primereact/resources/themes/saga-blue/theme.css';
// // import 'primereact/resources/primereact.min.css';
// // import 'primeicons/primeicons.css';
// // import 'primeflex/primeflex.css';
// // import { useDispatch } from 'react-redux';

// // const Navbar = () => {
// //     const dispatch = useDispatch();

// //     const removeToken = () => {
// //         sessionStorage.removeItem('userId');
// //         sessionStorage.removeItem('username');
// //         window.location.pathname = "/";
// //     };

// //     const items1 = [
// //         {
// //             label: 'דף הבית',
// //             icon: 'pi pi-fw pi-home',
// //             command: () => { window.location.pathname = "/"; }
// //         },
// //         {
// //             label: 'התנתקות',
// //             command: () => {
// //                 dispatch(removeToken());
// //                 window.location.pathname = "/";
// //             }
// //         },
// //         {
// //             label: 'קטלוג',
// //             icon: 'pi pi-fw pi-list',
// //             command: () => { window.location.pathname = "/catalog"; }
// //         },
// //         {
// //             label: 'צור קשר',
// //             icon: 'pi pi-fw pi-envelope',
// //             command: () => { window.location.pathname = "/contactForm"; }
// //         }
// //     ];

// //     const items3 = [
// //         {
// //             label: 'דף הבית',
// //             icon: 'pi pi-fw pi-home',
// //             command: () => { window.location.pathname = "/"; }
// //         },
// //         {
// //             label: 'התחברות',
// //             icon: 'pi pi-fw pi-home',
// //             command: () => { window.location.pathname = "/login"; }
// //         },
// //         {
// //             label: 'צור קשר',
// //             icon: 'pi pi-fw pi-envelope',
// //             command: () => { window.location.pathname = "/contactForm"; }
// //         }
// //     ];

// //     const userName = localStorage.getItem('username');
// //     const items = userName ? items1 : items3;

// //     // Change the label based on the user's connection status
// //     if (navigator.onLine) {
// //         items[1].label = 'התנתקות'; // Change label to 'התנתקות' (Logout)
// //         items[1].command = () => {
// //             dispatch(removeToken());
// //             // Change the label back to 'התחברות' (Login) after logging out
// //             items[1].label = 'התחברות';
// //             window.location.pathname = "/";
// //         };
// //     }

// //     return (
// //         <div>
// //             <Menubar model={items} />
// //         </div>
// //     );
// // }

// // export default Navbar;
// import React from 'react';
// import { Menubar } from 'primereact/menubar';
// import 'primereact/resources/themes/saga-blue/theme.css';  // ניתן לשנות את ערכת הנושא לפי הצורך
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';
// import { useDispatch } from 'react-redux';
 
// const Navbar = () => {
//     const handleLogout = () => {
//         dispatch(removeToken); // Pass the function reference to dispatch
//         window.location.pathname = "/";
//     };
//     const dispatch = useDispatch();
//     const removeToken = ()=>{
//         sessionStorage.removeItem('userId')
//         sessionStorage.removeItem('username')
//     }
//     const items1 = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: handleLogout
//             // () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התנתקות',
//             command: () => {
//                 dispatch(removeToken());
//                 window.location.pathname = "/"                    
//             }            
//         },
//         {
//             label: 'קטלוג',
//             icon: 'pi pi-fw pi-list',
//             command: () => { window.location.pathname = "/catalog"; }
//         },
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];
//     const items2 = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התנתקות',
//             command: () => {
//                 dispatch(removeToken());
//                 window.location.pathname = "/"                    
//             }            
//         },
//         {
//             label: 'קטלוג',
//             icon: 'pi pi-fw pi-list',
//             command: () => { window.location.pathname = "/catalog"; }
//         },
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         },
//         {
//             label: 'ניהול רכבים',
//             icon: 'pi pi-fw pi-crown',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];
//     const items3 = [
//         {
//             label: 'דף הבית',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/"; }
//         },
//         {
//             label: 'התחברות',
//             icon: 'pi pi-fw pi-home',
//             command: () => { window.location.pathname = "/login"; }
//         },
       
//         {
//             label: 'צור קשר',
//             icon: 'pi pi-fw pi-envelope',
//             command: () => { window.location.pathname = "/contactForm"; }
//         }
//     ];
//     const userName = localStorage.getItem('username');
   
//     const items4 = userName?items1:items3
//     const items = userName=='12345'?items2:items4
//     return (
//         <div>
//             <Menubar model={items} />
//         </div>
//     );
// }
 
// export default Navbar;