import axios from 'axios';

axios.defaults.baseURL = "https://localhost:44360"

export async function getAllRentings() {
   return await axios.get('api/Renting')
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
 export async function getRentingById(id) {
    debugger
    id=String(id)
    return await axios.get(`api/Renting/${id}`)
     .then((response) => {
         console.log(response)
         return response.data
     })
     .catch((e) => {
         console.log(e)
         return 0
     })
 }

export async function addRenting(renting) {
   return await axios.post('api/Renting',renting)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function deleteRenting(rentingId) {
    await axios.delete('/renting/delete',rentingId)
        .then((response) => {
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
        })
}