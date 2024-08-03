import { logDOM } from '@testing-library/react';
import axios from 'axios';

axios.defaults.baseURL = "https://localhost:44360"

export async function getAllLandlords() {
   return await axios.get('/api/Landlord/')
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return 0
    })
}
export async function getLandlordById(landlordId) {
    return await axios.get(`/api/Landlord/${landlordId}`)
     .then((response) => {
         console.log(response)
         return response.data
     })
     .catch((e) => {
         console.log(e)
         return 0
     })
 }
export async function addLandlord(landlord) {
    console.log("gfugiuh");
console.log(landlord.Email);
const d=new Date(landlord.Birthdate)
console.log(d);
/*{LandlordTz:"475487659", LandlordName: "fyghghjh", Birthdate: null}*/
   return await axios.post('/api/Landlord/',{LandlordTz:landlord.LandlordTz, LandlordName: landlord.LandlordName, Birthdate:null, Email: landlord.Email,Address:landlord.Address/*,LandlordPhone:landlord.LandlordPhone*/})
        .then((response) => {
            console.log('response_addLandlord',response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}
// const cleanData = (data) => {
//     const seen = new WeakSet();
//     const cleanedData = JSON.parse(JSON.stringify(data, (key, value) => {
//         if (typeof value === 'object' && value !== null) {
//             if (seen.has(value)) {
//                 return;
//             }
//             seen.add(value);
//         }
//         return value;
//     }));
//     return cleanedData;
// };

// export async function addLandlord(landlord) {
//     const cleanedLandlord = cleanData(landlord);

//     return await axios.post('/api/Landlord/', cleanedLandlord)
//         .then((response) => {
//             console.log('response_addLandlord', response);
//             return response;
//         })
//         .catch((e) => {
//             console.log(e);
//             return 0;
//         });
// }


export async function deleteLandlord(landlordId) {
    await axios.delete('/landlord/deleteLandlord',landlordId)
        .then((response) => {
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
        })
}

// export async function login(landlordTz,email) {
//     console.log("login");
//     console.log(email);
//     console.log(landlordTz);
//     const Login={landlordTz,email}
//     console.log("asdfghjkl;");
//     return await axios.post('/api/Landlord/Login',Login)//לפני ששולחים לאתחל אוביקט עם כל המשתנים
//         .then(async(response) => {
//             console.log("responseA",response);
//             return response
//         })
//         .catch((e) => {
//             return console.log("catchToken",e)
//         })
// }

export async function login(landlordTz, email) {
    console.log("login");
    console.log(email);
    console.log(landlordTz);
    const Login = { landlordTz, email };
    console.log("asdfghjkl;");

    try {
        const response = await axios.post('/api/Landlord/Login', Login);
        console.log("responseA", response);

        // Assuming the response contains the user ID
        const userId = response.data.landlordId;

        // Store the user ID in the session storage
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('username', response.data.landlordTz);


        return response;
    } catch (error) {
        console.error("catchToken", error);
        throw error; // You may want to handle or rethrow the error as needed
    }
}
