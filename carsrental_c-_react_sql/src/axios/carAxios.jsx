import axios from 'axios';

axios.defaults.baseURL = "https://localhost:44360"

export async function getAllCars() {
    console.log("cars");
   return await axios.get('/api/Car')
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return 0
    })
}


// export async function getCarByName(name) {
//     debugger
//     name=String(name)
//     return await axios.get('/Car/getByName',name)
//      .then((response) => {
//          console.log(response)
//          return response.data
//      })
//      .catch((e) => {
//          console.log(e)
//          return 0
//      })
//  }
 export async function getCarById(id) {
    id=String(id)
    return await axios.get(`/api/Car/${id}`)
     .then((response) => {
         console.log(response)
         return response.data
     })
     .catch((e) => {
         console.log(e)
         return 0
     })
 }

//  export async function addCar(car) {
//     const carData = JSON.stringify(car);

//     return await axios.post('/api/Car', carData)
//         .then((response) => {
//             console.log(response);
//             return response;
//         })
//         .catch((error) => {
//             console.log(error);
//             return 0;
//         });
// }

export async function addCar(car) {
    console.log("car");
    console.log(car);
   return await axios.post('/api/Car',{carNumber:car.carNumber,modelId:car.modelId,numOfKilometraz:car.numOfKilometraz,status:car.status,color:car.color,price:car.price,imageUrl:'g.jpg'})
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function deleteCar(carId) {
    console.log(carId);
    await axios.delete('/api/Car/'+carId)
        .then((response) => {
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
        })
}