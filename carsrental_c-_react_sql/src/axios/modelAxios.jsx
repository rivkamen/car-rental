import axios from 'axios';

axios.defaults.baseURL = "https://localhost:44360"

export async function getAllModels() {
   return await axios.get('api/Model/')
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
 export async function getModelById(id) {
    
    id=String(id)
    return await axios.get('api/Model/'+id)
     .then((response) => {
         console.log(response)
         return response.data
     })
     .catch((e) => {
         console.log(e)
         return 0
     })
 }

export async function addModel(model) {
   return await axios.post('/model/add',model)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((e) => {
            console.log(e)
            return 0
        })
}

export async function deleteModel(modelId) {
    await axios.delete('/model/delete',modelId)
        .then((response) => {
            return response.data.statusCode
        })
        .catch((e) => {
            console.log(e)
        })
}